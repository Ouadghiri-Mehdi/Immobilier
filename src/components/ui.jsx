import {tr} from '../i18n/index.js';
import React,{useState,useEffect,useRef} from 'react';
import {ArrowUpRight,ArrowRight,ChevronRight,Compass} from 'lucide-react';
import {images} from '../data';
import {href,scrollToContact} from '../routing';
function Photo({src,alt='',className='',eager=false,...rest}){return <img src={src} alt={tr(alt)} className={className} loading={eager?'eager':'lazy'} decoding="async" onError={e=>{if(!e.currentTarget.src.endsWith('/assets/maroc-villa.jpg'))e.currentTarget.src=images.maroc;}} {...rest}/>;}

function Link({to,children,className='',onClick,...props}){
 const target=href(to);
 const handleClick=e=>{
  onClick?.(e);
  if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  if(window.location.hash===target&&target.startsWith('#/?')&&new URLSearchParams(target.split('?')[1]).get('section')==='contact'){
   e.preventDefault();scrollToContact();
  }
 };
 return <a href={target} className={className} onClick={handleClick} {...props}>{tr(children)}</a>;
}

function ButtonLink({to,children,light=false,outline=false,className=''}){return <Link to={to} className={`button ${light?'button-light':''} ${outline?'button-outline':''} ${className}`}>{tr(children)}<ArrowUpRight size={17}/></Link>;}

function Eyebrow({children,light=false}){return <p className={'eyebrow '+(light?'eyebrow-light':'')}><span/>{tr(children)}</p>;}

function Reveal({children,className='',delay=0,as:Tag='div'}){
 const ref=useRef(null);
 const [seen,setSeen]=useState(false);
 useEffect(()=>{
  // Le contenu reste visible même sans observer ou si l’animation est désactivée.
  if(!window.IntersectionObserver||window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches)return;
  let observer;
  try{
   observer=new IntersectionObserver(entries=>{
    if(entries.some(entry=>entry.isIntersecting)){setSeen(true);observer.disconnect();}
   },{threshold:.08});
   if(ref.current)observer.observe(ref.current);
  }catch{observer?.disconnect();}
  return()=>observer?.disconnect();
 },[]);
 return <Tag ref={ref} className={`reveal ${seen?'seen':''} ${className}`} style={{'--reveal-delay':Math.min(delay,150)+'ms'}}>{tr(children)}</Tag>;
}

function SectionTitle({eyebrow,title,italic,description,action,center=false,page=false}){const Heading=page?'h1':'h2';return <Reveal className={'section-heading '+(center?'center':'')}><div><Eyebrow>{tr(eyebrow)}</Eyebrow><Heading>{tr(title)}{tr(italic&&<><br/><em>{tr(italic)}</em></>)}</Heading></div>{tr(description&&<p className="section-description">{tr(description)}</p>)}{tr(action)}</Reveal>;}

function Breadcrumb({items=[]}){return <nav className="breadcrumbs" aria-label={tr("Fil d’Ariane")}><Link to="/">{tr("Accueil")}</Link>{tr(items.map((item,i)=><React.Fragment key={i}><ChevronRight size={12}/>{tr(item.to?<Link to={item.to}>{tr(item.label)}</Link>:<span aria-current="page">{tr(item.label)}</span>)}</React.Fragment>))}</nav>;}

function DemoNote(){return <p className="demo-note">{tr("Sélection de démonstration · Annonces, prix et visuels illustratifs, sans offre réelle.")}</p>;}

function EmptyState({title,text,onReset}){return <div className="empty-state"><Compass size={36} strokeWidth={1}/><h2>{tr(title)}</h2><p>{tr(text)}</p>{tr(onReset?<button className="button" onClick={onReset}>{tr("Réinitialiser les filtres ")}<ArrowRight size={16}/></button>:<ButtonLink to="/destinations">{tr("Explorer les destinations")}</ButtonLink>)}</div>;}
export {Photo,Link,ButtonLink,Eyebrow,Reveal,SectionTitle,Breadcrumb,DemoNote,EmptyState};
