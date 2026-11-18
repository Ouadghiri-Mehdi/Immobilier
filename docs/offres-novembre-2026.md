# Lot commercial du 18 novembre 2026 — notes internes

Sept offres, cinq projets ajoutés dans `src/november-offers.js`, par la fabrique existante de `src/new-projects.js`. Prix, surfaces et conditions sont attachés aux lignes sélectionnables, sans référence de lot inventée. Les contacts et favoris utilisent les identifiants de projets ; les sélections conservent le paramètre `lot` existant.

## Géographie et classement

- SOL Terra Casa : Dubaï / JVC District 11, programme explicitement annoncé sur plan.
- Reportage Village et Celesto 4 : Dubaï, Achat & vente → Achat sur plan, classement confirmé par le client lors de la correction ciblée. Le bloc conditionnel de classement à confirmer ne les reprend plus.
- Mondrian et Azure : localisation conservée à Ras Al Khaimah. À la demande du client, ils figurent aussi dans le catalogue partagé Achat & vente → Achat sur plan accessible depuis Dubaï, désormais titré aux Émirats arabes unis. L’accès `/#/emirats/ras-al-khaimah` et les URL des fiches sont conservés sans doublon ni nouvelle destination principale.
- Al Zorah et Taormina Village ne sont pas recréés ou modifiés.

## Sources et arbitrages

### SOL Terra Casa

https://solproperties.ae/property/sol-terra-casa/

Quatre rendus officiels retenus : extérieur, salon, chambre principale, cuisine. Les intérieurs sont explicitement présentés pour les maisons de ville quatre chambres. Les images originales d’intérieur disponibles font 925 × 520 px ; aucune variante ne les agrandit.

Plan public 60/40 vérifié sur la page : six versements de 10 % puis 40 % à la livraison. Le 50/50 du prélancement n’est pas proposé comme encore disponible. EOI de 100 000 AED communiqué : aucune promesse de remboursement inconditionnel. BUA et terrain restent distincts. T4 2028 conservé comme prévisionnel annoncé par le client.

### Mondrian

https://liveelevated.com/mondrian-al-marjan-island-beach-residences/
https://mondrianalmarjanislandbeachresidences.com/

Un programme, deux offres : studios dès 1 650 000 AED / 368 sq. ft. (~34,19 m²), deux chambres 4 900 000 AED / 1 350 sq. ft. (~125,42 m²). Le 40/60 est uniquement attaché au deux-chambres ; aucune condition de paiement n’est attribuée aux studios.

Trois rendus retenus : extérieur, piscine collective et salon collectif. Les intérieurs nommés Sky Collection, penthouse et Front Row Collection ne sont pas utilisés pour représenter les offres studios/deux-chambres. Manquent leurs intérieurs identifiés, références, étages et plans. La page officielle consultée met en avant les résidences 1/2/3 chambres : l’offre studios repose sur la communication et la vidéo du client et reste à confirmer dans la grille applicable. Aucune disparition silencieuse du studio demandé ni invention d’un stock.

`Mondrian.mp4` : 5 500 710 octets, 832 × 464, environ 44,7 secondes. Copie intégrale locale et poster extrait à 2,2 secondes. Film de présentation du programme avec extérieurs, espaces de vie et balcons, sans plan ni référence prouvant la configuration d’un lot. Affecté à l’offre studios conformément à la demande du client ; il n’est pas présenté comme une visite du studio exact. Lecteur existant sous la galerie habituelle, autoplay muet, commandes, playsInline et preload metadata ; masqué lorsque le deux-chambres est sélectionné. La vidéo n’est pas chargée dans le catalogue. T4 2028 annoncé, à confirmer.

### Reportage Village

https://reportagegroup.com/projects/residential-communities/reportage-village-dubai/
https://reportagegroup.com/wp-content/uploads/Reportage-Village-Brochure-Digital.pdf
https://reportagegroup.com/wp-content/uploads/Reportage-Village-Fact-Sheets.pdf

Prix initial communiqué 2 922 360 AED, prix proposé 2 087 400 AED, condition indissociable de paiement intégral sous trois mois. Le prix initial est conservé ici, sans badge de remise ou promotion réputée encore valable. Offre quatre chambres G+2, 2 275 sq. ft. (~211,35 m²), freehold et T4 2027 annoncés, à confirmer dans les documents du lot.

La brochure de 25 pages a été téléchargée directement et ses images natives extraites pour examen (pages physiques 9 et 13–16). Les intérieurs ne sont pas identifiés comme ceux de la configuration quatre chambres ; ils ne sont pas publiés dans la galerie de cette offre. Quatre images officielles du programme retenues : extérieur, entrée, piscine collective et espaces extérieurs. Les fichiers de brochure (40 242 948 octets) et de fiche technique (3 737 581 octets) sont copiés intégralement dans les médias et reliés au même composant d’aperçu PDF, chargé uniquement à l’ouverture. Ils décrivent le programme, pas un plan certifié du lot quatre chambres.

### Azure by Lapis

https://lapisproperties.com/projects/azure-by-lapis/

Deux offres : standard 695 000 AED et premium convertible 895 000 AED, avec la mention « Prix communiqué, conditions à confirmer ». Pas de chambre séparée présumée pour le premium, pas de surface inventée. Les montants contradictoires « Cash Price 790 000 AED » sont exclusivement conservés ici. Le prix programme dès 790 000 AED, le plan général 75/25 et la livraison générale T4 2028 affichés sur la page ne sont pas appliqués aux deux lots.

Quatre rendus officiels : extérieur, hall, piscine collective, espace des ascenseurs. Les intérieurs privés disponibles ne sont pas identifiés comme ceux des studios ; ils sont exclus. Aucun plan de paiement ni échéance propre aux lots n’est confirmé.

Point à demander à l’agence : justificatif actuel de l’autorisation de commercialisation. Le client signale un ancien avis municipal indexé, sans statut actuel établi. Aucune interdiction actuelle n’a été vérifiée ou affirmée, aucun avis ancien n’est publié comme accusation.

### Celesto 4

https://tarrad.ae/celesto-4

Prix du studio communiqué : 595 000 AED ; paiement annoncé 50/50, entièrement meublé, domotique et vue skyline annoncés. Surface, référence et étage non fournis. Date de l’affiche T4 2028 contre T4 2027 relevé sur la page officielle : affichage public « Livraison à confirmer », sans arbitrage inventé.

La page officielle nomme explicitement Celesto Tower 4 mais réutilise un dossier générique `celesto`. Le rendu de couverture retenu est le fichier explicitement nommé `/img/footer/celesto-4-tower.webp`, où le socle porte Celesto Tower 4. Une vue de deux tours issue de `intro-building.jpg` et un rendu de terrasse avec piscine privative ne sont pas retenus. Le plan studio du programme et l’espace collectif de piscine sont issus de la page Celesto 4 ; ils ne sont pas présentés comme les plans ou équipements privatifs du lot. L’exemple de plan est identifié dans son alt. Manquent un plan du lot et des intérieurs de studio identifiés.

La couverture détourée officielle est limitée à 661 × 1 048 px ; transparence conservée. Aucun agrandissement des fichiers, retrait de filigrane ou recadrage d’une affiche pour en effacer les mentions.

## Crédits et limites

Les URL précises, dimensions natives et chemins locaux sont consignés dans `docs/project-media-credits.json`. Le client a confirmé le 18 novembre 2026 l’autorisation de diffusion pour Sarouty des visuels officiels SOL, ELEVATE/Mondrian, Lapis et Tarrad ; l’autorisation Reportage préexistante est conservée. Droits réservés, aucune licence libre inventée ni auteur individuel supposé.

Galerie et lecteur vidéo existants réutilisés, sans nouvelle grille ni animation. Aucune installation de dépendance, aucun test automatisé, build, navigateur ou capture du site exécutés dans cette intervention. Contrôle limité à la lecture des données, des références, des médias et du diff. Aucun commit, push ou déploiement.

Correction des couvertures : seules les cinq cartes du lot utilisent le remplissage cover avec cadrages dédiés. Pour Celesto 4, une vue architecturale avec environnement du fichier officiel `https://tarrad.ae/celesto/ext-6.jpg` remplace le détourage sur la carte ; la façade porte explicitement CELESTO TOWER 4. Variantes locales `card-facade-environment-*`, galerie de fiche inchangée. La phrase générique des catalogues a été supprimée en FR/EN, sans remplacement et sans retrait des conditions propres aux offres. Correction relue dans le code et le diff uniquement ; aucun test, build, navigateur ou capture exécuté.
