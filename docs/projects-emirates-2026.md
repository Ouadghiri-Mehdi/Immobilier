# Programmes des Émirats — intégration du 15 novembre 2026

## Publication et géographie

Les sept entrées sont centralisées dans `src/new-projects.js`. Les fiches existantes, identifiants et favoris ne sont pas renommés. Les médias responsive sont décrits dans `src/project-media.json`, les textes dans `src/i18n/projects.fr.json` et `projects.en.json`, fusionnés dans le traducteur existant.

Programmes publiés localement dans Dubaï → Achat & vente → Achat sur plan :

| Programme | Route | Conditions retenues |
|---|---|---|
| SquareX One | `/#/bien/squarex-one` | Prix marketing annoncés par typologie, distincts de l’inventaire ; disponibilité à actualiser. Plan 5/95 : 5 % + 95 × 1 %, dont le premier mois, puis 94 mensualités restantes. DLD 4 % annoncé en supplément. |
| SHIONE | `/#/bien/shione` | Prix sur demande, faute de grille actuelle confirmée ; plan 50/50 et EOI 50 000 AED présentés comme annoncés et à confirmer, sans promesse de remboursement. |
| Taormina Village | `/#/bien/taormina-village` | Présentation du programme, prix et calendrier sur demande. Le lot promotionnel non identifié n’est pas publié. |
| DAMAC Islands 2 | `/#/bien/damac-islands-2` | Programme avec cinq typologies et surfaces commercialisables ; prix et conditions sur demande. |

L’accès `/#/emirats`, depuis le catalogue de Dubaï, dessert `/#/emirats/ajman` et `/#/emirats/fujairah`. Ces émirats ne sont pas ajoutés aux deux cartes principales de destinations et ne sont jamais des quartiers de Dubaï. En l’absence d’offre publiée, une invitation au contact conserve l’émirat choisi.

`publicationStatus: 'draft'` exclut une entrée via `isPublicProperty` des catalogues, filtres, recommandations et favoris affichés. Une URL de fiche en brouillon renvoie la page introuvable ; le titre du navigateur ne reprend pas son nom. Le formulaire ignore aussi son contexte. Pour publier : confirmer les éléments ci-dessous, fournir les médias correspondants, puis passer le statut à `published`. Ne pas publier un brouillon en changeant uniquement son statut sans compléter les médias.

## Vérifications et informations internes à compléter

### SquareX One

Source principale : https://tasmeerindigo.com/squarex-one/ ; plans officiels : https://tasmeerindigo.com/wp-content/uploads/2025/08/squrex-one-floor-plan-brochure.pdf

Le client communique T4 2028. La page officielle examinée ne tranche pas la date ; des catalogues externes indiquent T4 2027 (notamment https://www.propertyfinder.ae/en/new-projects/dev/tasmeer-indigo/dubai). Conserver la date client comme annoncée, avec réserve publique ; obtenir le calendrier contractuel applicable. Ne pas substituer silencieusement T4 2027.

Les prix marketing 816 000 / 1 298 000 / 1 789 999 AED ne sont pas des prix de lots certifiés disponibles. L’inventaire client du 11 novembre contient des statuts Available et Sold. Il n’établit aucun stock de studios. L’année de cet inventaire n’est pas explicitée dans son nom : ne pas lui attribuer arbitrairement une année.

### SHIONE

Source primaire de vérification et médias : communiqué fourni par BEYOND, daté du 10 novembre 2026 : https://www.einpresswire.com/article/955793690/beyond-developments-launches-shione-an-aed-3-billion-twin-building-residential-community-at-siora-on-dubai-islands

Site promoteur : https://beyonddevelopments.ae ; source secondaire examinée : https://www.castilion-estates.com/new-developments/shione (aucun média récupéré sur cette agence).

Conserver en interne les départs communiqués de 2,7 / 4,7 / 7,1 millions AED : écart entre sources, grille actuelle requise avant affichage public. T4 2030 est annoncé, sans garantie contractuelle. Les 70 % paysagers décrivent SIØRA et ne sont pas attribués à SHIONE. Ne pas publier les allocations du 17 novembre. Les 400 m de plage et l’accès aux équipements requièrent une confirmation de périmètre ; le chiffre de plage n’est pas publié. Aucun intérieur de HADO ou d’une autre résidence n’est utilisé pour compléter la galerie SHIONE (trois rendus identifiés disponibles).

### Sorrento / Sorento — Tower D : brouillon

ID : `sorrento-tower-d`. Le document client s’intitule Sorento, mais son contenu porte Lagoon Views et des références `DLGSD/...`. La correspondance Sorrento/Tower D et l’orthographe publique doivent être confirmées par DAMAC ou l’agence ; pas de rapprochement arbitraire avec DAMAC Islands 2.

La grille compte 208 lignes (124 studios et 84 appartements 1 chambre) ; ce n’est ni le total du programme ni un stock disponible. Studios 383–565 sq. ft., minimum listé 728 000 AED ; 1 chambre 707–881 sq. ft., minimum 1 184 000 AED. Les conversions préparées sont approximatives, la nature exacte de la surface doit être confirmée avant publication. Aucun calendrier ni plan de paiement établi.

Source secondaire examinée : https://shiyurealty.com/projects/damac-sorrento-lagoon-views/ . Ses rendus ne sont pas copiés : l’autorisation client porte sur les médias officiels des promoteurs, pas sur les fichiers de cette agence. Fournir un support DAMAC identifié et les médias autorisés. Le PDF client reste dans Téléchargements et n’est pas exposé sous une URL publique en attendant cette confirmation. Libellé prévu : « Voir la grille de prix ».

### Studio Reportage à Fujairah : brouillon

ID : `reportage-fujairah-studio`. Offre communiquée : 7e étage ; 468 sq. ft. (~43,48 m²) ; 504 189 AED initialement, promotion 360 135 AED, réduction 144 054 AED ; T4 2029 annoncé ; restriction aux ressortissants du GCC annoncée.

Manquent : nom du projet, référence du lot, conditions de paiement de la remise, validité, livraison applicable et confirmation d’éligibilité. Oceana reste une hypothèse : https://reportagegroup.com/projects/residential-apartments/oceana/ . Aucun visuel Oceana n’est attribué à cette offre. Aucune restriction GCC n’est appliquée aux autres programmes.

### Taormina Village

Sources : https://reportagegroup.com/projects/residential-communities/taormina-village/ ; brochure officielle https://reportagegroup.com/wp-content/uploads/TAORMINA-BROCHURE-ARTWORK-tk06-1.pdf

Lot communiqué mais non publié : maison de ville 4 chambres, G+2, 4 311 650 AED initialement et 2 155 825 AED promotionnels (-50 %), **paiement intégral sous trois mois** ; T2 2029 annoncé. Manquent la référence, la surface, la validité de la promotion et la phase confirmée. Des informations de Taormina Village 1 divergent sur la livraison : aucune date n’est reprise comme celle du lot. La brochure publique présente le programme et non une offre correspondant à ce lot. Piscine collective, jamais annoncée comme privative.

### DAMAC Islands 2

Source client principale : `DAMAC ISLANDS 2 Brochure_DIGITAL_ENG_NOV12.pdf` (81 pages). Pages physiques examinées avant extraction : 43–48, 56–59, 64–65 et 73–79. Les rendus de villas 6 chambres, villas jumelées 5 chambres et maisons de ville sont explicitement légendés ; les intérieurs ne sont pas attribués à toutes les typologies.

Source commerciale interne : `ISLANDS PRESENTATION_12_11_25.pdf`, page physique 58 : départs 2 750 000 / 3 670 000 / 9 510 000 AED ; 20 % réservation, échéances intermédiaires du document, 25 % achèvement, DLD 4 % supplémentaire ; 30 juin 2030 annoncé. Ces conditions de novembre 2025 ne sont pas publiées comme actuelles. La présentation reste dans Téléchargements, sans lien public. Aucun calcul de rendement ou valorisation repris.

### Al Zorah, Ajman : brouillon

ID : `al-zorah-ajman`. Source examinée : https://deca-properties.com/alaya/ . Elle confirme ALAYA — Lorévia Collection, 178 logements à Al Zorah, Ajman, avec prix sur demande. Cette concordance ne suffit pas à établir que l’offre reçue porte sur le même programme.

Données communiquées à confirmer, non publiées : studios dès 400 000 AED, 1 chambre 800 000 AED, 2 chambres 1 350 000 AED ; semi-meublé ; vues marina annoncées ; paiement après livraison sans calendrier ; T4 2028–T1 2029 ; EOI 20 000 AED. Aucune promesse de remboursement ni reprise automatique du plan de paiement du site. Obtenir le support identifiant l’offre, la grille datée et ses conditions. Aucun visuel de marina générique n’est affecté à ce brouillon.

## Documents et poids

Originaux copiés sans modification (empreintes SHA-256 comparées) : inventaire SquareX One (101 354 octets), brochure Taormina (22 924 153 octets) et brochure DAMAC Islands 2 (21 282 352 octets). Les aperçus utilisent le système PDF existant et ne sont montés qu’à l’ouverture du dialogue. Les fichiers restent téléchargeables ou ouvrables dans un nouvel onglet si l’aperçu natif échoue. Aucun fichier ne dépasse 100 Mo ; les brochures dépassent 20 Mo chacune, ce qui reste lourd sur mobile : leur chargement différé est essentiel. Aucun déploiement réalisé, donc aucune limite Vercel n’a été testée.

## Autorisation des médias

Le client a confirmé dans la conversation, le 15 novembre 2026, l’autorisation de diffusion pour Sarouty des visuels officiels Tasmeer Indigo, BEYOND, Reportage et DECA. Les documents DAMAC fournis sont utilisés dans le cadre de sa demande d’intégration. Cela ne constitue pas une licence libre ou une cession de droits ; conserver l’autorisation et vérifier ses conditions si l’usage évolue. Les auteurs individuels ne sont pas crédités dans les supports examinés : attribution au promoteur diffuseur, sans auteur inventé.

Les sources image par image, pages/xref PDF, dimensions natives et chemins web figurent dans [project-media-credits.json](project-media-credits.json). Les images sont extraites sans texte de page ni modification de contenu ; variantes WebP sans agrandissement. Les rendus officiels SquareX disponibles sont limités à 600 × 800 px : présentation conservant leurs proportions et leur marquage d’origine, versions HD à demander pour les grands écrans. Aucun filigrane retiré. Les médias de SHIONE sont ceux du communiqué émis par BEYOND ; ils ne proviennent pas de l’agence secondaire.

## Contrôles exécutés

- `npm run build` : réussite ; avertissement de taille du bundle JavaScript (> 500 ko), déjà présent avant l’intégration. Aucun script lint ou de contrôle de types n’est défini dans `package.json`.
- `node --test tests/projects.test.mjs tests/resale-enquiry.test.mjs` : 8 tests réussis. Contrôles du statut public, des destinations, des filtres, des surfaces, des traductions, des fichiers et des messages contextualisés.
- `npm test` : 5 réussites et 5 échecs. Les mêmes cinq échecs ont été reproduits dans une copie isolée des sources sauvegardées avant l’intervention : ancien catalogue borné à dix biens, recherche et favoris d’annonces fictives, ancien sujet Séjour, assertions de rendu historiques. Ces tests n’ont pas été réécrits dans ce lot. Le premier lancement était bloqué par `spawn EPERM` ; la relance autorisée hors de cette restriction a fourni ces résultats effectifs.
- Chrome réel en mode headless : matrice de 44 affichages, à 1 440 et 390 px, en FR/EN. Quatre nouvelles fiches, catalogue de sept offres sur plan sans doublon, accès géographiques distincts, trois URL de brouillon sans fiche publique. Images chargées, absence de clé visible et de débordement horizontal.
- Interactions dans les quatre configurations : filtre Studio, lien carte/fiche, ajout/retrait et persistance des favoris, brouillons injectés dans les favoris restant invisibles, galerie et flèches clavier, fermeture Échap, fenêtre PDF et retour du focus, typologie conservée dans les contacts, numéro et contenu WhatsApp interceptés sans ouverture du service ni envoi, conservation des saisies lors du changement de langue, Ajman/Fujairah transmis au formulaire. Neuf anciennes routes contrôlées, dont Maroc, locations, locaux professionnels, ancien contact et trois offres Dubaï existantes.
- Trois aperçus PDF et liens de secours contrôlés ; trois téléchargements réellement déclenchés dans Chrome, fichiers reçus identiques aux copies locales. Les aperçus SquareX et DAMAC ont été examinés visuellement, y compris DAMAC sur mobile après chargement. L’aperçu dépend du lecteur PDF natif du navigateur ; aucun appareil iOS/Android physique n’a été testé.
- Dernier passage Chrome : menu mobile FR/EN opérationnel, typologies traduites, aucune réponse HTTP locale ≥ 400 ni erreur console JavaScript dans les parcours contrôlés. Aucun formulaire soumis ni message envoyé.
- `git diff --check`, références et chemins des variantes vérifiés. Les ressources FR/EN préexistantes et les helpers de routage sont restés identiques octet pour octet à leur sauvegarde initiale. Captures et résultats détaillés dans `.qa-ssr/projects-check/`, dossier déjà ignoré par Git.

Aucun commit, push ni déploiement effectué.

## Retouche ciblée des galeries

Les quatre fiches publiées utilisent désormais le même bloc `detail-gallery` et la même fenêtre `GalleryModal` que Villa Miami — Californie : une grande image et deux vues à droite, puis accès à l’intégralité des médias. La grille spécifique et ses légendes visibles ont été retirées. La seule mention de rendu est « Rendus du projet » / « Project renderings » ; les descriptions détaillées restent dans les textes alternatifs.

La couverture SquareX a été remplacée par un extérieur horizontal officiel de Tasmeer Indigo (2 560 × 1 536 px), source et variantes consignées dans `project-media-credits.json`. Les médias antérieurs restent dans la galerie complète. La recherche dans la médiathèque officielle n’a pas fourni d’intérieurs HD horizontaux équivalents aux planches actuelles : celles-ci restent contenues dans leur cadre, sans suppression de marquage ni agrandissement des fichiers. Les illustrations d’équipements proposées par la page officielle sont des pictogrammes de 64–65 px et n’ont pas été utilisées comme photographies.

Cette retouche a fait l’objet d’un contrôle du diff, des occurrences et des chemins uniquement. Aucun test, build, navigateur ou capture n’a été exécuté après cette correction ; les résultats de contrôle de la section précédente concernent l’intégration antérieure.
