import test from 'node:test';import assert from 'node:assert/strict';import handler from '../api/contact.js';
import nodemailer from 'nodemailer';
test('Envoi e-mail : validation et transport simulé, aucun message réel',async()=>{
 const names=['SITE_ORIGIN','SMTP_HOST','SMTP_PORT','SMTP_SECURE','SMTP_USER','SMTP_PASS','CONTACT_RECIPIENT_EMAIL'];const before=Object.fromEntries(names.map(k=>[k,process.env[k]]));const oldCreateTransport=nodemailer.createTransport;
 let send=async()=>{throw new Error('No real SMTP transport allowed');};
 nodemailer.createTransport=()=>({sendMail:options=>send(options),close(){}});
 const valid={name:'Test',email:'client@example.test',subject:'Achat immobilier',destination:'maroc',message:'Projet de démonstration',privacy:true,website:''};
 let requestId=0;
 const request=(body=valid)=>({method:'POST',headers:{origin:'https://example.test','content-type':'application/json'},socket:{remoteAddress:'mock-'+(++requestId)},body});
 async function run(req){const res={setHeader(){},status(n){this.code=n;return this;},json(body){this.body=body;return this;}};await handler(req,res);return res;}
 try{
  names.forEach(k=>delete process.env[k]);assert.equal((await run(request())).code,503);process.env.SITE_ORIGIN='https://example.test';assert.equal((await run(request())).code,503);assert.equal((await run(request({...valid,privacy:false}))).code,400);assert.equal((await run(request({...valid,email:'x\r\n@example.test'}))).code,400);
  assert.equal((await run({...request(),method:'GET'})).code,405);
  assert.equal((await run({...request(),headers:{origin:'https://wrong.test','content-type':'application/json'}})).code,403);
  assert.equal((await run(request({...valid,website:'spam'}))).code,400);
  assert.equal((await run(request({...valid,typology:'x'.repeat(241)}))).code,400);
  assert.equal((await run(request({...valid,message:'x'.repeat(5001)}))).code,400);
  assert.equal((await run(request({...valid,pageUrl:'https://wrong.test/#/bien'}))).code,400);
  assert.equal((await run(request('x'.repeat(16001)))).code,413);
  process.env.SMTP_HOST='smtp.gmail.com';process.env.SMTP_PORT='465';process.env.SMTP_SECURE='true';process.env.SMTP_USER='sender@example.test';process.env.SMTP_PASS='mock-app-password';process.env.CONTACT_RECIPIENT_EMAIL='agency@example.test';let payload;
  send=async options=>{payload=options;return {accepted:['agency@example.test'],rejected:[],messageId:'simulated'};};const success=await run(request());assert.equal(success.code,200);assert.equal(success.body.ok,true);assert.deepEqual(payload.to,['agency@example.test']);assert.equal(payload.replyTo,'client@example.test');
  send=async()=>({accepted:[],rejected:['agency@example.test']});assert.equal((await run(request())).code,502);
  send=async()=>({});assert.equal((await run(request())).code,502);
  send=async()=>{throw Object.assign(new Error('timeout'),{code:'ETIMEDOUT'});};assert.equal((await run(request())).code,502);
  send=async options=>{payload=options;return {accepted:['agency@example.test'],rejected:[],messageId:'simulated'};};
  const contextual={...valid,language:'en',subject:'Location',propertyTitle:'Example home',reference:'1047',typology:'2 bedrooms',destination:'maroc',pageUrl:'https://example.test/#/bien/1047',message:'<script>alert("x")</script>Budget: 12000'};
  assert.equal((await run(request(contextual))).code,200);
  assert.match(payload.subject,/^\[Sarouty\].*Example home.*1047/);assert.match(payload.text,/2 bedrooms/);assert.match(payload.text,/Budget: 12000/);assert.match(payload.html,/&lt;script&gt;/);assert.doesNotMatch(payload.html,/<script>/);assert.deepEqual(payload.from,{name:'Sarouty',address:'sender@example.test'});assert.equal(payload.cc,undefined);assert.equal(payload.bcc,undefined);
  for(const subject of ['Achat immobilier','Location','Vente de mon bien','Locaux professionnels','Projet hôtelier','Décoration et aménagement'])assert.equal((await run(request({...valid,subject}))).code,200);
  const limited=request();for(let i=0;i<5;i++)assert.equal((await run(limited)).code,200);assert.equal((await run(limited)).code,429);
 }finally{nodemailer.createTransport=oldCreateTransport;names.forEach(k=>before[k]===undefined?delete process.env[k]:process.env[k]=before[k]);}
});
