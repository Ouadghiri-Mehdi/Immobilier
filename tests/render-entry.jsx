import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {App} from '../src/main.jsx';
import {categories,destinations,properties,projects} from '../src/data.js';
import assert from 'node:assert/strict';
import {Partners} from '../src/components/marketing.jsx';
globalThis.window={scrollY:0};globalThis.localStorage={getItem(){return '[]';}};
const routes=['/','/destinations','/services','/agence','/contact','/favoris','/mentions-legales','/confidentialite','/page-absente','/?section=contact&bien=DXB-007&objet=S%C3%A9jour'];
for(const d of Object.keys(destinations)){routes.push('/destination/'+d);for(const c of categories)routes.push('/destination/'+d+'/'+c.slug);}
for(const p of properties)routes.push('/bien/'+p.id);
for(const p of projects)routes.push('/inspiration/'+p.id);
for(const path of routes){globalThis.location={hash:'#'+path,href:'https://example.test/#'+path};const html=renderToStaticMarkup(<App/>);assert.ok(html.includes('<h1>')||html.includes('<h1 '),path+' sans titre principal');assert.ok(!html.includes('undefined'),path+' contient une donnée absente');if(path==='/'||path.startsWith('/contact')||path.startsWith('/?section=contact')){assert.equal((html.match(/id="contact"/g)||[]).length,1);assert.equal((html.match(/<h1(?:>| )/g)||[]).length,1);}if(path.includes('DXB-007'))assert.ok(html.includes('VOTRE SÉLECTION / DXB-007')||html.includes('DXB-007'));}
console.log(routes.length+' pages et fiches React rendues sans erreur côté serveur.');

// L’accueil garde un ordre lisible et une seule section Contact.
globalThis.location={hash:'#/',href:'https://example.test/#/'};
const home=renderToStaticMarkup(<App/>);
const sections=['home-title','destinations-home','agence-home','services-home','selection-home','class="section method','id="contact"'];
const positions=sections.map(section=>home.indexOf(section));
assert.ok(positions.every((position,index)=>position>=0&&(!index||position>positions[index-1])),'Ordre des sections de l’accueil');
assert.equal((home.match(/class="service-card"/g)||[]).length,5);
assert.ok(home.includes('Votre projet immobilier')&&home.includes('au Maroc et à Dubaï'));
assert.ok(home.includes('/assets/hero/hero-dubai.jpeg')&&home.includes('/assets/hero/hero-marrakech.jpg')&&home.includes('fetchPriority="high"'));
assert.ok(!home.includes('<video'),'Aucune vidéo chargée sans sources configurées');
const opening=home.slice(0,home.indexOf('id="destinations-home"'));
assert.ok(opening.includes('href="#/destination/dubai"')&&opening.includes('href="#/destination/maroc"'),'Destinations accessibles dès l’ouverture');
assert.ok(opening.includes('Parler de mon projet')&&opening.includes('href="#/?section=contact"'));
assert.ok(!home.includes('id="partenaires-home"'),'Aucun partenaire publié sans données validées');
assert.equal(renderToStaticMarkup(<Partners items={[{id:'draft',name:'Brouillon',validated:false}]}/>),'');
const partnerMarkup=renderToStaticMarkup(<Partners items={[{id:'draft',name:'Brouillon'},{id:'confirmed',name:'Exemple de test',validated:true}]}/>);
assert.ok(partnerMarkup.includes('Exemple de test')&&!partnerMarkup.includes('Brouillon'));
const previewMarkup=renderToStaticMarkup(<Partners items={[]} preview/>);
assert.ok(previewMarkup.includes('PRÉSENTATION PROVISOIRE')&&previewMarkup.includes('Emplacement 3'));
assert.equal(renderToStaticMarkup(<Partners items={[]} preview={false}/>),'');
assert.ok(!renderToStaticMarkup(<Partners items={[{id:'real',name:'Partenaire validé',validated:true}]} preview/>).includes('PRÉSENTATION PROVISOIRE'));

globalThis.location={hash:'#/services',href:'https://example.test/#/services'};
const services=renderToStaticMarkup(<App/>);
for(const service of categories){
 assert.ok(services.includes(service.audience),'Public du service '+service.slug);
 assert.ok(services.includes(service.approach.replaceAll('&','&amp;')),'Accompagnement du service '+service.slug);
 const links=[...services.matchAll(/href="([^"]+)"/g)].map(match=>match[1].replaceAll('&amp;','&'));
 assert.ok(links.some(link=>new URLSearchParams(link.split('?')[1]||'').get('objet')===service.subject),'Contact contextualisé pour '+service.slug);
}
console.log('Accueil, services et visibilité des partenaires vérifiés.');
