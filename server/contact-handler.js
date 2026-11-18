import {createHash} from 'node:crypto';
import nodemailer from 'nodemailer';
import fr from '../src/i18n/fr.json' with {type:'json'};
import en from '../src/i18n/en.json' with {type:'json'};
import {contactServicesForDestination,isContactServiceAllowed} from '../src/contact-options.js';

const attempts=new Map();
const windowMs=10*60*1000;
const emailPattern=/^[^\s@<>\r\n]+@[^\s@<>\r\n]+\.[^\s@<>\r\n]+$/;
const limits={phone:60,destination:100,propertyTitle:240,reference:100,typology:240,pageUrl:2000};
const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
// Local diagnostics only; never return provider details or credentials to clients.
const diagnose=(status,code,detail)=>{
 if(process.env.NODE_ENV==='production')return;
 const password=process.env.SMTP_PASS;
 const clean=value=>{
  let text=String(value||'');
  for(const secret of [password,password?.replace(/\s/g,'')])if(secret)text=text.split(secret).join('[redacted]');
  return text.replace(/[\r\n]/g,' ').slice(0,1000);
 };
 console.warn('[contact/local]',status,code,clean(detail));
};

export default async function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 const fail=(status,code)=>res.status(status).json({ok:false,code});
 if(req.method!=='POST'){res.setHeader('Allow','POST');return fail(405,'method');}
 const origin=process.env.SITE_ORIGIN;
 if(!origin){diagnose(503,'unavailable','Missing SITE_ORIGIN');return fail(503,'unavailable');}
 if(!req.headers.origin||req.headers.origin!==origin)return fail(403,'origin');
 if(!(req.headers['content-type']||'').toLowerCase().startsWith('application/json'))return fail(415,'content_type');
 let data;
 try{
  const raw=typeof req.body==='string'?req.body:JSON.stringify(req.body);
  if(!raw||Buffer.byteLength(raw)>16000)return fail(413,'size');
  data=JSON.parse(raw);
 }catch{return fail(400,'invalid');}
 if(!data||typeof data!=='object'||Array.isArray(data))return fail(400,'invalid');
 // Best-effort per-instance limit; no raw IP or form content is retained here.
 const now=Date.now();
 for(const [key,entry] of attempts)if(now>=entry.until)attempts.delete(key);
 const ip=req.headers['x-vercel-forwarded-for']||req.socket?.remoteAddress||'unknown';
 const key=createHash('sha256').update(String(ip)).digest('hex');
 const entry=attempts.get(key)||{count:0,until:now+windowMs};
 if(entry.count>=5){res.setHeader('Retry-After',String(Math.ceil((entry.until-now)/1000)));return fail(429,'rate_limit');}
 if(attempts.size>=10000&&!attempts.has(key))return fail(429,'rate_limit');
 entry.count++;attempts.set(key,entry);
 const {name,email,subject,message,privacy}=data;
 if(data.website||typeof name!=='string'||!name.trim()||name.length>120||/[\r\n]/.test(name)||typeof email!=='string'||email.length>254||!emailPattern.test(email.trim())||typeof message!=='string'||!message.trim()||message.length>5000||privacy!==true||!isContactServiceAllowed(data.destination,subject)||!['fr','en'].includes(data.language||'fr'))return fail(400,'invalid');
 for(const [field,max] of Object.entries(limits))if(data[field]!==undefined&&(typeof data[field]!=='string'||data[field].length>max||/[\r\n]/.test(data[field])))return fail(400,'invalid');
 if(data.pageUrl){try{const url=new URL(data.pageUrl);if(url.origin!==origin||!['http:','https:'].includes(url.protocol))return fail(400,'invalid');}catch{return fail(400,'invalid');}}
 const recipient=process.env.CONTACT_RECIPIENT_EMAIL?.trim();
 const host=process.env.SMTP_HOST?.trim();
 const port=Number(process.env.SMTP_PORT);
 const secureValue=process.env.SMTP_SECURE?.trim();
 const user=process.env.SMTP_USER?.trim();
 // Google displays app passwords in groups; keep the file intact and remove
 // display whitespace only when authenticating. Never log the password.
 const pass=process.env.SMTP_PASS?.replace(/\s/g,'');
 const configurationProblems=[];
 if(!host||!/^[a-zA-Z0-9.-]+$/.test(host))configurationProblems.push('Missing or invalid SMTP_HOST');
 if(!Number.isInteger(port)||port<1||port>65535)configurationProblems.push('Missing or invalid SMTP_PORT');
 if(!['true','false'].includes(secureValue)||(port===465&&secureValue!=='true'))configurationProblems.push('Missing or invalid SMTP_SECURE');
 if(!user||!emailPattern.test(user))configurationProblems.push('Missing or invalid SMTP_USER');
 if(!pass)configurationProblems.push('Missing SMTP_PASS');
 if(!recipient||!emailPattern.test(recipient))configurationProblems.push('Missing or invalid CONTACT_RECIPIENT_EMAIL');
 if(configurationProblems.length){diagnose(503,'unavailable',configurationProblems.join('; '));return fail(503,'unavailable');}
 const copy=data.language==='en'?en:fr;
 const fieldLabels=data.language==='en'?{'Nom':'Name','E-mail':'Email','Votre projet':'Your project','Téléphone':'Phone','Destination':'Destination','Bien':'Property','Référence':'Reference','Typologie':'Property type','Message':'Message'}:{};
 const label=value=>fieldLabels[value]||copy[value]||value;
 const service=contactServicesForDestination(data.destination).find(option=>option.value===subject);
 const rows=[['Nom',name.trim()],['E-mail',email.trim()],['Destination',label(data.destination==='maroc'?'Maroc':'Dubaï')],['Votre projet',label(service.label)],['Téléphone',data.phone],['Bien',data.propertyTitle],['Référence',data.reference],['Typologie',data.typology]].filter(([,value])=>typeof value==='string'&&value.trim());
 const text=rows.map(([title,value])=>`${label(title)} : ${value}`).join('\n')+`\n\n${label('Message')} :\n`+message;
 const project=[data.propertyTitle,data.reference].filter(Boolean).join(' / ');
 let transporter;
 try{
  transporter=nodemailer.createTransport({
   host,port,secure:secureValue==='true',requireTLS:secureValue==='false',
   auth:{user,pass},pool:false,logger:false,debug:false,
   connectionTimeout:5000,greetingTimeout:5000,socketTimeout:10000,
   disableFileAccess:true,disableUrlAccess:true
  });
  const result=await transporter.sendMail({
   signal:AbortSignal.timeout(14000),
   from:{name:'Sarouty',address:user},to:[recipient],replyTo:email.trim(),
   subject:`[Sarouty] ${label(subject)}${project?' — '+project:''}`,text,
   html:`<div style="font-family:Arial,sans-serif;line-height:1.6">${rows.map(([title,value])=>`<p><strong>${escape(label(title))}</strong> : ${escape(value)}</p>`).join('')}<p><strong>${escape(label('Message'))} :</strong></p><div style="white-space:pre-wrap">${escape(message)}</div></div>`
  });
  if(!result.accepted?.some(address=>String(address.address||address).toLowerCase()===recipient.toLowerCase())||result.rejected?.length)return fail(502,'delivery');
  return res.status(200).json({ok:true});
 }catch(error){
  // Do not log the raw SMTP response, AUTH exchange, or message contents.
  const code=/^[A-Z_]+$/.test(error?.code||'')?error.code:'SMTP_ERROR';
  diagnose(502,'delivery',`${code}; SMTP status ${Number.isInteger(error?.responseCode)?error.responseCode:'unavailable'}`);
  return fail(502,'delivery');
 }finally{transporter?.close();}
}
