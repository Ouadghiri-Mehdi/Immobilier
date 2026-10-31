import {tr} from '../i18n/index.js';
import React,{useState,useEffect,useRef} from 'react';
import {ArrowUpRight,ChevronDown,Heart,Menu,X,MessageCircle,Check,Copy} from 'lucide-react';
import {categories,destinations,images} from '../data';
import {useApp} from '../context';
import {destPath,categoryPath} from '../routing';
import {Photo,Link,Eyebrow} from './ui';
import {LanguageSwitch} from './LanguageSwitch';
function Logo({footer=false}){return <Link to="/" className={'logo '+(footer?'logo-footer':'')} aria-label={tr("Sarouty Properties, accueil")}><img src="/assets/sarouty-logo.png" alt={tr("Sarouty Properties")} width="1050" height="300" loading={footer?'lazy':'eager'}/></Link>;}

function Header({route}) {
 const {favorites}=useApp();
 const [open,setOpen]=useState(null);
 const [lastDestination,setLastDestination]=useState('dubai');
 const [mobile,setMobile]=useState(false);
 const [compact,setCompact]=useState(false);
 const [scrolled,setScrolled]=useState(window.scrollY>30);
 const ref=useRef();
 const lastTrigger=useRef();
 const immersive=route.path==='/'||/^\/destination\/[^/]+$/.test(route.path);
 const close=()=>{setOpen(null);setMobile(false);};
 useEffect(()=>close(),[route.path,route.params.toString()]);
 useEffect(()=>{
  const query=window.matchMedia('(max-width: 1000px)');
  const update=()=>{setCompact(query.matches);setOpen(null);setMobile(false);};
  update();query.addEventListener('change',update);
  return()=>query.removeEventListener('change',update);
 },[]);
 useEffect(()=>{
  const onScroll=()=>setScrolled(window.scrollY>30);
  window.addEventListener('scroll',onScroll,{passive:true});
  return()=>window.removeEventListener('scroll',onScroll);
 },[]);
 useEffect(()=>{
  const onKey=event=>{
   if(event.key==='Escape'&&(open||mobile)){close();lastTrigger.current?.focus();}
  };
  const onPointer=event=>{if(!ref.current?.contains(event.target))close();};
  document.addEventListener('keydown',onKey);
  document.addEventListener('pointerdown',onPointer);
  return()=>{document.removeEventListener('keydown',onKey);document.removeEventListener('pointerdown',onPointer);};
 },[open,mobile]);
 function toggle(destination,event){
  lastTrigger.current=event.currentTarget;
  setLastDestination(destination);
  setOpen(open===destination?null:destination);
 }
 const desktopOpen=Boolean(open)&&!compact;
 return <header ref={ref} className={`header ${immersive&&!scrolled&&!mobile&&!open?'on-hero':''} ${open?'has-menu':''}`} onBlur={event=>{
  if(!event.currentTarget.contains(event.relatedTarget))close();
 }}>
  <div className="header-inner"><Logo/>
   <nav id="main-navigation" className={mobile?'main-nav mobile-open':'main-nav'} inert={compact&&!mobile} aria-label={tr("Navigation principale")}>
    <Link to="/" className={route.path==='/'?'nav-active':''} onClick={close} aria-current={route.path==='/'?'page':undefined}>{tr("Accueil")}</Link>
    {tr(Object.entries(destinations).map(([key,destination])=><div className="nav-destination" key={key}>
     <button id={'destination-trigger-'+key} className={route.path.includes('/'+key)?'nav-active':''} onClick={event=>toggle(key,event)} aria-expanded={open===key} aria-controls={compact?'mobile-menu-'+key:'destination-menu'}>
      {tr(destination.name)}<ChevronDown size={12} className={open===key?'rotated':''}/>
     </button>
     <div id={'mobile-menu-'+key} className={'mobile-submenu '+(compact&&open===key?'is-open':'')} inert={!compact||open!==key} aria-hidden={!compact||open!==key}>
      <div><Link to={destPath(key)} onClick={close}>{tr("Découvrir ")}{tr(destination.name)}<ArrowUpRight size={15}/></Link>
       {tr(categories.map(service=><Link key={service.slug} to={categoryPath(key,service.slug)} onClick={close}>{tr(service.title)}</Link>))}
      </div>
     </div>
    </div>))}
    <Link to="/services" onClick={close} className={route.path==='/services'?'nav-active':''} aria-current={route.path==='/services'?'page':undefined}>{tr("Nos services")}</Link>
    <Link to="/agence" onClick={close} className={route.path==='/agence'?'nav-active':''} aria-current={route.path==='/agence'?'page':undefined}>{tr("L’agence")}</Link>
    <Link to="/contact" onClick={close}>{tr("Contact")}</Link>
    <LanguageSwitch className="language-switch-mobile"/>
   </nav>
   <div className="header-actions">
    <LanguageSwitch className="language-switch-header"/>
    <Link to="/favoris" className="saved-link" aria-label={tr("Mes favoris, {value0} biens", {value0:tr(favorites.length)})}><Heart size={19}/>{tr(favorites.length>0&&<span>{tr(favorites.length)}</span>)}</Link>
    <Link to="/contact" className="header-contact">{tr("Votre projet ")}<ArrowUpRight size={15}/></Link>
    <button className="mobile-toggle icon-button" aria-label={tr(mobile?'Fermer le menu':'Ouvrir le menu')} aria-controls="main-navigation" aria-expanded={mobile} onClick={event=>{
     lastTrigger.current=event.currentTarget;setMobile(!mobile);setOpen(null);
    }}>{tr(mobile?<X/>:<Menu/>)}</button>
   </div>
  </div>
  <div id="destination-menu" className={'mega-menu '+(desktopOpen?'is-open':'')} inert={!desktopOpen} aria-hidden={!desktopOpen} aria-labelledby={'destination-trigger-'+lastDestination}>
   <div className="mega-copy"><Eyebrow>{tr("VOTRE DESTINATION")}</Eyebrow><h2>{tr(destinations[lastDestination].name)}<em>{tr(", à votre rythme.")}</em></h2><Link className="text-link" to={destPath(lastDestination)} onClick={close}>{tr("Explorer la destination ")}<ArrowUpRight size={18}/></Link></div>
   <div className="mega-categories">{tr(categories.map(service=><Link key={service.slug} to={categoryPath(lastDestination,service.slug)} onClick={close}><span>{tr(service.number)}</span>{tr(service.title)}<ArrowUpRight size={15}/></Link>))}</div>
   <Photo src={images[destinations[lastDestination].image]} alt={tr("Ambiance {value0}", {value0:tr(destinations[lastDestination].name)})}/>
  </div>
 </header>;
}

function FooterSocials(){return <div className="footer-socials" role="group" aria-label={tr('Réseaux sociaux')}>
 <a href="https://www.facebook.com/share/1Ga2ji9Zty/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label={tr('Sarouty Properties sur Facebook (nouvel onglet)')}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M13.5 22v-9h3l.5-3.5h-3.5v-2c0-1 .3-1.5 1.6-1.5H17V2.9c-.8-.1-1.6-.2-2.5-.2-2.5 0-4 1.5-4 4.2v2.6H7.5V13h3v9z"/></svg></a>
 <a href="https://www.instagram.com/sarouty_real_estate/" target="_blank" rel="noopener noreferrer" aria-label={tr('Sarouty Properties sur Instagram (nouvel onglet)')}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
</div>;}

function Footer(){return <footer className="footer"><div className="footer-top"><div><Logo footer/><div className="footer-brand-copy"><p>{tr("Des lieux. Une autre vie.")}</p><FooterSocials/></div></div><div><h3>{tr("Explorer")}</h3><Link to={destPath('maroc')}>{tr("Maroc")}</Link><Link to={destPath('dubai')}>{tr("Dubaï")}</Link><Link to="/favoris">{tr("Mes favoris")}</Link></div><div><h3>{tr("À vos côtés")}</h3><Link to="/services">{tr("Nos services")}</Link><Link to="/agence">{tr("L’agence & notre méthode")}</Link><Link to="/contact">{tr("Parlons de votre projet")}</Link></div><div className="footer-invite"><span>{tr("VOTRE PROCHAINE HISTOIRE")}</span><Link to="/contact">{tr("Commence ici.")}<ArrowUpRight size={23}/></Link></div></div><div className="footer-bottom"><span>{tr("© 2026 Sarouty Properties")}</span><p>{tr("Prototype · Biens, prix et images illustratifs")}</p><div><Link to="/mentions-legales">{tr("Mentions légales")}</Link><Link to="/confidentialite">{tr("Confidentialité")}</Link></div></div></footer>;}

function WhatsAppModal({message,onClose}){const ref=useRef();const [copied,setCopied]=useState(false);useEffect(()=>{const dialog=ref.current;const previousFocus=document.activeElement;const previousOverflow=document.body.style.overflow;dialog.showModal();document.body.style.overflow='hidden';return()=>{dialog.close();document.body.style.overflow=previousOverflow;if(previousFocus?.isConnected)previousFocus.focus({preventScroll:true});};},[]);return <dialog ref={ref} className="whatsapp-modal" onClose={onClose} onCancel={onClose} aria-labelledby="whatsapp-title"><button className="modal-close icon-button" onClick={onClose} aria-label={tr("Fermer")}><X size={20}/></button><span className="whatsapp-symbol"><MessageCircle size={28}/></span><Eyebrow>{tr("LE CONTACT, SIMPLEMENT")}</Eyebrow><h2 id="whatsapp-title">{tr("Parlons sur")}<br/><em>{tr("WhatsApp.")}</em></h2><p>{tr("Le numéro officiel de l’agence sera ajouté à la version finale. Voici le message qui sera proposé pour cet échange.")}</p><blockquote>{tr(message)}</blockquote><button className="button" onClick={async()=>{try{await navigator.clipboard.writeText(message);setCopied(true);}catch{setCopied(false);}}}>{tr(copied?'Message copié':'Copier le message')}{tr(copied?<Check size={17}/>:<Copy size={17}/>)}</button><p className="form-note" role="status">{tr(copied?'Vous pouvez conserver ce message pour votre demande.':'Aucun message n’est envoyé dans cet aperçu.')}</p></dialog>;}
export {Logo,Header,Footer,WhatsAppModal};
