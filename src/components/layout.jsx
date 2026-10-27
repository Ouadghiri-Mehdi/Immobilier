import React,{useState,useEffect,useRef} from 'react';
import {ArrowUpRight,ChevronDown,Heart,Menu,X,MessageCircle,Check,Copy} from 'lucide-react';
import {categories,destinations,images} from '../data';
import {useApp} from '../context';
import {destPath,categoryPath} from '../routing';
import {Photo,Link,Eyebrow} from './ui';
function Logo({footer=false}){return <Link to="/" className={'logo '+(footer?'logo-footer':'')} aria-label="Sarouty, accueil"><img src="/assets/sarouty-logo.png" alt="Sarouty" width="1050" height="300" loading={footer?'lazy':'eager'}/></Link>;}

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
   <nav id="main-navigation" className={mobile?'main-nav mobile-open':'main-nav'} inert={compact&&!mobile} aria-label="Navigation principale">
    <Link to="/" className={route.path==='/'?'nav-active':''} onClick={close} aria-current={route.path==='/'?'page':undefined}>Accueil</Link>
    {Object.entries(destinations).map(([key,destination])=><div className="nav-destination" key={key}>
     <button id={'destination-trigger-'+key} className={route.path.includes('/'+key)?'nav-active':''} onClick={event=>toggle(key,event)} aria-expanded={open===key} aria-controls={compact?'mobile-menu-'+key:'destination-menu'}>
      {destination.name}<ChevronDown size={12} className={open===key?'rotated':''}/>
     </button>
     <div id={'mobile-menu-'+key} className={'mobile-submenu '+(compact&&open===key?'is-open':'')} inert={!compact||open!==key} aria-hidden={!compact||open!==key}>
      <div><Link to={destPath(key)} onClick={close}>Découvrir {destination.name}<ArrowUpRight size={15}/></Link>
       {categories.map(service=><Link key={service.slug} to={categoryPath(key,service.slug)} onClick={close}>{service.title}</Link>)}
      </div>
     </div>
    </div>)}
    <Link to="/services" onClick={close} className={route.path==='/services'?'nav-active':''} aria-current={route.path==='/services'?'page':undefined}>Nos services</Link>
    <Link to="/agence" onClick={close} className={route.path==='/agence'?'nav-active':''} aria-current={route.path==='/agence'?'page':undefined}>L’agence</Link>
    <Link to="/contact" onClick={close}>Contact</Link>
   </nav>
   <div className="header-actions">
    <Link to="/favoris" className="saved-link" aria-label={`Mes favoris, ${favorites.length} biens`}><Heart size={19}/>{favorites.length>0&&<span>{favorites.length}</span>}</Link>
    <Link to="/contact" className="header-contact">Votre projet <ArrowUpRight size={15}/></Link>
    <button className="mobile-toggle icon-button" aria-label={mobile?'Fermer le menu':'Ouvrir le menu'} aria-controls="main-navigation" aria-expanded={mobile} onClick={event=>{
     lastTrigger.current=event.currentTarget;setMobile(!mobile);setOpen(null);
    }}>{mobile?<X/>:<Menu/>}</button>
   </div>
  </div>
  <div id="destination-menu" className={'mega-menu '+(desktopOpen?'is-open':'')} inert={!desktopOpen} aria-hidden={!desktopOpen} aria-labelledby={'destination-trigger-'+lastDestination}>
   <div className="mega-copy"><Eyebrow>VOTRE DESTINATION</Eyebrow><h2>{destinations[lastDestination].name}<em>, à votre rythme.</em></h2><Link className="text-link" to={destPath(lastDestination)} onClick={close}>Explorer la destination <ArrowUpRight size={18}/></Link></div>
   <div className="mega-categories">{categories.map(service=><Link key={service.slug} to={categoryPath(lastDestination,service.slug)} onClick={close}><span>{service.number}</span>{service.title}<ArrowUpRight size={15}/></Link>)}</div>
   <Photo src={images[destinations[lastDestination].image]} alt={'Ambiance '+destinations[lastDestination].name}/>
  </div>
 </header>;
}

function Footer(){return <footer className="footer"><div className="footer-top"><div><Logo footer/><p>Des lieux. Une autre vie.</p></div><div><h3>Explorer</h3><Link to={destPath('maroc')}>Maroc</Link><Link to={destPath('dubai')}>Dubaï</Link><Link to="/favoris">Mes favoris</Link></div><div><h3>À vos côtés</h3><Link to="/services">Nos services</Link><Link to="/agence">L’agence & notre méthode</Link><Link to="/contact">Parlons de votre projet</Link></div><div className="footer-invite"><span>VOTRE PROCHAINE HISTOIRE</span><Link to="/contact">Commence ici.<ArrowUpRight size={23}/></Link></div></div><div className="footer-bottom"><span>© 2026 RIVAGE · Identité provisoire</span><p>Prototype · Biens, prix et images illustratifs</p><div><Link to="/mentions-legales">Mentions légales</Link><Link to="/confidentialite">Confidentialité</Link></div></div></footer>;}

function WhatsAppModal({message,onClose}){const ref=useRef();const [copied,setCopied]=useState(false);useEffect(()=>{const dialog=ref.current;const previousFocus=document.activeElement;const previousOverflow=document.body.style.overflow;dialog.showModal();document.body.style.overflow='hidden';return()=>{dialog.close();document.body.style.overflow=previousOverflow;if(previousFocus?.isConnected)previousFocus.focus({preventScroll:true});};},[]);return <dialog ref={ref} className="whatsapp-modal" onClose={onClose} onCancel={onClose} aria-labelledby="whatsapp-title"><button className="modal-close icon-button" onClick={onClose} aria-label="Fermer"><X size={20}/></button><span className="whatsapp-symbol"><MessageCircle size={28}/></span><Eyebrow>LE CONTACT, SIMPLEMENT</Eyebrow><h2 id="whatsapp-title">Parlons sur<br/><em>WhatsApp.</em></h2><p>Le numéro officiel de l’agence sera ajouté à la version finale. Voici le message qui sera proposé pour cet échange.</p><blockquote>{message}</blockquote><button className="button" onClick={async()=>{try{await navigator.clipboard.writeText(message);setCopied(true);}catch{setCopied(false);}}}>{copied?'Message copié':'Copier le message'}{copied?<Check size={17}/>:<Copy size={17}/>}</button><p className="form-note" role="status">{copied?'Vous pouvez conserver ce message pour votre demande.':'Aucun message n’est envoyé dans cet aperçu.'}</p></dialog>;}
export {Logo,Header,Footer,WhatsAppModal};
