# Photographies des services

## Compositions complètes fournies par le client — accueil et Nos services

Les fichiers client `achat&vente.webp`, `location immobiliere.webp`, `Locaux profesionnel.webp` et `decoration.webp` mesurent chacun 1024 × 765. Ils sont conservés sans modification sous `public/assets/services/compositions/originals/`, avec les noms des quatre rubriques. Les variantes 640 px sont réduites proportionnellement ; les variantes 1024 px sont des copies exactes des originaux WebP, sans recompression ni agrandissement.

`serviceCompositions` dans `src/service-media.js` est distinct de `serviceMedia`. Seuls les appels `paired` de l’accueil et de Nos services utilisent ces nouvelles compositions, avec une seule image, affichée intégralement au rapport d’origine et sans séparation centrale CSS supplémentaire. Les repères Maroc et Dubaï sont ajoutés par le site ; ils désignent les deux parties de ces visuels éditoriaux fournis par le client. Aucun établissement, bien disponible ou réalisation Sarouty n’est identifié par ces compositions. Auteur et licence autonome non communiqués.

Les médias individuels des destinations, la couverture Décoration dédiée, les inspirations et le visuel Hôtel & Appart Hôtel restent inchangés. Les textes alternatifs sont disponibles en FR/EN. Les dimensions et `srcSet` sont renseignés et le chargement reste différé. La définition maximale reste celle des fichiers fournis : 1024 px de large, sans prétendre obtenir une définition supérieure par conversion.

## Nouvelle présentation éditoriale et visuel hôtelier — 14 novembre 2026

Le fichier client `Hôtel de luxe au bord de la piscine.png` remplace le riad précédent dans la configuration du service hôtelier : original copié sans modification dans `public/assets/services/hotel-piscine-visuel-client.png` (1535 × 1024), variantes WebP 640, 1024 et 1535 pixels de large, qualité 87, sans agrandissement. Le fichier a été examiné visuellement. Les huit photographies des quatre autres services restent les mêmes.

Source : fichier joint par le client pour cette utilisation éditoriale. Auteur, établissement représenté, localisation et licence autonome non communiqués ; aucune provenance géographique ou licence libre n’est inventée. Le repère Maroc désigne le périmètre du service, sans identifier le lieu représenté. Le visuel ne constitue ni une annonce ni la photographie d’un hôtel proposé à la vente. Le texte alternatif FR/EN décrit seulement un bâtiment hôtelier éclairé, une piscine et la végétation.

La référence partagée sert à l’accueil, à Nos services, aux cartes de la destination Maroc et à la présentation dédiée à l’acquisition hôtelière. Cette dernière n’avait pas de couverture : elle utilise désormais `ServiceVisual` avec le même média, sans second jeu de données.

`servicesPageContent` dans `src/content.js` et la variante explicite `ServiceDetails variant="editorial"` limitent la nouvelle rédaction à Nos services. Les introductions, publics utiles et listes remplacent les conclusions répétitives ; les autres usages du composant restent inchangés. Les cadrages `editorialPosition` concernent les cadres 4/3 sur ordinateur et 3/2 sur mobile et tablette de cette page ; les positions des autres emplacements restent indépendantes.

## Mise à jour du 14 novembre 2026

Les deux anciennes photographies Achat ne sont plus utilisées par les services. La villa marocaine trop petite et la maison méditerranéenne de Dubaï rejetée restent seulement dans les fichiers historiques ; aucun média d’annonce n’a été modifié.

| Usage actuel | Fichiers dans `public/assets/services/` | Source, auteur et droits |
| --- | --- | --- |
| Achat / Maroc | `achat-maroc-rabat-{640,1280,2160}.webp` | [Pexels 21273694](https://www.pexels.com/photo/patio-with-a-swimming-pool-21273694/), Mounir El Barji, licence Pexels. La page indique une villa à Rabat, Maroc, original 5472 × 3648 et appareil Canon EOS 6D. Fichier de travail téléchargé à 2400 × 1600. |
| Achat / Dubaï | `achat-dubai-contemporaine-{640,1280,2160}.webp` | [Pexels 10647324](https://www.pexels.com/photo/white-and-brown-concrete-building-near-the-swimming-pool-10647324/), Abid Ali, licence Pexels. La page indique une villa à Dubaï, Émirats arabes unis, original 5760 × 3840 et appareil Canon EOS 5D Mark III. Fichier de travail téléchargé à 2400 × 1600. |
| Décoration / Maroc | `decoration-maroc-jardins-{640,1280,1448}.webp` | Photo client du salon Jardins de l’Océan 1051 à Dar Bouazza, issue du PDF client déjà documenté dans `jardins-ocean-1051.md`. Original local 1448 × 1086, intact ; auteur non communiqué, droits fournis par le client à documenter par l’agence. |

Les six autres photographies et leurs sources décrites ci-dessous restent utilisées. Les trois nouvelles photographies ont été examinées visuellement, puis réduites proportionnellement en WebP, qualité 86, sans agrandissement ni retouche de contenu. Le nouveau salon marocain est plus lumineux et conserve mobilier, matières et éclairage. Un intérieur de bureaux trouvé sur Pexels 19893586 a été écarté pour son apparence de rendu ; aucun fichier correspondant n’a été ajouté au site.

Les cartes partagées affichent uniquement Maroc puis Dubaï, dans cet ordre explicite. Le service hôtelier garde une seule photo au Maroc. Les textes alternatifs et cette documentation conservent la qualification éditoriale : ces photographies ne constituent ni une offre disponible ni une réalisation Sarouty.

Les cadres de Nos services sont désormais au rapport 16/9. Les fichiers de bureaux marocains restent limités à 869 × 652 dans le PDF lui-même : aucun original local plus grand n’a été trouvé. Cette limite reste à considérer sur les grands écrans haute densité ; aucun agrandissement artificiel n’est présenté comme une amélioration de définition.

La sélection et les variantes antérieures ci-dessous constituent l’historique des sources ; seules les nouvelles références Achat et Décoration/Maroc ci-dessus font foi pour ces trois usages.

Sélection du 12 novembre 2026. Configuration commune : `src/service-media.js` ; affichage : `src/components/ServiceVisual.jsx`. Les quatre services communs associent Maroc et Dubaï sur l’accueil, avec séparation verticale et repères géographiques. Les destinations utilisent seulement leur propre photographie. L’hôtellerie reste limitée au Maroc.

## Photographies externes

Les cinq pages sources ci-dessous indiquent une photographie téléchargeable sous la [licence Pexels](https://www.pexels.com/license/). Cette licence autorise la diffusion sur un site commercial, la modification et le redimensionnement, sans attribution obligatoire. Elle interdit notamment de suggérer un soutien des personnes ou marques représentées, la revente de copies non modifiées et la redistribution comme banque d’images. Les crédits sont conservés ici. Aucun partenariat, mandat de vente ou réalisation Sarouty n’est déduit des photographies.

| Usage | Fichiers locaux dans `public/assets/services/` | Auteur | Source et justification géographique |
| --- | --- | --- | --- |
| Achat / Dubaï | `achat-dubai-640.webp`, `achat-dubai-1440.webp` | aboodi vesakaran | [Pexels 31215770](https://www.pexels.com/photo/charming-mediterranean-style-house-in-dubai-31215770/) : maison de style méditerranéen ; localisation publiée « Dubai, Dubai, United Arab Emirates ». |
| Location / Dubaï | `location-dubai-640.webp`, `location-dubai-1440.webp` | Real Estate 4k (Realestatedubai1) | [Pexels 33621947](https://www.pexels.com/photo/modern-luxurious-apartment-interior-in-dubai-33621947/) : intérieur d’appartement ; localisation publiée Dubaï. Aucune disponibilité locative déduite. |
| Locaux professionnels / Dubaï | `professionnels-dubai-640.webp`, `professionnels-dubai-1440.webp` | Jayant V Nath | [Pexels 39962506](https://www.pexels.com/photo/modern-architecture-in-downtown-dubai-39962506/) : la description source identifie des bâtiments de bureaux à Dubaï. |
| Décoration / Dubaï | `decoration-dubai-640.webp`, `decoration-dubai-1440.webp` | Atul Mohan | [Pexels 18266460](https://www.pexels.com/photo/couch-and-carpet-in-living-room-18266460/) : salon, mobilier et textiles ; localisation publiée Dubaï. Décoration non attribuée à Sarouty. |
| Hôtel / Maroc | `hotel-maroc-640.webp`, `hotel-maroc-1440.webp` | Zakaria HANIF | [Pexels 10573397](https://www.pexels.com/photo/courtyard-with-a-pool-in-riad-maktoub-hotel-ajt-bin-haddu-morocco-10573397/) : le titre source identifie le Riad Maktoub à Aït Ben Haddou ; localisation publiée dans la région de Ouarzazate, Maroc. Cette photographie illustre un établissement hôtelier, sans annoncer sa vente. |

Téléchargements : fichiers JPEG de `images.pexels.com/photos/{identifiant}/pexels-photo-{identifiant}.jpeg?auto=compress&cs=tinysrgb&w=1800`, puis conversion locale en WebP. Les fichiers ont été décodés et examinés comme images ; aucun montage promotionnel, texte incrusté ou filigrane retenu. Les pages des quatre photographies de Dubaï précisent également un appareil photographique. Un autre visuel de bureaux dont la nature photographique était douteuse a été écarté.

## Photographies marocaines déjà fournies au projet

Les quatre photographies suivantes proviennent des documents clients déjà intégrés. Elles sont réutilisées dans le cadre de la demande sur ces médias fournis, sans revendiquer une licence libre. Le nom de leur photographe et une licence autonome ne figurent pas dans les sources disponibles ; la traçabilité de l’autorisation client doit rester conservée par l’agence. Aucun auteur n’est inventé.

| Usage | Fichiers locaux dans `public/assets/services/` | Original intact dans `public/assets/properties/` | Document source client |
| --- | --- | --- | --- |
| Achat / Maroc | `achat-maroc-580.webp` | `dar-bouazza-villa-1038/dar-bouazza-villa-1038-piscine.jpg` | `FICHE TECHNIQUE Villa individuelle 1038.pdf` : villa à Dar Bouazza. |
| Location / Maroc | `location-maroc-640.webp`, `location-maroc-1440.webp` | `cfc-1047/cfc-1047-salon.jpg` | `Fiche-technique App CFC 1047.pdf` : appartement à Casablanca Finance City. |
| Locaux professionnels / Maroc | `professionnels-maroc-640.webp`, `professionnels-maroc-869.webp` | `oulfa-bureaux-1037/oulfa-bureaux-1037-plateau.jpg` | `FICHE TECHNIQUE Plateaux bureaux Oulfa 1037.pdf` : bureaux à Oulfa, Casablanca. |
| Décoration / Maroc | `decoration-maroc-640.webp`, `decoration-maroc-960.webp` | `prestigia-ville-verte-1023/prestigia-ville-verte-1023-salon.jpg` | `FICHE TECHNIQUE Villa Ville Vert Prestigia 1023.pdf` : intérieur à Bouskoura. Pas de prestation décorative Sarouty revendiquée. |

La photo de villa marocaine est limitée à 580 × 435 px par son original. Elle convient mieux à la demi-image de l’accueil qu’aux grands écrans haute densité : un original plus défini serait utile. Elle n’a pas été agrandie artificiellement. Les autres photographies clientes ne sont pas agrandies au-delà de leur définition disponible.

## Préparation et intégration

- Neuf photographies, dix-sept fichiers WebP ; réduction proportionnelle, qualité 85, sans retouche de contenu ni recadrage dans les fichiers. Les originaux des annonces et PDF restent inchangés.
- `src`, `srcSet`, dimensions intrinsèques, cadrages ordinateur/mobile et légendes sont centralisés dans `src/service-media.js`. Le navigateur choisit la résolution adaptée via `sizes` et `srcSet` ; aucun téléchargement distant n’est nécessaire à l’affichage.
- Les cadres existants réservent leur hauteur ; les dimensions `width` / `height` sont renseignées. Chargement différé par défaut et décodage asynchrone via `Photo`.
- Les cadrages CSS sont propres à chaque photographie et aux deux tailles d’écran ; `object-fit: cover` conserve les proportions. Aucun filtre de couleur, zoom ou mouvement supplémentaire n’est ajouté. La photographie intégrale reste dans le fichier, même lorsque le cadre en recadre les bords.
- Les repères Maroc/Dubaï, légendes et textes alternatifs ont leurs traductions FR/EN. Les photographies externes sont explicitement illustratives ; elles ne représentent ni une annonce disponible ni une réalisation Sarouty.
- Les médias des inspirations existantes restent inchangés et indépendants de cette nouvelle sélection de services.

Contrôles limités aux fichiers images, chemins, sources, ressources FR/EN et différences de code. Aucun test, compilation, navigateur, capture du site, commit, push ou déploiement. Les cadrages dans les composants, la lisibilité et le responsive restent à vérifier visuellement.
