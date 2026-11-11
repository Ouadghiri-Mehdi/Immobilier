import {useSyncExternalStore} from 'react';
import fr from './fr.json' with {type:'json'};
import en from './en.json' with {type:'json'};

export const languageStorageKey='sarouty-language';
let language='fr';
try {if(typeof window!=='undefined'&&localStorage.getItem(languageStorageKey)==='en')language='en';} catch {}
const listeners=new Set();
export const getLanguage=()=>language;
export const getLocale=(lang=language)=>lang==='en'?'en-GB':'fr-FR';
export function setLanguage(next){
 if(!['fr','en'].includes(next)||next===language)return;
 language=next;
 try {localStorage.setItem(languageStorageKey,next);} catch {}
 listeners.forEach(listener=>listener());
}
const subscribe=listener=>{listeners.add(listener);return()=>listeners.delete(listener);};
export const useLanguage=()=>useSyncExternalStore(subscribe,getLanguage,()=> 'fr');
export const formatNumber=(value,lang=language)=>new Intl.NumberFormat(getLocale(lang)).format(value);
export function formatDate(value,lang=language){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(value||''))return value;
 const [year,month,day]=value.split('-').map(Number);
 return new Intl.DateTimeFormat(getLocale(lang),{day:'numeric',month:'long',year:'numeric'}).format(new Date(year,month-1,day));
}
const uppercaseKeys=new Map(Object.keys(fr).map(key=>[key.toLocaleUpperCase('fr-FR'),key]));
// Les messages sources français sont les identifiants, comme dans un catalogue gettext.
// Aucun élément DOM n’est ajouté et les valeurs métier ne sont jamais traduites.
export function tr(value,params,lang=language){
 if(typeof value==='number')return formatNumber(value,lang);
 if(typeof value!=='string')return value;
 const resources=lang==='en'?en:fr;
 let key=Object.hasOwn(fr,value)?value:value.trim();
 let uppercase=false;
 if(!Object.hasOwn(fr,key)&&uppercaseKeys.has(key)){key=uppercaseKeys.get(key);uppercase=true;}
 if(!Object.hasOwn(fr,key)){
  const description=/^Un lieu imaginé pour associer confort et caractère à (.+)\. Les volumes, la lumière et l’environnement composent ici un exemple de présentation de bien\.$/.exec(value);
  if(description)return tr('Un lieu imaginé pour associer confort et caractère à {city}. Les volumes, la lumière et l’environnement composent ici un exemple de présentation de bien.',{city:description[1]},lang);
  return value; // noms propres, références, coordonnées et texte libre restent intacts.
 }
 let result=resources[key]??fr[key];
 if(uppercase)result=result.toLocaleUpperCase(getLocale(lang));
 if(params)result=result.replace(/\{(\w+)\}/g,(token,name)=>Object.hasOwn(params,name)?String(params[name]):token);
 const leading=value.match(/^\s*/)[0],trailing=value.match(/\s*$/)[0];
 return key===value?result:leading+result+trailing;
}

export function applyDocumentLanguage(){
 document.documentElement.lang=language;
 for(const [selector,value] of [
  ['meta[name="description"]',tr('Sarouty Properties, agence de services immobiliers au Maroc et à Dubaï. Découvrez nos destinations, nos biens et notre accompagnement.')],
  ['meta[property="og:title"]','Sarouty Properties | '+tr('Immobilier au Maroc et à Dubaï')],
  ['meta[property="og:description"]',tr('Achat, vente, location et aménagement au Maroc et à Dubaï. Acquisition hôtelière au Maroc.')],
  ['meta[property="og:locale"]',language==='en'?'en_GB':'fr_FR'],
 ])document.querySelector(selector)?.setAttribute('content',value);
 for(const input of document.querySelectorAll('form input, form select, form textarea'))if(input.validity?.customError)localizeValidity(input);
}

export function localizeValidity(input){
 input.setCustomValidity('');
 const validity=input.validity;
 const message=validity.valueMissing?(input.type==='checkbox'?'Veuillez accepter cette condition.':'Veuillez remplir ce champ.'):
  validity.typeMismatch?'Veuillez saisir une adresse e-mail valide.':
  validity.rangeUnderflow||validity.rangeOverflow?'Veuillez choisir une date dans la période autorisée.':
  validity.badInput?'Veuillez saisir une valeur valide.':
  validity.tooLong?'Le texte dépasse la longueur autorisée.':'';
 input.setCustomValidity(message?tr(message):'');
}
