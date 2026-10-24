import React, {useEffect, useRef, useState} from 'react';
import {Pause, Play} from 'lucide-react';
import {heroMediaConfig} from '../config';

// Le poster est indépendant de la vidéo : il reste affiché pendant son chargement
// et en cas d’échec. Les sources ne sont ajoutées qu’après le premier rendu.
export function HeroMedia({config=heroMediaConfig}) {
  const [preferences, setPreferences] = useState({ready:false, reduced:true, mobile:false, saveData:false});
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = window.matchMedia('(max-width: 760px)');
    const connection = navigator.connection;
    const update = () => setPreferences({ready:true, reduced:motion.matches, mobile:mobile.matches, saveData:Boolean(connection?.saveData)});
    update();
    motion.addEventListener('change', update);
    mobile.addEventListener('change', update);
    connection?.addEventListener('change', update);
    return () => {
      motion.removeEventListener('change', update);
      mobile.removeEventListener('change', update);
      connection?.removeEventListener('change', update);
    };
  }, []);
  const sources = config.video[preferences.mobile?'mobile':'desktop'];
  const enabled = preferences.ready && !preferences.reduced && !preferences.saveData && sources.length>0;
  return <div className="hero-media">
    <img className="hero-poster" src={config.poster} alt={config.posterAlt} loading="eager" fetchPriority="high" decoding="async"/>
    {enabled && <HeroVideo key={sources.map(source=>source.src).join('|')} sources={sources} poster={config.poster}/>}
  </div>;
}

function HeroVideo({sources, poster}) {
  const videoRef = useRef(null);
  const failedSources = useRef(new Set());
  const [mounted, setMounted] = useState(false);
  const [hasFrame, setHasFrame] = useState(false);
  const [status, setStatus] = useState('loading');
  useEffect(() => {
    // Ne pas concurrencer le premier affichage du texte et du poster.
    if(window.requestIdleCallback){
      const idle = window.requestIdleCallback(()=>setMounted(true), {timeout:1800});
      return ()=>window.cancelIdleCallback(idle);
    }
    const frame = requestAnimationFrame(()=>setMounted(true));
    return ()=>cancelAnimationFrame(frame);
  }, []);
  useEffect(() => {
    if(!mounted)return;
    let active = true;
    const video = videoRef.current;
    video.defaultMuted = true;
    video.muted = true;
    try {
      Promise.resolve(video.play()).catch(()=>{
        if(active){setHasFrame(false);setStatus('blocked');}
      });
    } catch {
      setHasFrame(false);setStatus('blocked');
    }
    return ()=>{active=false;video.pause();};
  }, [mounted]);
  const fail = () => {setHasFrame(false);setStatus('error');};
  async function toggle() {
    const video = videoRef.current;
    if(status==='playing'){
      video.pause();
      setStatus('paused');
    } else {
      try {await video.play();}
      catch {setHasFrame(false);setStatus('blocked');}
    }
  }
  if(!mounted)return null;
  return <>
    <video ref={videoRef} className={'hero-video '+(hasFrame?'has-frame':'')} poster={poster}
      autoPlay muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1}
      onPlaying={()=>{setHasFrame(true);setStatus('playing');}}
      onPause={()=>setStatus(previous=>previous==='playing'?'paused':previous)} onError={fail}>
      {sources.map(source=><source key={source.src} src={source.src} type={source.type} onError={()=>{
        failedSources.current.add(source.src);
        if(failedSources.current.size===sources.length)fail();
      }}/>) }
    </video>
    {hasFrame && <button type="button" className="hero-video-control" onClick={toggle}
      aria-label={status==='playing'?'Mettre en pause la vidéo d’arrière-plan':'Reprendre la vidéo d’arrière-plan'}>
      {status==='playing'?<Pause size={16} aria-hidden="true"/>:<Play size={16} aria-hidden="true"/>}
      <span>{status==='playing'?'Pause vidéo':'Reprendre la vidéo'}</span>
    </button>}
  </>;
}
