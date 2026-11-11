# Dubaï — Achat & vente

L’entrée principale `/destination/dubai/achat-vente` présente deux cartes :

- Achat sur plan (`Off-plan`) → `/destination/dubai/achat-vente/sur-plan`.
- Marché secondaire (`Resale`) → `/destination/dubai/achat-vente/marche-secondaire`.

Les menus conservent l’entrée « Achat & vente ». Les listes réutilisent `CataloguePage` et ses filtres, tri et fiches. Les paramètres de recherche sont transmis aux catégories et au retour vers le choix. Les URL `/bien/{id}`, les identifiants des favoris et les contacts contextualisés restent inchangés. Les invitations de contact des listes vides préremplissent Dubaï dans le formulaire existant.

## Classement explicite

`saleMarket` est un champ indépendant de la date de livraison et de l’avancement du bien :

- `off-plan` : acquisition auprès du promoteur sur plan, confirmée par l’agence.
- `resale` : revente confirmée ; elle peut concerner un bien achevé ou encore en construction.
- `unconfirmed` : type de vente à confirmer.

Les listes des deux catégories ne présentent que des offres réelles (`isDemo: false`) explicitement classées. Les annonces illustratives restent dans les données et leurs anciennes fiches/favoris ne sont pas supprimés ; elles ne remplissent pas ces deux listes.

À ce stade, les trois offres réelles sont conservées sous les cartes de choix, avec une mention de classement à confirmer :

| Offre | Informations disponibles | Information manquante |
| --- | --- | --- |
| Oak Yard Residences | Livraison prévisionnelle annoncée et prix comptant/20-80 | Achat auprès du promoteur ou revente |
| LILY TOWER | Phase 2 et paiement après livraison | Achat auprès du promoteur ou revente |
| Appartement meublé de 2 chambres à Dubai Islands | Paiement comptant et livraison prévisionnelle annoncée | Achat auprès du promoteur ou revente |

Aucune des deux listes ne contient encore d’offre confirmée : chacune invite sobrement à contacter l’agence. Aucune classification n’a été déduite du seul calendrier, du plan de paiement, de l’ameublement ou de la présence d’un logo dans un média.

Les deux visuels du choix sont des médias locaux existants : `/assets/hero/hero-dubai.jpeg` et `/assets/dubai-terrace.jpg`. Les textes alternatifs et une mention visible les identifient comme des illustrations d’ambiance, sans lien avec une offre précise.

## Bloc Agence

`agencyReasons` dans `src/content.js` centralise les cinq arguments fournis par le client. `AgencyReasons` remplace les trois valeurs, avec les icônes existantes de lucide-react. Le paragraphe éditorial sur les échanges à distance, au téléphone ou en personne a été retiré car il est repris dans le nouvel argument consacré à l’équipe. Introduction, image, autres paragraphes, méthode, FAQ et invitation au contact sont conservés.

Contrôles limités au diff, aux références/liens, au classement et aux traductions. Aucun test, compilation, navigateur ou capture du site ; rendu et fonctionnement non testés.
