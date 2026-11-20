import React from 'react';
import {tr} from '../i18n/index.js';
import {decorationPageDestinations} from '../content';
import {categories} from '../data';
import {contactPath} from '../domain';
import {destPath} from '../routing';
import {Breadcrumb,Eyebrow,ButtonLink} from './ui';
import {ServicePhoto} from './ServiceVisual';

export function DecorationServicePage({destination='maroc',tabs}){
 const content=decorationPageDestinations[destination];
 const service=categories.find(item=>item.slug==='decoration');
 const enquiry=contactPath(null,service.subject)+'&destination='+destination;
 return <div className={'decoration-service-page decoration-'+destination}>
  <section className="decoration-intro section">
   <Breadcrumb items={[{label:content.label,to:destPath(destination)},{label:service.title}]}/>
   <div className="catalogue-title">
    <div><Eyebrow>{tr(content.eyebrow)}</Eyebrow><h1>{tr('decorMorocco.title')}</h1></div>
    <p>{tr('decorMorocco.introduction')}</p>
   </div>
   {tabs}
  </section>
  <section className="section decoration-service-sections" aria-label={tr('decorMorocco.title')}>
   {content.sections.map((item,index)=><article key={item.id} className={'service-editorial'+(item.media?'':' decoration-service-text-only')+(item.media&&index%2?' reverse':'')}>
    {item.media&&<div className="service-editorial-image"><ServicePhoto media={item.media} sizes="(max-width: 760px) 90vw, 43vw"/></div>}
    <div className="service-copy"><h2>{tr(item.title)}</h2><p>{tr(item.text)}</p></div>
   </article>)}
  </section>
  <section className="section decoration-service-contact"><ButtonLink to={enquiry}>{tr('decorMorocco.contact')}</ButtonLink></section>
 </div>;
}

export {DecorationServicePage as MoroccoDecorationPage};
