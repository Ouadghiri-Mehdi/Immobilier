import {tr} from '../i18n/index.js';
import React,{useState,useEffect,useRef} from 'react';
import {ArrowUpRight,Heart,Maximize2,BedDouble,ChevronLeft,ChevronRight,X} from 'lucide-react';
import {destinations} from '../data';
import {priceText} from '../domain';
import {useApp} from '../context';
import {Photo,Link,Reveal} from './ui';
function Favorite({property,className=''}){const {favorites,toggleFavorite}=useApp();const saved=favorites.includes(property.id);return <button className={`favorite ${saved?'is-saved':''} ${className}`} aria-label={tr("{value0} favoris : {value1}", {value0:tr(saved?'Retirer des':'Ajouter aux'), value1:tr(property.title)})} aria-pressed={saved} onClick={()=>toggleFavorite(property.id)}><Heart size={18} fill={saved?'currentColor':'none'}/></button>;}

function PropertyCard({property:p,index=0}){return <Reveal className="property-card" delay={Math.min(index%3*75,150)}><div className="property-photo"><Link to={'/bien/'+p.id} aria-label={tr("Découvrir {value0}", {value0:tr(p.title)})}><Photo src={p.photos[0]} alt={tr("Visuel illustratif : {value0}", {value0:tr(p.title)})}/><span className="property-photo-overlay"/><span className="property-discover">{tr("Découvrir le lieu ")}<ArrowUpRight size={17}/></span></Link><span className="property-badge">{tr(p.category==='achat-vente'?'À VENDRE':p.category==='location'?'À LOUER':p.category==='hotels-appartements'?'SÉJOUR':'PROFESSIONNEL')}</span><Favorite property={p}/></div><div className="property-info"><p className="property-location">{tr(destinations[p.destination].name)} <span>/</span> {tr(p.city)}</p><h3><Link to={'/bien/'+p.id}>{tr(p.title)}</Link></h3><div className="property-specs"><span>{tr(p.type)}</span><span><Maximize2 size={12}/>{tr(p.area)}{tr(" m²")}</span>{tr(p.beds>0&&<span><BedDouble size={13}/>{tr(p.beds)}{tr(" ch.")}</span>)}</div><div className="property-price"><span>{tr(priceText(p))}{tr(p.unit&&<small> / {tr(p.unit)}</small>)}</span><Link to={'/bien/'+p.id} aria-label={tr("Ouvrir {value0}", {value0:tr(p.title)})}><ArrowUpRight size={22}/></Link></div></div></Reveal>;}

function PropertyGrid({items}){return <div className="property-grid">{tr(items.map((p,i)=><PropertyCard property={p} index={i} key={p.id}/>))}</div>;}

function GalleryModal({photos,title,index,onClose}){const ref=useRef();const [current,setCurrent]=useState(index);const touch=useRef(null);const move=n=>setCurrent(v=>(v+n+photos.length)%photos.length);useEffect(()=>{const el=ref.current;const previousFocus=document.activeElement;el.showModal();const previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';const listener=e=>{
 if(['ArrowRight','ArrowLeft','Home','End'].includes(e.key))e.preventDefault();
 if(e.key==='ArrowRight')move(1);if(e.key==='ArrowLeft')move(-1);
 if(e.key==='Home')setCurrent(0);if(e.key==='End')setCurrent(photos.length-1);
};el.addEventListener('keydown',listener);return()=>{document.body.style.overflow=previousOverflow;el.removeEventListener('keydown',listener);el.close();if(previousFocus?.isConnected)previousFocus.focus({preventScroll:true});};},[]);return <dialog ref={ref} className="gallery-modal" aria-label={tr("Galerie : {value0}", {value0:tr(title)})} onClose={onClose} onCancel={onClose}><div className="gallery-top"><span>{tr(title)}</span><span aria-live="polite" aria-atomic="true">{tr(current+1)} / {tr(photos.length)}</span><button className="icon-button" onClick={onClose} aria-label={tr("Fermer la galerie")}><X/></button></div><div className="gallery-stage" onTouchStart={event=>{touch.current={x:event.touches[0].clientX,y:event.touches[0].clientY};}}
 onTouchCancel={()=>{touch.current=null;}}
 onTouchEnd={event=>{
  if(!touch.current)return;
  const deltaX=event.changedTouches[0].clientX-touch.current.x;
  const deltaY=event.changedTouches[0].clientY-touch.current.y;
  if(Math.abs(deltaX)>45&&Math.abs(deltaX)>Math.abs(deltaY))move(deltaX<0?1:-1);
  touch.current=null;
 }}><button className="gallery-prev" onClick={()=>move(-1)} aria-label={tr("Photo précédente")}><ChevronLeft/></button><Photo key={current} src={photos[current]} alt={tr("Vue illustrative {value0} de {value1}", {value0:tr(current+1), value1:tr(title)})} eager/><button className="gallery-next" onClick={()=>move(1)} aria-label={tr("Photo suivante")}><ChevronRight/></button></div><p className="gallery-disclaimer">{tr("Visuels d’ambiance · Annonce de démonstration")}</p><div className="gallery-thumbs">{tr(photos.map((photo,i)=><button key={i} className={i===current?'current':''} onClick={()=>setCurrent(i)} aria-label={tr("Afficher la photo {value0}", {value0:tr(i+1)})} aria-pressed={i===current}><Photo src={photo} alt=""/></button>))}</div></dialog>;}
export {Favorite,PropertyCard,PropertyGrid,GalleryModal};
