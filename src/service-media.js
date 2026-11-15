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
      "src": "/assets/services/achat-maroc-rabat-2160.webp",
      "srcSet": "/assets/services/achat-maroc-rabat-640.webp 640w, /assets/services/achat-maroc-rabat-1280.webp 1280w, /assets/services/achat-maroc-rabat-2160.webp 2160w",
      "width": 2160,
      "height": 1440,
      "alt": "Villa avec patio et piscine à Rabat ; photographie de service, sans offre de vente associée.",
      "kind": "photograph",
      "position": {
        "desktop": "55% 54%",
        "mobile": "57% 54%"
      },
      "editorialPosition": {
        "desktop": "55% 54%",
        "mobile": "57% 54%"
      }
    },
    "dubai": {
      "src": "/assets/services/achat-dubai-contemporaine-2160.webp",
      "srcSet": "/assets/services/achat-dubai-contemporaine-640.webp 640w, /assets/services/achat-dubai-contemporaine-1280.webp 1280w, /assets/services/achat-dubai-contemporaine-2160.webp 2160w",
      "width": 2160,
      "height": 1440,
      "alt": "Villa contemporaine avec piscine à Dubaï ; photographie de service, sans offre de vente associée.",
      "kind": "photograph",
      "position": {
        "desktop": "55% 50%",
        "mobile": "58% 50%"
      },
      "editorialPosition": {
        "desktop": "57% 52%",
        "mobile": "60% 52%"
      }
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
      "caption": "Photo d’un bien présenté",
      "editorialPosition": {
        "desktop": "60% 53%",
        "mobile": "63% 53%"
      }
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
      "caption": "Photographie d’illustration",
      "editorialPosition": {
        "desktop": "64% 52%",
        "mobile": "67% 52%"
      }
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
      "caption": "Photo d’un bien présenté",
      "editorialPosition": {
        "desktop": "38% 55%",
        "mobile": "39% 55%"
      }
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
      "caption": "Photographie d’illustration",
      "editorialPosition": {
        "desktop": "50% 54%",
        "mobile": "49% 54%"
      }
    }
  },
  "decoration": {
    "maroc": {
      "src": "/assets/services/decoration-maroc-jardins-1448.webp",
      "srcSet": "/assets/services/decoration-maroc-jardins-640.webp 640w, /assets/services/decoration-maroc-jardins-1280.webp 1280w, /assets/services/decoration-maroc-jardins-1448.webp 1448w",
      "width": 1448,
      "height": 1086,
      "alt": "Mobilier, matières et lumière d’un salon à Dar Bouazza ; décoration non attribuée à Sarouty.",
      "kind": "photograph",
      "position": {
        "desktop": "55% 55%",
        "mobile": "58% 55%"
      },
      "editorialPosition": {
        "desktop": "56% 54%",
        "mobile": "58% 54%"
      }
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
      "caption": "Photographie d’illustration",
      "editorialPosition": {
        "desktop": "64% 52%",
        "mobile": "66% 52%"
      }
    }
  },
  "hotels-appartements": {
    "maroc": {
      "src": "/assets/services/hotel-piscine-visuel-client-1535.webp",
      "srcSet": "/assets/services/hotel-piscine-visuel-client-640.webp 640w, /assets/services/hotel-piscine-visuel-client-1024.webp 1024w, /assets/services/hotel-piscine-visuel-client-1535.webp 1535w",
      "width": 1535,
      "height": 1024,
      "alt": "Façade d’un bâtiment hôtelier éclairé au bord d’une piscine, entourée de végétation.",
      "kind": "illustration",
      "position": {
        "desktop": "50% 55%",
        "mobile": "52% 55%"
      },
      "editorialPosition": {
        "desktop": "50% 55%",
        "mobile": "52% 55%"
      }
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

// Client compositions used only by the paired home and services presentations.
export const serviceCompositions={
  "achat-vente": {
    "src": "/assets/services/compositions/achat-vente-1024.webp",
    "srcSet": "/assets/services/compositions/achat-vente-640.webp 640w, /assets/services/compositions/achat-vente-1024.webp 1024w",
    "width": 1024,
    "height": 765,
    "alt": "Composition d’illustration pour l’achat et la vente : villas, partie Maroc à gauche et partie Dubaï à droite.",
    "position": {
      "desktop": "center",
      "mobile": "center"
    }
  },
  "location": {
    "src": "/assets/services/compositions/location-1024.webp",
    "srcSet": "/assets/services/compositions/location-640.webp 640w, /assets/services/compositions/location-1024.webp 1024w",
    "width": 1024,
    "height": 765,
    "alt": "Composition d’illustration pour la location : deux intérieurs résidentiels, Maroc à gauche et Dubaï à droite.",
    "position": {
      "desktop": "center",
      "mobile": "center"
    }
  },
  "locaux-professionnels": {
    "src": "/assets/services/compositions/locaux-professionnels-1024.webp",
    "srcSet": "/assets/services/compositions/locaux-professionnels-640.webp 640w, /assets/services/compositions/locaux-professionnels-1024.webp 1024w",
    "width": 1024,
    "height": 765,
    "alt": "Composition d’illustration de bureaux : partie Maroc à gauche et partie Dubaï à droite.",
    "position": {
      "desktop": "center",
      "mobile": "center"
    }
  },
  "decoration": {
    "src": "/assets/services/compositions/decoration-1024.webp",
    "srcSet": "/assets/services/compositions/decoration-640.webp 640w, /assets/services/compositions/decoration-1024.webp 1024w",
    "width": 1024,
    "height": 765,
    "alt": "Composition d’illustration d’intérieurs aménagés : Maroc à gauche et Dubaï à droite.",
    "position": {
      "desktop": "center",
      "mobile": "center"
    }
  }
};
