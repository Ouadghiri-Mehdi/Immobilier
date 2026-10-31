import {tr,formatDate} from './index.js';

// Ne jamais traduire le nom, les coordonnées ou le texte saisis par le visiteur.
export function contactMessage(summary){
 const lines=[];
 if(summary.property)lines.push(tr('Bien : {title} / {reference}',{title:tr(summary.property.title),reference:summary.property.id}));
 lines.push(tr('Destination : {destination}',{destination:summary.destination?tr(summary.destination==='maroc'?'Maroc':'Dubaï'):tr('À définir ensemble')}));
 if(summary.subject==='Séjour'&&summary.arrival)lines.push(tr('Séjour : {arrival} au {departure}',{arrival:formatDate(summary.arrival),departure:formatDate(summary.departure)}));
 return lines.join('\n')+'\n\n'+summary.body;
}
