import React from 'react';
import {Search,Check,Briefcase,Phone,Compass} from 'lucide-react';
import {agencyReasons} from '../content';
import {tr} from '../i18n/index.js';
import {Reveal,SectionTitle} from './ui';

const icons={search:Search,check:Check,briefcase:Briefcase,phone:Phone,compass:Compass};
export function AgencyReasons(){
 return <section className="section values-section agency-reasons" aria-label={tr('Pourquoi choisir Sarouty Properties ?')}>
  <SectionTitle title={tr('Pourquoi choisir Sarouty Properties ?')}/>
  <div className="agency-reasons-grid">{agencyReasons.map(({icon,title,text},index)=>{
   const Icon=icons[icon];
   return <Reveal as="article" key={title} delay={index%3*60}><Icon size={25} strokeWidth={1.2} aria-hidden="true"/><h3>{tr(title)}</h3><p>{tr(text)}</p></Reveal>;
  })}</div>
 </section>;
}
