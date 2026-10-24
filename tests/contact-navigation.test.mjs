import test from 'node:test';import assert from 'node:assert/strict';
import {href,navigate,scrollToContact,scrollToSection} from '../src/routing.js';
test('Contact : liens, défilement répété, focus et mouvements réduits',()=>{
 const previousWindow=globalThis.window,previousDocument=globalThis.document;
 let scrolled,focused;
 const section={scrollIntoView(options){scrolled=options;}};
 const title={focus(options){focused=options;}};
 try{
  globalThis.window={location:{hash:'#/?section=contact'},matchMedia:()=>({matches:false})};
  globalThis.document={getElementById(id){return id==='contact'?section:id==='contact-title'?title:null;}};
  assert.equal(href('/contact'),'#/?section=contact');
  navigate('/contact');assert.equal(scrolled.behavior,'smooth');assert.deepEqual(focused,{preventScroll:true});
  window.matchMedia=()=>({matches:true});scrollToContact();assert.equal(scrolled.behavior,'instant');
  navigate('/contact?bien=MAR-001');assert.match(window.location.hash,/bien=MAR-001/);assert.match(window.location.hash,/section=contact/);
 }finally{globalThis.window=previousWindow;globalThis.document=previousDocument;}
});

test('Sections : les services et destinations respectent aussi la réduction des mouvements',()=>{
 const before={window:globalThis.window,document:globalThis.document};
 const calls=[];
 try{
  globalThis.window={matchMedia:()=>({matches:true})};
  globalThis.document={getElementById:id=>id==='absent'?null:{scrollIntoView:options=>calls.push({id,...options})}};
  scrollToSection('univers');scrollToSection('service-location','center');scrollToSection('absent');
  assert.deepEqual(calls,[{id:'univers',behavior:'instant',block:'start'},{id:'service-location',behavior:'instant',block:'center'}]);
  delete window.matchMedia;
  scrollToSection('agence-home');assert.equal(calls.at(-1).behavior,'smooth');
 }finally{globalThis.window=before.window;globalThis.document=before.document;}
});
