# Vidéo d’ouverture de l’accueil

## État livré

Aucune vidéo autorisée n’est fournie dans le projet. Les listes de sources dans
`src/config.js` sont donc vides : aucun élément vidéo ni requête vidéo n’est créé.
L’accueil utilise immédiatement `/assets/maroc-villa.jpg`, illustration générée
déjà fournie dans le projet et décrite dans le README. Le cadrage privilégie la
façade et les espaces de vie. Il ne s’agit pas d’une annonce réelle.

Le titre, les boutons et les accès Dubaï/Maroc sont en HTML et indépendants du
média. La section Destinations existante suit immédiatement l’ouverture.

## Fichiers à fournir

Déposer les exports approuvés dans les emplacements suivants, relatifs à la racine
du projet. Ces fichiers ne sont pas créés ni référencés par l’application actuellement.

| Emplacement à fournir | Format | Usage |
| --- | --- | --- |
| `public/assets/video/rivage-hero-desktop.mp4` | MP4 / H.264, sans piste audio | Ordinateur et tablette au-dessus de 760 px |
| `public/assets/video/rivage-hero-mobile.mp4` | MP4 / H.264, sans piste audio | Téléphone et tablette jusqu’à 760 px |
| `public/assets/video/rivage-hero-desktop.webm` | WebM / VP9, facultatif | Variante optimisée ordinateur |
| `public/assets/video/rivage-hero-mobile.webm` | WebM / VP9, facultatif | Variante optimisée mobile |

Prévoir un montage de 16 à 24 secondes, bouclable, avec mouvements lents et fondus
discrets : skyline identifiable de Dubaï → architecture résidentielle ou appartement
→ Marrakech et son architecture → villa ou résidence au Maroc. Pas de texte, logo,
musique, réception d’hôtel, spa ou scène de service. Réserver une zone calme derrière
le titre, surtout dans la partie gauche du cadrage ordinateur.

Viser un export ordinateur 16:9 (1920 × 1080 maximum, environ 4 à 8 Mo) et un montage
mobile 9:16 (720 × 1280, environ 2 à 4 Mo), en 24 ou 25 images/seconde. Ce sont des
objectifs de livraison, à ajuster après contrôle de la qualité et du poids. Pour le
MP4, activer le démarrage progressif (« fast start », métadonnées en tête de fichier).

Fournir avec les médias une preuve de licence ou d’autorisation couvrant la diffusion
sur un site commercial, le montage et les exports. Identifier la provenance de
chaque séquence et les éventuelles restrictions. Ne pas récupérer de média d’un
site concurrent. L’approbation des droits est manuelle, pas déduite de l’existence
d’un fichier dans le dépôt.

## Activation après validation

Une fois les fichiers réellement présents et autorisés, renseigner `heroMediaConfig`
dans `src/config.js`. Pour les MP4 seuls :

```js
video: {
  desktop: [{src:'/assets/video/rivage-hero-desktop.mp4', type:'video/mp4'}],
  mobile: [{src:'/assets/video/rivage-hero-mobile.mp4', type:'video/mp4'}],
},
```

Si les WebM sont fournis, ajouter leur source avec `type:'video/webm'` avant le MP4
dans chaque liste. Ne jamais renseigner le chemin d’un fichier absent. Une liste
mobile vide conserve volontairement le poster sur mobile, sans charger l’export
ordinateur plus lourd. Le poster peut ensuite être remplacé par une image autorisée
extraite du montage ; son chemin et son texte alternatif sont également configurables.

## Comportement

- Poster chargé prioritairement dès le premier rendu React, sans attendre la vidéo.
- Vidéo ajoutée après le premier rendu, à un moment disponible du navigateur.
- Lecture automatique muette, en boucle et intégrée à la page (`playsInline`).
- Apparition de la vidéo uniquement après le début effectif de la lecture.
- Poster conservé si la lecture est refusée ou si les sources échouent.
- Commande pause/reprise au clavier et au toucher quand la vidéo fonctionne.
- Aucun chargement vidéo avec `prefers-reduced-motion: reduce` ou l’économie de
  données du navigateur. Une modification de ces préférences retire aussi la vidéo.
- Aucun texte ni bouton ne change avec les scènes.

Après livraison des vidéos définitives, vérifier les formats dans les navigateurs
cibles, le cadrage, la fluidité de la boucle, les droits, le poids téléchargé et la
lecture automatique sur iOS/Android. Les tests sans ces médias ne valident pas le
montage ou le décodage des futurs fichiers.
