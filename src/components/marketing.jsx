import {tr,localizeValidity} from '../i18n/index.js';
import React,{useState} from 'react';
import {ArrowUpRight,Search,Check,Plus} from 'lucide-react';
import {categories,categoriesForDestination,destinations,steps,faqs,images,partners} from '../data';
import {contactPath} from '../domain';
import {destPath,categoryPath,navigate} from '../routing';
import {Photo,Link,ButtonLink,Eyebrow,Reveal,SectionTitle} from './ui';
function SearchBar({defaultDestination=''}){const [destination,setDestination]=useState(defaultDestination);const [category,setCategory]=useState('achat-vente');const [type,setType]=useState('');return <form className="search-bar" onInvalid={event=>localizeValidity(event.target)} onInput={event=>event.target.setCustomValidity?.('')} onSubmit={e=>{e.preventDefault();navigate(categoryPath(destination||'maroc',category)+(type?'?type='+encodeURIComponent(type):''));}}><label><span>{tr("OÙ SOUHAITEZ-VOUS ALLER ?")}</span><select value={destination} required onChange={e=>{setDestination(e.target.value);if(!categoriesForDestination(e.target.value).some(c=>c.slug===category)){setCategory("achat-vente");setType("");}}}><option value="" disabled>{tr("Choisir une destination")}</option>{tr(Object.entries(destinations).map(([k,d])=><option key={k} value={k}>{tr(d.name)}</option>))}</select></label><label><span>{tr("VOTRE PROJET")}</span><select value={category} onChange={e=>{setCategory(e.target.value);if(e.target.value==="hotels-appartements")setType("");}}>{tr(categoriesForDestination(destination||"maroc").map(c=><option key={c.slug} value={c.slug}>{tr(c.title)}</option>))}</select></label><label><span>{tr("TYPE DE BIEN")}</span><select value={type} onChange={e=>setType(e.target.value)} disabled={category==='decoration'||category==='hotels-appartements'}><option value="">{tr("Tous les biens")}</option>{tr(['Villa','Appartement','Riad','Bureau'].map(t=><option key={t} value={t}>{tr(t)}</option>))}</select></label><button className="button search-submit" type="submit"><Search size={17}/><span>{tr("Explorer")}</span><ArrowUpRight size={18}/></button></form>;}

function DestinationCards({media={}}){return <div className="destination-grid">{tr(Object.entries(destinations).map(([key,d],i)=><Reveal key={key} delay={i*100}><Link to={destPath(key)} className={'destination-card '+d.tone}><Photo src={media[key]?.src||images[d.image]} className={media[key]?"home-destination-photo":""} style={media[key]?{"--destination-position":media[key].position.desktop,"--destination-position-mobile":media[key].position.mobile}:undefined} alt={tr("Ambiance architecturale {value0}", {value0:tr(d.label)})}/><div className="image-shade"/><span className="destination-top">0{tr(i+1)} / {tr(d.eyebrow)}</span><div className="destination-bottom"><div><h3>{tr(d.name)}</h3><p>{tr(d.cities.slice(0,3).join(' · '))}</p></div><span className="round-arrow"><ArrowUpRight size={24}/></span></div><span className="destination-hover">{tr("Découvrir la destination")}</span></Link></Reveal>))}</div>;}

function CategoryGrid({destination}){return <div className="category-grid">{tr(categoriesForDestination(destination).map((c,i)=><Reveal key={c.slug} className={'category-cell cell-'+i} delay={i%3*60}><Link to={categoryPath(destination,c.slug)} className="category-tile"><Photo src={images[c.image]} alt={tr("Illustration {value0}", {value0:tr(c.title)})}/><div className="image-shade"/><span className="category-number">{tr(c.number)} / {tr(destinations[destination].name.toUpperCase())}</span><div><h3>{tr(c.title)}</h3><p>{tr(c.intro)}</p><span className="category-link">{tr("Explorer ")}<ArrowUpRight size={18}/></span></div></Link></Reveal>))}</div>;}

function ServiceCards(){
 return <div className="service-card-grid">{tr(categories.map((service,index)=><Reveal key={service.slug} delay={index%3*50}>
  <Link to={'/services?activite='+service.slug} className="service-card">
   <div className="service-card-photo"><Photo src={images[service.image]} alt={tr("Inspiration pour {value0}", {value0:tr(service.title)})}/><span>{tr(service.number)}</span></div>
   <div className="service-card-copy"><h3>{tr(service.title)}</h3><p>{tr(service.intro)}</p><span className="service-card-action">{tr("Découvrir l’accompagnement ")}<ArrowUpRight size={18}/></span></div>
  </Link>
 </Reveal>))}</div>;
}

function ServiceDetails({service}){
 return <div className="service-details">
  <p className="service-audience">{tr(service.audience)}</p>
  <h3>{tr("Ce que nous préparons avec vous")}</h3>
  <ul>{tr(service.includes.map(item=><li key={item}><Check size={15} aria-hidden="true"/>{tr(item)}</li>))}</ul>
  <h3>{tr("Comment avancer")}</h3><p>{tr(service.approach)}</p>
  <ButtonLink to={contactPath(null,service.subject)}>{tr(service.action)}</ButtonLink>
 </div>;
}

function Partners({items=partners}){
 const [loaded,setLoaded]=useState({});
 const [failed,setFailed]=useState({});
 const confirmed=items.filter(partner=>partner.validated===true&&partner.id&&partner.name?.trim());
 if(!confirmed.length)return null;
 const ready=confirmed.every(partner=>!partner.logo||loaded[partner.id]||failed[partner.id]);
 const renderList=(copy=false)=><ul className="partner-list" role="list" aria-label={copy?undefined:tr('Liste des partenaires')}
  aria-hidden={copy?true:undefined} inert={copy?true:undefined}>
  {confirmed.map(partner=><li className="partner-mark" key={partner.id}
   style={{'--partner-logo-width':(partner.logoWidth||160)+'px','--partner-logo-height':(partner.logoHeight||64)+'px'}}>
   {partner.logo&&!failed[partner.id]?<img src={partner.logo} alt={copy?'':partner.name}
    loading="eager" fetchPriority="low" decoding="async"
    onLoad={()=>setLoaded(previous=>previous[partner.id]?previous:{...previous,[partner.id]:true})}
    onError={()=>setFailed(previous=>previous[partner.id]?previous:{...previous,[partner.id]:true})}/>:<span>{partner.name}</span>}
  </li>)}
 </ul>;
 return <section className="section partners-section" id="partenaires-home">
  <SectionTitle eyebrow={tr("DES INTERLOCUTEURS IDENTIFIÉS")} title={tr("Nos partenaires de confiance")}/>
  <div className="partner-band" style={{'--partner-play-state':ready?'running':'paused'}}>
   <div className="partner-band-viewport" tabIndex={0} role="group" aria-label={tr('Logos des partenaires')}>
    <div className="partner-track">{renderList()}{renderList(true)}</div>
   </div>
  </div>
 </section>;
}

function Method({compact=false}){return <section className={'section method '+(compact?'compact':'')}><SectionTitle eyebrow={tr("UNE ATTENTION À CHAQUE ÉTAPE")} title={tr("De votre première idée")} italic={tr("à votre prochaine adresse.")} description={tr("Un fil conducteur clair pour avancer à votre rythme, avec les bons interlocuteurs.")}/><ol className="method-grid">{tr(steps.map(([title,text],i)=><Reveal as="li" key={title} delay={i*70}><span className="step-number">0{tr(i+1)}</span><h3>{tr(title)}</h3><p>{tr(text)}</p></Reveal>))}</ol><Link className="text-link" to="/contact">{tr("Parlons de votre projet ")}<ArrowUpRight size={17}/></Link></section>;}

function ContactBanner(){return <section className="contact-banner"><Photo src={images.interior} alt={tr("Un intérieur ouvert sur un patio")}/><div className="image-shade"/><Reveal><Eyebrow light>{tr("TOUT COMMENCE PAR UN ÉCHANGE")}</Eyebrow><h2>{tr("Et si votre projet")}<br/><em>{tr("prenait vie ici ?")}</em></h2><p>{tr("Un lieu à trouver, une idée à préciser.")}<br/>{tr("Nous sommes là pour en parler.")}</p><ButtonLink to="/contact" light>{tr("Rencontrons-nous")}</ButtonLink></Reveal></section>;}

function FAQ({className=''}){return <section className={'section faq-section'+(className?' '+className:'')}><SectionTitle eyebrow={tr("POUR Y VOIR PLUS CLAIR")} title={tr("Vos questions,")} italic={tr("nos premiers repères.")}/><div>{tr(faqs.map(([q,a])=><details key={q}><summary>{tr(q)}<Plus size={18}/></summary><p>{tr(a)}</p></details>))}</div></section>;}
export {SearchBar,DestinationCards,CategoryGrid,ServiceCards,ServiceDetails,Partners,Method,ContactBanner,FAQ};
