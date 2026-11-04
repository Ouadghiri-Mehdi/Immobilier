import {normalizeContactPath} from './domain.js';
export const href=p=>'#'+normalizeContactPath(p);
export const destPath=d=>'/destination/'+d;
export const categoryPath=(d,c)=>destPath(d)+'/'+c;
export const defaultMessage='Bonjour Sarouty Properties, je souhaite échanger avec vous au sujet de mon projet immobilier.';
export function propertyURL(property){
 const hash=href('/bien/'+property.id);
 return typeof location!=='undefined'&&location.href?new URL(hash,location.href).href:hash;
}
export function scrollToSection(id,block='start'){
 const section=document.getElementById(id);
 if(!section)return;
 const reduce=window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
 section.scrollIntoView({behavior:reduce?'instant':'smooth',block});
}
export function scrollToContact(){
 scrollToSection('contact');
 document.getElementById('contact-title')?.focus({preventScroll:true});
}
export function navigate(path){
 const target=normalizeContactPath(path);
 if(window.location.hash==='#'+target){
  if(new URLSearchParams(target.split('?')[1]||'').get('section')==='contact')scrollToContact();
 }else window.location.hash=target;
}
