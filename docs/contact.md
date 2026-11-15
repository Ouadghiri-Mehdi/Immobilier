# Configuration du Contact — note interne

## Marché secondaire à Dubaï

`src/i18n/contact.js` centralise `resaleEnquiryMessage` et `resaleEnquiryMailto`. L’adresse provient uniquement de `siteConfig.email`. Tant qu’elle est vide ou invalide, aucun `mailto:` n’est affiché : le bouton prépare une conversation vers le numéro WhatsApp Sarouty existant, en FR/EN. Aucun message n’est envoyé automatiquement.

Une adresse officielle valide activera le lien avec objet et corps encodés : destination Dubaï, achat sur le marché secondaire, type de bien, quartier, budget, calendrier et autres besoins. Le visiteur complète et confirme l’envoi dans sa messagerie. Cela n’active pas le formulaire e-mail du site.

L’ancienne route `/destination/dubai/achat-vente/marche-secondaire` reste une page de demande d’accompagnement, sans lancement automatique de messagerie. La rubrique principale et `/sur-plan` utilisent le catalogue filtré sur `off-plan`, avec les offres `unconfirmed` conservées dans un bloc distinct. Les identifiants, fiches et contacts des offres ne changent pas.

Les coordonnées publiques de l’agence et le service d’envoi sont configurés dans
`src/config.js` (`whatsappNumber`, `email`, `phone`, `address`, `contactEndpoint`).
Cette information technique n’est plus affichée dans la colonne de présentation
du Contact, en français comme en anglais.

Sans `contactEndpoint`, le formulaire prépare une demande sans l’envoyer. La
configuration serveur et les variables d’environnement nécessaires à l’envoi sont
décrites dans le README. Une confirmation de transmission reste conditionnée à
une réponse serveur réussie ; cet ajustement de présentation ne change pas ce mécanisme.

Les validations, le consentement, les valeurs saisies et le contexte du bien sont
gérés par le formulaire existant. Le champ message démarre sur trois lignes et
reste agrandissable verticalement. Les styles ajoutés sont limités à `#contact`.

Contrôle limité au diff : aucun test, compilation, navigateur ni capture.
Le rendu et le fonctionnement n’ont pas été vérifiés dans le navigateur.
