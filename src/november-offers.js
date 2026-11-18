// Seven client offers, five project records; no unit references are invented.
export function novemberOffers(programme){
 const areaColumns=[{key:'area',label:'nov18.area',kind:'area'},{key:'areaSqFt',label:'nov18.areaSqFt',kind:'sqft'}];
 return [
  programme('sol-terra-casa',{
   title:'SOL Terra Casa',variantPricing:true,variantPresentation:true,city:'JVC',district:'District 11',type:'Maison de ville',beds:4,
   area:299.52,areaRange:[299.52,306.12],areaSqFtRange:[3224,3295],areaLabel:'nov18.bua',areaApproximate:true,
   description:'nov18.sol.description',detail:'nov18.sol.detail',delivery:'nov18.sol.delivery',
   features:['nov18.sol.developer','nov18.sol.collection','nov18.sol.rooms','nov18.sol.lift','nov18.sol.pool','nov18.sol.parking','nov18.sol.kitchen','nov18.sol.ceiling','nov18.sol.plot','nov18.sol.location'],
   variants:{columns:areaColumns,rows:[{id:'four-bedroom-townhouse',label:'nov18.sol.offer',type:'Maison de ville',beds:4,area:299.52,areaRange:[299.52,306.12],areaSqFt:[3224,3295],areaSqFtRange:[3224,3295],areaLabel:'nov18.bua',areaApproximate:true,price:4885000,priceFrom:true,priceCondition:'nov18.sol.price'}]},
  }),
  programme('mondrian-al-marjan',{
   title:'Mondrian Al Marjan Island Beach Residences',destination:'ras-al-khaimah',saleMarket:'off-plan',variantPricing:true,variantPresentation:true,
   city:'Al Marjan Island',type:'Appartement',description:'nov18.mondrian.description',detail:'nov18.mondrian.detail',delivery:'nov18.mondrian.delivery',
   features:['nov18.mondrian.developer','nov18.mondrian.views'],
   variants:{columns:areaColumns,rows:[
    {id:'studio',label:'nov18.mondrian.studio',type:'Studio',beds:0,area:34.19,areaSqFt:368,areaApproximate:true,areaFrom:true,areaLabel:'nov18.announcedArea',price:1650000,priceFrom:true,priceCondition:'nov18.mondrian.studioPrice'},
    {id:'two-bedroom',label:'nov18.mondrian.two',type:'Appartement',beds:2,area:125.42,areaSqFt:1350,areaApproximate:true,areaLabel:'nov18.announcedArea',price:4900000,priceFrom:false,priceCondition:'nov18.mondrian.twoPrice'},
   ]},
   videoWithGallery:true,
   video:{variantId:'studio',label:'nov18.mondrian.videoLabel',src:'/assets/properties/mondrian-al-marjan/mondrian-studios.mp4',poster:'/assets/properties/mondrian-al-marjan/mondrian-studios-poster.webp',width:832,height:464,pauseWhenHidden:true,autoPlayWhenVisible:true},
  }),
  programme('reportage-village-dubai',{
   title:'Reportage Village',saleMarket:'off-plan',variantPricing:true,variantPresentation:true,priceFrom:false,
   city:'Dubailand',type:'Maison de ville',beds:4,area:211.35,areaSqFt:2275,areaApproximate:true,areaLabel:'nov18.announcedArea',
   description:'nov18.reportage.description',detail:'nov18.reportage.detail',delivery:'nov18.reportage.delivery',
   features:['nov18.reportage.developer','nov18.reportage.floors','nov18.reportage.freehold'],
   variants:{columns:areaColumns,rows:[{id:'four-bedroom-offer',label:'nov18.reportage.offer',type:'Maison de ville',beds:4,area:211.35,areaSqFt:2275,areaApproximate:true,areaLabel:'nov18.announcedArea',price:2087400,priceFrom:false,priceCondition:'nov18.reportage.price'}]},
   documents:[
    {src:'/assets/properties/reportage-village-dubai/reportage-village-brochure.pdf',filename:'reportage-village-brochure.pdf',label:'projects.document.brochure',sizeBytes:40242948},
    {src:'/assets/properties/reportage-village-dubai/reportage-village-factsheet.pdf',filename:'reportage-village-factsheet.pdf',label:'Voir la fiche technique',sizeBytes:3737581},
   ],
  }),
  programme('azure-by-lapis',{
   title:'Azure by Lapis',destination:'ras-al-khaimah',saleMarket:'off-plan',variantPricing:true,variantPresentation:true,city:'RAK Central',type:'Studio',
   description:'nov18.azure.description',detail:'nov18.azure.detail',
   features:['nov18.azure.developer','nov18.azure.floor','nov18.azure.balcony','nov18.azure.views'],
   variants:{columns:[],rows:[
    {id:'standard-studio',label:'nov18.azure.standard',type:'Studio',beds:0,price:695000,priceFrom:false,priceCondition:'nov18.azure.price'},
    {id:'premium-convertible-studio',label:'nov18.azure.premium',type:'Studio',beds:0,price:895000,priceFrom:false,priceCondition:'nov18.azure.price'},
   ]},
  }),
  programme('celesto-4',{
   title:'Celesto 4',saleMarket:'off-plan',variantPricing:true,variantPresentation:true,priceFrom:false,city:'Dubai Land Residence Complex — DLRC',type:'Studio',
   description:'nov18.celesto.description',detail:'nov18.celesto.detail',delivery:'nov18.celesto.delivery',
   features:['nov18.celesto.developer','nov18.celesto.furnished','nov18.celesto.smart','nov18.celesto.view'],
   variants:{columns:[],rows:[{id:'studio-offer',label:'nov18.celesto.offer',type:'Studio',beds:0,price:595000,priceFrom:false,priceCondition:'nov18.celesto.price'}]},
  }),
 ];
}
