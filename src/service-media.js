// Visuels illustratifs des services et inspirations ; aucune réalisation Sarouty revendiquée.
const photo=(src,alt,position='center')=>({src,alt,kind:'photograph',position:{desktop:position,mobile:position}});
const illustration=(src,alt,position='center')=>({src,alt,kind:'illustration',position:{desktop:position,mobile:position}});
const dubaiInterior={
 src:'/assets/properties/dubai-islands-2-bedroom/dubai-islands-2-bedroom-presentation-1.png',
 alt:'Rendu de présentation d’un salon aménagé à Dubai Islands, sans réalisation Sarouty revendiquée.',
 kind:'render',position:{desktop:'center',mobile:'center'},
 // Fenêtre sur l’intérieur du montage fourni ; l’image originale reste intacte.
 crop:{x:0,y:900,width:500,height:500,imageWidth:1122,imageHeight:1402},
};
// Photographies de services : sources et droits documentés dans docs/photos-services.md.
export const serviceMedia={
  "achat-vente": {
    "maroc": {
      "src": "/assets/services/achat-maroc-580.webp",
      "srcSet": "/assets/services/achat-maroc-580.webp 580w",
      "width": 580,
      "height": 435,
      "alt": "Villa avec piscine à Dar Bouazza, bien présenté par l’agence.",
      "kind": "photograph",
      "position": {
        "desktop": "58% 45%",
        "mobile": "60% 48%"
      },
      "caption": "Photo d’un bien présenté"
    },
    "dubai": {
      "src": "/assets/services/achat-dubai-1440.webp",
      "srcSet": "/assets/services/achat-dubai-640.webp 640w, /assets/services/achat-dubai-1440.webp 1440w",
      "width": 1440,
      "height": 1920,
      "alt": "Architecture résidentielle à Dubaï ; photographie d’illustration, sans offre associée.",
      "kind": "photograph",
      "position": {
        "desktop": "50% 55%",
        "mobile": "50% 56%"
      },
      "caption": "Photographie d’illustration"
    }
  },
  "location": {
    "maroc": {
      "src": "/assets/services/location-maroc-1440.webp",
      "srcSet": "/assets/services/location-maroc-640.webp 640w, /assets/services/location-maroc-1440.webp 1440w",
      "width": 1440,
      "height": 1080,
      "alt": "Salon d’un appartement à louer à Casablanca Finance City.",
      "kind": "photograph",
      "position": {
        "desktop": "58% 52%",
        "mobile": "62% 52%"
      },
      "caption": "Photo d’un bien présenté"
    },
    "dubai": {
      "src": "/assets/services/location-dubai-1440.webp",
      "srcSet": "/assets/services/location-dubai-640.webp 640w, /assets/services/location-dubai-1440.webp 1440w",
      "width": 1440,
      "height": 961,
      "alt": "Salon et salle à manger d’un appartement à Dubaï ; photographie d’illustration.",
      "kind": "photograph",
      "position": {
        "desktop": "60% 52%",
        "mobile": "66% 52%"
      },
      "caption": "Photographie d’illustration"
    }
  },
  "locaux-professionnels": {
    "maroc": {
      "src": "/assets/services/professionnels-maroc-869.webp",
      "srcSet": "/assets/services/professionnels-maroc-640.webp 640w, /assets/services/professionnels-maroc-869.webp 869w",
      "width": 869,
      "height": 652,
      "alt": "Plateau de bureaux à Oulfa, Casablanca, sans attribution à un lot précis.",
      "kind": "photograph",
      "position": {
        "desktop": "40% 55%",
        "mobile": "38% 55%"
      },
      "caption": "Photo d’un bien présenté"
    },
    "dubai": {
      "src": "/assets/services/professionnels-dubai-1440.webp",
      "srcSet": "/assets/services/professionnels-dubai-640.webp 640w, /assets/services/professionnels-dubai-1440.webp 1440w",
      "width": 1440,
      "height": 2130,
      "alt": "Architecture de bureaux à Dubaï ; photographie d’illustration, sans offre associée.",
      "kind": "photograph",
      "position": {
        "desktop": "50% 53%",
        "mobile": "48% 53%"
      },
      "caption": "Photographie d’illustration"
    }
  },
  "decoration": {
    "maroc": {
      "src": "/assets/services/decoration-maroc-960.webp",
      "srcSet": "/assets/services/decoration-maroc-640.webp 640w, /assets/services/decoration-maroc-960.webp 960w",
      "width": 960,
      "height": 720,
      "alt": "Salon aménagé d’un bien à Bouskoura ; décoration non attribuée à Sarouty.",
      "kind": "photograph",
      "position": {
        "desktop": "62% 53%",
        "mobile": "65% 53%"
      },
      "caption": "Photo d’un bien présenté"
    },
    "dubai": {
      "src": "/assets/services/decoration-dubai-1440.webp",
      "srcSet": "/assets/services/decoration-dubai-640.webp 640w, /assets/services/decoration-dubai-1440.webp 1440w",
      "width": 1440,
      "height": 960,
      "alt": "Mobilier, textiles et éclairage d’un salon à Dubaï ; photographie d’illustration.",
      "kind": "photograph",
      "position": {
        "desktop": "60% 55%",
        "mobile": "65% 55%"
      },
      "caption": "Photographie d’illustration"
    }
  },
  "hotels-appartements": {
    "maroc": {
      "src": "/assets/services/hotel-maroc-1440.webp",
      "srcSet": "/assets/services/hotel-maroc-640.webp 640w, /assets/services/hotel-maroc-1440.webp 1440w",
      "width": 1440,
      "height": 961,
      "alt": "Patio et piscine du Riad Maktoub à Aït Ben Haddou, Maroc ; illustration, sans offre de vente associée.",
      "kind": "photograph",
      "position": {
        "desktop": "50% 50%",
        "mobile": "50% 52%"
      },
      "caption": "Photographie d’illustration"
    }
  }
};
export const inspirationMedia={
 'INT-MAR-01':illustration('/assets/riad-interior.jpg','Illustration d’un patio marocain aux matières naturelles.'),
 'INT-MAR-02':photo('/assets/properties/prestigia-ville-verte-1023/prestigia-ville-verte-1023-salon.jpg','Salon aménagé d’un bien à Bouskoura ; décoration non attribuée à Sarouty.'),
 'INT-DXB-01':dubaiInterior,
 'INT-DXB-02':illustration('/assets/dubai-terrace.jpg','Illustration d’une terrasse aménagée à Dubaï.'),
};
export const mediaKindLabel=kind=>kind==='photograph'?'Photo d’un bien présenté':kind==='render'?'Rendu de présentation':'Visuel d’ambiance';
