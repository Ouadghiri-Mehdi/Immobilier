import {formatNumber,tr} from './i18n/index.js';
import {isPublicProperty} from './data.js';
import {additionalEmirates} from './property-locations.js';
export function variantForPayment(property,row){
 const mode=property.selectedPaymentMode||property.paymentModes?.find(option=>option.id===property.defaultPaymentMode);
 return mode&&row.paymentPrices?{...row,price:row.paymentPrices[mode.id]??null,priceCondition:mode.priceCondition}:row;
}
export function withSelectedVariant(property,id,payment){
 const mode=property?.paymentModes?.find(option=>option.id===payment)||property?.paymentModes?.find(option=>option.id===property.defaultPaymentMode);
 const configured=mode?{...property,selectedPaymentMode:mode}:property;
 const row=property?.variants?.rows.find(row=>row.id===id)||property?.variants?.rows.find(row=>row.id===property.defaultVariantId);
 if(!row)return configured;
 const selectedVariant=variantForPayment(configured,row);
 return {...configured,...(property.variantPresentation?{type:selectedVariant.type||property.type,beds:selectedVariant.beds??null,area:selectedVariant.area??null,areaRange:selectedVariant.areaRange,areaSqFt:selectedVariant.areaSqFt,areaSqFtRange:selectedVariant.areaSqFtRange,areaFrom:Boolean(selectedVariant.areaFrom),areaApproximate:Boolean(selectedVariant.areaApproximate),areaLabel:selectedVariant.areaLabel||property.areaLabel}:{}),selectedVariant};
}
function matchesPropertyCriteria(property,{type,beds,budget,max}){
 return (property.variants?.rows||[property]).some(row=>(!type||property.type===type||row.type===type)&&(!beds||row.beds>=Number(beds))&&(budget===''||(row.price!=null&&row.price<=max)));
}
export function parseLocation(hash){const raw=normalizeContactPath(hash.replace(/^#/, '')||'/');const [path,query='']=raw.split('?');return {path:path.replace(/\/$/,'')||'/',params:new URLSearchParams(query)};}
export function filterProperties(items,{destination='',category='',city='',type='',beds='',budget='',sort='selection',favorites=null,saleMarket='',region=''}={}){
 const max=budget===''?Infinity:Number(budget);
 const result=items.filter(p=>isPublicProperty(p)&&(region!=='uae'||p.destination==='dubai'||Object.hasOwn(additionalEmirates,p.destination))&&(!destination||p.destination===destination)&&(!category||p.category===category)&&(!city||p.city===city)&&matchesPropertyCriteria(p,{type,beds,budget,max})&&(!favorites||favorites.includes(p.id))&&(!saleMarket||(p.category==='achat-vente'&&p.isDemo===false&&p.saleMarket===saleMarket)));
 if(sort==='price-asc'||sort==='price-desc')result.sort((a,b)=>a.price==null?b.price==null?0:1:b.price==null?-1:a.currency.localeCompare(b.currency)||(sort==='price-asc'?a.price-b.price:b.price-a.price));
 if(sort==='area-desc')result.sort((a,b)=>a.area==null?b.area==null?0:1:b.area==null?-1:b.area-a.area);
 return result;
}
export function variantPriceDetails(property){
 if(!property.variantPricing||!property.selectedVariant)return property;
 const row=property.selectedVariant;
 return {...property,...row,price:row.price??null,priceFrom:row.priceFrom===true,priceLabel:'Prix sur demande',priceNote:row.priceCondition||property.priceCondition};
}
export function variantPriceMessage(property){
 const quote=variantPriceDetails(property);
 return tr('projects.enquiry.price',{price:(quote.priceFrom&&Number.isFinite(quote.price)?tr('projects.price.from'):'')+priceText(quote)})+(quote.priceNote?'\n'+tr(quote.priceNote):'');
}
export const priceText=p=>p.price==null?tr(p.priceLabel||'Prix sur demande'):formatNumber(p.price)+' '+p.currency+(p.priceTaxExcluded?' '+tr('HT'):'');
export const isRental=property=>property.category==='location'||property.status==='À louer'||property.transaction==='rent'||(property.category==='locaux-professionnels'&&property.status!=='À vendre'&&Boolean(property.unit));
export const hasRentalRate=(property,price=property.price)=>isRental(property)&&Number.isFinite(price);
export function whatsappURL(number,message){const digits=String(number||'').replace(/[\s()+.-]/g,'');return /^[1-9]\d{7,14}$/.test(digits)?'https://wa.me/'+digits+'?text='+encodeURIComponent(message):null;}
export function contactPath(property,subject){const params=new URLSearchParams();if(property)params.set('bien',property.id);if(property?.selectedVariant)params.set('lot',property.selectedVariant.id);if(property?.selectedPaymentMode)params.set('paiement',property.selectedPaymentMode.id);if(subject)params.set('objet',subject);params.set('section','contact');return '/?'+params;}
export function validStayDates(arrival,departure,today){return !arrival&&!departure || Boolean(arrival&&departure&&arrival>=today&&departure>arrival);}

export function normalizeContactPath(path){
 const [pathname,query='']=path.split('?');
 let target=pathname.replace(/\/$/,'')||'/';
 const params=new URLSearchParams(query);
 if(['/inspiration/INT-MAR-01','/inspiration/INT-MAR-02'].includes(target))target='/destination/maroc/decoration';
 if(['/inspiration/INT-DXB-01','/inspiration/INT-DXB-02'].includes(target))target='/destination/dubai/decoration';
 if(target==='/destination/dubai/hotels-appartements')target='/destination/dubai';
 if(params.get('objet')==='Séjour')params.set('objet','Projet hôtelier');
 if(target==='/contact'){target='/';params.set('section','contact');}
 return target+(params.size?'?'+params:'');
}
