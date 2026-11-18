# Partenaires de Sarouty Properties

## Ajustement ciblé — 18 novembre 2026

Dimensions optiques dans les cases existantes de référence 192 × 88 px : Reportage passe de 170 × 28 à 148 × 24 ; AR (Résidence Affinities) de 48 × 34 à 80 × 57 ; Serraj de 176 × 46 à 192 × 52. `object-fit: contain` conserve les proportions réelles : ces dimensions sont des limites de boîte, jamais un étirement du logo. Serraj utilise ainsi toute la largeur disponible pour augmenter aussi la taille de sa signature, sans la détacher ni la redessiner.

Les marges sources ont été examinées : Serraj 980 × 257, contenu alpha (4, 4)–(976, 253) ; AR dérivé 202 × 142, contenu alpha (2, 3)–(199, 139) ; Reportage SVG 200 × 31, contenu presque bord à bord. Les dérivés Ellington et Meraki ont également des marges de quelques pixels. Aucun recadrage supplémentaire n’est justifié, aucun nouveau dérivé n’est créé. Les fichiers d’origine, le traitement noir et l’exception colorée CGI sont conservés ; CGI reste retiré de la liste selon la demande précédente.

L’ordre, le nombre de partenaires, les cases communes, l’espacement, la durée de boucle, les deux groupes identiques, les pauses et la réduction des mouvements ne sont pas modifiés. Les sources raster sont suffisamment définies pour les dimensions retenues ; la signature Serraj reste fine du fait de la composition horizontale d’origine. Aucun contrôle du rendu dans le navigateur, test, build ou capture effectué pour cet ajustement. Les contrôles Chrome relatés plus bas sont historiques.

## Ajout de Serraj Immobilier

Logo fourni par le client : `C:/Users/USER/Downloads/logo-serraj-immobilier.png`, 1000 × 300. Variante locale : `public/assets/partners/logo-serraj-immobilier.png`, 980 × 257, sans agrandissement. Le motif bleu isolé en haut est supprimé uniquement dans sa zone, séparée du symbole principal et située au-dessus du texte. Le fond blanc est rendu transparent pour permettre le traitement noir sans rectangle opaque. Le nom et la signature « Agence immobilière » sont conservés ; aucun lien externe n’est ajouté.

L’entrée unique `serraj-immobilier` réutilise le composant et les copies accessibles existants. La boucle passe de 64 à 72 secondes pour neuf marques, afin de conserver la vitesse de déplacement malgré son allongement. Les espacements, pauses au survol/focus, réduction des mouvements et exception CGI en couleurs sont préservés. Captures de contrôle ordinateur/mobile : `.qa-ssr/partners-check/serraj-*.png`.

## Calibrage optique contrôlé dans Chrome — 14 novembre 2026

Les cases et l’animation seules ne normalisaient pas les marques : à l’arrêt, les hauteurs utiles allaient d’environ 18 à 86 px, et le repli textuel DECA passait sur deux lignes. Les dimensions de chaque marque ont donc été recalibrées en comparant les huit entrées, y compris les marques hors champ pendant le mouvement.

`logoWidth` / `logoHeight` sont désormais les dimensions d’une boîte optique de référence dans une case de 192 px. Le composant les convertit en largeur relative et en hauteur proportionnelle à la largeur de la case (`cqw`). Chaque marque garde ainsi le même facteur de réduction sur mobile, au lieu de conserver une grande hauteur fixe alors que seules les marques horizontales rétrécissent. `object-fit: contain` conserve chaque logo entier et sans déformation. Le nom DECA possède un réglage explicite de taille et reste sur une ligne.

Les variantes transparentes recadrées d’Ellington, Meraki et Résidence Affinities sont conservées : leurs marges alpha ont été mesurées, avec deux ou trois pixels de sécurité autour du contenu. Les SVG ont également été examinés. Aucun recadrage supplémentaire nécessaire n’a été trouvé et aucun pixel blanc n’a été supprimé. Les originaux restent intacts.

Les largeurs des cases, les espacements et les images dupliquées restent identiques en mode animé. Les deux groupes mesurent toujours 2112 px à une fenêtre de 1440 px, et 1472 px à 390 px ; le cycle reste de 64 s. Le défilement, la pause au survol et au focus, l’absence de débordement et l’intégrité des logos dans leurs cases ont été vérifiés dans Chrome, puis comparés en présentation statique. Avec réduction des mouvements, les huit marques sont réparties sur quatre colonnes sur ordinateur et deux sur mobile, sans copie accessible en double.

Captures de contrôle dans `.qa-ssr/partners-check/` (dossier exclu de Git) : `after-moving-1440.png`, `after-moving-390.png`, `after-static-1440.png` et `after-static-390.png`. Les mesures avant/après sont enregistrées dans le même dossier.

**CGI n’est pas déclaré corrigé** : seul `public/assets/partners/cgi.png` est disponible, ancien fichier 166 × 105 de la Compagnie Générale Immobilière — Groupe CDG. Ses couleurs sont conservées, sans filtre noir ; sa signature blanche reste illisible sur le fond clair. Fournir une version complète à signature foncée, par exemple `public/assets/partners/cgi-signature-foncee.png` ou un SVG équivalent, sans supprimer le blanc des lettres à l’intérieur du symbole. Aucun logo d’une autre société CGI n’a été utilisé ou recréé.

**DECA reste un nom textuel**, le logo officiel restant absent du projet et ses URL précédemment contrôlées étant inaccessibles. Le repli est inclus dans la comparaison, sans inventer de logo. Ces deux limites empêchent de considérer les huit fichiers de marque comme définitifs.

## Ajustements du 14 novembre 2026

Le centrage, les cases et le bandeau défilant restent partagés. Les dimensions par entrée ont été rééquilibrées selon la surface visible. Les dérivés `ellington-trimmed.png`, `meraki-trimmed.webp` et `residence-affinities-trimmed.png` retirent uniquement les marges extérieures entièrement transparentes, avec une marge de sécurité de trois pixels. Aucune lettre, signature ou zone blanche opaque n’est supprimée ; les originaux et couleurs restent intacts.

Les logos conservent le filtre noir existant, sauf CGI qui garde `filter: none`. Le fichier client de remplacement CGI n’est toujours pas présent : `/assets/partners/cgi.png` reste l’ancien fichier de la Compagnie Générale Immobilière marocaine, 166 × 105, à signature blanche. Aucun logo de l’entreprise informatique CGI n’est utilisé.

DECA reste textuel : les URL officielles communiquée et actuellement référencée par la page d’accueil ont été essayées, ainsi que leurs versions PNG, et renvoient HTTP 404 :

- https://deca-properties.com/wp-content/uploads/2025/05/DECA-Logo-white-e1748388147281.png.webp
- https://deca-properties.com/wp-content/uploads/2025/05/deca-logo-new.png.webp
- Les deux mêmes chemins sans le suffixe `.webp`.

Aucun faux fichier `deca.webp` n’a été créé. La pause au survol/focus, les copies `aria-hidden`/`inert`, le chargement préalable et la réduction des mouvements restent présents. Il n’existe plus de commande visible Pause/Reprise ; les notes plus anciennes ci-dessous décrivent l’état historique.

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
