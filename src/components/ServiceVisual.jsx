import React from 'react';
import {tr} from '../i18n/index.js';
import {serviceMedia,mediaKindLabel} from '../service-media';
import {Photo} from './ui';

export function ServicePhoto({media,className='',eager=false,sizes='(max-width: 760px) 90vw, 45vw'}){
 if(!media)return null;
 const style={'--service-position':media.position.desktop,'--service-position-mobile':media.position.mobile};
 if(media.crop){
  const c=media.crop;
  return <svg className={'service-media-image '+className} viewBox={`${c.x} ${c.y} ${c.width} ${c.height}`} preserveAspectRatio="xMidYMid slice" role="img" aria-label={tr(media.alt)} style={style}>
   <image href={media.src} width={c.imageWidth} height={c.imageHeight}/>
  </svg>;
 }
 return <Photo className={'service-media-image '+className} src={media.src} srcSet={media.srcSet} sizes={media.srcSet?sizes:undefined} width={media.width} height={media.height} alt={tr(media.alt)} style={style} fallbackSrc={null} eager={eager}/>;
}

export function ServiceVisual({service,destination='maroc',paired=false}){
 const media=serviceMedia[service.slug]||{};
 const entries=paired?Object.entries(media):media[destination]?[[destination,media[destination]]]:[];
 return <div className={'service-visual'+(entries.length>1?' service-visual--pair':'')}>
  {entries.map(([country,item])=><figure key={country}>
   <ServicePhoto media={item} sizes={entries.length>1?'(max-width: 480px) 45vw, (max-width: 760px) 23vw, 23vw':undefined}/>
   <figcaption><span>{tr(country==='maroc'?'Maroc':'Dubaï')}</span><small>{tr(item.caption||mediaKindLabel(item.kind))}</small></figcaption>
  </figure>)}
 </div>;
}
