# Mettre en place un login fonctionnel

### Etape 1 : Utilise le formulaire du navigateur pour te créer en tant qu'utilisateur 😊

- La première étape de l'atelier se passera dans le dossier `client/`.

- Dans cette première étape, tu vas devoir coder les lignes permettant d'effectuer une requête de type POST. En d'autres termes : Un utilisateur doit pouvoir s'enregistrer sur le site.

- Tu vas t'intéresser au fichier `RegistrationForm.jsx`. La première étape de cet atelier se trouve dans ce fichier.

- Cette étape est réussie lorsque, avec Postman, tu peux faire un GET sur la route "http://localhost:5000/api/users", et voir apparaître la / les personne(s) que tu viens de créer. On constatera que le mot de passe est en clair : la prochaine étape consistera à utiliser un hachage cryptographique pour le protéger.

### Etape 2 : Créé le middleware qui permettra de hasher le mot de passe

- La prochaine étape se passe dans le dossier `server/`.

- Tu vas installer la dépendance Argon2, qui te permettra de gérer le hashage de mot de passe.

- Tu devras créer un middleware qui se positionnera juste avant la requête POST, et passera le mot de passe du clair vers la version "hashée".