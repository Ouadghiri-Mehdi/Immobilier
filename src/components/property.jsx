import {tr} from '../i18n/index.js';
import React,{useState,useEffect,useRef} from 'react';
import {ArrowUpRight,Heart,Maximize2,BedDouble,ChevronLeft,ChevronRight,X} from 'lucide-react';
import {propertyDestinations as destinations,isPublicProperty} from '../data';
import {priceText,hasRentalRate} from '../domain';
import {useApp} from '../context';
import {Photo,Link,Reveal} from './ui';
function Favorite({property,className=''}){const {favorites,toggleFavorite}=useApp();const saved=favorites.includes(property.id);if(!isPublicProperty(property)&&!saved)return null;return <button className={`favorite ${saved?'is-saved':''} ${className}`} aria-label={tr("{value0} favoris : {value1}", {value0:tr(saved?'Retirer des':'Ajouter aux'), value1:tr(property.title)})} aria-pressed={saved} onClick={()=>toggleFavorite(property.id)}><Heart size={18} fill={saved?'currentColor':'none'}/></button>;}

function RentalRateMarker({property,price=property.price}){return hasRentalRate(property,price)?<span>*</span>:null;}
function RentalRateNote({property,prices=[property.price]}){return prices.some(price=>hasRentalRate(property,price))?<small className="rental-rate-note">{tr('* Tarif à vérifier en fonction de la saison.')}</small>:null;}
function PriceAmount({property,className='',suffix=''}){return <span className={'price-amount '+(Number.isFinite(property.price)?'price-amount--numeric ':'')+className}>{priceText(property)}{suffix}</span>;}
function PriceConditions({text,className='property-price-note'}){
 if(!text)return null;
 // Keep punctuation with the preceding word without changing the wording.
 const paragraphs=tr(text).replace(/\s+([:;!?])/g,'\u00a0$1').split(/(?<=[.!?])\s+(?=\p{Lu})/u);
 return <div className={className+' price-conditions'}>{paragraphs.map((paragraph,index)=><p key={index}>{paragraph}</p>)}</div>;
}
function DubaiSaleStatus({property}){return property.destination==='dubai'&&property.category==='achat-vente'&&property.isDemo===false&&!['off-plan','resale'].includes(property.saleMarket)?<p className="purchase-classification-note">{tr('Type de vente à confirmer auprès de l’agence.')}</p>:null;}

export function PropertyPhoto({property,index=0,detail=false,cover=false,...props}){const original=property.photoMedia?.[index];const image=cover?(original?.cardCover||original):original;return <Photo src={cover&&image?.src?image.src:property.photos[index]} {...(image?{srcSet:image.srcSet,sizes:detail?(index===0?'(max-width: 700px) 100vw, 65vw':'(max-width: 700px) 50vw, 35vw'):'(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) 45vw, 560px',width:image.width,height:image.height,className:detail?'project-detail-photo':cover?'project-card-photo':undefined,style:{...(cover?{width:'100%',height:'100%',display:'block',padding:0}:{}),objectFit:detail?(image.detailFit||'cover'):(cover?'cover':'contain'),'--project-card-position':image.cardPosition||image.position||'50% 50%','--project-card-position-mobile':image.cardPositionMobile||image.cardPosition||image.positionMobile||image.position||'50% 50%','--project-photo-position':image.position||'50% 50%','--project-photo-position-mobile':image.positionMobile||image.position||'50% 50%'}}:{})} {...props}/>;}

function PropertyCard({property:p,index=0}){return <Reveal className={"property-card"+(!p.photos.length?" property-card--no-media":"")} delay={Math.min(index%3*75,150)}>{p.photos.length>0?<div className={'property-photo'+(p.photoMedia?.[0]?' property-photo--project':'')}><Link to={'/bien/'+p.id} aria-label={tr("Découvrir {value0}", {value0:tr(p.title)})}><PropertyPhoto property={p} cover alt={p.mediaAlt?tr(p.mediaAlt):tr("Visuel illustratif : {value0}", {value0:tr(p.title)})} fallbackSrc={p.isDemo===false?null:undefined}/><span className="property-photo-overlay"/><span className="property-discover">{tr("Découvrir le lieu ")}<ArrowUpRight size={17}/></span></Link><span className="property-badge">{tr(p.status||(p.category==='achat-vente'?'À VENDRE':p.category==='location'?'À LOUER':p.category==='hotels-appartements'?'À VENDRE':'PROFESSIONNEL'))}</span><Favorite property={p}/></div>:<div className="property-card-summary"><span>{tr(p.status)}</span><Favorite property={p}/></div>}<div className="property-info"><p className="property-location">{p.locationLabel?tr(p.locationLabel):<>{tr(destinations[p.destination].name)}{p.city&&<> <span>/</span> {tr(p.city)}</>}</>}</p><h3><Link to={'/bien/'+p.id}>{tr(p.title)}</Link></h3><DubaiSaleStatus property={p}/>{(p.type||p.area!=null||p.beds>0)&&<div className="property-specs">{p.type&&<span>{tr(p.type)}</span>}{p.area!=null&&<span><Maximize2 size={12}/>{p.areaLabel&&<>{tr(p.areaLabel)} : </>}{p.areaFrom&&tr("projects.price.from")}{p.areaApproximate?'≈ ':''}{p.areaRange?p.areaRange.map(value=>tr(value)).join("–"):tr(p.area)}{tr(" m²")}{p.areaNote&&<> — {tr(p.areaNote)}</>}</span>}{tr(p.beds>0&&<span><BedDouble size={13}/>{tr(p.beds)}{tr(" ch.")}{p.bedsNote&&<> — {tr(p.bedsNote)}</>}</span>)}</div>}<div className="property-price"><div className="property-price-content">{p.priceFrom&&Number.isFinite(p.price)&&<span className="price-prefix">{tr(p.priceFromLabel||(p.variantPricing?"projects.price.from":"Dès "))}</span>}<div className="price-line"><PriceAmount property={p}/>{p.unit&&<small className="price-unit">/ {tr(p.unit)}</small>}<RentalRateMarker property={p}/></div><PriceConditions text={p.priceNote}/><RentalRateNote property={p}/></div><Link to={'/bien/'+p.id} aria-label={tr("Ouvrir {value0}", {value0:tr(p.title)})}><ArrowUpRight size={22}/></Link></div></div></Reveal>;}

function PropertyGrid({items}){return <div className="property-grid">{tr(items.filter(isPublicProperty).map((p,i)=><PropertyCard property={p} index={i} key={p.id}/>))}</div>;}

function PropertyVideo({property}){
 const videoRef=useRef(null);
 const visible=useRef(true);
 const attemptedVisiblePlayback=useRef(false);
 useEffect(()=>{
  if(!property.video.pauseWhenHidden)return;
  const video=videoRef.current;
  const observer=typeof IntersectionObserver!=='undefined'?new IntersectionObserver(([entry])=>{visible.current=entry.isIntersecting;if(!entry.isIntersecting)video.pause();else if(property.video.autoPlayWhenVisible&&!attemptedVisiblePlayback.current&&!document.hidden){attemptedVisiblePlayback.current=true;video.play().catch(()=>{});}}):null;
  observer?.observe(video);
  const pauseWhenHidden=()=>{if(document.hidden)video.pause();};
  document.addEventListener('visibilitychange',pauseWhenHidden);
  return()=>{observer?.disconnect();document.removeEventListener('visibilitychange',pauseWhenHidden);};
 },[property.video]);
 return <figure className="property-video">
  <video ref={videoRef} src={property.video.src} poster={property.video.poster||property.photos[0]} controls autoPlay muted playsInline preload="metadata"
   onPlay={event=>{if(property.video.pauseWhenHidden&&(!visible.current||document.hidden))event.currentTarget.pause();}}
   width={property.video.width} height={property.video.height} aria-label={tr(property.video.label||'Vidéo promotionnelle de {project}',{project:property.project||tr(property.title)})}/>
  {!property.videoWithGallery&&<figcaption><p>{tr(property.mediaNote)}</p>{property.mediaDiscrepancy&&<p className="property-media-discrepancy">{tr(property.mediaDiscrepancy)}</p>}</figcaption>}
 </figure>;
}

function PropertyMedia({property,onOpen}){
 return <div className={'property-media-gallery'+(property.video?'':' property-media-gallery--photos')}>
  <div className="property-media-photos">{property.photos.map((photo,index)=><button key={photo} type="button" onClick={()=>onOpen(index)} aria-label={tr('Ouvrir la photo {value0}',{value0:tr(index+1)})}><PropertyPhoto property={property} index={index} alt={tr(property.photoAlts?.[index]||property.mediaAlt)} fallbackSrc={null} eager={property.projectProgramme?index===0:true}/></button>)}</div>
  {property.video?<PropertyVideo property={property}/>:<p className="demo-note">{tr(property.mediaNote)}</p>}
 </div>;
}

function PropertyPrices({property}){
 const prices=property.pricing||property.offerTypes.map(option=>({...option,condition:option.type,priceFrom:true}));
 return <div className="property-pricing"><h3>{tr('Prix et conditions')}</h3>
  <dl>{prices.map(option=><div key={option.condition}><dt><PriceConditions text={option.condition} className="property-price-conditions"/></dt><dd>{option.priceFrom&&Number.isFinite(option.price)&&<span className="price-prefix">{tr('Dès ')}</span>}<div className="price-line"><PriceAmount property={{...property,price:option.price}}/>{option.priceMax!=null&&<span className="price-range-end">– <PriceAmount property={{...property,price:option.priceMax}}/></span>}<RentalRateMarker property={property} price={Number.isFinite(option.priceMax)?option.priceMax:option.price}/></div></dd></div>)}</dl>
  <RentalRateNote property={property} prices={prices.flatMap(option=>[option.price,option.priceMax])}/>
  {property.pricingNote&&<PriceConditions text={property.pricingNote}/>}
 </div>;
}

function PropertyOfferTypes({property}){
 return <div className="property-offer-types">{property.offerTypes.map(option=>{const [prefix,suffix]=tr('Prix annoncé à partir de {price}.').split('{price}');return <section key={option.type}>
  <h3>{tr(option.type)}</h3>
  <p>{tr('Surface à partir de {sqft} sq. ft., soit environ {area} m².',{sqft:tr(option.areaSqFtFrom),area:tr(option.areaFrom)})}</p>
  <p className="offer-type-price"><span className="price-prefix">{prefix}</span><PriceAmount property={{...property,price:option.price}} suffix={suffix}/><RentalRateMarker property={property} price={option.price}/></p>
  {option.features?.length>0&&<ul className="amenities">{option.features.map(feature=><li key={feature}>{tr(feature)}</li>)}</ul>}
 </section>;})}<RentalRateNote property={property} prices={property.offerTypes.map(option=>option.price)}/></div>;
}

function GalleryModal({photos,title,index,onClose,mediaNote,photoAlts}){const ref=useRef();const [current,setCurrent]=useState(index);const touch=useRef(null);const move=n=>setCurrent(v=>(v+n+photos.length)%photos.length);useEffect(()=>{const el=ref.current;const previousFocus=document.activeElement;el.showModal();const previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';const listener=e=>{
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
 }}><button className="gallery-prev" onClick={()=>move(-1)} aria-label={tr("Photo précédente")}><ChevronLeft/></button><Photo key={current} src={photos[current]} alt={photoAlts?.[current]?tr(photoAlts[current]):tr("Vue illustrative {value0} de {value1}", {value0:tr(current+1), value1:tr(title)})} fallbackSrc={mediaNote?null:undefined} eager/><button className="gallery-next" onClick={()=>move(1)} aria-label={tr("Photo suivante")}><ChevronRight/></button></div><p className="gallery-disclaimer">{tr(mediaNote||"Visuels d’ambiance · Annonce de démonstration")}</p><div className="gallery-thumbs">{tr(photos.map((photo,i)=><button key={i} className={i===current?'current':''} onClick={()=>setCurrent(i)} aria-label={tr("Afficher la photo {value0}", {value0:tr(i+1)})} aria-pressed={i===current}><Photo src={photo} alt=""/></button>))}</div></dialog>;}
export {PriceAmount,PriceConditions,Favorite,PropertyCard,PropertyGrid,GalleryModal,PropertyVideo,PropertyPrices,PropertyMedia,PropertyOfferTypes,RentalRateNote,RentalRateMarker,DubaiSaleStatus};
