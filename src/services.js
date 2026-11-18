// Shared service definitions for navigation, contact choices and server validation.
export const categories=[
 {
  slug:'achat-vente',title:'Achat & vente',short:'Acheter & vendre',number:'01',image:'villa',
  intro:'Choisir une résidence, explorer un investissement ou préparer une vente.',
  description:'Villas, appartements et riads : comparez les adresses selon leur emplacement, leurs volumes et votre projet.',
  audience:'Pour les acquéreurs à la recherche d’un lieu de vie ou d’un investissement, et les propriétaires qui souhaitent vendre.',
  includes:['Définition des critères et du budget','Lecture des caractéristiques des biens','Préparation des questions et des prochaines étapes'],
  approach:'Un premier échange précise vos priorités. La recherche ou la présentation de votre bien est ensuite cadrée selon la mission convenue. Aucune performance financière n’est promise.',
  subject:'Achat immobilier',additionalContactSubjects:['Vente de mon bien'],action:'Décrire mon projet immobilier',
 },
 {
  slug:'location',title:'Location immobilière',short:'Louer',number:'02',image:'living',
  intro:'Mettre votre bien en location ou trouver un logement adapté.',
  description:'Vous souhaitez mettre votre bien en location ou trouver un logement ? Sarouty Properties accompagne les propriétaires et les locataires à chaque étape de leur projet.',
  audience:'Propriétaires et locataires, au Maroc et à Dubaï.',
  includes:[{title:'Pour les propriétaires',text:'Nous vous accompagnons dans la mise en location de votre bien et la recherche de locataires correspondant aux conditions définies ensemble.'},{title:'Pour les locataires',text:'Nous vous proposons des appartements, villas et autres biens selon vos besoins, votre localisation souhaitée et votre budget.'}],
  approach:'Présentez-nous votre bien ou votre recherche pour définir les prochaines étapes.',
  subject:'Location',action:'Parlons de votre projet locatif',
 },
 {
  slug:'locaux-professionnels',title:'Locaux professionnels',short:'Entreprendre',number:'03',image:'office',
  intro:'Relier votre activité à un emplacement et à un espace adaptés.',
  description:'Bureaux et locaux d’activité : examinez les surfaces, les accès et les usages envisagés.',
  audience:'Pour les entrepreneurs, indépendants et équipes qui préparent une implantation ou un changement de locaux.',
  includes:['Cadrage de l’activité et des besoins de surface','Repérage des emplacements et des accès','Identification des points techniques et d’usage à vérifier'],
  approach:'Votre activité et vos contraintes orientent la recherche. Les conditions d’occupation et l’adéquation du local sont à confirmer avant tout engagement.',
  subject:'Locaux professionnels',action:'Présenter mon besoin professionnel',
 },
 {
  slug:'decoration',title:'Décoration & aménagement',short:'Créer un intérieur',number:'04',image:'interior',
  intro:'Un intérieur adapté à vos usages.',
  description:'Sarouty Properties vous accompagne dans la décoration et l’aménagement de votre logement ou de votre espace professionnel, selon vos besoins, vos envies et votre budget.',
  audience:'Pour les propriétaires, occupants et professionnels qui souhaitent repenser un intérieur ou préciser son aménagement.',
  includes:['Comprendre vos usages et les contraintes du lieu.','Définir une ambiance, des couleurs et des matières.','Étudier l’organisation des espaces et les choix de mobilier selon le périmètre convenu.'],
  approach:'Présentez-nous le lieu concerné, vos attentes et votre budget. Un premier échange permettra de préciser vos priorités et l’accompagnement adapté à votre projet.',
  subject:'Décoration et aménagement',action:'Parlons de votre aménagement',
 },
 {
  slug:'hotels-appartements',title:'Hôtel & Appart Hôtel',short:'Acquérir un établissement',number:'05',image:'pool',destinations:['maroc'],
  intro:'Acquérir un hôtel, un appart’hôtel ou une maison d’hôtes au Maroc.',
  description:'Un accompagnement pour votre projet d’acquisition d’un hôtel, d’un appart’hôtel ou d’une maison d’hôtes au Maroc.',
  audience:'Pour les particuliers et investisseurs souhaitant acquérir un établissement hôtelier au Maroc.',
  includes:['Définition du type d’établissement, de la localisation et du budget.','Recherche et présentation d’opportunités adaptées.','Mise en relation et accompagnement dans les démarches d’acquisition.'],
  approach:'Les opportunités et les démarches d’acquisition se précisent avec l’agence, selon votre projet.',
  subject:'Projet hôtelier',action:'Parlons de votre projet hôtelier',
 },
];
export const categoriesForDestination=destination=>categories.filter(service=>!service.destinations||service.destinations.includes(destination));
