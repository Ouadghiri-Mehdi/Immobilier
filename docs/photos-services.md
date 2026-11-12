# Photographies des services

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
