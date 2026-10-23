export function parseLocation(hash){const raw=normalizeContactPath(hash.replace(/^#/, '')||'/');const [path,query='']=raw.split('?');return {path:path.replace(/\/$/,'')||'/',params:new URLSearchParams(query)};}
export function filterProperties(items,{destination='',category='',city='',type='',beds='',budget='',sort='selection',favorites=null}={}){
 const max=budget===''?Infinity:Number(budget);
 const result=items.filter(p=>(!destination||p.destination===destination)&&(!category||p.category===category)&&(!city||p.city===city)&&(!type||p.type===type)&&(!beds||p.beds>=Number(beds))&&(p.price<=max)&&(!favorites||favorites.includes(p.id)));
 if(sort==='price-asc'||sort==='price-desc')result.sort((a,b)=>a.currency.localeCompare(b.currency)||(sort==='price-asc'?a.price-b.price:b.price-a.price));
 if(sort==='area-desc')result.sort((a,b)=>b.area-a.area);
 return result;
}
export const priceText=p=>new Intl.NumberFormat('fr-FR').format(p.price)+' '+p.currency;
export function whatsappURL(number,message){const digits=String(number||'').replace(/[\s()+.-]/g,'');return /^[1-9]\d{7,14}$/.test(digits)?'https://wa.me/'+digits+'?text='+encodeURIComponent(message):null;}
export function contactPath(property,subject){const params=new URLSearchParams();if(property)params.set('bien',property.id);if(subject)params.set('objet',subject);params.set('section','contact');return '/?'+params;}
export function validStayDates(arrival,departure,today){return !arrival&&!departure || Boolean(arrival&&departure&&arrival>=today&&departure>arrival);}

export function normalizeContactPath(path){
 const [pathname,query='']=path.split('?');
 if(pathname.replace(/\/$/,'')!=='/contact')return path;
 const params=new URLSearchParams(query);params.set('section','contact');
 return '/?'+params;
}
