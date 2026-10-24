export const images = {
 maroc:'/assets/maroc-villa.jpg', dubai:'/assets/dubai-terrace.jpg', interior:'/assets/riad-interior.jpg',
 villa:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
 living:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
 apartment:'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85',
 pool:'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
 office:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85',
};
export const categories=[
 {
  slug:'achat-vente',title:'Achat & vente',short:'Acheter & vendre',number:'01',image:'villa',
  intro:'Choisir une résidence, explorer un investissement ou préparer une vente.',
  description:'Villas, appartements et riads : comparez les adresses selon leur emplacement, leurs volumes et votre projet.',
  audience:'Pour les acquéreurs à la recherche d’un lieu de vie ou d’un investissement, et les propriétaires qui souhaitent vendre.',
  includes:['Définition des critères et du budget','Lecture des caractéristiques des biens','Préparation des questions et des prochaines étapes'],
  approach:'Un premier échange précise vos priorités. La recherche ou la présentation de votre bien est ensuite cadrée selon la mission convenue. Aucune performance financière n’est promise.',
  subject:'Achat immobilier',action:'Décrire mon projet immobilier',
 },
 {
  slug:'location',title:'Location',short:'Louer',number:'02',image:'living',
  intro:'Trouver un logement adapté à votre quotidien et à votre calendrier.',
  description:'Explorez les logements par ville, budget et configuration pour préparer une recherche précise.',
  audience:'Pour les personnes qui préparent une installation ou recherchent une nouvelle résidence en location.',
  includes:['Précision de la durée et des critères de recherche','Comparaison des loyers et des équipements annoncés','Préparation d’une demande sur les logements retenus'],
  approach:'Vous indiquez votre destination, vos dates et vos besoins. Un échange permet de préciser les conditions à vérifier avant toute visite ou engagement.',
  subject:'Location',action:'Préciser ma recherche locative',
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
  intro:'Donner une direction à votre intérieur, des usages aux matières.',
  description:'Explorez des ambiances et des pistes d’aménagement pour clarifier votre projet intérieur.',
  audience:'Pour les propriétaires et occupants qui souhaitent repenser une pièce, une résidence ou un espace professionnel.',
  includes:['Échange sur les usages et les contraintes du lieu','Définition d’une ambiance et d’une palette','Pistes d’organisation des espaces selon la mission'],
  approach:'Vos envies et les possibilités du lieu servent de point de départ. Le livrable, le budget et le périmètre d’intervention sont définis ensemble ; les inspirations présentées ne sont pas des réalisations client.',
  subject:'Décoration et aménagement',action:'Parler de mon intérieur',
 },
 {
  slug:'hotels-appartements',title:'Hôtels & appartements',short:'Séjourner',number:'05',image:'pool',
  intro:'Découvrir un hébergement et préparer les bonnes questions pour votre séjour.',
  description:'Comparez les ambiances et les capacités, puis transmettez vos dates et vos préférences.',
  audience:'Pour les voyageurs qui préparent un séjour personnel ou professionnel au Maroc ou à Dubaï.',
  includes:['Recueil des dates et du nombre de voyageurs','Lecture des équipements et du tarif indicatif','Demande d’informations sur l’hébergement choisi'],
  approach:'Sélectionnez une fiche et indiquez vos dates dans le formulaire. Les disponibilités, le tarif et les conditions restent à confirmer lors de l’échange. Aucune réservation n’est effectuée sur le site.',
  subject:'Séjour',action:'Préparer ma demande de séjour',
 },
];
// Ajouter uniquement des partenaires autorisés et confirmés.
// Format : {id, name, description, logo: '/assets/...', validated: true}.
// Une entrée sans validation explicite n’est jamais affichée.
export const partners=[];
export const destinations={
 maroc:{name:'Maroc',label:'au Maroc',currency:'MAD',eyebrow:'LA BEAUTÉ D’UN ART DE VIVRE',headline:'Le temps de vivre.',description:'Des patios de Marrakech aux lignes contemporaines de Casablanca et Rabat, découvrez des lieux qui ont quelque chose à raconter.',cities:['Marrakech','Casablanca','Rabat'],image:'maroc',tone:'warm',editorial:'Lumière, matière, caractère.',text:'Une architecture ouverte sur les jardins, des matières vivantes, des villes aux rythmes singuliers. Au Maroc, chaque projet commence par un choix de vie.'},
 dubai:{name:'Dubaï',label:'à Dubaï',currency:'AED',eyebrow:'UNE AUTRE PERSPECTIVE',headline:'L’horizon vous appartient.',description:'De la vie urbaine de Downtown aux horizons de Palm Jumeirah, explorez une autre façon d’habiter, d’investir et de séjourner.',cities:['Dubai Marina','Downtown','Palm Jumeirah','Business Bay'],image:'dubai',tone:'cool',editorial:'L’espace des possibles.',text:'Perspectives urbaines, adresses en bord de mer et intérieurs ouverts sur l’horizon. Découvrez des lieux à choisir selon votre quotidien et vos projets.'}
};
const rows=[
 ['MAR-001','maroc','achat-vente','Villa aux lignes pures','Marrakech','Route de l’Ourika','Villa',6800000,320,4,'maroc',true],
 ['MAR-002','maroc','achat-vente','Un riad, mille détails','Marrakech','Médina','Riad',4200000,260,5,'interior',false],
 ['MAR-003','maroc','achat-vente','Une adresse côté jardin','Rabat','Souissi','Villa',8700000,420,4,'villa',false],
 ['MAR-004','maroc','location','L’élégance au quotidien','Casablanca','Anfa','Appartement',18000,165,3,'living',true],
 ['MAR-005','maroc','location','La douceur des terrasses','Marrakech','Guéliz','Appartement',12500,110,2,'apartment',false],
 ['MAR-006','maroc','locaux-professionnels','Une nouvelle perspective','Rabat','Agdal','Bureau',12000,95,0,'office',false],
 ['MAR-007','maroc','hotels-appartements','Une parenthèse en médina','Marrakech','Médina','Riad',2800,260,5,'interior',true],
 ['MAR-008','maroc','hotels-appartements','Le calme, côté piscine','Marrakech','Palmeraie','Villa',3900,240,3,'pool',false],
 ['DXB-001','dubai','achat-vente','L’horizon pour adresse','Dubai Marina','Marina Promenade','Appartement',3200000,145,2,'dubai',true],
 ['DXB-002','dubai','achat-vente','La lumière de Palm','Palm Jumeirah','The Crescent','Villa',12500000,410,4,'pool',false],
 ['DXB-003','dubai','achat-vente','L’élégance en hauteur','Downtown','Burj District','Appartement',2800000,130,2,'apartment',false],
 ['DXB-004','dubai','location','Habiter la skyline','Downtown','Boulevard','Appartement',18000,125,2,'living',true],
 ['DXB-005','dubai','location','L’océan au quotidien','Palm Jumeirah','West Beach','Appartement',24000,165,3,'dubai',false],
 ['DXB-006','dubai','locaux-professionnels','Un espace pour entreprendre','Business Bay','Marasi Drive','Bureau',16000,120,0,'office',false],
 ['DXB-007','dubai','hotels-appartements','Une parenthèse à Dubaï','Downtown','Downtown Dubai','Appartement',850,80,1,'apartment',true],
 ['DXB-008','dubai','hotels-appartements','Le privilège de l’horizon','Dubai Marina','Marina Waterfront','Appartement',1200,110,2,'dubai',false],
];
export const properties=rows.map(([id,destination,category,title,city,district,type,price,area,beds,image,featured])=>({
 id,destination,category,title,city,district,type,price,area,beds,image,featured,currency:destinations[destination].currency,
 unit:category==='hotels-appartements'?'nuit':category==='location'||category==='locaux-professionnels'?'mois':'',
 bathrooms:beds?Math.max(1,beds-1):1,
 photos:[images[image],images[category==='locaux-professionnels'?'office':destination==='maroc'?'interior':'apartment'],images[destination==='maroc'?'maroc':'dubai']],
 features:category==='locaux-professionnels'?['Espace de travail','Lumière naturelle','Accès urbain','Surface modulable']:['Espace lumineux','Terrasse ou espace extérieur','Pièces de vie ouvertes',type==='Villa'||type==='Riad'?'Jardin ou patio':'Vue dégagée'],
 description:category==='locaux-professionnels'?'Un espace professionnel illustratif, présenté pour imaginer votre prochaine implantation. Une fiche claire pour comparer l’emplacement, la surface et l’usage envisagé.':`Un lieu imaginé pour associer confort et caractère à ${city}. Les volumes, la lumière et l’environnement composent ici un exemple de présentation de bien.`,
 detail:'Cette annonce de démonstration montre le niveau de détail prévu pour les biens de l’agence. Les caractéristiques, prix, emplacements et disponibilités sont fictifs. Les photographies sont des ambiances et ne représentent pas une offre réelle.'
}));
export const projects=[
 {id:'INT-MAR-01',destination:'maroc',title:'Matières vivantes',type:'Résidence · Marrakech',image:'interior',text:'Une inspiration autour du tadelakt, du bois et des matières naturelles. Un intérieur ouvert sur un patio, où la lumière dessine les volumes.',palette:['#d9c7ac','#a87554','#72785a']},
 {id:'INT-MAR-02',destination:'maroc',title:'L’élégance essentielle',type:'Appartement · Casablanca',image:'living',text:'Des lignes épurées, des tons chauds et des espaces de vie qui se répondent. Une piste créative pour un quotidien plus fluide.',palette:['#e7dfcf','#807766','#393e34']},
 {id:'INT-DXB-01',destination:'dubai',title:'Horizon intérieur',type:'Appartement · Dubaï',image:'apartment',text:'Une inspiration contemporaine qui laisse la vue et la lumière guider le choix des matières et l’organisation des espaces.',palette:['#dedbd0','#6c7f83','#8f7859']},
 {id:'INT-DXB-02',destination:'dubai',title:'Une terrasse sur la ville',type:'Résidence · Dubaï',image:'dubai',text:'Un dialogue entre intérieur et extérieur, avec des matières minérales et des assises accueillantes pour prolonger le lieu de vie.',palette:['#d9d1bc','#a99b82','#38473e']}
];
export const steps=[['Vous écouter','Destination, budget, calendrier et priorités : le projet commence par vos attentes.'],['Sélectionner','Une sélection adaptée, des informations structurées et des critères faciles à comparer.'],['Explorer','Échanger sur les biens, préparer les visites et préciser les points à vérifier.'],['Vous accompagner','Coordonner les prochaines étapes selon la mission et les interlocuteurs concernés.']];
export const faqs=[['Puis-je rechercher un bien au Maroc et à Dubaï ?','Oui. Les deux destinations disposent des mêmes cinq rubriques, avec une sélection propre à chacune. Vous pouvez changer de destination à tout moment depuis le menu.'],['Comment obtenir des informations sur un bien ?','Depuis la fiche du bien, utilisez « Ce bien m’intéresse ». Sa référence est automatiquement reprise dans votre demande de contact.'],['Puis-je réserver un séjour sur le site ?','Le site permet de demander des informations et de préciser vos dates. Aucune réservation, confirmation de disponibilité ou transaction n’est effectuée en ligne.'],['Proposez-vous un accompagnement en décoration ?','Une rubrique dédiée présente les prestations envisagées et des inspirations. Le périmètre exact de l’accompagnement sera défini avec l’agence.']];
