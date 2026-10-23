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
- `src/pages.jsx` : pages et parcours de l’application.
- `src/data.js` : destinations, cinq rubriques, 16 annonces (8 par destination), inspirations et textes.
- `src/config.js` : nom et coordonnées publiques de l’agence.
- `src/domain.js` : recherche, prix, URL de contact et validation des dates.
- `src/style.css` : identité visuelle, composants, transitions et mise en page responsive.
- `public/assets/` : photographies illustratives locales et favicon.
- `api/contact.js` : fonction serveur e-mail destinée au déploiement Vercel, non exécutée sur l’aperçu statique Sites.
- `tests/` : logique du catalogue et du contact, ainsi qu’une entrée de rendu React pour vérifier toutes les pages.

## Parcours

Accueil → destination Maroc ou Dubaï → achat/vente, location, locaux professionnels, décoration/aménagement ou hôtels/appartements → fiche ou inspiration → contact contextualisé.

Le contact est intégré en bas de l’accueil : les boutons y conduisent avec un défilement doux. Depuis une fiche, le bien et le sujet restent préremplis. Les anciens liens `#/contact` restent compatibles et affichent cette même section. Les pages Agence, Services, Favoris, Mentions légales et Confidentialité complètent le site. La décoration présente des inspirations, les séjours une demande d’informations avec dates : aucune disponibilité n’est confirmée automatiquement.

## Personnaliser les données

Modifier `src/data.js` pour changer les biens, prix, surfaces, descriptions, photographies et prestations sans retoucher les composants. Vérifier les informations avant publication. Les devises ne sont pas converties. Les filtres sont propres au pays et à l’activité, et restent dans l’URL pour le retour navigateur. Les favoris sont propres au navigateur, sans synchronisation entre appareils.

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

Les trois images locales sont des illustrations générées via l’outil intégré de génération d’images : une villa contemporaine de Marrakech avec piscine, une terrasse de Dubaï ouverte sur la skyline et un intérieur de riad aux matières naturelles. Elles ne décrivent pas des biens disponibles. Les autres images sont des ambiances Unsplash, avec repli sur le visuel local si leur chargement échoue. Les polices proviennent de Google Fonts. Pour le lancement, remplacer les ambiances par les photos autorisées de chaque bien et vérifier les droits.

Les animations utilisent CSS et les états React : entrée des pages, révélation au défilement, menus, photos, cartes, galerie et micro-interactions. Elles respectent `prefers-reduced-motion`. La mise en page comporte des adaptations téléphone, tablette et grand écran. Le rendu dans un navigateur reste à vérifier dans l’environnement d’aperçu disponible.

## SEO et lancement

Titres des pages mis à jour, HTML sémantique, métadonnées de partage et favicon. Le prototype reste non indexable via `noindex` et `robots.txt`. Pour la version commerciale, décider du routage et du pré-rendu à URL propres, produire les métadonnées par page, le sitemap et les contenus définitifs, puis ouvrir l’indexation. Aucun classement dans les moteurs n’est garanti.

## Livraison du code

Le ZIP contient les sources React, les données, les photos locales, les fichiers de configuration, les tests et `dist/` déjà compilé. Les dépendances `node_modules/`, les fichiers Git, les caches et les identifiants de l’aperçu ne sont pas inclus. Après extraction : ouvrir un terminal dans `rivage-immobilier-react`, exécuter `npm ci`, puis `npm run dev`. Pour publier, utiliser le dépôt complet avec `vercel.json`.
