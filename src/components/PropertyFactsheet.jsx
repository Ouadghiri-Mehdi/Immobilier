import React,{useEffect,useRef,useState} from 'react';
import {X} from 'lucide-react';
import {tr} from '../i18n/index.js';

function FactsheetModal({property,onClose}){
 const dialogRef=useRef(null);
 const closeRef=useRef(null);
 useEffect(()=>{
  const dialog=dialogRef.current;
  const previousFocus=document.activeElement;
  const previousOverflow=document.body.style.overflow;
  dialog.showModal();
  document.body.style.overflow='hidden';
  closeRef.current.focus();
  return()=>{
   if(dialog.open)dialog.close();
   document.body.style.overflow=previousOverflow;
   if(previousFocus?.isConnected)previousFocus.focus({preventScroll:true});
  };
 },[]);
 return <dialog ref={dialogRef} className="property-factsheet-modal" aria-label={tr('Fiche technique : {title}',{title:tr(property.title)})}
  onCancel={event=>{event.preventDefault();onClose();}}>
  <div className="property-factsheet-header">
   <h2>{tr('Fiche technique : {title}',{title:tr(property.title)})}</h2>
   <button ref={closeRef} type="button" className="icon-button" onClick={onClose} aria-label={tr('Fermer la fiche technique')}><X size={22}/></button>
  </div>
  <div className="property-factsheet-actions">
   <a className="button" href={property.pdf.src} download={property.pdf.filename}>{tr('Télécharger')}</a>
   <a className="text-link" href={property.pdf.src} target="_blank" rel="noopener noreferrer">{tr('Ouvrir dans un nouvel onglet')}</a>
  </div>
  {property.pdfNote&&<p className="property-factsheet-note">{tr(property.pdfNote)}</p>}
  <p className="property-factsheet-note">{tr('Si l’aperçu ne s’affiche pas, ouvrez ou téléchargez le document.')}</p>
  <object className="property-factsheet-preview" data={property.pdf.src} type="application/pdf" aria-label={tr('Aperçu de la fiche technique')}>
   <p>{tr('L’aperçu PDF n’est pas pris en charge. Utilisez les liens ci-dessus pour consulter le document.')}</p>
  </object>
 </dialog>;
}

export function PropertyFactsheet({property}){
 const [open,setOpen]=useState(false);
 if(!property.pdf?.src)return null;
 return <>
  <button type="button" className="button button-outline property-factsheet-trigger" aria-haspopup="dialog" onClick={()=>setOpen(true)}>{tr('Voir la fiche technique')}</button>
  {open&&<FactsheetModal property={property} onClose={()=>setOpen(false)}/>}
 </>;
}
