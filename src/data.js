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
  slug:'hotels-appartements',title:'Hôtel & Appart’Hôtel',short:'Acquérir un établissement',number:'05',image:'pool',destinations:['maroc'],
  intro:'Acquérir un hôtel, un appart’hôtel ou une maison d’hôtes au Maroc.',
  description:'Un accompagnement pour votre projet d’acquisition d’un hôtel, d’un appart’hôtel ou d’une maison d’hôtes au Maroc.',
  audience:'Pour les particuliers et investisseurs souhaitant acquérir un établissement hôtelier au Maroc.',
  includes:['Définition du type d’établissement, de la localisation et du budget.','Recherche et présentation d’opportunités adaptées.','Mise en relation et accompagnement dans les démarches d’acquisition.'],
  approach:'Les opportunités et les démarches d’acquisition se précisent avec l’agence, selon votre projet.',
  subject:'Projet hôtelier',action:'Parlons de votre projet hôtelier',
 },
];
export const categoriesForDestination=destination=>categories.filter(service=>!service.destinations||service.destinations.includes(destination));
export const dubaiPurchaseTypes=[
 {id:'off-plan',slug:'sur-plan',title:'Achat sur plan',description:'Découvrez les programmes et biens proposés à l’achat avant leur livraison.',image:'/assets/hero/hero-dubai.jpeg',alt:'Illustration architecturale de Dubaï pour l’achat sur plan'},
 {id:'resale',slug:'marche-secondaire',title:'Marché secondaire',description:'Explorez les biens proposés à la revente sur le marché immobilier de Dubaï.',image:'/assets/dubai-terrace.jpg',alt:'Illustration d’ambiance résidentielle à Dubaï pour le marché secondaire'},
];
// Les anciens exemples de séjour restent dans les données et les favoris enregistrés.
// Une offre hôtelière publiée doit explicitement porter sur une acquisition au Maroc.
export const isPublicProperty=property=>property.category!=='hotels-appartements'||(property.isDemo===false&&property.destination==='maroc'&&(property.transaction==='sale'||property.status==='À vendre')&&!property.unit);
// Ajouter uniquement des partenaires autorisés et confirmés.
// Format : {id, name, description, logo: '/assets/...', validated: true}.
// Une entrée sans validation explicite n’est jamais affichée.
// Partenaires et fichiers communiqués par le client. Un logo absent affiche le nom.
export const partners=[
 {id:'damac',name:'DAMAC',logo:'/assets/partners/damac.svg',logoMonochrome:true,logoWidth:180,logoHeight:40,validated:true},
 {id:'deca',name:'DECA Properties',validated:true},
 {id:'meraki',name:'Meraki Developers',logo:'/assets/partners/meraki.webp',logoMonochrome:true,logoWidth:180,logoHeight:52,validated:true},
 {id:'reportage',name:'Reportage',logo:'/assets/partners/reportage.svg',logoWidth:185,logoHeight:50,validated:true},
 {id:'ellington',name:'Ellington Properties',logo:'/assets/partners/ellington.png',logoWidth:180,logoHeight:70,validated:true},
 {id:'imtiaz',name:'Imtiaz Developments',logo:'/assets/partners/imtiaz.svg',logoWidth:160,logoHeight:56,validated:true},
 {id:'residence-affinities',name:'Résidence Affinities',logo:'/assets/partners/residence-affinities.png',logoWidth:120,logoHeight:88,validated:true},
 {id:'cgi',name:'CGI',logo:'/assets/partners/cgi.png',logoWidth:145,logoHeight:72,validated:true},
];
export const destinations={
 maroc:{name:'Maroc',label:'au Maroc',currency:'MAD',eyebrow:'LA BEAUTÉ D’UN ART DE VIVRE',headline:'Le temps de vivre.',description:'Des patios de Marrakech aux lignes contemporaines de Casablanca et Rabat, découvrez des lieux qui ont quelque chose à raconter.',cities:['Marrakech','Casablanca','Rabat'],image:'maroc',tone:'warm',editorial:'Lumière, matière, caractère.',text:'Une architecture ouverte sur les jardins, des matières vivantes, des villes aux rythmes singuliers. Au Maroc, chaque projet commence par un choix de vie.'},
 dubai:{name:'Dubaï',label:'à Dubaï',currency:'AED',eyebrow:'UNE AUTRE PERSPECTIVE',headline:'L’horizon vous appartient.',description:'De la vie urbaine de Downtown aux horizons de Palm Jumeirah, explorez une autre façon d’habiter et d’investir.',cities:['Dubai Marina','Downtown','Palm Jumeirah','Business Bay'],image:'dubai',tone:'cool',editorial:'L’espace des possibles.',text:'Perspectives urbaines, adresses en bord de mer et intérieurs ouverts sur l’horizon. Découvrez des lieux à choisir selon votre quotidien et vos projets.'}
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
// Offre réelle communiquée par l’agence. L’id est un slug technique, pas une référence d’unité.
properties.unshift({
 id:'oak-yard-residences',project:'Oak Yard Residences',isDemo:false,
 saleMarket:'unconfirmed',
 destination:'dubai',category:'achat-vente',
 title:'Oak Yard Residences',
 city:'JVC',district:'District 10',type:'Penthouse duplex',currency:'AED',
 price:6300000,priceFrom:true,priceNote:'Paiement comptant',unit:'',
 pricing:[
  {price:6300000,condition:'Paiement intégral comptant'},
  {price:7000000,condition:'Plan de paiement 20/80'},
 ],
 pricingNote:'Les échéances du plan 20/80 ne sont pas communiquées. Prix et conditions à confirmer auprès de l’agence.',
 area:524,areaSqFt:5645,areaApproximate:true,beds:3,bathrooms:3,featured:false,
 photos:['/assets/properties/oak-yard/oak-yard-residences-poster.jpg'],
 mediaAlt:'Image extraite de la vidéo promotionnelle d’Oak Yard Residences.',
 video:{src:'/assets/properties/oak-yard/oak-yard-residences.mp4',width:832,height:464},
 mediaNote:'Vidéo promotionnelle du projet : les rendus ne représentent pas des photos du chantier réel.',
 mediaDiscrepancy:'Le plan présenté dans la vidéo indique 5 616,30 sq. ft. / 521 m², contre les 5 645 sq. ft. / environ 524 m² annoncés pour cette offre. La correspondance du plan avec l’offre reste à confirmer.',
 availability:'Disponibilité sur demande',
 delivery:'Livraison prévisionnelle annoncée : décembre 2026.',
 features:[
  '3 chambres avec salles de bains privatives','Chambre de service',
  '2 cuisines et 2 salons','Piscine privée et grandes terrasses','Semi-meublé',
  '3 places de parking','Vues panoramiques annoncées à 180° sur Burj Khalifa et Burj Al Arab',
 ],
 description:'À JVC, District 10, ce penthouse duplex d’Oak Yard Residences est annoncé sur les deux derniers étages résidentiels. Sa surface annoncée est de 5 645 sq. ft., soit environ 524 m², répartis sur deux niveaux.',
 detail:'Trois chambres avec salles de bains privatives, une chambre de service, deux cuisines et deux salons composent ce bien semi-meublé, avec piscine privée, grandes terrasses et trois places de parking. Les vues annoncées à 180° portent sur Burj Khalifa et Burj Al Arab.',
});
properties.unshift({
 id:'lily-tower',project:'LILY TOWER',title:'LILY TOWER',isDemo:false,
 saleMarket:'unconfirmed',
 destination:'dubai',category:'achat-vente',price:null,featured:false,
 photos:['/assets/properties/lily-tower/lily-tower-poster.jpg'],
 mediaAlt:'Image extraite de la vidéo promotionnelle transmise pour LILY TOWER.',
 video:{src:'/assets/properties/lily-tower/lily-tower.mp4',width:1920,height:1080},
 mediaNote:'Vidéo promotionnelle transmise pour LILY TOWER : les rendus ne représentent pas des photos du chantier réel. Les aménagements illustrés et leur rattachement à la phase 2 restent à confirmer.',
 availability:'Disponibilité à confirmer',
 description:'L’agence peut vous fournir les détails de la phase 2 de LILY TOWER et les modalités du plan de paiement après livraison.',
});
properties.unshift({
 id:'the-yards-plaza',project:'THE YARDS PLAZA',title:'THE YARDS PLAZA',isDemo:false,
 destination:'dubai',category:'locaux-professionnels',status:'À vendre',type:'Bureaux',
 city:'City of Arabia',locationLabel:'City of Arabia · Dubaï',currency:'AED',price:2850000,priceMax:7300000,priceFrom:true,
 area:123,areaRange:[123,296],areaSqFtRange:[1321,3186],areaApproximate:true,featured:false,
 photos:['/assets/properties/the-yards-plaza/the-yards-plaza-exterior-1.png'],
 mediaAlt:'Rendu promotionnel de THE YARDS PLAZA, vue extérieure aérienne.',
 video:{src:'/assets/properties/the-yards-plaza/the-yards-plaza.mp4',poster:'/assets/properties/the-yards-plaza/the-yards-plaza-video-poster.jpg',width:1024,height:576,pauseWhenHidden:true},
 mediaGallery:true,contactViaWhatsApp:true,
 mediaNote:'Visuels promotionnels de THE YARDS PLAZA : les rendus ne représentent pas des photos du chantier réel.',
 availability:'Disponibilité sur demande',
 delivery:'Livraison prévisionnelle annoncée : T3 2029.',
 pricing:[{price:2850000,priceMax:7300000,condition:'Fourchette de prix selon l’unité'}],
 pricingNote:'Plan de paiement annoncé : 40/60. Les échéances ne sont pas communiquées. Prix, conditions et disponibilités à confirmer auprès de l’agence.',
 description:'THE YARDS PLAZA est une collection de 272 bureaux à vendre à City of Arabia, Dubaï, proposée par le promoteur annoncé BEYOND. Le bâtiment comprend un rez-de-chaussée et six étages, avec une classification annoncée Grade A.',
 detail:'Les surfaces annoncées vont de 1 321 à 3 186 sq. ft., soit environ 123 à 296 m², pour des prix de 2 850 000 à 7 300 000 AED selon l’unité. La livraison est prévue en Shell & Core : des espaces bruts à aménager. Ces fourchettes décrivent le programme, sans attribuer un prix ou une surface identique à chaque bureau.',
 features:['Promoteur annoncé : BEYOND','Classification annoncée : Grade A','Rez-de-chaussée + 6 étages','Programme de 272 bureaux','Shell & Core — espaces bruts à aménager','Achat de plusieurs unités et combinaisons d’étages entiers possibles, sous réserve de confirmation auprès de l’agence'],
});
properties.unshift({
 id:'dlrc-commercial',title:'Bureaux et commerces à DLRC',isDemo:false,
 destination:'dubai',category:'locaux-professionnels',status:'À vendre',type:'Bureaux et commerces',
 city:'DLRC',locationLabel:'DLRC · Dubaï',currency:'AED',price:1446000,priceFrom:true,featured:false,
 photos:['/assets/properties/dlrc-commercial/dlrc-commercial-exterior-1.png'],
 mediaAlt:'Visuel promotionnel fourni pour l’offre de bureaux et commerces à DLRC.',
 mediaNote:'Visuel promotionnel fourni pour cette offre ; il ne représente pas une photo du chantier réel. Le rattachement du visuel à l’offre DLRC reste à confirmer.',
 mediaGallery:true,contactViaWhatsApp:true,
 availability:'Disponibilité sur demande',
 offerTypes:[
  {type:'Bureaux',areaFrom:83,areaSqFtFrom:896,price:1446000,features:['Vue sur la skyline']},
  {type:'Commerces',areaFrom:68,areaSqFtFrom:732,price:1804774},
 ],
 pricingNote:'Prix et disponibilité à confirmer auprès de l’agence.',
 description:'Découvrez une offre de bureaux et de commerces à vendre à DLRC, Dubaï. L’agence peut vous renseigner sur les unités proposées selon votre activité et votre budget.',
 detail:'Les surfaces minimales et les prix de départ sont annoncés séparément pour les bureaux et les commerces. Ils ne correspondent pas nécessairement à la même unité.',
});
properties.unshift({
 id:'dubai-islands-2-bedroom',title:'Appartement meublé de 2 chambres à Dubai Islands',isDemo:false,
 saleMarket:'unconfirmed',
 destination:'dubai',category:'achat-vente',status:'À vendre',type:'Appartement',
 city:'Dubai Islands',locationLabel:'Dubai Islands · Dubaï',beds:2,
 currency:'AED',price:2000000,priceNote:'Paiement comptant',featured:false,
 pricing:[{price:2000000,condition:'Paiement intégral comptant'}],
 pricingNote:'Prix, disponibilité et livraison à confirmer auprès de l’agence.',
 photos:['/assets/properties/dubai-islands-2-bedroom/dubai-islands-2-bedroom-presentation-1.png'],
 mediaAlt:'Montage promotionnel fourni pour l’appartement à Dubai Islands, avec vues extérieures, intérieures et du quartier.',
 mediaNote:'Visuel promotionnel fourni pour cette offre : les rendus ne représentent pas des photos du chantier réel et ne permettent pas d’identifier précisément l’unité proposée.',
 mediaGallery:true,contactViaWhatsApp:true,
 availability:'Disponibilité sur demande',
 delivery:'Livraison prévisionnelle annoncée : T1 2027.',
 description:'À Dubai Islands, Dubaï, cet appartement de deux chambres est proposé à la vente entièrement meublé, avec un système domotique.',
 features:['Entièrement meublé','Système domotique'],
});
properties.unshift({
 id:'farah-salam-1050',reference:'1050',title:'Appartement familial à Farah Salam',isDemo:false,
 destination:'maroc',category:'achat-vente',status:'À vendre',type:'Appartement',
 city:'Casablanca',district:'Farah Salam, Oulfa',locationLabel:'Farah Salam · Oulfa · Casablanca',
 currency:'DH',price:1250000,area:100,beds:3,bathrooms:2,featured:false,contactViaWhatsApp:true,
 photos:[
  '/assets/properties/farah-salam-1050/farah-salam-1050-salon.jpg',
  '/assets/properties/farah-salam-1050/farah-salam-1050-cuisine.jpg',
  '/assets/properties/farah-salam-1050/farah-salam-1050-chambre.jpg',
  '/assets/properties/farah-salam-1050/farah-salam-1050-salle-de-bains.jpg',
 ],
 mediaAlt:'Double salon de l’appartement à Farah Salam',
 photoAlts:['Double salon de l’appartement à Farah Salam','Cuisine équipée de l’appartement à Farah Salam','Chambre de l’appartement à Farah Salam','Salle de bains de l’appartement à Farah Salam'],
 mediaNote:'Photographies extraites de la fiche technique du bien, référence 1050.',
 pdf:{src:'/assets/properties/farah-salam-1050/farah-salam-1050-fiche-technique.pdf',filename:'farah-salam-1050-fiche-technique.pdf'},
 pdfNote:'L’étage indiqué dans le document reste à confirmer auprès de l’agence.',
 description:'À Farah Salam, dans le quartier Oulfa à Casablanca, cet appartement familial de 100 m² comprend un double salon, trois chambres et deux salles de bains. Il dispose d’une cuisine équipée et d’une suite parentale avec dressing.',
 detail:'Une place de parking titrée et un box privatif de 8 m² complètent le bien. La résidence fermée et sécurisée dispose d’un concierge et d’un ascenseur.',
 features:['Double salon','Cuisine équipée','Suite parentale avec dressing','Place de parking titrée','Box privatif de 8 m²','Résidence fermée et sécurisée','Concierge','Ascenseur','Charges de syndic : 250 DH/mois'],
});
properties.unshift({
 id:'cfc-1047',reference:'1047',title:'Appartement meublé à Casablanca Finance City',isDemo:false,
 destination:'maroc',category:'location',status:'À louer',type:'Appartement',
 city:'Casablanca',district:'Casablanca Finance City',locationLabel:'Casablanca Finance City · Casablanca',
 currency:'DH',price:12000,unit:'mois',area:110,beds:2,bathrooms:1,featured:false,contactViaWhatsApp:true,
 photos:[
  '/assets/properties/cfc-1047/cfc-1047-salon.jpg',
  '/assets/properties/cfc-1047/cfc-1047-cuisine.jpg',
  '/assets/properties/cfc-1047/cfc-1047-chambre.jpg',
  '/assets/properties/cfc-1047/cfc-1047-salle-de-bains.jpg',
 ],
 mediaAlt:'Salon de l’appartement meublé à Casablanca Finance City',
 photoAlts:['Salon de l’appartement meublé à Casablanca Finance City','Cuisine de l’appartement à Casablanca Finance City','Chambre de l’appartement à Casablanca Finance City','Salle de bains de l’appartement à Casablanca Finance City'],
 mediaNote:'Photographies extraites de la fiche technique du bien, référence 1047.',
 pdf:{src:'/assets/properties/cfc-1047/cfc-1047-fiche-technique.pdf',filename:'cfc-1047-fiche-technique.pdf'},
 description:'À Casablanca Finance City, cet appartement de 110 m² est proposé à la location entièrement meublé, avec un grand salon et deux chambres.',
 detail:'La fiche annonce la proximité d’Anfa Park, du quartier d’affaires CFC, des commerces et des restaurants.',
 features:['Grand salon','Cuisine et espaces de rangement','Entièrement meublé','2e étage','1 place de parking'],
});
properties.unshift({
 id:'la-famille-francaise-1024',reference:'1024',title:'Appartement meublé à La Famille Française',isDemo:false,
 destination:'maroc',category:'achat-vente',status:'À vendre',type:'Appartement',
 city:'Casablanca',district:'La Famille Française',locationLabel:'La Famille Française · Casablanca',
 currency:'DH',price:1400000,area:84,beds:2,bathrooms:1,featured:false,contactViaWhatsApp:true,
 photos:[
  '/assets/properties/la-famille-francaise-1024/la-famille-francaise-1024-salon.jpg',
  '/assets/properties/la-famille-francaise-1024/la-famille-francaise-1024-chambre.jpg',
  '/assets/properties/la-famille-francaise-1024/la-famille-francaise-1024-cuisine.jpg',
  '/assets/properties/la-famille-francaise-1024/la-famille-francaise-1024-sejour.jpg',
 ],
 mediaAlt:'Salon de l’appartement à La Famille Française',
 photoAlts:['Salon de l’appartement à La Famille Française','Chambre de l’appartement à La Famille Française','Cuisine de l’appartement à La Famille Française','Second espace de vie de l’appartement à La Famille Française'],
 mediaNote:'Photographies extraites de la fiche technique du bien, référence 1024.',
 pdf:{src:'/assets/properties/la-famille-francaise-1024/la-famille-francaise-1024-fiche-technique.pdf',filename:'la-famille-francaise-1024-fiche-technique.pdf'},
 description:'À La Famille Française, à Casablanca, cet appartement de 84 m² est vendu entièrement meublé. Situé au 3e étage, il comprend deux chambres, un salon, un séjour et un hall d’entrée.',
 detail:'Le bien se situe entre les boulevards Abdelmoumen, Stendhal et Bir Anzarane, dans une résidence bien entretenue.',
 features:['Cuisine équipée','Grand balcon','Espaces de rangement','WC invités séparés','Accès au parking en sous-sol sur deux niveaux','Accès autorisé au toit-terrasse'],
});
properties.unshift({
 id:'corniche-1035',reference:'1035',title:'Appartement meublé avec vue mer — Boulevard de la Corniche',isDemo:false,
 destination:'maroc',category:'location',status:'À louer',type:'Appartement',
 city:'Casablanca',district:'Boulevard de la Corniche',locationLabel:'Boulevard de la Corniche · Casablanca',
 currency:'DH',price:23000,unit:'mois',area:160,beds:3,bathrooms:2,featured:false,contactViaWhatsApp:true,
 photos:[
  '/assets/properties/corniche-1035/corniche-1035-espace-de-vie.jpg',
  '/assets/properties/corniche-1035/corniche-1035-chambre.jpg',
  '/assets/properties/corniche-1035/corniche-1035-vue-mer.jpg',
 ],
 mediaAlt:'Espace de vie de l’appartement du Boulevard de la Corniche',
 photoAlts:['Espace de vie de l’appartement du Boulevard de la Corniche','Chambre de l’appartement du Boulevard de la Corniche','Vue sur la mer et la Mosquée Hassan II depuis l’appartement'],
 mediaNote:'Photographies extraites de la fiche technique du bien, référence 1035.',
 pdf:{src:'/assets/properties/corniche-1035/corniche-1035-fiche-technique.pdf',filename:'corniche-1035-fiche-technique.pdf'},
 description:'Sur le Boulevard de la Corniche à Casablanca, cet appartement haut standing de 160 m² est proposé à la location entièrement meublé et équipé. Situé au 2e étage, il offre une vue sur la mer et la Mosquée Hassan II.',
 detail:'La fiche annonce la proximité de Marina Shopping Mall, d’Aïn Diab, du centre-ville, des commerces et des restaurants.',
 features:['Grand salon et salle à manger','Cuisine entièrement équipée','Salle d’eau invités distincte','Résidence sécurisée avec ascenseur','2 places de parking'],
});
properties.unshift({
 id:'gauthier-1045',reference:'1045',title:'Appartement familial à Gauthier',isDemo:false,
 destination:'maroc',category:'location',status:'À louer',type:'Appartement',
 city:'Casablanca',district:'Gauthier',locationLabel:'Gauthier · Casablanca',
 currency:'DH',price:16000,unit:'mois',area:200,beds:3,bathrooms:3,featured:false,contactViaWhatsApp:true,
 photos:[
  '/assets/properties/gauthier-1045/gauthier-1045-espace-de-vie.jpg',
  '/assets/properties/gauthier-1045/gauthier-1045-chambre.jpg',
  '/assets/properties/gauthier-1045/gauthier-1045-cuisine.jpg',
  '/assets/properties/gauthier-1045/gauthier-1045-salle-de-bains.jpg',
 ],
 mediaAlt:'Grand espace de vie de l’appartement à Gauthier',
 photoAlts:['Grand espace de vie de l’appartement à Gauthier','Chambre de l’appartement à Gauthier','Cuisine de l’appartement à Gauthier','Salle de bains de l’appartement à Gauthier'],
 mediaNote:'Photographies extraites de la fiche technique du bien, référence 1045.',
 pdf:{src:'/assets/properties/gauthier-1045/gauthier-1045-fiche-technique.pdf',filename:'gauthier-1045-fiche-technique.pdf'},
 description:'À Gauthier, Casablanca, cet appartement haut standing de 200 m² est proposé à la location au 1er étage. Sa configuration familiale réunit un grand espace de vie, trois chambres et trois salles de bains.',
 detail:'Un espace dédié au personnel, une cuisine et des rangements complètent la distribution. La fiche annonce la proximité des commerces, restaurants, écoles, services et transports.',
 features:['Grand espace de vie','Espace dédié au personnel','Cuisine et espaces de rangement','1er étage','2 places de parking'],
});
properties.unshift({
 "id": "sidi-maarouf-1028",
 "reference": "1028",
 "title": "Appartement meublé à Sidi Maârouf",
 "category": "achat-vente",
 "status": "À vendre",
 "type": "Appartement",
 "district": "Sidi Maârouf",
 "locationLabel": "Sidi Maârouf · Casablanca",
 "price": 870000,
 "area": 87,
 "beds": 2,
 "bathrooms": 2,
 "description": "À Sidi Maârouf, cet appartement vendu entièrement meublé offre 87 m² de superficie totale, dont 84 m² habitables. Situé au troisième étage, il comprend un grand salon marocain, une salle à manger, deux chambres et deux salles de bains.",
 "detail": "La cuisine entièrement équipée donne accès au balcon. La climatisation et la résidence sécurisée complètent les prestations.",
 "features": [
  "Superficie totale : 87 m², dont 84 m² habitables",
  "3e étage",
  "Grand salon marocain et salle à manger",
  "Cuisine entièrement équipée avec accès au balcon",
  "Appartement vendu entièrement meublé",
  "Climatisation",
  "Résidence sécurisée"
 ],
 "destination": "maroc",
 "city": "Casablanca",
 "currency": "DH",
 "isDemo": false,
 "featured": false,
 "contactViaWhatsApp": true,
 "photos": [
  "/assets/properties/sidi-maarouf-1028/sidi-maarouf-1028-salon.jpg",
  "/assets/properties/sidi-maarouf-1028/sidi-maarouf-1028-chambre.jpg",
  "/assets/properties/sidi-maarouf-1028/sidi-maarouf-1028-cuisine.jpg",
  "/assets/properties/sidi-maarouf-1028/sidi-maarouf-1028-salle-de-bains.jpg"
 ],
 "photoAlts": [
  "Salon marocain de l’appartement à Sidi Maârouf",
  "Chambre de l’appartement à Sidi Maârouf",
  "Cuisine de l’appartement à Sidi Maârouf",
  "Salle de bains de l’appartement à Sidi Maârouf"
 ],
 "mediaAlt": "Salon marocain de l’appartement à Sidi Maârouf",
 "mediaNote": "Photographies extraites de la fiche technique du bien, référence 1028.",
 "pdf": {
  "src": "/assets/properties/sidi-maarouf-1028/sidi-maarouf-1028-fiche-technique.pdf",
  "filename": "sidi-maarouf-1028-fiche-technique.pdf"
 }
});
properties.unshift({
 "id": "boulevard-anfa-1032",
 "reference": "1032",
 "title": "Bureau sur le Boulevard d’Anfa",
 "category": "locaux-professionnels",
 "status": "À vendre",
 "type": "Bureau",
 "transaction": "sale",
 "district": "Boulevard d’Anfa",
 "locationLabel": "Boulevard d’Anfa · Casablanca",
 "price": 2100000,
 "area": 145,
 "description": "Sur le Boulevard d’Anfa, ce bureau de 145 m² se situe au quatrième étage d’un immeuble professionnel avec ascenseur. Son espace ouvert et modulable permet d’adapter l’aménagement aux besoins de l’activité.",
 "detail": "Lumineux et doté de sanitaires, il bénéficie d’une adresse centrale à Casablanca. Le bien ne dispose pas de place de parking.",
 "features": [
  "4e étage",
  "Immeuble professionnel avec ascenseur",
  "Open space et espaces de travail modulables",
  "Sanitaires",
  "Bonne luminosité",
  "Aucune place de parking"
 ],
 "destination": "maroc",
 "city": "Casablanca",
 "currency": "DH",
 "isDemo": false,
 "featured": false,
 "contactViaWhatsApp": true,
 "photos": [
  "/assets/properties/boulevard-anfa-1032/boulevard-anfa-1032-espace-principal.jpg",
  "/assets/properties/boulevard-anfa-1032/boulevard-anfa-1032-espace-modulable.jpg",
  "/assets/properties/boulevard-anfa-1032/boulevard-anfa-1032-espace-travail.jpg",
  "/assets/properties/boulevard-anfa-1032/boulevard-anfa-1032-circulation.jpg"
 ],
 "photoAlts": [
  "Espace principal du bureau sur le Boulevard d’Anfa",
  "Espace de travail modulable du bureau sur le Boulevard d’Anfa",
  "Autre espace de travail du bureau sur le Boulevard d’Anfa",
  "Circulation entre les espaces du bureau sur le Boulevard d’Anfa"
 ],
 "mediaAlt": "Espace principal du bureau sur le Boulevard d’Anfa",
 "mediaNote": "Photographies extraites de la fiche technique du bien, référence 1032.",
 "pdf": {
  "src": "/assets/properties/boulevard-anfa-1032/boulevard-anfa-1032-fiche-technique.pdf",
  "filename": "boulevard-anfa-1032-fiche-technique.pdf"
 }
});
properties.unshift({
 "id": "dar-bouazza-1029",
 "reference": "1029",
 "title": "Appartement meublé avec piscine en résidence à Dar Bouazza",
 "category": "location",
 "status": "À louer",
 "type": "Appartement",
 "district": "134 Square Dar Bouazza",
 "locationLabel": "134 Square Dar Bouazza",
 "price": 8000,
 "unit": "mois",
 "area": 72,
 "beds": 1,
 "bathrooms": 2,
 "description": "Situé au 134 Square Dar Bouazza, cet appartement meublé de 72 m² comprend un grand salon, une chambre avec salle de bains privative, une salle de bains invités et une cuisine équipée.",
 "detail": "Au deuxième étage d’une résidence fermée et sécurisée, il bénéficie de la climatisation, d’un ascenseur, d’une place de parking et de l’accès à la piscine de la résidence.",
 "features": [
  "2e étage",
  "Grand salon",
  "Chambre avec salle de bains privative",
  "Salle de bains invités distincte, selon la fiche technique",
  "Cuisine équipée",
  "Entièrement meublé",
  "Climatisation",
  "Résidence fermée et sécurisée",
  "Piscine de la résidence",
  "Ascenseur",
  "1 place de parking"
 ],
 "destination": "maroc",
 "city": "Casablanca",
 "currency": "DH",
 "isDemo": false,
 "featured": false,
 "contactViaWhatsApp": true,
 "photos": [
  "/assets/properties/dar-bouazza-1029/dar-bouazza-1029-espace-de-vie.jpg",
  "/assets/properties/dar-bouazza-1029/dar-bouazza-1029-chambre.jpg",
  "/assets/properties/dar-bouazza-1029/dar-bouazza-1029-cuisine.jpg",
  "/assets/properties/dar-bouazza-1029/dar-bouazza-1029-salle-de-bains.jpg"
 ],
 "photoAlts": [
  "Espace de vie de l’appartement à Dar Bouazza",
  "Chambre de l’appartement à Dar Bouazza",
  "Cuisine de l’appartement à Dar Bouazza",
  "Salle de bains de l’appartement à Dar Bouazza"
 ],
 "mediaAlt": "Espace de vie de l’appartement à Dar Bouazza",
 "mediaNote": "Photographies extraites de la fiche technique du bien, référence 1029.",
 "pdf": {
  "src": "/assets/properties/dar-bouazza-1029/dar-bouazza-1029-fiche-technique.pdf",
  "filename": "dar-bouazza-1029-fiche-technique.pdf"
 }
});
properties.unshift({
 "id": "mers-sultan-1042",
 "reference": "1042",
 "title": "Appartement avec terrasse à Mers Sultan",
 "category": "achat-vente",
 "status": "À vendre",
 "type": "Appartement",
 "district": "Mers Sultan",
 "locationLabel": "Mers Sultan · Casablanca",
 "price": 1550000,
 "area": 121,
 "description": "À Mers Sultan, cet appartement de 121 m² se situe au quatrième étage d’un immeuble avec ascenseur. Il propose un grand salon, une suite parentale, un séjour aménagé dans l’ancienne troisième chambre et une cuisine indépendante avec buanderie.",
 "detail": "Une terrasse privative d’environ 20 m² et une place de parking complètent le bien. Le nombre actuel de chambres reste à confirmer. La fiche ne précise pas si la terrasse privative est comprise dans les 121 m² annoncés.",
 "features": [
  "4e étage",
  "Grand salon",
  "Suite parentale avec salle de bains privative",
  "Séjour aménagé dans l’ancienne troisième chambre",
  "Cuisine indépendante et buanderie",
  "Salle d’eau invités",
  "Terrasse privative d’environ 20 m²",
  "Ascenseur",
  "1 place de parking",
  "Immeuble R+5, trois appartements par palier",
  "Terrasse commune au 6e étage, distincte de la terrasse privative"
 ],
 "pdfNote": "Le nombre actuel de chambres et l’inclusion de la terrasse dans la surface annoncée restent à confirmer auprès de l’agence.",
 "destination": "maroc",
 "city": "Casablanca",
 "currency": "DH",
 "isDemo": false,
 "featured": false,
 "contactViaWhatsApp": true,
 "photos": [
  "/assets/properties/mers-sultan-1042/mers-sultan-1042-salon.jpg",
  "/assets/properties/mers-sultan-1042/mers-sultan-1042-chambre.jpg",
  "/assets/properties/mers-sultan-1042/mers-sultan-1042-terrasse.jpg",
  "/assets/properties/mers-sultan-1042/mers-sultan-1042-salle-eau.jpg"
 ],
 "photoAlts": [
  "Salon de l’appartement à Mers Sultan",
  "Chambre de l’appartement à Mers Sultan",
  "Terrasse de l’appartement à Mers Sultan",
  "Salle d’eau de l’appartement à Mers Sultan"
 ],
 "mediaAlt": "Salon de l’appartement à Mers Sultan",
 "mediaNote": "Photographies extraites de la fiche technique du bien, référence 1042.",
 "pdf": {
  "src": "/assets/properties/mers-sultan-1042/mers-sultan-1042-fiche-technique.pdf",
  "filename": "mers-sultan-1042-fiche-technique.pdf"
 }
});
properties.unshift({
 "id": "ain-taoujtate-1025",
 "reference": "1025",
 "title": "Local commercial avec mezzanine — Boulevard Aïn Taoujtate",
 "category": "locaux-professionnels",
 "status": "À vendre",
 "transaction": "sale",
 "type": "Local commercial",
 "city": "Casablanca",
 "district": "Boulevard Aïn Taoujtate",
 "locationLabel": "Boulevard Aïn Taoujtate · Casablanca",
 "price": 4400000,
 "area": 164,
 "description": "Sur le Boulevard Aïn Taoujtate, ce local commercial rénové offre 164 m² exploitables, répartis entre un rez-de-chaussée de 108 m² et une mezzanine de 56 m². Sa façade d’environ 5,20 m donne sur un axe fréquenté.",
 "detail": "Aménagé pour la restauration, le local comprend un espace ouvert, un comptoir, une cuisine ou espace technique et des sanitaires. Le stationnement est annoncé à proximité ; toute autorisation d’activité reste à vérifier.",
 "features": [
  "Surface exploitable : 164 m², dont 108 m² au sol et 56 m² en mezzanine",
  "Façade d’environ 5,20 m",
  "Local rénové, aménagé pour la restauration",
  "Espace commercial ouvert",
  "Comptoir d’accueil ou de service",
  "Cuisine ou espace technique",
  "Sanitaires",
  "Escalier métallique vers la mezzanine",
  "Éclairage LED et sol en grès cérame",
  "Stationnement à proximité, sans place privative annoncée"
 ],
 "mediaNote": "Photographies extraites de la fiche technique du bien, référence 1025.",
 "destination": "maroc",
 "currency": "DH",
 "isDemo": false,
 "featured": false,
 "contactViaWhatsApp": true,
 "photos": [
  "/assets/properties/ain-taoujtate-1025/ain-taoujtate-1025-espace-mezzanine.jpg",
  "/assets/properties/ain-taoujtate-1025/ain-taoujtate-1025-comptoir.jpg",
  "/assets/properties/ain-taoujtate-1025/ain-taoujtate-1025-mezzanine.jpg",
  "/assets/properties/ain-taoujtate-1025/ain-taoujtate-1025-sanitaires.jpg"
 ],
 "photoAlts": [
  "Espace commercial et escalier de la mezzanine sur le Boulevard Aïn Taoujtate",
  "Comptoir du local sur le Boulevard Aïn Taoujtate",
  "Espace de la mezzanine du local sur le Boulevard Aïn Taoujtate",
  "Sanitaires du local sur le Boulevard Aïn Taoujtate"
 ],
 "mediaAlt": "Espace commercial et escalier de la mezzanine sur le Boulevard Aïn Taoujtate",
 "pdf": {
  "src": "/assets/properties/ain-taoujtate-1025/ain-taoujtate-1025-fiche-technique.pdf",
  "filename": "ain-taoujtate-1025-fiche-technique.pdf"
 }
});
properties.unshift({
 "id": "oasis-route-el-jadida-1031",
 "reference": "1031",
 "title": "Bureau neuf — Oasis, Route El Jadida",
 "category": "locaux-professionnels",
 "status": "À louer",
 "transaction": "rent",
 "type": "Bureau",
 "city": "Casablanca",
 "district": "Oasis, Route El Jadida",
 "locationLabel": "Oasis, Route El Jadida · Casablanca",
 "price": 10000,
 "unit": "mois",
 "priceTaxExcluded": true,
 "area": 60,
 "description": "Dans le secteur Oasis, sur la Route El Jadida, ce bureau neuf de 60 m² se situe au deuxième étage d’un immeuble professionnel avec ascenseur. Son espace ouvert et modulable permet d’adapter l’aménagement aux besoins de l’activité.",
 "detail": "Le bien dispose de sanitaires et bénéficie d’une bonne luminosité. La fibre optique n’est pas installée. Le loyer est annoncé hors taxes.",
 "features": [
  "Bureau neuf",
  "2e étage",
  "Immeuble professionnel avec ascenseur",
  "Open space et aménagement modulable",
  "Sanitaires",
  "Bonne luminosité",
  "Fibre optique non installée"
 ],
 "mediaNote": "Photographies extraites de la fiche technique du bien, référence 1031.",
 "destination": "maroc",
 "currency": "DH",
 "isDemo": false,
 "featured": false,
 "contactViaWhatsApp": true,
 "photos": [
  "/assets/properties/oasis-route-el-jadida-1031/oasis-route-el-jadida-1031-espace-travail.jpg",
  "/assets/properties/oasis-route-el-jadida-1031/oasis-route-el-jadida-1031-circulation.jpg",
  "/assets/properties/oasis-route-el-jadida-1031/oasis-route-el-jadida-1031-sanitaires.jpg",
  "/assets/properties/oasis-route-el-jadida-1031/oasis-route-el-jadida-1031-exterieur.jpg"
 ],
 "photoAlts": [
  "Espace de travail du bureau Oasis, Route El Jadida",
  "Circulation du bureau Oasis, Route El Jadida",
  "Sanitaires du bureau Oasis, Route El Jadida",
  "Espace extérieur du bureau Oasis, Route El Jadida"
 ],
 "mediaAlt": "Espace de travail du bureau Oasis, Route El Jadida",
 "pdf": {
  "src": "/assets/properties/oasis-route-el-jadida-1031/oasis-route-el-jadida-1031-fiche-technique.pdf",
  "filename": "oasis-route-el-jadida-1031-fiche-technique.pdf"
 }
});
properties.unshift({
 "id": "duplex-ain-diab",
 "title": "Duplex rénové avec terrasses à Aïn Diab",
 "category": "achat-vente",
 "status": "À vendre",
 "type": "Duplex",
 "city": "Casablanca",
 "district": "Aïn Diab",
 "locationLabel": "Aïn Diab · Casablanca",
 "price": 5400000,
 "area": 350,
 "beds": 4,
 "bathrooms": 3,
 "description": "Dans une impasse calme à Aïn Diab, ce duplex rénové de 350 m² se développe sur un rez-de-jardin et un étage. Ses espaces de réception comprennent un salon marocain, un double salon européen avec cheminée et une salle à manger.",
 "detail": "Quatre chambres, dont une suite parentale avec dressing, composent la partie familiale. Une chambre pour le personnel avec salle de bains, des terrasses, deux places de garage et un box privatif d’environ 15 m² complètent le bien. La qualification des 350 m² reste à confirmer : le document les décrit comme « titrés » puis « habitables ».",
 "features": [
  "Rez-de-jardin et étage",
  "Suite parentale avec dressing et salle de bains privative",
  "Salle de bains commune",
  "Chambre du personnel avec salle de bains, hors des quatre chambres",
  "WC invités séparés",
  "Salon marocain",
  "Double salon européen avec cheminée",
  "Salle à manger",
  "Cuisine indépendante, buanderie et cellier",
  "Terrasses",
  "Climatisation",
  "Chauffage central au gaz",
  "Double vitrage",
  "Marbre de Carrare et menuiseries bois",
  "2 places de garage",
  "Box privatif d’environ 15 m²",
  "Petite copropriété sécurisée dans une impasse calme",
  "Bien annoncé sans vis-à-vis"
 ],
 "pdfNote": "La qualification des 350 m² annoncés (surface titrée ou habitable) reste à confirmer auprès de l’agence.",
 "mediaNote": "Photographies extraites de la fiche technique du bien à Aïn Diab.",
 "destination": "maroc",
 "currency": "DH",
 "isDemo": false,
 "featured": false,
 "contactViaWhatsApp": true,
 "photos": [
  "/assets/properties/duplex-ain-diab/duplex-ain-diab-reception.jpg",
  "/assets/properties/duplex-ain-diab/duplex-ain-diab-salon-marocain.jpg",
  "/assets/properties/duplex-ain-diab/duplex-ain-diab-chambre.jpg",
  "/assets/properties/duplex-ain-diab/duplex-ain-diab-terrasse.jpg"
 ],
 "photoAlts": [
  "Réception du duplex à Aïn Diab",
  "Salon marocain du duplex à Aïn Diab",
  "Chambre du duplex à Aïn Diab",
  "Terrasse du duplex à Aïn Diab"
 ],
 "mediaAlt": "Réception du duplex à Aïn Diab",
 "pdf": {
  "src": "/assets/properties/duplex-ain-diab/duplex-ain-diab-fiche-technique.pdf",
  "filename": "duplex-ain-diab-fiche-technique.pdf"
 }
});
properties.unshift({
 "id": "velodrome-1030",
 "reference": "1030",
 "title": "Bureau au dernier étage à Vélodrome",
 "category": "locaux-professionnels",
 "status": "À louer",
 "transaction": "rent",
 "type": "Bureau",
 "city": "Casablanca",
 "district": "Vélodrome",
 "locationLabel": "Vélodrome · Casablanca",
 "price": 23000,
 "unit": "mois",
 "priceTaxExcluded": true,
 "area": 180,
 "description": "À Vélodrome, ce bureau de 180 m² occupe le cinquième et dernier étage d’un immeuble professionnel avec ascenseur. Lumineux et bénéficiant d’une vue dégagée, il offre des espaces modulables pour l’aménagement de l’activité.",
 "detail": "Des sanitaires, une place de parking et une pré-installation pour la fibre optique complètent ses prestations. Cette pré-installation ne constitue pas une connexion active. Le loyer est annoncé hors taxes.",
 "features": [
  "5e et dernier étage",
  "Immeuble professionnel avec ascenseur",
  "Open space et espaces modulables",
  "Sanitaires",
  "1 place de parking",
  "Vue dégagée",
  "Bonne luminosité",
  "Pré-installation fibre optique, sans connexion active annoncée"
 ],
 "mediaNote": "Photographies extraites de la fiche technique du bien, référence 1030.",
 "destination": "maroc",
 "currency": "DH",
 "isDemo": false,
 "featured": false,
 "contactViaWhatsApp": true,
 "photos": [
  "/assets/properties/velodrome-1030/velodrome-1030-espace-principal.jpg",
  "/assets/properties/velodrome-1030/velodrome-1030-espace-cloisonne.jpg",
  "/assets/properties/velodrome-1030/velodrome-1030-espace-modulable.jpg",
  "/assets/properties/velodrome-1030/velodrome-1030-vue.jpg"
 ],
 "photoAlts": [
  "Espace principal du bureau à Vélodrome",
  "Espace cloisonné du bureau à Vélodrome",
  "Espace modulable du bureau à Vélodrome",
  "Vue depuis le bureau à Vélodrome"
 ],
 "mediaAlt": "Espace principal du bureau à Vélodrome",
 "pdf": {
  "src": "/assets/properties/velodrome-1030/velodrome-1030-fiche-technique.pdf",
  "filename": "velodrome-1030-fiche-technique.pdf"
 }
});
properties.unshift({
 "id": "hay-riad-imr-1055",
 "reference": "IMR-1055",
 "title": "Immeuble professionnel à usage mixte — Hay Riad",
 "category": "locaux-professionnels",
 "status": "À vendre",
 "transaction": "sale",
 "type": "Immeuble professionnel",
 "city": "Rabat",
 "district": "Hay Riad",
 "locationLabel": "Hay Riad · Rabat",
 "price": 22000000,
 "area": 1400,
 "areaNote": "annoncés — à confirmer",
 "description": "À Hay Riad, cet immeuble professionnel à usage mixte comprend un sous-sol, un rez-de-chaussée et deux étages. La fiche présente deux plateaux de bureaux de 231 m² chacun, un espace de crèche avec jardin privatif, des locaux médicaux avec cuisine et un parking en sous-sol.",
 "detail": "La surface totale annoncée est de 1 400 m², tandis que les surfaces détaillées totalisent 1 292 m² : cet écart reste à confirmer auprès de l’agence. Les usages médicaux et éducatifs sont ceux présentés dans la fiche, sans confirmation des autorisations, de l’exploitation ou de revenus locatifs.",
 "features": [
  "Sous-sol, rez-de-chaussée et deux étages",
  "Parking en sous-sol annoncé : 200 m²",
  "Locaux médicaux et cuisine au sous-sol annoncés : 200 m²",
  "Rez-de-chaussée présenté comme crèche avec jardin privatif : 430 m²",
  "Premier étage : plateau de bureaux de 231 m²",
  "Deuxième étage : plateau de bureaux de 231 m²",
  "Espaces modulables et zones d’exploitation distinctes"
 ],
 "pdfNote": "Surface totale annoncée : 1 400 m² ; surfaces détaillées : 1 292 m². Écart à confirmer auprès de l’agence.",
 "mediaNote": "Visuels de présentation extraits de la fiche technique IMR-1055 ; leur correspondance avec les locaux réels reste à confirmer.",
 "destination": "maroc",
 "currency": "DH",
 "isDemo": false,
 "featured": false,
 "contactViaWhatsApp": true,
 "photos": [
  "/assets/properties/hay-riad-imr-1055/hay-riad-imr-1055-facade.jpg",
  "/assets/properties/hay-riad-imr-1055/hay-riad-imr-1055-bureaux.jpg",
  "/assets/properties/hay-riad-imr-1055/hay-riad-imr-1055-espace-creche.jpg",
  "/assets/properties/hay-riad-imr-1055/hay-riad-imr-1055-locaux-medicaux.jpg"
 ],
 "photoAlts": [
  "Visuel de présentation de la façade de l’immeuble à Hay Riad",
  "Visuel de présentation d’un plateau de bureaux à Hay Riad",
  "Visuel de présentation de l’espace crèche à Hay Riad",
  "Visuel de présentation des locaux médicaux et de la cuisine à Hay Riad"
 ],
 "mediaAlt": "Visuel de présentation de la façade de l’immeuble à Hay Riad",
 "pdf": {
  "src": "/assets/properties/hay-riad-imr-1055/hay-riad-imr-1055-fiche-technique.pdf",
  "filename": "hay-riad-imr-1055-fiche-technique.pdf"
 }
});
properties.unshift({
 "id": "oulfa-bureaux-1037",
 "reference": "1037",
 "title": "Plateaux de bureaux neufs à Oulfa",
 "category": "locaux-professionnels",
 "status": "À louer",
 "transaction": "rent",
 "type": "Plateaux de bureaux",
 "city": "Casablanca",
 "district": "Oulfa",
 "locationLabel": "Oulfa · Casablanca",
 "price": 8000,
 "priceFrom": true,
 "unit": "mois",
 "area": 107,
 "areaRange": [
  107,
  287
 ],
 "description": "À Oulfa, cet immeuble professionnel neuf propose des plateaux de bureaux de 107 à 287 m². Les espaces ouverts et modulables bénéficient de grandes baies vitrées, d’une climatisation centralisée et d’une installation fibre optique.",
 "detail": "Certains lots disposent d’une terrasse selon leur surface et leur étage. Le programme annoncé comprend dix plateaux, deux par étage, dans un immeuble R+5 dont l’année de construction indiquée est 2026. Ce nombre ne constitue pas un stock disponible confirmé.",
 "features": [
  "Open spaces modulables et grandes baies vitrées",
  "Climatisation centralisée",
  "Installation fibre optique",
  "Interphone et caméras de surveillance",
  "Orientations annoncées : nord-est et sud-ouest",
  "Grandes surfaces : terrasses à partir du 2e étage ; petites surfaces : au 5e étage"
 ],
 "variants": {
  "columns": [
   {
    "key": "area",
    "label": "Surface",
    "kind": "area"
   }
  ],
  "rows": [
   {
    "id": "plateau-107",
    "label": "Plateau de 107 m²",
    "type": "Bureau",
    "area": 107,
    "price": 8000,
    "unit": "mois"
   },
   {
    "id": "plateau-287",
    "label": "Plateau de 287 m²",
    "type": "Bureau",
    "area": 287,
    "price": 17000,
    "unit": "mois"
   }
  ],
  "note": "Seuls les loyers de ces deux surfaces sont communiqués. Conditions des autres lots et disponibilité à confirmer."
 },
 "availability": "Disponibilité sur demande.",
 "mediaNote": "Photographies extraites de la fiche technique 1037, sans attribution à un lot précis.",
 "destination": "maroc",
 "currency": "DH",
 "isDemo": false,
 "featured": false,
 "contactViaWhatsApp": true,
 "photos": [
  "/assets/properties/oulfa-bureaux-1037/oulfa-bureaux-1037-plateau.jpg",
  "/assets/properties/oulfa-bureaux-1037/oulfa-bureaux-1037-espace-modulable.jpg",
  "/assets/properties/oulfa-bureaux-1037/oulfa-bureaux-1037-terrasse.jpg",
  "/assets/properties/oulfa-bureaux-1037/oulfa-bureaux-1037-sanitaires.jpg"
 ],
 "photoAlts": [
  "Plateau de bureaux à Oulfa, sans attribution à un lot précis",
  "Espace modulable du programme de bureaux à Oulfa",
  "Terrasse présentée dans la fiche des bureaux à Oulfa, selon les lots",
  "Sanitaires présentés dans la fiche des bureaux à Oulfa"
 ],
 "mediaAlt": "Plateau de bureaux à Oulfa, sans attribution à un lot précis",
 "pdf": {
  "src": "/assets/properties/oulfa-bureaux-1037/oulfa-bureaux-1037-fiche-technique.pdf",
  "filename": "oulfa-bureaux-1037-fiche-technique.pdf"
 }
});
properties.unshift({
 "id": "affinities-1022",
 "reference": "1022",
 "title": "Résidence Affinities",
 "category": "achat-vente",
 "status": "À vendre",
 "type": "Studios et appartements",
 "city": "Casablanca",
 "district": "CFC Extension",
 "locationLabel": "CFC Extension · Casablanca",
 "price": 1058000,
 "priceFrom": true,
 "area": 46,
 "areaRange": [
  46,
  123
 ],
 "description": "À CFC Extension, Résidence Affinities propose des studios et des appartements de deux chambres avec salon. Le programme associe cuisines équipées, climatisation réversible, ascenseurs OTIS et espaces communs comprenant un rooftop aménagé et un parking en sous-sol.",
 "detail": "La proximité de CFC, de la Route d’El Jadida et d’Anfa Park est annoncée. La dénomination « studios » est conservée, bien que le document mentionne aussi « 1 chambre + salon » pour ces logements ; leur configuration reste à préciser.",
 "delivery": "Échéance initialement annoncée : T2 2026. Cette date est passée ; le statut de livraison reste à confirmer auprès de l’agence.",
 "features": [
  "Cuisines équipées",
  "Marbre dans les espaces de vie et parquet stratifié dans les chambres",
  "Plans de travail en quartz ou granit",
  "Climatisation réversible",
  "Fibre optique",
  "Ascenseurs OTIS",
  "Rooftop aménagé",
  "Résidence sécurisée",
  "Parking en sous-sol annoncé inclus"
 ],
 "variants": {
  "columns": [
   {
    "key": "areaRange",
    "label": "Surfaces",
    "kind": "area"
   },
   {
    "key": "composition",
    "label": "Composition annoncée",
    "kind": "text"
   }
  ],
  "rows": [
   {
    "id": "studios",
    "label": "Studios",
    "type": "Studio",
    "areaRange": [
     46,
     56
    ],
    "price": 1058000,
    "priceFrom": true,
    "composition": "Dénomination « studio » ; « 1 chambre + salon » également indiqué, à préciser"
   },
   {
    "id": "appartements-2-chambres",
    "label": "Appartements de 2 chambres avec salon",
    "type": "Appartement",
    "beds": 2,
    "areaRange": [
     56,
     123
    ],
    "price": 1500000,
    "priceFrom": true,
    "composition": "2 chambres et salon ; nombre de salles de bains selon le lot"
   }
  ],
  "note": "Prix de départ par type de logement, sans attribution à un lot précis. Configuration et disponibilité à confirmer."
 },
 "mediaNote": "Visuels de présentation du programme extraits de la fiche 1022, sans attribution à un lot précis. Le rendu extérieur ne constitue pas une photographie vérifiée du bâtiment livré.",
 "availability": "Disponibilité sur demande.",
 "destination": "maroc",
 "currency": "DH",
 "isDemo": false,
 "featured": false,
 "contactViaWhatsApp": true,
 "photos": [
  "/assets/properties/affinities-1022/affinities-1022-residence.jpg",
  "/assets/properties/affinities-1022/affinities-1022-espace-vie.jpg",
  "/assets/properties/affinities-1022/affinities-1022-chambre.jpg",
  "/assets/properties/affinities-1022/affinities-1022-cuisine.jpg"
 ],
 "photoAlts": [
  "Rendu de présentation de Résidence Affinities",
  "Visuel de présentation d’un espace de vie à Résidence Affinities",
  "Visuel de présentation d’une chambre à Résidence Affinities",
  "Visuel de présentation d’une cuisine à Résidence Affinities"
 ],
 "mediaAlt": "Rendu de présentation de Résidence Affinities",
 "pdf": {
  "src": "/assets/properties/affinities-1022/affinities-1022-fiche-technique.pdf",
  "filename": "affinities-1022-fiche-technique.pdf"
 }
});
properties.unshift({
 "id": "bourgogne-local-1053",
 "reference": "1053",
 "title": "Local commercial avec mezzanine à Bourgogne",
 "category": "locaux-professionnels",
 "status": "À vendre",
 "transaction": "sale",
 "type": "Local commercial",
 "city": "Casablanca",
 "district": "Bourgogne",
 "locationLabel": "Bourgogne · Casablanca",
 "price": 1900000,
 "area": 72,
 "areaApproximate": true,
 "description": "À Bourgogne, ce local se situe dans un passage commercial à proximité de Marjane. Il propose environ 72 m² exploitables, répartis entre 47 m² au sol et une mezzanine de 25 m².",
 "detail": "Sa façade vitrée et sa configuration ouverte permettent d’envisager différents aménagements selon l’activité. Les autorisations nécessaires à l’activité envisagée restent à vérifier.",
 "features": [
  "Surface exploitable d’environ 72 m² : 47 m² au sol et 25 m² en mezzanine",
  "Grande façade vitrée donnant sur le passage commercial",
  "Espace ouvert et modulable",
  "Belle hauteur sous plafond",
  "Éclairage encastré",
  "Sol carrelé et miroirs muraux",
  "Accès depuis le passage commercial, à proximité de Marjane"
 ],
 "availability": "Disponibilité sur demande.",
 "mediaNote": "Photographies extraites de la fiche technique 1053, sans attribution à un lot précis.",
 "destination": "maroc",
 "currency": "DH",
 "isDemo": false,
 "featured": false,
 "contactViaWhatsApp": true,
 "photos": [
  "/assets/properties/bourgogne-local-1053/bourgogne-local-1053-interieur.jpg",
  "/assets/properties/bourgogne-local-1053/bourgogne-local-1053-facade.jpg",
  "/assets/properties/bourgogne-local-1053/bourgogne-local-1053-acces.jpg"
 ],
 "photoAlts": [
  "Intérieur du local commercial à Bourgogne",
  "Façade du local donnant sur le passage commercial à Bourgogne",
  "Accès depuis le passage commercial à Bourgogne"
 ],
 "mediaAlt": "Intérieur du local commercial à Bourgogne",
 "pdf": {
  "src": "/assets/properties/bourgogne-local-1053/bourgogne-local-1053-fiche-technique.pdf",
  "filename": "bourgogne-local-1053-fiche-technique.pdf"
 }
});
properties.unshift({
 "id": "les-oceanes-1026",
 "reference": "1026",
 "title": "Résidence Les Océanes — Marina Casablanca",
 "category": "achat-vente",
 "status": "À vendre",
 "type": "Appartements et duplex",
 "city": "Casablanca",
 "district": "Marina",
 "locationLabel": "Marina · Casablanca",
 "price": 4118000,
 "priceFrom": true,
 "area": 172,
 "areaRange": [
  172,
  352
 ],
 "description": "À Marina Casablanca, cette sélection réunit des appartements et un duplex dans les résidences Les Océanes 1 et 2. Les surfaces totales s’étendent de 172 à 352 m², avec terrasses, jardins et vues sur la mer ou la ville selon les lots.",
 "detail": "La résidence dispose d’ascenseurs, d’un parking en sous-sol et d’une sécurité annoncée 24h/24. La composition détaillée indique deux chambres pour les appartements et trois pour le duplex ; l’appellation F4 utilisée ailleurs dans la fiche ne permet pas d’en déduire trois chambres pour tous les appartements.",
 "features": [
  "Cuisines équipées et espaces de lavage",
  "Deux salles de bains et toilettes invités distinctes selon la composition détaillée",
  "Climatisation",
  "Jardins, terrasses et vues selon les lots",
  "Ascenseurs et parking en sous-sol",
  "Sécurité annoncée 24h/24"
 ],
 "variants": {
  "columns": [
   {
    "key": "floor",
    "label": "Étage",
    "kind": "text"
   },
   {
    "key": "view",
    "label": "Vue et orientation",
    "kind": "text"
   },
   {
    "key": "area",
    "label": "Surface totale",
    "kind": "area"
   },
   {
    "key": "livingArea",
    "label": "Surface habitable",
    "kind": "area"
   },
   {
    "key": "gardenArea",
    "label": "Jardin",
    "kind": "area"
   },
   {
    "key": "terraceArea",
    "label": "Terrasses et balcons",
    "kind": "area"
   },
   {
    "key": "parking",
    "label": "Places de parking",
    "kind": "number"
   },
   {
    "key": "beds",
    "label": "Chambres",
    "kind": "number"
   }
  ],
  "rows": [
   {
    "id": "oceanes-1-1",
    "label": "Océanes 1 — Appartement n°1",
    "type": "Appartement",
    "floor": "RDC",
    "view": "Vue ville · Sud-ouest",
    "area": 226,
    "livingArea": 156,
    "terraceArea": 15,
    "parking": 1,
    "beds": 2,
    "bathrooms": 2,
    "price": 4353000,
    "gardenArea": 55
   },
   {
    "id": "oceanes-1-3",
    "label": "Océanes 1 — Appartement n°3",
    "type": "Appartement",
    "floor": "RDC",
    "view": "Vue mer · Nord-ouest",
    "area": 176,
    "livingArea": 161,
    "terraceArea": 15,
    "parking": 1,
    "beds": 2,
    "bathrooms": 2,
    "price": 4353000
   },
   {
    "id": "oceanes-1-5",
    "label": "Océanes 1 — Appartement n°5",
    "type": "Appartement",
    "floor": "1er étage",
    "view": "Vue ville · Sud-ouest",
    "area": 172,
    "livingArea": 157,
    "terraceArea": 15,
    "parking": 1,
    "beds": 2,
    "bathrooms": 2,
    "price": 4118000
   },
   {
    "id": "oceanes-1-8",
    "label": "Océanes 1 — Duplex n°8",
    "type": "Duplex",
    "floor": "1er étage",
    "view": "Vue mer · Sud-est",
    "area": 352,
    "livingArea": 200,
    "terraceArea": 18,
    "parking": 2,
    "beds": 3,
    "bathrooms": 2,
    "price": 5648000,
    "gardenArea": 134
   },
   {
    "id": "oceanes-2-2",
    "label": "Océanes 2 — Appartement n°2",
    "type": "Appartement",
    "floor": "RDC",
    "view": "Vue mer · Nord-ouest",
    "area": 177,
    "livingArea": 162,
    "terraceArea": 15,
    "parking": 1,
    "beds": 2,
    "bathrooms": 2,
    "price": 4392000
   },
   {
    "id": "oceanes-2-4",
    "label": "Océanes 2 — Appartement n°4",
    "type": "Appartement",
    "floor": "RDC",
    "view": "Vue ville · Nord-ouest",
    "area": 209,
    "livingArea": 156,
    "terraceArea": 15,
    "parking": 1,
    "beds": 2,
    "bathrooms": 2,
    "price": 4295000,
    "gardenArea": 38
   },
   {
    "id": "oceanes-2-8",
    "label": "Océanes 2 — Appartement n°8",
    "type": "Appartement",
    "floor": "1er étage",
    "view": "Vue ville · Sud-ouest",
    "area": 172,
    "livingArea": 157,
    "terraceArea": 15,
    "parking": 1,
    "beds": 2,
    "bathrooms": 2,
    "price": 4236000
   }
  ],
  "note": "Lots décrits dans la fiche, disponibilité à confirmer. Les surfaces annexes sont incluses dans les totaux. Les photos ne sont pas attribuées à un lot précis."
 },
 "availability": "Disponibilité sur demande.",
 "mediaNote": "Photographies extraites de la fiche technique 1026, sans attribution à un lot précis.",
 "destination": "maroc",
 "currency": "DH",
 "isDemo": false,
 "featured": false,
 "contactViaWhatsApp": true,
 "photos": [
  "/assets/properties/les-oceanes-1026/les-oceanes-1026-residences.jpg",
  "/assets/properties/les-oceanes-1026/les-oceanes-1026-espace-vie.jpg",
  "/assets/properties/les-oceanes-1026/les-oceanes-1026-chambre.jpg",
  "/assets/properties/les-oceanes-1026/les-oceanes-1026-terrasse.jpg"
 ],
 "photoAlts": [
  "Résidences Les Océanes à Marina Casablanca",
  "Espace de vie présenté dans la sélection Les Océanes, lot non précisé",
  "Chambre présentée dans la sélection Les Océanes, lot non précisé",
  "Terrasse présentée dans la sélection Les Océanes, lot non précisé"
 ],
 "mediaAlt": "Résidences Les Océanes à Marina Casablanca",
 "pdf": {
  "src": "/assets/properties/les-oceanes-1026/les-oceanes-1026-fiche-technique.pdf",
  "filename": "les-oceanes-1026-fiche-technique.pdf"
 }
});
properties.unshift({
 "id": "ayad-1033",
 "reference": "1033",
 "title": "Résidence Ayad — Ferme Bretonne",
 "category": "achat-vente",
 "status": "À vendre",
 "type": "Studios",
 "city": "Casablanca",
 "district": "Ferme Bretonne",
 "locationLabel": "Ferme Bretonne · Casablanca",
 "price": 1325000,
 "priceFrom": true,
 "area": 45,
 "areaRange": [
  45,
  93
 ],
 "areaNote": "de surface totale annoncée",
 "description": "À Ferme Bretonne, Résidence Ayad propose des logements avec salon, chambre et cuisine équipée, ainsi que des terrasses selon les lots. La résidence dispose d’un ascenseur, d’un parking en sous-sol et d’une sécurité annoncée 24h/24.",
 "detail": "Le document désigne ces logements comme des studios et annonce 41 à 52 m² habitables, pour 45 à 93 m² de surface totale. Certaines surfaces pondérées dépassent les surfaces totales : les intitulés et valeurs sont repris sans inversion ni recalcul. L’attribution d’une terrasse ou d’un parking privatif à chaque lot reste à confirmer.",
 "features": [
  "Composition annoncée : salon, une chambre, une salle de bains et cuisine équipée",
  "Climatisation",
  "Isolation thermique et acoustique",
  "Ascenseur",
  "Sécurité annoncée 24h/24",
  "Terrasses selon les lots ; parking privatif annoncé, attribution à confirmer"
 ],
 "variants": {
  "columns": [
   {
    "key": "floor",
    "label": "Étage",
    "kind": "text"
   },
   {
    "key": "area",
    "label": "Surface totale",
    "kind": "area"
   },
   {
    "key": "weightedArea",
    "label": "Surface pondérée",
    "kind": "area"
   }
  ],
  "rows": [
   {
    "id": "lot-17",
    "label": "Logement n°17",
    "type": "Studio",
    "floor": "2e étage",
    "area": 45,
    "weightedArea": 53,
    "beds": 1,
    "bathrooms": 1,
    "price": 1325000
   },
   {
    "id": "lot-13",
    "label": "Logement n°13",
    "type": "Studio",
    "floor": "1er étage",
    "area": 48,
    "weightedArea": 56,
    "beds": 1,
    "bathrooms": 1,
    "price": 1400000
   },
   {
    "id": "lot-12",
    "label": "Logement n°12",
    "type": "Studio",
    "floor": "1er étage",
    "area": 51,
    "weightedArea": 59,
    "beds": 1,
    "bathrooms": 1,
    "price": 1500000
   },
   {
    "id": "lot-10",
    "label": "Logement n°10",
    "type": "Studio",
    "floor": "1er étage",
    "area": 93,
    "weightedArea": 78,
    "beds": 1,
    "bathrooms": 1,
    "price": 1550000
   },
   {
    "id": "lot-8",
    "label": "Logement n°8",
    "type": "Studio",
    "floor": "1er étage",
    "area": 71,
    "weightedArea": 67,
    "beds": 1,
    "bathrooms": 1,
    "price": 1600000
   },
   {
    "id": "lot-23",
    "label": "Logement n°23",
    "type": "Studio",
    "floor": "3e étage",
    "area": 74,
    "weightedArea": 71,
    "beds": 1,
    "bathrooms": 1,
    "price": 1700000
   },
   {
    "id": "lot-28",
    "label": "Logement n°28",
    "type": "Studio",
    "floor": "4e étage",
    "area": 85,
    "weightedArea": 74,
    "beds": 1,
    "bathrooms": 1,
    "price": 1600000
   }
  ],
  "note": "Surfaces communiquées dans la fiche, à confirmer. La surface pondérée n’est pas une surface habitable. Disponibilité et attribution des annexes à confirmer."
 },
 "mediaNote": "Visuels de présentation extraits de la fiche 1033, sans attribution à un lot précis ni confirmation de leur correspondance avec les logements réels.",
 "availability": "Disponibilité sur demande.",
 "destination": "maroc",
 "currency": "DH",
 "isDemo": false,
 "featured": false,
 "contactViaWhatsApp": true,
 "photos": [
  "/assets/properties/ayad-1033/ayad-1033-espace-vie.jpg",
  "/assets/properties/ayad-1033/ayad-1033-chambre.jpg",
  "/assets/properties/ayad-1033/ayad-1033-cuisine.jpg",
  "/assets/properties/ayad-1033/ayad-1033-terrasse.jpg"
 ],
 "photoAlts": [
  "Visuel de présentation d’un espace de vie à Résidence Ayad",
  "Visuel de présentation d’une chambre à Résidence Ayad",
  "Visuel de présentation d’une cuisine à Résidence Ayad",
  "Visuel de présentation d’une terrasse à Résidence Ayad, selon les lots"
 ],
 "mediaAlt": "Visuel de présentation d’un espace de vie à Résidence Ayad",
 "pdf": {
  "src": "/assets/properties/ayad-1033/ayad-1033-fiche-technique.pdf",
  "filename": "ayad-1033-fiche-technique.pdf"
 }
});
properties.unshift({
 "id": "alsace-lorraine-1034",
 "reference": "1034",
 "title": "Studios et lofts à Alsace-Lorraine",
 "category": "location",
 "status": "À louer",
 "transaction": "rent",
 "type": "Studios et lofts",
 "city": "Casablanca",
 "district": "Alsace-Lorraine",
 "locationLabel": "Alsace-Lorraine · Casablanca",
 "price": null,
 "priceLabel": "Loyers sur demande",
 "area": 30,
 "areaRange": [
  30,
  45
 ],
 "description": "À Alsace-Lorraine, cette sélection comprend des studios de 45 m² avec salon et chambre, ainsi que des lofts de 30 m² organisés en espace ouvert. Les logements disposent d’une cuisine moderne et d’une salle de bains, au sein d’un immeuble sécurisé proche des commerces et des transports.",
 "detail": "Le loyer des studios est de 6 000 DH par mois ; celui des lofts reste à confirmer. La localisation principale communiquée est Alsace-Lorraine, malgré une autre mention du Maarif dans le document. Aucune place de parking n’est attribuée à un logement sans confirmation.",
 "features": [
  "Résidence sécurisée et immeuble entretenu",
  "Proximité des commerces et transports",
  "Cuisine moderne et une salle de bains par logement selon la fiche"
 ],
 "variants": {
  "columns": [
   {
    "key": "area",
    "label": "Surface",
    "kind": "area"
   },
   {
    "key": "composition",
    "label": "Composition annoncée",
    "kind": "text"
   }
  ],
  "rows": [
   {
    "id": "studios",
    "label": "Studios",
    "type": "Studio",
    "area": 45,
    "beds": 1,
    "bathrooms": 1,
    "price": 6000,
    "unit": "mois",
    "composition": "Salon, une chambre, une salle de bains et cuisine moderne"
   },
   {
    "id": "lofts",
    "label": "Lofts",
    "type": "Loft",
    "area": 30,
    "bathrooms": 1,
    "price": null,
    "priceLabel": "Loyer sur demande",
    "composition": "Espace ouvert, une salle de bains et cuisine moderne"
   }
  ],
  "note": "Le loyer des lofts reste à confirmer. Les quantités indiquées dans le document ne constituent pas un stock actuel confirmé."
 },
 "availability": "Disponibilité sur demande.",
 "mediaNote": "Photographies extraites de la fiche technique 1034, sans attribution à un lot précis.",
 "destination": "maroc",
 "currency": "DH",
 "isDemo": false,
 "featured": false,
 "contactViaWhatsApp": true,
 "photos": [
  "/assets/properties/alsace-lorraine-1034/alsace-lorraine-1034-immeuble.jpg",
  "/assets/properties/alsace-lorraine-1034/alsace-lorraine-1034-salon.jpg",
  "/assets/properties/alsace-lorraine-1034/alsace-lorraine-1034-chambre.jpg",
  "/assets/properties/alsace-lorraine-1034/alsace-lorraine-1034-cuisine.jpg"
 ],
 "photoAlts": [
  "Immeuble présenté dans la fiche des studios et lofts à Alsace-Lorraine",
  "Salon présenté dans la sélection Alsace-Lorraine, logement non précisé",
  "Chambre présentée dans la sélection Alsace-Lorraine, logement non précisé",
  "Cuisine présentée dans la sélection Alsace-Lorraine, logement non précisé"
 ],
 "mediaAlt": "Immeuble présenté dans la fiche des studios et lofts à Alsace-Lorraine",
 "pdf": {
  "src": "/assets/properties/alsace-lorraine-1034/alsace-lorraine-1034-fiche-technique.pdf",
  "filename": "alsace-lorraine-1034-fiche-technique.pdf"
 }
});
export const projects=[
 {id:'INT-MAR-01',destination:'maroc',title:'Matières vivantes',type:'Résidence · Marrakech',image:'interior',text:'Une inspiration autour du tadelakt, du bois et des matières naturelles. Un intérieur ouvert sur un patio, où la lumière dessine les volumes.',palette:['#d9c7ac','#a87554','#72785a']},
 {id:'INT-MAR-02',destination:'maroc',title:'L’élégance essentielle',type:'Appartement · Casablanca',image:'living',text:'Des lignes épurées, des tons chauds et des espaces de vie qui se répondent. Une piste créative pour un quotidien plus fluide.',palette:['#e7dfcf','#807766','#393e34']},
 {id:'INT-DXB-01',destination:'dubai',title:'Horizon intérieur',type:'Appartement · Dubaï',image:'apartment',text:'Une inspiration contemporaine qui laisse la vue et la lumière guider le choix des matières et l’organisation des espaces.',palette:['#dedbd0','#6c7f83','#8f7859']},
 {id:'INT-DXB-02',destination:'dubai',title:'Une terrasse sur la ville',type:'Résidence · Dubaï',image:'dubai',text:'Un dialogue entre intérieur et extérieur, avec des matières minérales et des assises accueillantes pour prolonger le lieu de vie.',palette:['#d9d1bc','#a99b82','#38473e']}
];
export const steps=[['Vous écouter','Destination, budget, calendrier et priorités : le projet commence par vos attentes.'],['Sélectionner','Une sélection adaptée, des informations structurées et des critères faciles à comparer.'],['Explorer','Échanger sur les biens, préparer les visites et préciser les points à vérifier.'],['Vous accompagner','Coordonner les prochaines étapes selon la mission et les interlocuteurs concernés.']];
export const faqs=[['Puis-je rechercher un bien au Maroc et à Dubaï ?','Le Maroc propose cinq rubriques et Dubaï quatre. La rubrique Hôtel & Appart’Hôtel est réservée à l’acquisition d’établissements au Maroc. Vous pouvez changer de destination depuis le menu.'],['Comment obtenir des informations sur un bien ?','Depuis la fiche du bien, utilisez « Ce bien m’intéresse ». Sa référence est automatiquement reprise dans votre demande de contact.'],['Accompagnez-vous l’achat d’un établissement hôtelier ?','Oui. La rubrique Hôtel & Appart’Hôtel concerne l’acquisition d’hôtels, d’appart’hôtels et de maisons d’hôtes au Maroc. Contactez l’agence pour préciser votre projet.'],['Proposez-vous un accompagnement en décoration ?','Oui. La rubrique Décoration & aménagement présente notre accompagnement et des inspirations. Le périmètre de votre projet se précise avec l’agence.']];
