import test from 'node:test';import assert from 'node:assert/strict';import handler from '../api/contact.js';
test('Envoi e-mail : validation et transport simulé, aucun message réel',async()=>{
 const names=['SITE_ORIGIN','RESEND_API_KEY','CONTACT_FROM','CONTACT_TO'];const before=Object.fromEntries(names.map(k=>[k,process.env[k]]));const oldFetch=globalThis.fetch;
 const valid={name:'Test',email:'client@example.test',subject:'Achat immobilier',message:'Projet de démonstration',privacy:true,website:''};
 const request=(body=valid)=>({method:'POST',headers:{origin:'https://example.test','content-type':'application/json'},body});
 async function run(req){const res={setHeader(){},status(n){this.code=n;return this;},json(body){this.body=body;return this;}};await handler(req,res);return res;}
 try{
  names.forEach(k=>delete process.env[k]);assert.equal((await run(request())).code,403);process.env.SITE_ORIGIN='https://example.test';assert.equal((await run(request())).code,503);assert.equal((await run(request({...valid,privacy:false}))).code,400);assert.equal((await run(request({...valid,email:'x\r\n@example.test'}))).code,400);
  process.env.RESEND_API_KEY='local-mock';process.env.CONTACT_FROM='from@example.test';process.env.CONTACT_TO='agency@example.test';let payload;
  globalThis.fetch=async(url,options)=>{payload=JSON.parse(options.body);return {ok:true,json:async()=>({id:'simulated'})};};const success=await run(request());assert.equal(success.code,200);assert.equal(success.body.ok,true);assert.deepEqual(payload.to,['agency@example.test']);assert.equal(payload.reply_to,'client@example.test');
  globalThis.fetch=async()=>({ok:false});assert.equal((await run(request())).code,502);
 }finally{globalThis.fetch=oldFetch;names.forEach(k=>before[k]===undefined?delete process.env[k]:process.env[k]=before[k]);}
});
