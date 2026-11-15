import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {properties,isPublicProperty,isDraftProperty,publicProperties,destinations} from '../src/data.js';
import {filterProperties,withSelectedVariant,whatsappURL,contactPath} from '../src/domain.js';
import {propertyEnquiryMessage,contactMessage} from '../src/i18n/contact.js';
import {setLanguage} from '../src/i18n/index.js';
import {siteConfig} from '../src/config.js';
import fr from '../src/i18n/projects.fr.json' with {type:'json'};
import en from '../src/i18n/projects.en.json' with {type:'json'};

const published=['squarex-one','shione','taormina-village','damac-islands-2'];
const drafts=['sorrento-tower-d','reportage-fujairah-studio','al-zorah-ajman'];
test('Programmes : identifiants uniques, classement explicite et brouillons exclus',()=>{
 assert.equal(new Set(properties.map(p=>p.id)).size,properties.length);
 for(const id of published){const p=properties.find(p=>p.id===id);assert.ok(isPublicProperty(p));assert.equal(p.saleMarket,'off-plan');assert.equal(p.destination,'dubai');}
 for(const id of drafts){const p=properties.find(p=>p.id===id);assert.ok(isDraftProperty(p));assert.ok(!isPublicProperty(p));assert.ok(!publicProperties.includes(p));assert.deepEqual(filterProperties(properties,{favorites:[id]}),[]);}
 assert.deepEqual(Object.keys(destinations),['maroc','dubai']);
 assert.equal(properties.find(p=>p.id==='al-zorah-ajman').destination,'ajman');
 assert.equal(properties.find(p=>p.id==='reportage-fujairah-studio').destination,'fujairah');
});
test('Filtres de typologie, chambres et budget sur les programmes',()=>{
 assert.ok(filterProperties(properties,{destination:'dubai',category:'achat-vente',saleMarket:'off-plan',beds:'6'}).some(p=>p.id==='damac-islands-2'));
 assert.ok(filterProperties(properties,{destination:'dubai',type:'Studio',budget:'900000'}).some(p=>p.id==='squarex-one'));
 assert.ok(!filterProperties(properties,{destination:'dubai',budget:'900000'}).some(p=>p.id==='shione'));
});
test('Surfaces commercialisables et absence de prix promotionnels non confirmés',()=>{
 const islands=properties.find(p=>p.id==='damac-islands-2');
 for(const row of islands.variants.rows){assert.ok(Math.abs(row.areaSqFt*.09290304-row.area)<.02);assert.equal(row.price,null);}
 for(const id of ['shione','taormina-village','damac-islands-2'])assert.equal(properties.find(p=>p.id===id).price,null);
});
test('Médias locaux, formats réels et documents PDF valides',()=>{
 for(const id of published){const p=properties.find(p=>p.id===id);assert.ok(p.photos.length>=3);
  for(const image of p.photoMedia){assert.ok(image.width>0&&image.height>0);assert.ok(image.srcSet);assert.ok(existsSync(new URL('../public'+image.src,import.meta.url)));}
  if(p.pdf){const data=readFileSync(new URL('../public'+p.pdf.src,import.meta.url));assert.equal(data.subarray(0,5).toString(),'%PDF-');assert.equal(data.length,p.pdf.sizeBytes);}
 }
});
test('Ressources FR/EN complètes, clés et variables identiques',()=>{
 assert.deepEqual(Object.keys(fr).sort(),Object.keys(en).sort());
 for(const key of Object.keys(fr)){assert.ok(en[key]);assert.deepEqual(fr[key].match(/\{[^}]+\}/g),en[key].match(/\{[^}]+\}/g));}
});
test('WhatsApp garde le programme, la typologie, la destination et le lien',()=>{
 const p=withSelectedVariant(properties.find(p=>p.id==='damac-islands-2'),'townhouse-four-bedroom');
 for(const language of ['fr','en']){setLanguage(language);const message=propertyEnquiryMessage(p),url=new URL(whatsappURL(siteConfig.whatsappNumber,message));
  assert.equal(url.pathname,'/212722624772');assert.match(message,/DAMAC Islands 2/);assert.match(message,/lot=townhouse-four-bedroom/);assert.ok(message.includes(language==='fr'?'Dubaï':'Dubai'));assert.ok(message.includes(language==='fr'?'Maison de ville 4 chambres':'4-bedroom townhouse'));
 }
 assert.match(contactPath(p,'Achat immobilier'),/lot=townhouse-four-bedroom/);
 assert.ok(contactMessage({destination:'ajman',body:'Example'}).includes('Ajman'));
 assert.ok(contactMessage({destination:'fujairah',body:'Example'}).includes('Fujairah'));setLanguage('fr');
});
