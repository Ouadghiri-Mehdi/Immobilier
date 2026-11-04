# Oak Yard Residences — données et médias

Offre communiquée par le client, intégrée dans `src/data.js` avec
`isDemo:false`. Le slug `oak-yard-residences` sert uniquement au routage, aux
favoris et au contexte de contact : il ne constitue pas une référence d’unité.
Aucun promoteur, frais, rendement, commission ou nombre d’unités restantes n’est ajouté.

- Catalogue : `#/destination/dubai/achat-vente`.
- Fiche : `#/bien/oak-yard-residences`.
- Filtres : JVC, type « Penthouse duplex », 3 chambres ; budget et tri utilisent
  le prix de départ comptant de 6 300 000 AED, sans conversion de devise.
- Deux conditions présentées séparément : 6 300 000 AED comptant ou 7 000 000 AED
  selon un plan 20/80. Les échéances du plan ne sont pas fournies ni inventées.
- Surface conservée sur confirmation du client : 5 645 sq. ft., environ 524 m²,
  sur deux niveaux, aux deux derniers étages résidentiels.
- Trois chambres avec salles de bains privatives, chambre de service, deux cuisines,
  deux salons, piscine privée, grandes terrasses, semi-meublé, trois places de parking.
- Vues annoncées à 180° sur Burj Khalifa et Burj Al Arab ; livraison prévisionnelle
  annoncée en décembre 2026 ; disponibilité sur demande.

## Écart entre les informations et la vidéo

Le plan dans la vidéo indique 5 616,30 sq. ft. / 521 m² et porte un numéro d’unité.
Le client a confirmé de conserver 5 645 sq. ft. / environ 524 m² pour l’offre et
de signaler cet écart. Une mention visible sous le lecteur précise donc que la
correspondance du plan avec l’offre reste à confirmer. Le numéro du plan n’est
pas repris comme référence d’unité dans les données ou les messages de contact.

## Médias locaux

- Source fournie : `C:\Users\USER\Downloads\WhatsApp Video 2026-10-27 at 18.30.57.mp4`.
- Copie locale : `public/assets/properties/oak-yard/oak-yard-residences.mp4`.
- Vidéo originale : 6 093 296 octets (6,09 Mo ; environ 5,81 Mio), 832 × 464 px,
  60 images/seconde, environ 51,37 secondes. Aucune modification du montage.
- Couverture et poster : `public/assets/properties/oak-yard/oak-yard-residences-poster.jpg`,
  image extraite à 35,5 secondes, aux dimensions natives, sans agrandissement.
- Les images sont des visuels promotionnels avec rendus, pas une preuve photographique
  de l’état réel du chantier. Cette distinction figure dans la fiche et le texte alternatif.

La carte n’affiche que le JPEG. Le lecteur MP4 n’existe que dans la fiche, avec
commandes natives, `playsInline`, `preload="metadata"`, sans lecture automatique.
Les autres annonces et leurs galeries restent dans leur structure existante.
Les appels WhatsApp et les demandes contextualisées reprennent Oak Yard Residences
et l’URL de la fiche sur le domaine effectivement utilisé, sans domaine inventé.

Aucune limite de stockage local n’a été rencontrée. Les quotas du fournisseur de
déploiement et la diffusion vidéo en production n’ont pas été vérifiés : aucun
push ni déploiement n’est effectué dans cette intervention.

Contrôles limités au diff, aux données et aux chemins des médias. Aucune compilation,
test, ouverture de navigateur ou capture du site n’est exécuté. Les extractions
d’images depuis la vidéo sont les seules captures de média réalisées, conformément
à l’autorisation du client. Le rendu et le fonctionnement restent à vérifier.
