import React from 'react';
import {tr} from '../i18n/index.js';
import {priceText} from '../domain';
import {propertyPath} from '../routing';
import {Link} from './ui';
import {RentalRateMarker,RentalRateNote} from './property';

function CellValue({value,kind}){
 if(value==null)return <>—</>;
 if(kind==='area')return <>{Array.isArray(value)?value.map(number=>tr(number)).join('–'):tr(value)} m²</>;
 return <>{tr(value)}</>;
}

export function PropertyVariants({property}){
 const variants=property.variants;
 if(!variants?.rows?.length)return null;
 return <section className="property-variants" aria-label={tr('Lots et types de biens')}>
  <div className="property-variants-scroll" role="region" tabIndex={0} aria-label={tr('Lots et types de biens')}>
   <table>
    <caption>{tr('Lots et types de biens')}</caption>
    <thead><tr><th scope="col">{tr('Lot ou type')}</th>{variants.columns.map(column=><th key={column.key} scope="col">{tr(column.label)}</th>)}<th scope="col">{tr('Prix ou loyer')}</th><th scope="col">{tr('Votre sélection')}</th></tr></thead>
    <tbody>{variants.rows.map(row=>{
     const selected=property.selectedVariant?.id===row.id;
     return <tr key={row.id} className={selected?'is-selected':undefined}>
      <th scope="row">{tr(row.label)}</th>
      {variants.columns.map(column=><td key={column.key} data-label={tr(column.label)}><span><CellValue value={row[column.key]} kind={column.kind}/></span></td>)}
      <td data-label={tr('Prix ou loyer')}><span>{row.priceFrom&&tr('Dès ')}{priceText({...property,...row})}{Number.isFinite(row.price)&&row.unit&&<> / {tr(row.unit)}</>}<RentalRateMarker property={property} price={row.price}/></span></td>
      <td data-label={tr('Votre sélection')}><span><Link to={propertyPath({...property,selectedVariant:row})} className="text-link" aria-current={selected?'true':undefined} aria-label={tr('Choisir {lot}',{lot:tr(row.label)})}>{tr(selected?'Sélectionné':'Choisir ce lot')}</Link></span></td>
     </tr>;
    })}</tbody>
   </table>
  </div>
  <RentalRateNote property={property} prices={variants.rows.map(row=>row.price)}/>
  {variants.note&&<p className="property-variants-note">{tr(variants.note)}</p>}
  {property.selectedVariant&&<Link className="text-link" to={propertyPath({...property,selectedVariant:null})}>{tr('Sélection générale')}</Link>}
 </section>;
}
