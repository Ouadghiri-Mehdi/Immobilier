import test from 'node:test';
import assert from 'node:assert/strict';
import {resaleEnquiryMailto,resaleEnquiryMessage} from '../src/i18n/contact.js';
import {getLanguage,setLanguage} from '../src/i18n/index.js';

test('Marché secondaire : pas de mailto sans adresse officielle valide',()=>{
 for(const address of ['', ' ', 'invalide', 'agency@example.test\r\nBcc:other@example.test', 'agency@example.test?subject=other'])assert.equal(resaleEnquiryMailto(address),null);
 assert.equal(resaleEnquiryMailto(),null);
});

test('Marché secondaire : objet et besoins encodés dans la langue active',()=>{
 const before=getLanguage();
 try{
  for(const language of ['fr','en']){
   setLanguage(language);
   const link=resaleEnquiryMailto('agency@example.test');
   assert.ok(link.startsWith('mailto:agency@example.test?'));
   const params=new URLSearchParams(link.split('?')[1]);
   assert.equal(params.get('body'),resaleEnquiryMessage());
   for(const label of language==='fr'?['Dubaï','marché secondaire','Type de bien','Quartier souhaité','Budget','Calendrier','Autres besoins']:['Dubai','resale','Property type','Preferred area','Budget','Timescale','Other requirements'])assert.ok(params.get('body').includes(label),label);
   assert.ok(params.get('subject').includes('Sarouty Properties'));
  }
 }finally{setLanguage(before);}
});
