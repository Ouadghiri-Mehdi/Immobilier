# Envoi des demandes — configuration serveur

Le formulaire Contact commun à tous les services utilise `/api/contact` et Nodemailer avec Gmail SMTP, côté serveur Node.js. Les boutons des biens transmettent le bien, sa référence et la typologie sélectionnée ; le marché secondaire rejoint le même formulaire. Les liens WhatsApp, validations et protections antispam sont conservés. Aucun formulaire ni champ supplémentaire n’est ajouté.

L’e-mail HTML et texte contient une seule fois nom, e-mail, destination, projet, puis le message intégral avec ses retours à la ligne. Les informations du bien et la typologie sont ajoutées lorsqu’elles existent. Aucun lien de page technique, code de langue ni contexte répété dans le message libre. L’expéditeur est **Sarouty**, avec l’adresse `SMTP_USER` ; l’adresse du visiteur est exclusivement en `Reply-To`.

## Local

1. Copier `.env.example` vers `.env.local` à la racine du projet. Ce dernier fichier est ignoré par Git.
2. Renseigner uniquement dans `.env.local` :
   - `CONTACT_RECIPIENT_EMAIL` : l’unique adresse qui reçoit toutes les demandes.
   - `SMTP_HOST=smtp.gmail.com`.
   - `SMTP_PORT=465`.
   - `SMTP_SECURE=true` : TLS dès la connexion.
   - `SMTP_USER=mehdi2001kaka10@gmail.com` : **compte Google ayant généré le mot de passe d’application**.
   - `SMTP_PASS` : renseigner soi-même le mot de passe d’application Google, jamais le mot de passe principal. Ne pas le communiquer dans la conversation. Le traitement ignore les espaces de présentation entre les groupes du mot de passe ; le fichier conserve sa valeur.
   - `SITE_ORIGIN` : origine exacte du navigateur, sans barre finale ; par exemple `http://localhost:5173`. Adapter si le port ou l’hôte diffère.
3. Démarrer avec `npm run dev`, puis ouvrir `http://localhost:5173/#/?section=contact`. L’adaptateur dans `vite.config.js` expose le même traitement serveur que Vercel. Il recharge les variables SMTP lors d’une modification de `.env.local` ; si nécessaire, arrêter puis relancer Vite. `vite preview` et un hébergement purement statique n’exécutent pas l’API.
4. Le visiteur remplit et soumet lui-même le formulaire. Aucun envoi de vérification au démarrage, aucun appel SMTP `verify()` ni e-mail automatique. Tant que `SMTP_PASS` manque, la réponse est `503 / unavailable` et les saisies restent présentes.

Ne pas renseigner ces valeurs dans `src/config.js`, `siteConfig.email` ou une variable `VITE_*`. L’adresse publique facultative du site est indépendante du destinataire privé. `contactEndpoint` est déjà réglé sur `/api/contact`. `.env.example` ne contient aucun mot de passe. Les anciennes variables `RESEND_API_KEY`, `CONTACT_FROM` et `CONTACT_TO` ne sont plus lues par l’envoi ; d’éventuelles valeurs locales historiques sont conservées sans être utilisées. Aucun repli vers Resend.

## Compte Google et diagnostic

Le mot de passe d’application doit appartenir exactement au compte `SMTP_USER`. La validation en deux étapes Google doit être activée et le compte doit autoriser les mots de passe d’application. Une authentification ne peut pas être considérée comme vérifiée avant l’essai manuel du visiteur. Google peut appliquer ses limites d’envoi ou refuser une authentification selon ses règles de sécurité.

Les logs locaux indiquent uniquement la présence du mot de passe, jamais sa valeur. Une erreur SMTP journalise son code technique et, s’il est disponible, son code numérique (ex. `EAUTH` / `535`). Aucun échange AUTH, contenu de message ou réponse SMTP brute n’est journalisé. Les détails restent côté serveur ; le formulaire conserve ses messages FR/EN.

## Vercel — configuration ultérieure uniquement

L’API reste une fonction Node.js Vercel via `api/contact.js`, qui réutilise `server/contact-handler.js`. Nodemailer est une dépendance de production. Ne pas utiliser un runtime Edge pour ce transport SMTP.

Aucune variable Vercel n’est modifiée pendant cette migration locale. Lors d’une migration de production ultérieure, renseigner les cinq variables `SMTP_*`, `CONTACT_RECIPIENT_EMAIL` et `SITE_ORIGIN` dans **Vercel → projet → Settings → Environment Variables → Production**, sans doublons. L’origine doit être celle du site de production, sans barre finale. Un déploiement ultérieur sera nécessaire pour appliquer le code et ces variables. Compléter également les informations de confidentialité (responsable, conservation et modalités de traitement) avant ouverture publique.

Documentation officielle : [Nodemailer SMTP](https://nodemailer.com/smtp), [utilisation avec Gmail](https://nodemailer.com/usage/using-gmail/), [mots de passe d’application Google](https://support.google.com/accounts/answer/185833).

## Fonctionnement et limites

- Validation serveur des champs, longueurs, consentement et origine ; taille JSON limitée à 16 Ko ; honeypot conservé.
- Limitation simple à cinq tentatives par dix minutes et par IP **dans chaque instance serveur**. Compteurs en mémoire, IP hachées, nettoyage et taille bornée. Cette protection n’est pas globale entre instances Vercel et repart à zéro au redémarrage ; pour un trafic exposé ou important, ajouter une règle Vercel Firewall ou un compteur partagé. Pas de stockage de demandes ajouté.
- Le navigateur bloque les doubles soumissions pendant l’appel. Aucun renvoi automatique après une erreur ; les champs et le contexte restent présents pour une nouvelle tentative ou WhatsApp.
- Un succès exige que Gmail SMTP ait accepté l’unique destinataire et n’ait signalé aucun rejet. Il indique l’acceptation de la demande d’envoi, **pas l’arrivée en boîte de réception ni une réservation confirmée**. Aucune copie automatique au visiteur, aucun second transport ni renvoi automatique.
- Texte et HTML échappé ; destinataire fixé côté serveur ; aucune erreur prestataire ni clé renvoyée au navigateur.
- Les tests de transport existants utilisent un transport Nodemailer simulé, sans SMTP réel. Ils sont adaptés à la migration mais ne sont pas exécutés pendant cette intervention. Aucun build ni campagne navigateur. Le test réel reste à effectuer manuellement par le visiteur après configuration de `SMTP_PASS`.
