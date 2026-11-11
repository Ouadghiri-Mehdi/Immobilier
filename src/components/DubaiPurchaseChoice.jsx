import React from 'react';
import {ArrowUpRight} from 'lucide-react';
import {dubaiPurchaseTypes,properties} from '../data';
import {tr} from '../i18n/index.js';
import {dubaiPurchasePath,destPath} from '../routing';
import {contactPath} from '../domain';
import {Photo,Link,ButtonLink,Breadcrumb,SectionTitle,Reveal} from './ui';
import {PropertyGrid} from './property';

export function DubaiPurchaseChoice({params,tabs}){
 const pending=properties.filter(property=>property.destination==='dubai'&&property.category==='achat-vente'&&property.isDemo===false&&!dubaiPurchaseTypes.some(type=>type.id===property.saleMarket));
 return <>
  <section className="catalogue-intro section">
   <Breadcrumb items={[{label:'Dubaï',to:destPath('dubai')},{label:'Achat & vente'}]}/>
   <SectionTitle page eyebrow={tr('ACHAT & VENTE À DUBAÏ')} title={tr('Choisissez votre type d’achat.')} description={tr('Explorez l’achat sur plan ou le marché secondaire pour préciser votre recherche à Dubaï.')}/>
   {tabs}
  </section>
  <section className="section dubai-purchase-choice">
   <div className="purchase-choice-grid">{dubaiPurchaseTypes.map((type,index)=><Reveal key={type.id} delay={index*80}>
    <Link to={dubaiPurchasePath(type.id,params)} className="purchase-choice-card" aria-label={tr('Découvrir les offres : {category}',{category:tr(type.title)})}>
     <Photo src={type.image} alt={tr(type.alt)} fallbackSrc={null}/>
     <div className="purchase-choice-copy"><h2>{tr(type.title)}</h2><p>{tr(type.description)}</p><span className="text-link">{tr('Découvrir les offres')}<ArrowUpRight size={18}/></span></div>
    </Link>
   </Reveal>)}</div>
   <p className="demo-note purchase-image-note">{tr('Images d’ambiance, sans lien avec une offre précise.')}</p>
  </section>
  {pending.length>0&&<section className="section purchase-pending">
   <SectionTitle title={tr('Type de vente à confirmer')} description={tr('L’agence doit confirmer si ces offres relèvent d’un achat auprès du promoteur sur plan ou d’une revente. Elles ne sont pas encore classées dans les deux catégories.')}/>
   <PropertyGrid items={pending}/>
  </section>}
 </>;
}

export function DubaiPurchaseEmptyState({market}){
 return <div className="empty-state">
  <h2>{tr('Les offres sont à confirmer.')}</h2>
  <p>{tr(market.id==='off-plan'?'Contactez l’agence pour connaître les offres confirmées en achat sur plan à Dubaï.':'Contactez l’agence pour connaître les offres confirmées sur le marché secondaire à Dubaï.')}</p>
  <ButtonLink to={contactPath(null,'Achat immobilier')+'&destination=dubai'}>{tr('Parlons de votre projet à Dubaï')}</ButtonLink>
 </div>;
}
