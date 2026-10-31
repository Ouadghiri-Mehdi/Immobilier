# Configuration du Contact — note interne

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
