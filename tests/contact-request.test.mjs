import test from 'node:test';
import assert from 'node:assert/strict';
import {sendContactRequest} from '../src/contact-request.js';

test('Contact transport: acceptance, configuration, network and malformed responses (mock only)',async()=>{
 const previous=globalThis.fetch;
 try{
  globalThis.fetch=async()=>{throw new Error('No real transport allowed');};
  assert.deepEqual(await sendContactRequest('',{}),{ok:false,code:'unavailable'});
  globalThis.fetch=async()=>({ok:true,json:async()=>({ok:true})});
  assert.deepEqual(await sendContactRequest('/api/contact',{}),{ok:true});
  globalThis.fetch=async()=>({ok:false,json:async()=>({ok:false,code:'unavailable'})});
  assert.equal((await sendContactRequest('/api/contact',{})).code,'unavailable');
  globalThis.fetch=async()=>({ok:false,json:async()=>({code:'rate_limit'})});
  assert.equal((await sendContactRequest('/api/contact',{})).code,'rate_limit');
  globalThis.fetch=async()=>({ok:true,json:async()=>({})});
  assert.equal((await sendContactRequest('/api/contact',{})).ok,false);
  globalThis.fetch=async()=>{throw new Error('network');};
  assert.equal((await sendContactRequest('/api/contact',{})).ok,false);
  globalThis.fetch=async()=>({ok:true,json:async()=>{throw new Error('not JSON');}});
  assert.equal((await sendContactRequest('/api/contact',{})).ok,false);
 }finally{globalThis.fetch=previous;}
});
