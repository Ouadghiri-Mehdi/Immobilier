import test from 'node:test';import assert from 'node:assert/strict';
import {href,navigate,scrollToContact} from '../src/routing.js';
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
