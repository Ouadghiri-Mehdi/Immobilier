import media from './project-media.json' with {type:'json'};
import {novemberOffers} from './november-offers.js';

const common={destination:'dubai',category:'achat-vente',transaction:'sale',saleMarket:'off-plan',currency:'AED',status:'À vendre',isDemo:false,publicationStatus:'published',projectProgramme:true,mediaNote:'projects.media.note',availability:'Disponibilité sur demande.',price:null,priceLabel:'projects.prices.request'};
const document=(folder,filename,label,sizeBytes)=>({src:`/assets/properties/${folder}/${filename}`,filename,label,sizeBytes});
function programme(id,fields){
 const gallery=media[id]||[];
 if(fields.variantPricing){
  const defaultMode=fields.paymentModes?.find(mode=>mode.id===fields.defaultPaymentMode);
  const rows=fields.variants.rows.map(row=>({...row,price:row.paymentPrices?.[defaultMode?.id]??fields.pricesByBedrooms?.[row.beds]??row.price,...(defaultMode?{priceCondition:defaultMode.priceCondition}:{})}));
  const minimum=rows.filter(row=>Number.isFinite(row.price)).reduce((min,row)=>!min||row.price<min.price?row:min,null);
  fields={...fields,variants:{...fields.variants,rows},price:minimum?.price??null,priceFrom:fields.priceFrom??Boolean(minimum),priceLabel:'Prix sur demande',priceNote:minimum?.priceCondition||fields.priceCondition};
 }
 return {...common,id,...fields,project:fields.project||(fields.title?.startsWith('projects.')?undefined:fields.title),photos:gallery.map(image=>image.src),photoMedia:gallery,photoAlts:gallery.map(image=>image.alt),mediaAlt:gallery[0]?.alt};
}
const columns=[{key:'area',label:'projects.area.saleable',kind:'area'},{key:'areaSqFt',label:'projects.area.sqft',kind:'sqft'}];

export const newProjects=[
 programme('squarex-one',{
  title:'SquareX One',city:'Jumeirah Village Circle — JVC',type:'Appartement',price:816000,priceFrom:true,priceNote:'projects.squarex.marketing',
  description:'projects.squarex.description',detail:'projects.squarex.payment',delivery:'projects.squarex.delivery',
  features:['projects.squarex.developer','projects.squarex.homes','projects.squarex.height','projects.squarex.water','projects.squarex.wellness','projects.squarex.sport'],
  variants:{columns:[],rows:[
   {id:'studio',label:'Studio',type:'Studio',beds:0,price:816000,priceFrom:true},
   {id:'one-bedroom-study',label:'projects.squarex.one',type:'Appartement',beds:1,price:1298000,priceFrom:true},
   {id:'two-bedroom-maid',label:'projects.squarex.two',type:'Appartement',beds:2,price:1789999,priceFrom:true},
  ],note:'projects.squarex.inventory'},
  pdf:document('squarex-one','squarex-one-inventory-11-nov.pdf','projects.document.inventory',101354),
  pdfNote:'projects.squarex.inventory',
 }),
 programme('shione',{
  title:'SHIONE',variantPricing:true,priceCondition:'projects.shione.priceCondition',city:'Dubai Islands',district:'SIØRA — Island B',type:'Appartement',
  description:'projects.shione.description',detail:'projects.shione.payment',delivery:'projects.shione.delivery',
  features:['projects.shione.developer','projects.shione.types','projects.shione.water','projects.shione.pool'],
  variants:{columns:[],rows:[
   {id:'one-bedroom',label:'projects.type.one',type:'Appartement',beds:1,price:2700000,priceFrom:true},
   {id:'two-bedroom',label:'projects.type.two',type:'Appartement',beds:2,price:4700000,priceFrom:true},
   {id:'three-bedroom',label:'projects.type.three',type:'Appartement',beds:3,price:7100000,priceFrom:true},
  ],note:'projects.shione.prices'},
 }),
 programme('sorrento-tower-d',{
  title:'Sorrento — Tower D',publicationStatus:'draft',city:'DAMAC Lagoons',type:'Appartement',price:728000,priceFrom:true,
  description:'projects.sorrento.description',
  variants:{columns,rows:[
   {id:'studio',label:'Studio',type:'Studio',beds:0,area:[35.58,52.49],areaSqFt:[383,565],price:728000,priceFrom:true},
   {id:'one-bedroom',label:'projects.type.one',type:'Appartement',beds:1,area:[65.68,81.85],areaSqFt:[707,881],price:1184000,priceFrom:true},
  ],note:'projects.sorrento.inventory'},
 }),
 programme('reportage-fujairah-studio',{
  title:'projects.fujairah.title',publicationStatus:'draft',projectProgramme:false,saleMarket:null,destination:'fujairah',city:'Fujairah',type:'Studio',area:43.48,areaSqFt:468,areaApproximate:true,
  description:'projects.fujairah.description',price:null,
 }),
 programme('taormina-village',{
  title:'Taormina Village',variantPricing:true,
  variants:{columns:[],rows:[{id:'four-bedroom-offer',label:'projects.islands.four',type:'Maison de ville',beds:4,price:2155825,priceFrom:false,priceCondition:'projects.taormina.priceCondition'}]},city:'Dubailand',type:'Maisons de ville et villas',
  description:'projects.taormina.description',detail:'projects.taormina.conditions',
  features:['projects.taormina.developer','projects.taormina.types','projects.taormina.pool','projects.taormina.outdoors'],
  pdf:document('taormina-village','taormina-village-brochure.pdf','projects.document.brochure',22924153),
 }),
 programme('damac-islands-2',{
  title:'DAMAC Islands 2',variantPricing:true,pricesByBedrooms:{4:2750000,5:3670000,6:9510000},priceCondition:'projects.islands.priceCondition',city:'Dubaï',type:'Maisons de ville et villas',
  description:'projects.islands.description',detail:'projects.islands.conditions',
  features:['projects.islands.developer','projects.islands.townhouses','projects.islands.villas','projects.islands.area'],
  variants:{columns,rows:[
   {id:'townhouse-four-bedroom',label:'projects.islands.four',type:'Maison de ville',beds:4,area:203.04,areaSqFt:2185.50,price:null,priceFrom:true},
   {id:'townhouse-five-bedroom-middle',label:'projects.islands.five-middle',type:'Maison de ville',beds:5,area:262.85,areaSqFt:2829.29,price:null,priceFrom:true},
   {id:'townhouse-five-bedroom-end',label:'projects.islands.five-end',type:'Maison de ville',beds:5,area:293.41,areaSqFt:3158.24,price:null,priceFrom:true},
   {id:'semi-detached-five-bedroom',label:'projects.islands.five-semi',type:'Villa jumelée',beds:5,area:324.44,areaSqFt:3492.24,price:null,priceFrom:true},
   {id:'villa-six-bedroom',label:'projects.islands.six',type:'Villa',beds:6,area:583.09,areaSqFt:6276.33,price:null,priceFrom:true},
  ],note:'projects.islands.variants'},
  pdf:document('damac-islands-2','damac-islands-2-brochure.pdf','projects.document.brochure',21282352),
 }),
 programme('al-zorah-ajman',{
  title:'projects.ajman.title',publicationStatus:'draft',saleMarket:null,destination:'ajman',city:'Al Zorah',type:'Appartement',
  description:'projects.ajman.description',price:null,
 }),
 ...novemberOffers(programme),
 programme('jvc-residential-prelaunch',{
  // Internal working record only. Do not publish until identity and media are confirmed.
  title:'projects.jvcPending.title',publicationStatus:'draft',
  draftReason:'Official project name, developer attribution and project-specific licensed media remain unconfirmed.',
  identityReview:{confirmed:false,candidateDeveloper:'Peace Homes Group',candidateLabel:'Peace Homes JVC Pre-Launch',source:'https://www.augusta-properties.com/explore/peace-homes-jvc-pre-launch'},
  destination:'dubai',saleMarket:'off-plan',city:'Jumeirah Village Circle — JVC',type:'Appartement',
  variantPricing:true,variantPresentation:true,contactVariantPrice:true,priceFromLabel:'Dès ',
  description:'projects.jvcPending.description',detail:'projects.jvcPending.payment',delivery:'projects.jvcPending.delivery',
  features:['projects.jvcPending.furnished','projects.jvcPending.units','projects.jvcPending.amenities','projects.jvcPending.views','projects.jvcPending.eoi'],
  variants:{columns:[],rows:[
   {id:'studio',label:'Studio',type:'Studio',beds:0,price:795000,priceFrom:true,priceCondition:'projects.jvcPending.priceConditions'},
   {id:'one-bedroom-study',label:'projects.jvcPending.one',type:'Appartement',beds:1,price:1300000,priceFrom:true,priceCondition:'projects.jvcPending.priceConditions'},
   {id:'two-bedroom',label:'projects.jvcPending.two',type:'Appartement',beds:2,price:1800000,priceFrom:true,priceCondition:'projects.jvcPending.priceConditions'},
   {id:'four-bedroom-duplex-triplex',label:'projects.jvcPending.four',type:'Appartement',beds:4,price:2800000,priceFrom:true,priceCondition:'projects.jvcPending.priceConditions'},
  ]},
 }),
];
