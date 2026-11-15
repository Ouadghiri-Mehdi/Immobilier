import React from 'react';
import {ArrowUpRight} from 'lucide-react';
import {dubaiPurchaseTypes,properties,isPublicProperty} from '../data';
import {tr} from '../i18n/index.js';
import {resaleEnquiryMailto,resaleEnquiryMessage} from '../i18n/contact.js';
import {destPath,categoryPath} from '../routing';
import {contactPath} from '../domain';
import {useApp} from '../context';
import {WhatsAppIcon} from './WhatsAppIcon';
import {Link,ButtonLink,Breadcrumb,SectionTitle} from './ui';
import {PropertyGrid} from './property';

function ResaleEnquiry(){
 const {openWhatsApp}=useApp();
 const mailto=resaleEnquiryMailto();
 return <div className="resale-enquiry">
  <div><h2>{tr('Marché secondaire')}</h2><p>{tr('Vous recherchez un bien sur le marché secondaire à Dubaï ? Présentez-nous vos critères pour préparer votre recherche.')}</p></div>
  <div className="resale-enquiry-action">
   {mailto?<><a className="button" href={mailto}>{tr('Préparer ma demande par e-mail')}<ArrowUpRight size={17}/></a><p>{tr('Votre messagerie s’ouvrira avec une demande préremplie. Vous pourrez la compléter et confirmer son envoi.')}</p></>:<><button className="button" type="button" onClick={()=>openWhatsApp(resaleEnquiryMessage)}><WhatsAppIcon size={17}/>{tr('Parlons de votre recherche sur WhatsApp')}</button><p>{tr('Précisez le type de bien, le quartier, votre budget et votre calendrier. Vous confirmez l’envoi dans WhatsApp.')}</p></>}
  </div>
 </div>;
}

// Additions shared by the main catalogue and its existing off-plan URL.
export function DubaiPurchaseChoice(){
 const pending=properties.filter(property=>isPublicProperty(property)&&property.destination==='dubai'&&property.category==='achat-vente'&&!dubaiPurchaseTypes.some(type=>type.id===property.saleMarket));
 return <>
  {pending.length>0&&<section className="section purchase-pending">
   <SectionTitle title={tr('Type de vente à confirmer')} description={tr('L’agence doit confirmer si ces offres relèvent d’un achat auprès du promoteur sur plan ou d’une revente. Elles ne sont pas encore classées dans les deux catégories.')}/>
   <PropertyGrid items={pending}/>
  </section>}
  <section className="section resale-section"><ResaleEnquiry/><Link to="/emirats" className="text-link">{tr("projects.emirates.link")}<ArrowUpRight size={17}/></Link></section>
 </>;
}

// Compatibility page: opening it never launches email or WhatsApp automatically.
export function DubaiResalePage({tabs}){
 return <>
  <section className="catalogue-intro section">
   <Breadcrumb items={[{label:'Dubaï',to:destPath('dubai')},{label:'Achat & vente',to:categoryPath('dubai','achat-vente')},{label:'Marché secondaire'}]}/>
   <SectionTitle page eyebrow={tr('ACHAT & VENTE À DUBAÏ')} title={tr('Marché secondaire')} description={tr('Un accompagnement pour votre recherche immobilière à Dubaï.')}/>
   {tabs}
  </section>
  <section className="section resale-section"><ResaleEnquiry/><Link to={categoryPath('dubai','achat-vente')} className="text-link">{tr('Découvrir l’achat sur plan')}<ArrowUpRight size={17}/></Link></section>
 </>;
}

export function DubaiPurchaseEmptyState(){
 return <div className="empty-state">
  <h2>{tr('Achat sur plan')}</h2>
  <p>{tr('Aucun programme sur plan confirmé n’est actuellement présenté. Contactez l’agence pour préciser votre recherche à Dubaï.')}</p>
  <ButtonLink to={contactPath(null,'Achat immobilier')+'&destination=dubai'}>{tr('Parlons de votre projet à Dubaï')}</ButtonLink>
 </div>;
}
