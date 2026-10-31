import React from 'react';
import {tr,useLanguage,setLanguage} from '../i18n/index.js';

export function LanguageSwitch({className=''}){
 const language=useLanguage();
 return <div className={'language-switch '+className} role="group" aria-label={tr('Langue du site')}>
  <button type="button" lang="fr" aria-label="Français" aria-pressed={language==='fr'} onClick={()=>setLanguage('fr')}>FR</button>
  <span aria-hidden="true">|</span>
  <button type="button" lang="en" aria-label="English" aria-pressed={language==='en'} onClick={()=>setLanguage('en')}>EN</button>
 </div>;
}
