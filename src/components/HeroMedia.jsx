import React, {useEffect, useState} from 'react';
import {heroMediaConfig} from '../config';

export function HeroMedia({config=heroMediaConfig}) {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState({});
  const [failed, setFailed] = useState({});
  const [reduced, setReduced] = useState(true);
  const [visible, setVisible] = useState(true);
  const slides = config.slides;
  const ready = slides.every((_, index)=>loaded[index] && !failed[index]);
  const displayed = failed[active]?slides.findIndex((_, index)=>loaded[index] && !failed[index]):active;
  useEffect(()=>{
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = ()=>setReduced(motion.matches);
    const visibility = ()=>setVisible(!document.hidden);
    update(); visibility();
    motion.addEventListener('change', update);
    document.addEventListener('visibilitychange', visibility);
    return ()=>{
      motion.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, []);
  useEffect(()=>{
    if(!ready || reduced || !visible)return;
    const timer = window.setInterval(()=>setActive(index=>(index+1)%slides.length), config.intervalMs);
    return ()=>window.clearInterval(timer);
  }, [ready, reduced, visible, active, slides.length, config.intervalMs]);
  function fail(index) {
    setFailed(previous=>({...previous, [index]:true}));
  }
  return <div className="hero-media" style={{'--hero-fade':(ready?config.fadeMs:0)+'ms'}}>
    {failed[0] && (!loaded[1] || failed[1]) && <img className="hero-poster hero-fallback" src={config.poster} alt={config.posterAlt}/>}
    {slides.map((slide, index)=><img key={slide.src}
      className={'hero-poster hero-slide '+(index===0?'hero-slide-base':'')+(displayed===index?' is-active':'')}
      style={{'--hero-position':slide.position.desktop, '--hero-position-mobile':slide.position.mobile,
        visibility:failed[index]?'hidden':undefined}}
      src={slide.src} alt={slide.alt} aria-hidden={displayed!==index}
      loading="eager" fetchPriority={index===0?'high':'low'} decoding="async"
      onLoad={()=>{
        setLoaded(previous=>({...previous, [index]:true}));
      }} onError={()=>fail(index)}/>)}
    <div className="hero-slideshow-controls" role="group" aria-label="Images de l’accueil">
      {slides.map((slide, index)=><button key={slide.src} type="button" className="hero-slide-indicator"
        aria-label={'Afficher '+slide.label+(failed[index]?' — image indisponible':'')}
        aria-pressed={displayed===index} disabled={Boolean(failed[index]) || (index!==displayed && !loaded[index])}
        onClick={()=>setActive(index)}><span aria-hidden="true"/></button>)}
    </div>
  </div>;
}
