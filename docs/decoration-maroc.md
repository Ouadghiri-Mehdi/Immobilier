# Décoration & aménagement — Maroc

La page `#/destination/maroc/decoration` utilise `MoroccoDecorationPage` et les cinq volets de `moroccoDecorationSections` dans `src/content.js`. Les textes FR/EN sont centralisés sous les clés `decorMorocco.*`. Dubaï et les visuels de l’accueil ne sont pas modifiés.

## Provenance et correspondance des visuels

Source : illustrations générées fournies par le client dans la conversation du 20 novembre 2026. Auteur individuel et outil de génération non renseignés. Ces illustrations présentent le service ; elles ne représentent pas des réalisations clients, des biens disponibles ou des chantiers livrés par Sarouty.

Les cinq fichiers originaux sont désormais accessibles dans `C:/Users/USER/Downloads/` et intégrés sans doublon de contenu :

| Volet | Fichier client | Nom local dans `originals/` | Sujet |
| --- | --- | --- | --- |
| Conception sur mesure | `325c97f3-d8ce-484a-885c-28aa83876e58.webp` | `conception-sur-mesure.webp` | Salon de jour, poutres et ouverture sur le patio |
| Matières & couleurs | `351c7b50-0352-48e3-8867-f44bff06c365.webp` | `matieres-couleurs.webp` | Échantillons de matières et nuancier |
| Mobilier & agencement | `09b211e1-9c18-4700-ad1c-b9adaeff60fa.webp` | `mobilier-agencement.webp` | Canapé, fauteuils et niches, vus sous un autre angle |
| Éclairage & ambiance | `dbe6b579-03d5-4e99-b145-8294ec8baa57.webp` | `eclairage-ambiance.webp` | Salon en soirée, suspension et éclairage chaud |
| Finitions & détails | `17702391-cecd-49f8-a53c-7eb87a0dcde9.webp` | `finitions-details.webp` | Vase, branche d’olivier, coupe et textile |

Chaque original est un WebP de **1024 × 687 px**, copié à l’identique dans `public/assets/services/decoration-maroc/originals/`. Les comparaisons SHA-256 confirment la conservation des fichiers fournis. Le fichier original sert aussi de source native 1024w, sans réencodage ni copie supplémentaire à cette taille.

Deux variantes WebP par image, **480 × 322 px** et **768 × 515 px**, sont enregistrées dans `public/assets/services/decoration-maroc/`, sans agrandissement, recadrage destructif, accentuation ni modification de contenu. Les cinq objets `media` dans `src/content.js` réutilisent `ServicePhoto` : `srcSet` 480/768/1024w, dimensions intrinsèques, cadrages ordinateur/mobile et descriptions accessibles FR/EN. Le cadre commun 3:2 conserve pratiquement toutes les proportions des originaux. Le chargement reste différé.

Les textes alternatifs identifient ces médias comme des illustrations générées, sans les attribuer à des réalisations clients. Aucun avertissement générique n’est ajouté sous les visuels. Aucun média de Dubaï ou de l’accueil n’est remplacé.

Contrôles limités au diff, aux dimensions et formats réels, à l’intégrité des originaux, aux chemins locaux et aux références FR/EN. Aucun test automatisé, build, navigateur ou capture du site n’a été lancé pour cette intégration ; le rendu reste à vérifier visuellement.

## Parcours

Le bouton de contact utilise le sujet canonique du service existant, la destination `maroc` et la section Contact de l’accueil. Aucun envoi n’a lieu au clic. Les anciennes URL `#/inspiration/INT-MAR-01` et `#/inspiration/INT-MAR-02` sont conservées comme accès à la page de service Maroc. Les sources et médias anciens restent présents pour leurs autres usages éventuels.
