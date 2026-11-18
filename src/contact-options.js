import {categoriesForDestination} from './services.js';

// Contact scope only: does not change catalogue destinations or property locations.
export const contactDestinations=['maroc','dubai'];
export function contactServicesForDestination(destination){
 const scope=contactDestinations.includes(destination)?destination:'';
 return categoriesForDestination(scope).flatMap(service=>[
  {value:service.subject,label:service.destinations?service.title:service.subject},
  ...(service.additionalContactSubjects||[]).map(subject=>({value:subject,label:subject}))
 ]);
}
export const isContactServiceAllowed=(destination,subject)=>contactDestinations.includes(destination)&&contactServicesForDestination(destination).some(service=>service.value===subject);
