// Separate from the two main destinations: these entries never create home cards.
export const additionalEmirates={
 'ras-al-khaimah':{name:'Ras Al Khaimah',label:'à Ras Al Khaimah',currency:'AED'},
 ajman:{name:'Ajman',label:'à Ajman',currency:'AED'},
 fujairah:{name:'Fujairah',label:'à Fujairah',currency:'AED'},
};
export const propertyLocationName=key=>({maroc:'Maroc',dubai:'Dubaï',...Object.fromEntries(Object.entries(additionalEmirates).map(([id,value])=>[id,value.name]))}[key]||'À définir ensemble');
export const emiratePath=key=>'/emirats'+(key?'/'+key:'');
