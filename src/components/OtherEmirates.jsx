import React from 'react';
import {tr} from '../i18n/index.js';
import {additionalEmirates,emiratePath} from '../property-locations.js';
import {properties} from '../data.js';
import {filterProperties,contactPath} from '../domain.js';
import {Breadcrumb,SectionTitle,Link,ButtonLink} from './ui';
import {PropertyGrid} from './property';

export function OtherEmirates({emirate}){
 const destination=additionalEmirates[emirate];
 const items=destination?filterProperties(properties,{destination:emirate,category:'achat-vente'}):[];
 return <section className="page-intro section other-emirates">
  <Breadcrumb items={[{label:'projects.emirates.title',...(destination?{to:emiratePath()}:{})},...(destination?[{label:destination.name}]:[])]}/>
  <SectionTitle page title={tr(destination?.name||'projects.emirates.title')} description={tr('projects.emirates.description')}/>
  <nav className="favorites-tabs" aria-label={tr('projects.emirates.title')}>
   {Object.entries(additionalEmirates).map(([key,value])=><Link key={key} to={emiratePath(key)} aria-current={emirate===key?'page':undefined}>{tr(value.name)}</Link>)}
  </nav>
  {destination&&(items.length?<PropertyGrid items={items}/>:<div className="empty-state"><p>{tr('projects.emirates.empty')}</p><ButtonLink to={contactPath(null,'Achat immobilier')+'&destination='+emirate}>{tr('projects.emirates.contact')}</ButtonLink></div>)}
 </section>;
}
