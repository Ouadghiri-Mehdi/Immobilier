import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {App} from '../src/main.jsx';
import {categories,destinations,properties,projects} from '../src/data.js';
import assert from 'node:assert/strict';
globalThis.window={scrollY:0};globalThis.localStorage={getItem(){return '[]';}};
const routes=['/','/destinations','/services','/agence','/contact','/favoris','/mentions-legales','/confidentialite','/page-absente','/?section=contact&bien=DXB-007&objet=S%C3%A9jour'];
for(const d of Object.keys(destinations)){routes.push('/destination/'+d);for(const c of categories)routes.push('/destination/'+d+'/'+c.slug);}
for(const p of properties)routes.push('/bien/'+p.id);
for(const p of projects)routes.push('/inspiration/'+p.id);
for(const path of routes){globalThis.location={hash:'#'+path,href:'https://example.test/#'+path};const html=renderToStaticMarkup(<App/>);assert.ok(html.includes('<h1>')||html.includes('<h1 '),path+' sans titre principal');assert.ok(!html.includes('undefined'),path+' contient une donnée absente');if(path==='/'||path.startsWith('/contact')||path.startsWith('/?section=contact')){assert.equal((html.match(/id="contact"/g)||[]).length,1);assert.equal((html.match(/<h1(?:>| )/g)||[]).length,1);}if(path.includes('DXB-007'))assert.ok(html.includes('VOTRE SÉLECTION / DXB-007')||html.includes('DXB-007'));}
console.log(routes.length+' pages et fiches React rendues sans erreur côté serveur.');
