# Rubrique hôtelière et tarifs de location

« Hôtel & Appart Hôtel » (`Hotels & Aparthotels`) concerne l’acquisition d’hôtels, d’appart’hôtels et de maisons d’hôtes au Maroc. Aucun service de réservation, de gestion hôtelière, rendement ou garantie n’est ajouté.

Le slug technique `hotels-appartements` est conservé : les liens vers la rubrique marocaine et `/services?activite=hotels-appartements` restent valides. `categoriesForDestination` centralise les cinq rubriques du Maroc et les quatre de Dubaï pour les menus, cartes et liens contextualisés.

L’ancienne destination `/destination/dubai/hotels-appartements` est normalisée vers `/destination/dubai`. L’ancien sujet de contact `Séjour` est normalisé en `Projet hôtelier`. Les autres paramètres de navigation sont conservés. Le formulaire hôtelier propose le Maroc et ne demande plus de dates de séjour.

## Annonces et favoris

Les données d’origine restent intactes. Quatre exemples à la nuitée ont été retirés de l’affichage public : `MAR-007`, `MAR-008`, `DXB-007`, `DXB-008`. Aucun exemple de séjour n’est transformé en hôtel à vendre. Aucune offre réelle d’acquisition hôtelière n’est actuellement renseignée et aucune offre réelle ne nécessite donc de reclassement.

Les anciens liens de fiches affichent une explication du retrait. Les identifiants enregistrés dans `rivage-favorites` ne sont pas renommés ni supprimés : les favoris retirés sont présentés séparément, avec possibilité de les enlever de la sélection.

Pour publier une nouvelle offre dans cette rubrique, renseigner une offre réelle (`isDemo: false`) au Maroc, avec une acquisition explicite (`transaction: 'sale'` ou `status: 'À vendre'`) et sans unité de prix périodique. `isPublicProperty` empêche de publier comme acquisition une ancienne annonce à la nuitée ou une offre au classement non confirmé. En l’absence d’offre adaptée, le catalogue invite à contacter l’agence.

## Tarifs et icônes

Les locations résidentielles et professionnelles affichent un astérisque et « * Tarif à vérifier en fonction de la saison. » (`* Rate subject to confirmation depending on the season.`), sur les cartes et fiches. Les montants et unités ne changent pas. Aucun astérisque n’est affiché pour une vente ou un prix non chiffré ; la note apparaît une fois par bloc tarifaire.

Les SVG Facebook/Instagram passent de 18 à 21 px (environ +17 %), avec les mêmes liens et styles. Le SVG local `WhatsAppIcon` remplace l’icône générique sur le bouton flottant et les commandes WhatsApp, sans dépendance supplémentaire ni changement des coordonnées ou messages.

Contrôles limités au diff, aux références, aux liens et à la cohérence des traductions. Aucun test, compilation, navigateur, capture, commit, push ou déploiement ; rendu et fonctionnement non testés.
