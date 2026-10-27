// Coordonnées publiques de l’agence. Ne jamais mettre de clé API ici.
export const siteConfig = {
 name:'RIVAGE', tagline:'Deux destinations. Un art de vivre.',
 whatsappNumber:'', email:'', phone:'', address:'',
 contactEndpoint:'', // '/api/contact' après configuration serveur sur Vercel.
 demo:true,
};

// Diaporama uniquement : aucune vidéo n’est chargée par HeroMedia.
export const heroMediaConfig = {
 poster:'/assets/maroc-villa.jpg',
 posterAlt:'Illustration d’une villa contemporaine au Maroc, façade et espaces de vie ouverts sur le jardin.',
 video:{desktop:[],mobile:[]},
 intervalMs:7000,
 fadeMs:1000,
 slides:[
  {src:'/assets/hero/hero-dubai.jpeg', label:'Dubaï',
   alt:'Vue de Dubaï et de sa skyline depuis une terrasse résidentielle.',
   position:{desktop:'center 50%',mobile:'56% center'}},
  {src:'/assets/hero/hero-marrakech.jpg', label:'Marrakech',
   alt:'Vue de Marrakech, de la Koutoubia et des montagnes de l’Atlas.',
   position:{desktop:'center 50%',mobile:'76% center'}},
 ],
};

// L’aperçu neutre est réservé au serveur de développement, jamais à la production.
export const partnersConfig = {preview:import.meta.env?.DEV === true};
