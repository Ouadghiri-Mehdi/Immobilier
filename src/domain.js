import {formatNumber,tr} from './i18n/index.js';
export function parseLocation(hash){const raw=normalizeContactPath(hash.replace(/^#/, '')||'/');const [path,query='']=raw.split('?');return {path:path.replace(/\/$/,'')||'/',params:new URLSearchParams(query)};}
export function filterProperties(items,{destination='',category='',city='',type='',beds='',budget='',sort='selection',favorites=null}={}){
 const max=budget===''?Infinity:Number(budget);
 const result=items.filter(p=>(!destination||p.destination===destination)&&(!category||p.category===category)&&(!city||p.city===city)&&(!type||p.type===type)&&(!beds||p.beds>=Number(beds))&&(budget===''||(p.price!=null&&p.price<=max))&&(!favorites||favorites.includes(p.id)));
 if(sort==='price-asc'||sort==='price-desc')result.sort((a,b)=>a.price==null?b.price==null?0:1:b.price==null?-1:a.currency.localeCompare(b.currency)||(sort==='price-asc'?a.price-b.price:b.price-a.price));
 if(sort==='area-desc')result.sort((a,b)=>a.area==null?b.area==null?0:1:b.area==null?-1:b.area-a.area);
 return result;
}
export const priceText=p=>p.price==null?tr('Prix sur demande'):formatNumber(p.price)+' '+p.currency;
export function whatsappURL(number,message){const digits=String(number||'').replace(/[\s()+.-]/g,'');return /^[1-9]\d{7,14}$/.test(digits)?'https://wa.me/'+digits+'?text='+encodeURIComponent(message):null;}
export function contactPath(property,subject){const params=new URLSearchParams();if(property)params.set('bien',property.id);if(subject)params.set('objet',subject);params.set('section','contact');return '/?'+params;}
export function validStayDates(arrival,departure,today){return !arrival&&!departure || Boolean(arrival&&departure&&arrival>=today&&departure>arrival);}

export function normalizeContactPath(path){
 const [pathname,query='']=path.split('?');
 if(pathname.replace(/\/$/,'')!=='/contact')return path;
 const params=new URLSearchParams(query);params.set('section','contact');
 return '/?'+params;
}
