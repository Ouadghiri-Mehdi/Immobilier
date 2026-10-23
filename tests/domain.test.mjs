import test from 'node:test';
import assert from 'node:assert/strict';
import {categories,destinations,properties,projects} from '../src/data.js';
import {filterProperties,parseLocation,contactPath,whatsappURL,validStayDates} from '../src/domain.js';
test('Deux destinations, cinq rubriques chacune et un catalogue borné',()=>{
 assert.equal(categories.length,5);assert.equal(new Set(properties.map(p=>p.id)).size,properties.length);
 for(const destination of Object.keys(destinations)){
  const list=properties.filter(p=>p.destination===destination);assert.ok(list.length>=5&&list.length<=10);
  for(const c of categories){assert.ok(c.slug==='decoration'?projects.some(p=>p.destination===destination):list.some(p=>p.category===c.slug));}
  assert.ok(list.every(p=>p.currency===destinations[destination].currency&&p.photos.length>=3));
 }
});
test('Isolation pays et activité, filtres, tri et retour à une URL de recherche',()=>{
 const route=parseLocation('#/destination/maroc/achat-vente?ville=Marrakech&type=Villa&budget=7000000&tri=price-asc');
 assert.equal(route.path,'/destination/maroc/achat-vente');
 const list=filterProperties(properties,{destination:'maroc',category:'achat-vente',city:route.params.get('ville'),type:route.params.get('type'),budget:route.params.get('budget'),sort:route.params.get('tri')});
 assert.deepEqual(list.map(p=>p.id),['MAR-001']);
 assert.equal(filterProperties(properties,{destination:'maroc',category:'location',type:'Bureau'}).length,0);
 const sorted=filterProperties(properties,{destination:'dubai',category:'achat-vente',sort:'price-asc'});assert.ok(sorted.every((p,i)=>!i||p.price>=sorted[i-1].price));
});
test('Favoris, URL de contact et texte WhatsApp prérempli',()=>{
 const ids=['MAR-001','DXB-007'];assert.deepEqual(filterProperties(properties,{favorites:ids}).map(p=>p.id),ids);
 const p=properties.find(p=>p.id==='DXB-007');assert.match(contactPath(p,'Séjour'),/bien=DXB-007/);
 assert.equal(whatsappURL('','test'),null);const url=new URL(whatsappURL('+212 600-123-456','Bonjour & merci !'));assert.equal(url.pathname,'/212600123456');assert.equal(url.searchParams.get('text'),'Bonjour & merci !');
});
test('Dates de séjour : cohérence sans fausse confirmation de disponibilité',()=>{
 assert.ok(validStayDates('','','2026-10-23'));assert.ok(validStayDates('2026-11-01','2026-11-04','2026-10-23'));
 assert.equal(validStayDates('2026-11-04','2026-11-01','2026-10-23'),false);
 assert.equal(validStayDates('2026-10-01','2026-10-05','2026-10-23'),false);
 assert.equal(validStayDates('2026-11-01','','2026-10-23'),false);
});

test('Contact intégré : URL d’accueil, compatibilité et conservation du bien',()=>{
 const selected=properties.find(p=>p.id==='MAR-001');
 const target=contactPath(selected,'Achat immobilier');
 const route=parseLocation('#'+target);
 assert.equal(route.path,'/');assert.equal(route.params.get('section'),'contact');assert.equal(route.params.get('bien'),selected.id);assert.equal(route.params.get('objet'),'Achat immobilier');
 const legacy=parseLocation('#/contact?bien=DXB-007&objet=S%C3%A9jour');
 assert.equal(legacy.path,'/');assert.equal(legacy.params.get('section'),'contact');assert.equal(legacy.params.get('bien'),'DXB-007');assert.equal(legacy.params.get('objet'),'Séjour');
});
