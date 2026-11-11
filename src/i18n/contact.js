import {tr} from './index.js';
import {propertyURL} from '../routing.js';

export function propertyEnquiryMessage(property){
 const message=property.reference?tr('Bonjour Sarouty Properties, je souhaite des informations sur {title} (réf. {reference}).\nFiche : {link}',{title:tr(property.title),reference:property.reference,link:propertyURL(property)}):tr('Bonjour Sarouty Properties, je souhaite des informations sur {project}.\nFiche : {link}',{project:property.project||tr(property.title),link:propertyURL(property)});
 return message+(property.selectedVariant?'\n'+tr('Lot sélectionné : {lot}',{lot:tr(property.selectedVariant.label)}):'');
}

// Ne jamais traduire le nom, les coordonnées ou le texte saisis par le visiteur.
export function contactMessage(summary){
 const lines=[];
 if(summary.property){
  if(summary.property.url){
   lines.push(tr('Bien : {title}',{title:tr(summary.property.title)}));
   if(summary.property.reference)lines.push(tr('Référence : {reference}',{reference:summary.property.reference}));
   if(summary.property.selectedVariant)lines.push(tr('Lot sélectionné : {lot}',{lot:tr(summary.property.selectedVariant.label)}));
   lines.push(tr('Fiche : {link}',{link:summary.property.url}));
  }else lines.push(tr('Bien : {title} / {reference}',{title:tr(summary.property.title),reference:summary.property.id}));
 }
 lines.push(tr('Destination : {destination}',{destination:summary.destination?tr(summary.destination==='maroc'?'Maroc':'Dubaï'):tr('À définir ensemble')}));
 return lines.join('\n')+'\n\n'+summary.body;
}
