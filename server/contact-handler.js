import {createHash} from 'node:crypto';
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
 const key=process.env.RESEND_API_KEY;
 const clean=value=>{
  let text=String(value||'');
  if(key)text=text.split(key).join('[redacted]');
  return text.replace(/\bre_[A-Za-z0-9_-]+/g,'[redacted]').replace(/[\r\n]/g,' ').slice(0,1000);
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
 const from=process.env.CONTACT_FROM?.trim();
 const fromAddress=from?.match(/<([^<>]+)>$/)?.[1]||from;
 const configurationProblems=[];
 if(!process.env.RESEND_API_KEY?.trim())configurationProblems.push('Missing RESEND_API_KEY');
 if(!recipient||!emailPattern.test(recipient))configurationProblems.push('Missing or invalid CONTACT_RECIPIENT_EMAIL');
 if(!fromAddress||!emailPattern.test(fromAddress)||/[\r\n]/.test(from))configurationProblems.push('Missing or invalid CONTACT_FROM');
 if(configurationProblems.length){diagnose(503,'unavailable',configurationProblems.join('; '));return fail(503,'unavailable');}
 const copy=data.language==='en'?en:fr;
 const fieldLabels=data.language==='en'?{'Nom':'Name','E-mail':'Email','Votre projet':'Your project','Téléphone':'Phone','Destination':'Destination','Bien':'Property','Référence':'Reference','Typologie':'Property type','Message':'Message'}:{};
 const label=value=>fieldLabels[value]||copy[value]||value;
 const service=contactServicesForDestination(data.destination).find(option=>option.value===subject);
 const rows=[['Nom',name.trim()],['E-mail',email.trim()],['Destination',label(data.destination==='maroc'?'Maroc':'Dubaï')],['Votre projet',label(service.label)],['Téléphone',data.phone],['Bien',data.propertyTitle],['Référence',data.reference],['Typologie',data.typology]].filter(([,value])=>typeof value==='string'&&value.trim());
 const text=rows.map(([title,value])=>`${label(title)} : ${value}`).join('\n')+`\n\n${label('Message')} :\n`+message;
 const project=[data.propertyTitle,data.reference].filter(Boolean).join(' / ');
 try{
  const response=await fetch('https://api.resend.com/emails',{
   method:'POST',headers:{Authorization:'Bearer '+process.env.RESEND_API_KEY,'Content-Type':'application/json'},signal:AbortSignal.timeout(12000),
   body:JSON.stringify({from,to:[recipient],reply_to:email.trim(),subject:`[Sarouty] ${label(subject)}${project?' — '+project:''}`,text,html:`<div style="font-family:Arial,sans-serif;line-height:1.6">${rows.map(([title,value])=>`<p><strong>${escape(label(title))}</strong> : ${escape(value)}</p>`).join('')}<p><strong>${escape(label('Message'))} :</strong></p><div style="white-space:pre-wrap">${escape(message)}</div></div>`})
  });
  if(!response.ok){
   let error;
   try{error=await response.json();}catch{}
   diagnose(response.status,'Resend refusal',`${typeof error?.name==='string'?error.name:'unknown_error'}: ${typeof error?.message==='string'?error.message:'No JSON error message returned'}`);
   return fail(502,'delivery');
  }
  const result=await response.json();
  if(typeof result.id!=='string'||!result.id)return fail(502,'delivery');
  return res.status(200).json({ok:true});
 }catch(error){diagnose(502,'delivery',error?.name==='TimeoutError'?'Resend request timed out':error?.name||'Transport error');return fail(502,'delivery');}
}
