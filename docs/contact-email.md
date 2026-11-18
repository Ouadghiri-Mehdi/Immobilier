# Envoi des demandes — configuration serveur

Le formulaire Contact commun à tous les services utilise `/api/contact` et Resend, sans ouvrir la messagerie du visiteur. Les boutons des biens transmettent le bien, sa référence et la typologie sélectionnée ; le marché secondaire rejoint le même formulaire avec un message prérempli. Les liens WhatsApp sont conservés. Aucun formulaire ni champ supplémentaire n’est ajouté : dates, budget ou critères ne sont transmis que si le visiteur les précise dans son message. Il n’existe pas de nouvelle réservation ou disponibilité garantie.

## Local

1. Copier `.env.example` vers `.env.local` à la racine du projet. Ce dernier fichier est ignoré par Git.
2. Renseigner uniquement dans `.env.local` :
   - `CONTACT_RECIPIENT_EMAIL` : l’unique adresse qui reçoit toutes les demandes.
   - `RESEND_API_KEY` : clé d’envoi Resend.
   - `CONTACT_FROM` : adresse expéditrice autorisée, éventuellement `Sarouty Properties <adresse@votre-domaine>`.
   - `SITE_ORIGIN` : origine exacte du navigateur, sans barre finale ; par exemple `http://localhost:5173`. Adapter si le port ou l’hôte diffère.
3. Démarrer avec `npm run dev`. L’adaptateur dans `vite.config.js` expose le même traitement serveur qu’en production. **Redémarrer Vite après tout changement des variables**. `vite preview` et un hébergement purement statique n’exécutent pas l’API.

Ne pas renseigner ces valeurs dans `src/config.js`, `siteConfig.email` ou une variable `VITE_*`. L’adresse publique facultative du site est indépendante du destinataire privé. `contactEndpoint` est déjà réglé sur `/api/contact`.

## Vercel et Resend

1. Créer/configurer le compte Resend, puis ajouter un domaine expéditeur contrôlé par l’agence. Publier les enregistrements DNS demandés par Resend et attendre sa vérification. Créer une clé d’API avec permission d’envoi adaptée à ce domaine. Le destinataire seul ne suffit pas.
2. Dans **Vercel → projet → Settings → Environment Variables**, ajouter les quatre variables ci-dessus pour **Production**. Les ajouter séparément à Preview/Development si ces environnements doivent envoyer ; `SITE_ORIGIN` doit correspondre à l’URL exacte de chaque environnement. Les origines non configurées sont refusées.
3. `CONTACT_FROM` doit appartenir au domaine autorisé ; l’adresse du visiteur est exclusivement en `Reply-To`. `CONTACT_RECIPIENT_EMAIL` contient une seule adresse, sans liste. L’ancien nom `CONTACT_TO` n’est plus utilisé.
4. Un **redéploiement** est nécessaire après configuration/modification des variables Vercel. Aucun déploiement n’a été effectué pendant cette intervention.
5. Avant l’ouverture publique, compléter/valider les informations de confidentialité (responsable, conservation et modalités de traitement). Un essai réel et la réception devront être vérifiés séparément, sur instruction explicite.

Documentation officielle : [envoi Resend](https://resend.com/docs/api-reference/emails/send-email), [domaine vérifié](https://resend.com/docs/dashboard/domains/introduction).

## Fonctionnement et limites

- Validation serveur des champs, longueurs, consentement et origine ; taille JSON limitée à 16 Ko ; honeypot conservé.
- Limitation simple à cinq tentatives par dix minutes et par IP **dans chaque instance serveur**. Compteurs en mémoire, IP hachées, nettoyage et taille bornée. Cette protection n’est pas globale entre instances Vercel et repart à zéro au redémarrage ; pour un trafic exposé ou important, ajouter une règle Vercel Firewall ou un compteur partagé. Pas de stockage de demandes ajouté.
- Le navigateur bloque les doubles soumissions pendant l’appel. Aucun renvoi automatique après une erreur ; les champs et le contexte restent présents pour une nouvelle tentative ou WhatsApp.
- Un succès exige une réponse positive de Resend avec identifiant. Il indique l’acceptation de la demande d’envoi, **pas l’arrivée en boîte de réception ni une réservation confirmée**. Aucune copie automatique au visiteur.
- Texte et HTML échappé ; destinataire fixé côté serveur ; aucune erreur prestataire ni clé renvoyée au navigateur.
- Vérifications ciblées : `node --test tests/contact.test.mjs tests/contact-request.test.mjs`. Les transports sont simulés, jamais un envoi réel. Aucun build ni campagne navigateur requis pour ces contrôles.
