import {tr} from './index.js';
import {variantPriceMessage} from '../domain.js';
import {propertyURL} from '../routing.js';
import {propertyLocationName} from '../property-locations.js';
import {siteConfig} from '../config.js';

export function resaleEnquiryMessage(){
 return tr('Bonjour Sarouty Properties, je souhaite être accompagné dans l’achat d’un bien sur le marché secondaire à Dubaï.\n\nType de bien : …\nQuartier souhaité : …\nBudget : …\nCalendrier : …\nAutres besoins : …');
}

export function resaleEnquiryMailto(email=siteConfig.email){
 const address=String(email||'').trim();
 if(!/^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(address))return null;
 return 'mailto:'+address+'?subject='+encodeURIComponent(tr('Marché secondaire à Dubaï — Sarouty Properties'))+'&body='+encodeURIComponent(resaleEnquiryMessage());
}

export function propertyEnquiryMessage(property){
 const message=property.reference?tr('Bonjour Sarouty Properties, je souhaite des informations sur {title} (réf. {reference}).\nFiche : {link}',{title:tr(property.title),reference:property.reference,link:propertyURL(property)}):tr('Bonjour Sarouty Properties, je souhaite des informations sur {project}.\nFiche : {link}',{project:property.project||tr(property.title),link:propertyURL(property)});
 return message+(property.projectProgramme?'\n'+tr('projects.enquiry.location',{destination:tr(propertyLocationName(property.destination))})+'\n'+tr('projects.enquiry.subject',{project:property.project||tr(property.title)}):'')+(property.selectedVariant?'\n'+tr(property.projectProgramme?'projects.enquiry.typology':'Lot sélectionné : {lot}',{lot:tr(property.selectedVariant.label)}):'')+(property.variantPricing?'\n'+variantPriceMessage(property):'');
}

// Ne jamais traduire le nom, les coordonnées ou le texte saisis par le visiteur.
export function contactMessage(summary){
 const lines=[];
 if(summary.subject)lines.push(tr('projects.enquiry.formSubject',{subject:tr(summary.subject)}));
 if(summary.property){
  if(summary.property.url){
   lines.push(tr('Bien : {title}',{title:tr(summary.property.title)}));
   if(summary.property.reference)lines.push(tr('Référence : {reference}',{reference:summary.property.reference}));
   if(summary.property.selectedVariant)lines.push(tr(summary.property.projectProgramme?'projects.enquiry.typology':'Lot sélectionné : {lot}',{lot:tr(summary.property.selectedVariant.label)}));
   if(summary.property.variantPricing)lines.push(variantPriceMessage(summary.property));
   lines.push(tr('Fiche : {link}',{link:summary.property.url}));
  }else lines.push(tr('Bien : {title} / {reference}',{title:tr(summary.property.title),reference:summary.property.id}));
 }
 lines.push(tr('Destination : {destination}',{destination:summary.destination?tr(propertyLocationName(summary.destination)):tr('À définir ensemble')}));
 return lines.join('\n')+'\n\n'+summary.body;
}
