import React from 'react';
import {tr} from '../i18n/index.js';
import {categories,properties} from '../data';
import {filterProperties} from '../domain';
import {destPath} from '../routing';
import {Breadcrumb,ButtonLink,Eyebrow} from './ui';
import {Favorite,PropertyGrid} from './property';
import {ServiceDetails,ContactBanner} from './marketing';

export function HotelAcquisitionPage({tabs}){
 const service=categories.find(item=>item.slug==='hotels-appartements');
 const offers=filterProperties(properties,{destination:'maroc',category:service.slug});
 return <>
  <section className="catalogue-intro section">
   <Breadcrumb items={[{label:'Maroc',to:destPath('maroc')},{label:service.title}]}/>
   <div className="catalogue-title"><div><Eyebrow>{tr('MAROC')} / {service.number}</Eyebrow><h1>{tr(service.title)}</h1></div><p>{tr(service.description)}</p></div>
   {tabs}
  </section>
  <section className="catalogue-body section">
   {offers.length?<PropertyGrid items={offers}/>:<div className="empty-state"><h2>{tr('Votre projet hôtelier commence par un échange.')}</h2><p>{tr('Contactez l’agence pour connaître les opportunités d’acquisition au Maroc.')}</p></div>}
   <ServiceDetails service={service}/>
  </section>
  <ContactBanner/>
 </>;
}

export function RetiredProperty({property}){
 return <section className="page-intro section">
  <Breadcrumb items={[{label:property.destination==='maroc'?'Maroc':'Dubaï',to:destPath(property.destination)},{label:property.title}]}/>
  <Eyebrow>{tr('EXEMPLE RETIRÉ DU CATALOGUE')}</Eyebrow><h1>{tr(property.title)}</h1>
  <p>{tr('Cette annonce illustrative a été retirée du catalogue. Elle ne constitue pas une offre immobilière disponible.')}</p>
  <Favorite property={property} className="retired-property-favorite"/>
  <ButtonLink to={destPath(property.destination)}>{tr('Explorer la destination')}</ButtonLink>
 </section>;
}

export function RetiredFavorites({items}){
 if(!items.length)return null;
 return <div className="retired-favorites">
  <p>{tr('Ces annonces illustratives ont été retirées du catalogue et ne sont pas comptabilisées parmi vos favoris actifs. Vous pouvez les retirer de votre sélection.')}</p>
  <ul className="retired-favorites-list">{items.map(property=><li key={property.id}><span>{tr(property.title)}</span><Favorite property={property}/></li>)}</ul>
 </div>;
}
