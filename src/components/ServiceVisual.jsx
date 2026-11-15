import React from 'react';
import {tr} from '../i18n/index.js';
import {serviceMedia,serviceCompositions} from '../service-media';
import {Photo} from './ui';

export function ServicePhoto({media,className='',eager=false,sizes='(max-width: 760px) 90vw, 45vw',framing='default'}){
 if(!media)return null;
 const position=framing==='editorial'&&media.editorialPosition?media.editorialPosition:media.position;
 const style={'--service-position':position.desktop,'--service-position-mobile':position.mobile};
 if(media.crop){
  const c=media.crop;
  return <svg className={'service-media-image '+className} viewBox={`${c.x} ${c.y} ${c.width} ${c.height}`} preserveAspectRatio="xMidYMid slice" role="img" aria-label={tr(media.alt)} style={style}>
   <image href={media.src} width={c.imageWidth} height={c.imageHeight}/>
  </svg>;
 }
 return <Photo className={'service-media-image '+className} src={media.src} srcSet={media.srcSet} sizes={media.srcSet?sizes:undefined} width={media.width} height={media.height} alt={tr(media.alt)} style={style} fallbackSrc={null} eager={eager}/>;
}

export function ServiceVisual({service,destination='maroc',paired=false,framing='default'}){
 const composition=paired?serviceCompositions[service.slug]:null;
 if(composition)return <div className="service-visual service-visual--composition" style={{'--composition-ratio':`${composition.width} / ${composition.height}`}}>
  <ServicePhoto media={composition} sizes="(max-width: 980px) 90vw, 45vw"/>
  <div className="service-composition-labels"><span>{tr('Maroc')}</span><span>{tr('Dubaï')}</span></div>
 </div>;
 const media=serviceMedia[service.slug]||{};
 const countries=paired?['maroc','dubai']:[destination];
 const entries=countries.filter(country=>media[country]).map(country=>[country,media[country]]);
 return <div className={'service-visual'+(entries.length>1?' service-visual--pair':'')}>
  {entries.map(([country,item])=><figure key={country}>
   <ServicePhoto media={item} framing={framing} sizes={entries.length>1?'(max-width: 480px) 45vw, (max-width: 760px) 23vw, 25vw':undefined}/>
   <figcaption><span>{tr(country==='maroc'?'Maroc':'Dubaï')}</span></figcaption>
  </figure>)}
 </div>;
}
