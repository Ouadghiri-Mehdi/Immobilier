# Partenaires de Sarouty Properties

## État livré — 30 octobre 2026

Les huit entrées et les URL ci-dessous ont été communiquées par le client pour
remplacer la sélection précédente. Le composant `Partners` et le tableau
`partners` de `src/data.js` sont réutilisés, sans mode aperçu. La section
reste après la méthode et avant le contact. Les noms propres ne sont pas traduits.

| Partenaire | URL source fournie | Fichier local | Résultat |
| --- | --- | --- | --- |
| DAMAC | https://images.ctfassets.net/zoq5l15g49wj/7DGi2D8VGvN2aV02ir8v27/aa9560b0cb32e7f690c913eebce06fb9/damac-white.svg | `public/assets/partners/damac.svg` | Intégré. |
| DECA Properties | https://deca-properties.com/wp-content/uploads/2025/05/DECA-Logo-white-e1748388147281.png.webp | `deca.webp` manquant | HTTP 404 ; aucun logo correspondant déjà présent dans le projet. Nom seul, sans chemin d’image fictif. |
| Meraki Developers | https://www.merakidevelopers.com/src/images/logo.webp | `public/assets/partners/meraki.webp` | Intégré. |
| Reportage | https://reportagegroup.com/ma/wp-content/uploads/sites/27/logo.svg | `public/assets/partners/reportage.svg` | Intégré. |
| Ellington Properties | https://cf90163a.delivery.rocketcdn.me/wp-content/uploads/Ellington-Logo_Black-2.png | `public/assets/partners/ellington.png` | Intégré. |
| Imtiaz Developments | https://imtiaz.ae/layout/image/logo-red.svg | `public/assets/partners/imtiaz.svg` | Intégré. |
| Résidence Affinities | https://www.residenceaffinities.ma/projet/logo.png | `public/assets/partners/residence-affinities.png` | Intégré. |
| CGI | https://www.cgi.ma/themes/custom/cgi_theme/logo.png | `public/assets/partners/cgi.png` | Intégré ; téléchargement HTTPS réussi avec le magasin de certificats Windows. |

Sept logos sont intégrés. Les réponses enregistrées sont des images SVG, PNG ou
WebP, pas des pages HTML. Les SVG ont une racine XML valide ; les PNG ont été
contrôlés par leur signature et leur contenu image ; le WebP par son conteneur et
ses dimensions. Aucun fichier en erreur n’est enregistré dans les assets publics.
Les fichiers téléchargés ne sont ni recréés, ni recolorés sur disque, ni recadrés.
Les URL sources servent uniquement à la documentation ; le site charge les images
depuis `/assets/partners/`.

Le lien DECA fourni renvoie 404. Aucun autre logo DECA n’était disponible dans le
projet : l’entrée affiche donc « DECA Properties ». Pour l’activer ultérieurement,
fournir le vrai fichier `public/assets/partners/deca.webp`, puis renseigner
`logo:'/assets/partners/deca.webp'` dans son entrée. Vérifier son contraste et
ne déclarer `logoMonochrome:true` que s’il est effectivement monochrome blanc.

## Présentation

- Bandeau horizontal sans carte, flèche, pagination ni lien ajouté.
- Deux groupes identiques défilent vers la gauche à vitesse constante, sur un cycle
  de 64 secondes. Chaque groupe couvre au minimum la largeur de l’écran ; leurs
  espacements de jonction sont identiques aux espacements internes.
- Le mouvement attend le chargement des logos, ou leur repli textuel en cas d’erreur.
- La copie de boucle porte `aria-hidden` et `inert` ; elle ne crée pas de
  contenu ou de lien accessible en double.
- Le survol et le focus clavier suspendent le mouvement. La commande Pause/Reprendre
  mémorise une pause manuelle ; une reprise reste suspendue tant que le pointeur ou
  le focus est dans le bandeau. Les libellés sont disponibles en français et anglais.
- Avec `prefers-reduced-motion: reduce`, seule la liste principale est affichée
  en grille statique, sans animation ni commande de mouvement.
- Les dimensions sont réglables par entrée via `logoWidth` et `logoHeight`.
  `object-fit: contain` conserve chaque logo en entier et sans déformation.
- Seuls DAMAC et Meraki, monochromes blancs, reçoivent le filtre CSS de contraste
  vert foncé. Reportage, Ellington, Imtiaz, Résidence Affinities et CGI gardent leurs
  couleurs d’origine. Les fonds de la section ne sont pas modifiés.
- Le débordement du bandeau reste contenu dans sa fenêtre ; aucune largeur de page
  supplémentaire n’est créée par la piste animée.

## Contrôles et limites

Contrôles limités au diff, aux fichiers téléchargés et aux chemins locaux.
L’assertion existante sur la liste des partenaires a été adaptée aux huit noms,
sans exécution. Aucun test, compilation, navigateur ou capture n’a été lancé.
Le rendu, l’équilibre visuel, le défilement et les interactions n’ont pas été testés.
