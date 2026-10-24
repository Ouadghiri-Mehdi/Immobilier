import React,{useState} from 'react';
import {ArrowUpRight,Search,Check,Plus} from 'lucide-react';
import {categories,destinations,steps,faqs,images,partners} from '../data';
import {contactPath} from '../domain';
import {destPath,categoryPath,navigate} from '../routing';
import {Photo,Link,ButtonLink,Eyebrow,Reveal,SectionTitle} from './ui';
function SearchBar({defaultDestination=''}){const [destination,setDestination]=useState(defaultDestination);const [category,setCategory]=useState('achat-vente');const [type,setType]=useState('');return <form className="search-bar" onSubmit={e=>{e.preventDefault();navigate(categoryPath(destination||'maroc',category)+(type?'?type='+encodeURIComponent(type):''));}}><label><span>OÙ SOUHAITEZ-VOUS ALLER ?</span><select value={destination} required onChange={e=>setDestination(e.target.value)}><option value="" disabled>Choisir une destination</option>{Object.entries(destinations).map(([k,d])=><option key={k} value={k}>{d.name}</option>)}</select></label><label><span>VOTRE PROJET</span><select value={category} onChange={e=>setCategory(e.target.value)}>{categories.map(c=><option key={c.slug} value={c.slug}>{c.title}</option>)}</select></label><label><span>TYPE DE BIEN</span><select value={type} onChange={e=>setType(e.target.value)} disabled={category==='decoration'}><option value="">Tous les biens</option>{['Villa','Appartement','Riad','Bureau'].map(t=><option key={t}>{t}</option>)}</select></label><button className="button search-submit" type="submit"><Search size={17}/><span>Explorer</span><ArrowUpRight size={18}/></button></form>;}

function DestinationCards(){return <div className="destination-grid">{Object.entries(destinations).map(([key,d],i)=><Reveal key={key} delay={i*100}><Link to={destPath(key)} className={'destination-card '+d.tone}><Photo src={images[d.image]} alt={'Ambiance architecturale '+d.label}/><div className="image-shade"/><span className="destination-top">0{i+1} / {d.eyebrow}</span><div className="destination-bottom"><div><h3>{d.name}</h3><p>{d.cities.slice(0,3).join(' · ')}</p></div><span className="round-arrow"><ArrowUpRight size={24}/></span></div><span className="destination-hover">Découvrir la destination</span></Link></Reveal>)}</div>;}

function CategoryGrid({destination}){return <div className="category-grid">{categories.map((c,i)=><Reveal key={c.slug} className={'category-cell cell-'+i} delay={i%3*60}><Link to={categoryPath(destination,c.slug)} className="category-tile"><Photo src={images[c.image]} alt={'Illustration '+c.title}/><div className="image-shade"/><span className="category-number">{c.number} / {destinations[destination].name.toUpperCase()}</span><div><h3>{c.title}</h3><p>{c.intro}</p><span className="category-link">Explorer <ArrowUpRight size={18}/></span></div></Link></Reveal>)}</div>;}

function ServiceCards(){
 return <div className="service-card-grid">{categories.map((service,index)=><Reveal key={service.slug} delay={index%3*50}>
  <Link to={'/services?activite='+service.slug} className="service-card">
   <div className="service-card-photo"><Photo src={images[service.image]} alt={'Inspiration pour '+service.title}/><span>{service.number}</span></div>
   <div className="service-card-copy"><h3>{service.title}</h3><p>{service.intro}</p><span className="service-card-action">Découvrir l’accompagnement <ArrowUpRight size={18}/></span></div>
  </Link>
 </Reveal>)}</div>;
}

function ServiceDetails({service}){
 return <div className="service-details">
  <p className="service-audience">{service.audience}</p>
  <h3>Ce que nous préparons avec vous</h3>
  <ul>{service.includes.map(item=><li key={item}><Check size={15} aria-hidden="true"/>{item}</li>)}</ul>
  <h3>Comment avancer</h3><p>{service.approach}</p>
  <ButtonLink to={contactPath(null,service.subject)}>{service.action}</ButtonLink>
 </div>;
}

function Partners({items=partners}){
 const confirmed=items.filter(partner=>partner.validated===true&&partner.id&&partner.name?.trim());
 if(!confirmed.length)return null;
 return <section className="section partners-section" id="partenaires-home">
  <SectionTitle eyebrow="DES INTERLOCUTEURS IDENTIFIÉS" title="Nos partenaires" italic="pour votre projet."/>
  <ul className="partner-grid">{confirmed.map(partner=><li key={partner.id}>
   {partner.logo&&<img src={partner.logo} alt="" loading="lazy"/>}<h3>{partner.name}</h3>{partner.description&&<p>{partner.description}</p>}
  </li>)}</ul>
 </section>;
}

function Method({compact=false}){return <section className={'section method '+(compact?'compact':'')}><SectionTitle eyebrow="UNE ATTENTION À CHAQUE ÉTAPE" title="De votre première idée" italic="à votre prochaine adresse." description="Un fil conducteur clair pour avancer à votre rythme, avec les bons interlocuteurs."/><ol className="method-grid">{steps.map(([title,text],i)=><Reveal as="li" key={title} delay={i*70}><span className="step-number">0{i+1}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</ol><Link className="text-link" to="/contact">Parlons de votre projet <ArrowUpRight size={17}/></Link></section>;}

function ContactBanner(){return <section className="contact-banner"><Photo src={images.interior} alt="Un intérieur ouvert sur un patio"/><div className="image-shade"/><Reveal><Eyebrow light>TOUT COMMENCE PAR UN ÉCHANGE</Eyebrow><h2>Et si votre projet<br/><em>prenait vie ici ?</em></h2><p>Un lieu à trouver, une idée à préciser.<br/>Nous sommes là pour en parler.</p><ButtonLink to="/contact" light>Rencontrons-nous</ButtonLink></Reveal></section>;}

function FAQ(){return <section className="section faq-section"><SectionTitle eyebrow="POUR Y VOIR PLUS CLAIR" title="Vos questions," italic="nos premiers repères."/><div>{faqs.map(([q,a])=><details key={q}><summary>{q}<Plus size={18}/></summary><p>{a}</p></details>)}</div></section>;}
export {SearchBar,DestinationCards,CategoryGrid,ServiceCards,ServiceDetails,Partners,Method,ContactBanner,FAQ};
