import React from 'react';
import {tr} from '../i18n/index.js';
import {variantForPayment} from '../domain';
import {propertyPath,navigate} from '../routing';
import {Link} from './ui';
import {RentalRateMarker,RentalRateNote,PriceAmount,PriceConditions} from './property';

function CellValue({value,kind,from=false}){
 if(value==null)return <>—</>;
 if(kind==='sqft')return <>{from&&tr('projects.price.from')}{Array.isArray(value)?value.map(number=>tr(number)).join('–'):tr(value)} sq. ft.</>;
 if(kind==='area')return <>{from&&tr('projects.price.from')}{Array.isArray(value)?value.map(number=>tr(number)).join('–'):tr(value)} m²</>;
 return <>{tr(value)}</>;
}

export function PropertyVariants({property}){
 const variants=property.variants;
 if(!variants?.rows?.length)return null;
 return <section className="property-variants" aria-label={tr('Lots et types de biens')}>
  {property.paymentModes&&<div className="form-row"><label>{tr('nov18.azure.paymentMode')}<select value={property.selectedPaymentMode?.id||property.defaultPaymentMode} onChange={event=>navigate(propertyPath({...property,selectedPaymentMode:property.paymentModes.find(mode=>mode.id===event.target.value)}))}>{property.paymentModes.map(mode=><option key={mode.id} value={mode.id}>{tr(mode.label)}</option>)}</select></label></div>}
  <div className="property-variants-scroll" role="region" tabIndex={0} aria-label={tr('Lots et types de biens')}>
   <table>
    <caption>{tr('Lots et types de biens')}</caption>
    <thead><tr><th scope="col">{tr('Lot ou type')}</th>{variants.columns.map(column=><th key={column.key} scope="col">{tr(column.label)}</th>)}<th scope="col">{tr('Prix ou loyer')}</th><th scope="col">{tr('Votre sélection')}</th></tr></thead>
    <tbody>{variants.rows.map(original=>{
     const row=variantForPayment(property,original);
     const selected=property.selectedVariant?.id===row.id;
     return <tr key={row.id} className={selected?'is-selected':undefined}>
      <th scope="row">{tr(row.label)}</th>
      {variants.columns.map(column=><td key={column.key} data-label={tr(column.label)}><span><CellValue value={row[column.key]} kind={column.kind} from={property.variantPresentation&&row.areaFrom}/></span></td>)}
      <td className="variant-price-cell" data-label={tr('Prix ou loyer')}><div className="variant-price-content">{row.priceFrom&&Number.isFinite(row.price)&&<span className="variant-price-prefix">{tr(property.variantPricing?'projects.price.from':'Dès ')}</span>}<div className="price-line"><PriceAmount property={{...property,...row}} className="variant-price-amount"/>{Number.isFinite(row.price)&&row.unit&&<span className="price-unit">/ {tr(row.unit)}</span>}<RentalRateMarker property={property} price={row.price}/></div>{property.variantPricing&&(row.priceCondition||property.priceCondition)&&<PriceConditions text={row.priceCondition||property.priceCondition}/>}</div></td>
      <td className="variant-action-cell" data-label={tr('Votre sélection')}><span><Link to={propertyPath({...property,selectedVariant:row})} className="text-link" aria-current={selected?'true':undefined} aria-label={tr('Choisir {lot}',{lot:tr(row.label)})}>{tr(selected?'Sélectionné':property.projectProgramme?'projects.choose.type':'Choisir ce lot')}</Link></span></td>
     </tr>;
    })}</tbody>
   </table>
  </div>
  <RentalRateNote property={property} prices={variants.rows.map(row=>row.price)}/>
  {variants.note&&<p className="property-variants-note">{tr(variants.note)}</p>}
  {property.selectedVariant&&!property.defaultVariantId&&<Link className="text-link" to={propertyPath({...property,selectedVariant:null})}>{tr('Sélection générale')}</Link>}
 </section>;
}
