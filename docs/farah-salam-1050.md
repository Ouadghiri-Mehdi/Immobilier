# Appartement familial à Farah Salam — référence 1050

Offre dans Maroc → Achat & vente, fiche `#/bien/farah-salam-1050`. Les données et les traductions utilisent les composants existants. Prix : 1 250 000 DH ; surface : 100 m² ; trois chambres et deux salles de bains. Double salon, cuisine équipée, suite parentale avec dressing, parking titré, box privatif de 8 m², résidence fermée et sécurisée avec concierge et ascenseur, charges de syndic de 250 DH/mois.

## Point à confirmer

Le PDF indique le 4e étage dans la description et le 1er dans le tableau. Aucun étage n’est enregistré dans les données de l’annonce. Un rappel de confirmation accompagne l’aperçu du PDF, qui reste intégralement inchangé et contient donc les deux mentions originales. Les contacts du document n’ont pas été repris dans la configuration Sarouty ; les demandes du site gardent le numéro déjà configuré et ajoutent la référence 1050 au titre et au lien.

## Médias locaux

Dossier : `public/assets/properties/farah-salam-1050/`.

| Fichier | Image intégrée source | Dimensions | Taille |
| --- | --- | --- | --- |
| `farah-salam-1050-salon.jpg` | xref 105, page 3 | 1448 × 1086 | 315 498 octets |
| `farah-salam-1050-cuisine.jpg` | xref 106, page 3 | 1448 × 1086 | 206 328 octets |
| `farah-salam-1050-chambre.jpg` | xref 178, page 5 | 1448 × 1086 | 318 166 octets |
| `farah-salam-1050-salle-de-bains.jpg` | xref 142, page 4 | 1448 × 1086 | 245 818 octets |

Photos extraites directement des objets image du PDF, sans capture de page. JPEG optimisés pour le web, qualité 86, sans agrandissement, recadrage ou modification du contenu. Les logos et images décoratives floutées ont été exclus. Le salon sert de couverture. La galerie de la fiche affiche le salon avec les aperçus cuisine/chambre ; la salle de bains reste disponible dans la galerie superposée des quatre photos.

`farah-salam-1050-fiche-technique.pdf` est une copie intégrale du fichier fourni `FICHE TECHNIQUE App Farah Salam 1050.pdf` : 50 760 314 octets, cinq pages. Son empreinte SHA-256 correspond à l’original ; aucune modification ni compression du PDF.

## Consultation réutilisable du PDF

`src/components/PropertyFactsheet.jsx` utilise `property.pdf.src` et `property.pdf.filename`. Le bouton est absent si aucun PDF n’est associé. La fenêtre native `dialog` et l’objet PDF ne sont montés qu’après activation du bouton ; aucune ressource PDF n’est chargée avec la fiche fermée. Les actions de téléchargement et d’ouverture dans un nouvel onglet restent accessibles indépendamment de la prise en charge de l’aperçu. Le contenu du PDF reste en français dans les deux langues de l’interface.

Le dialogue prévoit le focus initial sur la fermeture, le confinement du focus natif, la fermeture via Échap et le retour du focus à l’élément déclencheur. Aucun de ces comportements n’a été testé dans un navigateur, conformément au périmètre demandé.

Contrôles limités au diff, aux données et aux chemins des médias, avec lecture du PDF et extraction de ses images. Aucun test, compilation, navigateur, capture du site, commit, push ou déploiement.
