# Finition des services et sélection publique

Les médias sont centralisés dans `src/service-media.js` : chemin local, texte alternatif traduit par les ressources FR/EN, nature du visuel et positions ordinateur/mobile. `ServiceVisual` réutilise `ServicePhoto` pour les cartes de l’accueil, les destinations et la page Services. Les quatre services communs ont deux images sur l’accueil, y compris sur mobile ; l’acquisition hôtelière reste limitée au Maroc.

## Sources des services mises à jour

La sélection photographique actuelle, les auteurs, licences, preuves de destination et fichiers WebP sont documentés dans [photos-services.md](photos-services.md). Les anciens rendus et illustrations des cartes de services ont été remplacés par des photographies ; les fichiers historiques restent présents et les inspirations existantes ne sont pas modifiées.

Les photos des annonces clientes restent intactes. Les visuels externes sont signalés comme photographies d’illustration et ne constituent ni des biens disponibles ni des réalisations Sarouty.

## Offres, favoris et contacts

`isPublicProperty` exige `isDemo === false`, une destination et une rubrique autorisées. `publicProperties` et `featuredProperties` dérivent des sources sans modifier les offres ni leurs identifiants. La sélection d’accueil est éditoriale, sans classement de popularité : Oak Yard, Prestigia, THE YARDS PLAZA, CFC 1047, Dubai Islands et Oulfa 1037. Les offres Dubaï non classées restent non classées.

Les anciennes sources restent présentes pour résoudre leurs liens et conserver les favoris enregistrés. Elles ne sont pas comptées comme favoris actifs ; le visiteur peut les retirer. La fiche retirée et le formulaire ne présentent plus ces sources comme une offre disponible. Les catégories sans offre conservent une invitation au contact.

La grille partagée utilise des lignes CSS subgrid pour aligner les titres complets, caractéristiques et prix selon le contenu le plus long ; une disposition flex assure un repli sans subgrid. Aucune hauteur fixe de carte ou troncature n’est ajoutée. Les cadres photo partagent un rapport 1.4.

L’orange `#FF8500` est une approximation issue du diagnostic, pas une référence officielle de charte. Il est réservé à des traits et repères ; textes principaux, fonds et logos partenaires restent inchangés.

Contrôles limités au diff, aux chemins, aux références, aux ressources et aux usages des composants. Aucun test, compilation, navigateur, capture, commit, push ou déploiement. Alignements, cadrages, navigation clavier et responsive restent à vérifier visuellement en FR et EN.
