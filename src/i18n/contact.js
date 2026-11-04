import {tr,formatDate} from './index.js';
import {propertyURL} from '../routing.js';

export function propertyEnquiryMessage(property){
 if(property.reference)return tr('Bonjour Sarouty Properties, je souhaite des informations sur {title} (réf. {reference}).\nFiche : {link}',{title:tr(property.title),reference:property.reference,link:propertyURL(property)});
 return tr('Bonjour Sarouty Properties, je souhaite des informations sur {project}.\nFiche : {link}',{project:property.project||tr(property.title),link:propertyURL(property)});
}

// Ne jamais traduire le nom, les coordonnées ou le texte saisis par le visiteur.
export function contactMessage(summary){
 const lines=[];
 if(summary.property){
  if(summary.property.url){
   lines.push(tr('Bien : {title}',{title:tr(summary.property.title)}));
   if(summary.property.reference)lines.push(tr('Référence : {reference}',{reference:summary.property.reference}));
   lines.push(tr('Fiche : {link}',{link:summary.property.url}));
  }else lines.push(tr('Bien : {title} / {reference}',{title:tr(summary.property.title),reference:summary.property.id}));
 }
 lines.push(tr('Destination : {destination}',{destination:summary.destination?tr(summary.destination==='maroc'?'Maroc':'Dubaï'):tr('À définir ensemble')}));
 if(summary.subject==='Séjour'&&summary.arrival)lines.push(tr('Séjour : {arrival} au {departure}',{arrival:formatDate(summary.arrival),departure:formatDate(summary.departure)}));
 return lines.join('\n')+'\n\n'+summary.body;
}
