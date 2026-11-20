# Décoration & aménagement — Dubaï

Page : `#/destination/dubai/decoration`. Le composant `DecorationServicePage`, dans `src/components/MoroccoDecorationPage.jsx`, est le composant Maroc existant rendu commun aux deux destinations. Aucun second composant équivalent n’est créé. L’alias `MoroccoDecorationPage` reste disponible.

`decorationPageDestinations` dans `src/content.js` sélectionne le repère de destination et les médias. Les cinq textes, le titre, l’introduction et le CTA sont identiques à ceux demandés pour le Maroc : leurs clés `decorMorocco.*` existantes sont réutilisées sans modification de valeur. Les clés `decorDubai.*` contiennent le repère Dubaï et les cinq textes alternatifs spécifiques. Les données et chemins de médias Maroc sont préservés.

## Crédits et association des images

Source : cinq illustrations générées fournies par le client dans la conversation du 20 novembre 2026, avec leurs fichiers locaux dans `C:/Users/USER/Downloads/`. Auteur individuel et outil de génération non renseignés. Utilisation demandée pour présenter le service de décoration à Dubaï. Ces images ne représentent pas des réalisations clients, des chantiers livrés ou des biens disponibles. Aucun lieu précis ni adresse n’est attribué aux vues urbaines.

| Volet | Fichier client | Nom local dans `originals/` | Sujet |
| --- | --- | --- | --- |
| Conception sur mesure | `e0eb96e3-dcb5-481a-8f47-984816e8a113.webp` | `conception-sur-mesure.webp` | Vue d’ensemble du séjour contemporain |
| Matières & couleurs | `d021924b-093c-428a-aa1a-556cdd38e829.webp` | `matieres-couleurs.webp` | Échantillons de pierre, bois et textiles |
| Mobilier & agencement | `cfcdf3c4-456e-455d-83fa-daf936d0e29e.webp` | `mobilier-agencement.webp` | Séjour et salle à manger sous un autre angle, rangements et circulations |
| Éclairage & ambiance | `29e28148-7ce2-47ff-86af-bc84b4667cf6.webp` | `eclairage-ambiance.webp` | Séjour éclairé en soirée |
| Finitions & détails | `71d8b95b-8320-417f-aa74-c16922ff6765.webp` | `finitions-details.webp` | Vase, sculpture, livre et lampe sur un meuble |

Les originaux WebP **1024 × 687 px** sont conservés à l’identique dans `public/assets/services/decoration-dubai/originals/` et servent de source native 1024w. Comparaison SHA-256 effectuée avec les cinq fichiers fournis. Deux variantes par image, **480 × 322 px** et **768 × 515 px**, sont enregistrées dans le dossier parent. Aucun agrandissement, accentuation, recadrage destructif ou modification du contenu.

`ServicePhoto` conserve les dimensions intrinsèques, le chargement différé, `srcSet` 480/768/1024w et `sizes`. Le cadre commun 3:2 conserve pratiquement le ratio source. Les positions de cadrage ordinateur/mobile sont renseignées par image. Aucun média Maroc, carte de l’accueil ou visuel des autres services n’est remplacé. Aucune mention générique n’est ajoutée sous les images.

## Parcours et compatibilité

Les anciens accès `#/inspiration/INT-DXB-01` et `#/inspiration/INT-DXB-02` sont normalisés vers la page de service Dubaï. Les données et médias des anciennes inspirations restent conservés. Les alias Maroc restent inchangés.

Le CTA « Parlons de votre intérieur » reprend `service.subject` du service existant, `destination=dubai` et la section Contact de l’accueil. Aucun envoi au clic. Les traitements WhatsApp, Gmail SMTP et la validation ne sont pas modifiés.

Contrôles limités au diff, aux formats et dimensions des médias, à la conservation des originaux, aux chemins, aux références et traductions. Aucun test automatisé, build, navigateur, capture ou e-mail de test. Rendu à vérifier visuellement.
