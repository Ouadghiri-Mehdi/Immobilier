# RIVAGE — Immobilier & art de vivre

Application React de démonstration pour une agence immobilière au Maroc et à Dubaï. Identité provisoire, annonces et prix fictifs. Navigation, filtres, favoris, fiches détaillées et demandes de renseignements sont implémentés. Aucun compte, réservation, paiement ou envoi de message réel n’est activé dans l’aperçu.

## Démarrer

Node.js 22.13 ou version compatible plus récente.

```sh
npm ci
npm run dev
npm run build
npm test
```

Le dossier `dist/` contient la version statique prête à publier. Les pages utilisent des routes après `#`, compatibles avec un hébergement statique et les boutons précédent/suivant du navigateur. Les anciens liens `maroc.html`, `dubai.html` et les pages d’information redirigent vers leurs nouvelles routes.

## Organisation du code

- `src/main.jsx` : état global, route, favoris, notifications et lancement React.
- `src/components/ui.jsx` : éléments visuels, liens, titres, apparitions et fil d’Ariane.
- `src/components/layout.jsx` : navigation, menu des destinations, pied de page et aperçu WhatsApp.
- `src/components/property.jsx` : cartes, favoris et galerie plein écran avec clavier et gestes tactiles.
- `src/components/marketing.jsx` : destinations, recherche, activités, accompagnement et FAQ.
- `src/components/home.jsx` : composition de l’accueil, de l’entrée visuelle au contact.
- `src/content.js` : textes de l’accueil, séparés de la présentation.
- `src/pages.jsx` : pages et parcours de l’application.
- `src/data.js` : destinations, cinq rubriques, 16 annonces (8 par destination), inspirations et textes.
- `src/config.js` : nom et coordonnées publiques de l’agence.
- `src/domain.js` : recherche, prix, URL de contact et validation des dates.
- `src/style.css` : identité visuelle, composants, transitions et mise en page responsive.
- `src/styles/refinements.css` : harmonisation visuelle, cartes de services, menus et adaptations accessibles.
- `public/assets/` : photographies illustratives locales et favicon.
- `api/contact.js` : fonction serveur e-mail destinée au déploiement Vercel, non exécutée sur l’aperçu statique Sites.
- `tests/` : logique du catalogue et du contact, ainsi qu’une entrée de rendu React pour vérifier toutes les pages.

## Parcours

Accueil → destination Maroc ou Dubaï → achat/vente, location, locaux professionnels, décoration/aménagement ou hôtels/appartements → fiche ou inspiration → contact contextualisé.

Le contact est intégré en bas de l’accueil : les boutons y conduisent avec un défilement doux. Depuis une fiche, le bien et le sujet restent préremplis. Les anciens liens `#/contact` restent compatibles et affichent cette même section. Les pages Agence, Services, Favoris, Mentions légales et Confidentialité complètent le site. La décoration présente des inspirations, les séjours une demande d’informations avec dates : aucune disponibilité n’est confirmée automatiquement.

## Personnaliser les données

Modifier `src/data.js` pour changer les biens, prix, surfaces, descriptions, photographies et prestations sans retoucher les composants. Vérifier les informations avant publication. Les devises ne sont pas converties. Les filtres sont propres au pays et à l’activité, et restent dans l’URL pour le retour navigateur. Les favoris sont propres au navigateur, sans synchronisation entre appareils.

Chaque service possède un public (`audience`), un contenu (`includes`), un déroulement (`approach`), un sujet de contact (`subject`) et une action (`action`). Les prestations sont à confirmer avec l’agence avant lancement. Le tableau `partners` est vide : la section n’apparaît que pour des entrées avec `id`, `name` et `validated: true`. Les logos et descriptions doivent être fournis et leur publication autorisée. Aucun partenaire de démonstration n’est affiché.

L’accueil suit l’ordre : entrée visuelle, destinations, agence, services, sélection de biens, méthode, partenaires validés éventuels, contact. Les contenus de l’accueil se modifient dans `src/content.js`.

Dans `src/config.js`, renseigner `whatsappNumber` au format international. Le bouton ouvre `https://wa.me/` avec un message prérempli ; l’utilisateur envoie le message depuis WhatsApp. Sans numéro, un aperçu permet simplement de copier le texte. Aucune adresse ou identité officielle n’est inventée.

## Déployer sur Vercel

Importer le dépôt GitHub, installer avec `npm ci`, construire avec `npm run build`, publier `dist/`. La configuration est dans `vercel.json`. Les fichiers `.openai/` concernent uniquement l’aperçu Sites et ne sont pas nécessaires à Vercel.

Pour activer le formulaire :

1. Fournir les informations de confidentialité et les coordonnées de l’agence, puis configurer un service Resend avec expéditeur autorisé.
2. Ajouter les variables serveur Vercel `RESEND_API_KEY`, `CONTACT_FROM`, `CONTACT_TO` et `SITE_ORIGIN` (origine HTTPS exacte, sans barre finale).
3. Renseigner `contactEndpoint: '/api/contact'` et l’e-mail public dans `src/config.js`.
4. Redéployer puis tester un véritable envoi et sa réception. Prévoir une protection anti-abus adaptée avant ouverture publique.

Aucun secret ne doit être placé dans les fichiers publics ou commité. Le serveur valide les champs, l’accord pour être recontacté et l’origine ; il fixe le destinataire depuis l’environnement. En cas d’échec, le formulaire garde la saisie et n’affiche pas de faux succès. Sans configuration, la demande reste visible dans le navigateur sans transmission.

## Visuels et animations

L’ouverture présente explicitement l’agence immobilière et les deux destinations.
Le composant `src/components/HeroMedia.jsx` accepte une vidéo facultative, configurée
dans `src/config.js`. Sans vidéo autorisée, le poster local reste affiché sans requête
vers un fichier absent. Les exports attendus, le montage et la procédure d’activation
sont détaillés dans [docs/hero-video.md](docs/hero-video.md).

Les trois images locales sont des illustrations générées via l’outil intégré de génération d’images : une villa contemporaine de Marrakech avec piscine, une terrasse de Dubaï ouverte sur la skyline et un intérieur de riad aux matières naturelles. Elles ne décrivent pas des biens disponibles. Les autres images sont des ambiances Unsplash, avec repli sur le visuel local si leur chargement échoue. Les polices proviennent de Google Fonts. Pour le lancement, remplacer les ambiances par les photos autorisées de chaque bien et vérifier les droits.

Les animations utilisent CSS et les états React : entrée des pages, apparitions au défilement, menus, photos, cartes, galerie et micro-interactions. Le contenu des sections reste visible même si l’observateur ne se déclenche pas. Les animations et tous les défilements déclenchés en JavaScript respectent `prefers-reduced-motion`. Les menus masqués sont exclus de la navigation clavier. Les galeries acceptent les flèches, Début/Fin et les gestes horizontaux ; la fermeture restitue le focus au bouton d’ouverture.

`npm test` exécute les tests de logique et le rendu en mémoire des 42 routes et fiches, avec des contrôles de structure de l’accueil, de contact contextualisé et de visibilité des partenaires. Ces tests côté serveur ne remplacent pas un contrôle dans le navigateur sur ordinateur, tablette et téléphone.

## SEO et lancement

Titres des pages mis à jour, HTML sémantique, métadonnées de partage et favicon. Le prototype reste non indexable via `noindex` et `robots.txt`. Pour la version commerciale, décider du routage et du pré-rendu à URL propres, produire les métadonnées par page, le sitemap et les contenus définitifs, puis ouvrir l’indexation. Aucun classement dans les moteurs n’est garanti.

## Livraison du code

Le ZIP contient les sources React, les données, les photos locales, les fichiers de configuration, les tests et `dist/` déjà compilé. Les dépendances `node_modules/`, les fichiers Git, les caches et les identifiants de l’aperçu ne sont pas inclus. Après extraction : ouvrir un terminal dans `rivage-immobilier-react`, exécuter `npm ci`, puis `npm run dev`. Pour publier, utiliser le dépôt complet avec `vercel.json`.
