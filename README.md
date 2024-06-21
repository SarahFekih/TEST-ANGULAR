## Projet Angular

Ce projet Angular vise à créer une application qui interroge un endpoint API pour récupérer et afficher une liste d'utilisateurs dans un tableau triable. 

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- [Node.js et npm](https://nodejs.org/en/download/) (pour Angular CLI v15 et les dépendances)
- Une IDE de votre choix

### Clonez le dépôt

```bash
git clone https://github.com/SarahFekih/TEST-ANGULAR.git
cd TEST-ANGULAR
```

## Installation du l'application

Installez les dépendances Node.js :

```bash
npm install
```

Démarrez l'application Angular :

```bash
npm start
```

L'application Angular sera accessible à l'adresse [http://localhost:4200](http://localhost:4200).

## Routes

Voici les principales routes définies dans mon application Angular :

- **Route par défaut :** Redirection vers `/home`.
- **Route `/home` :** Page d'accueil de l'application.
- **Route `/users` :** Liste des utilisateurs, triable par colonnes.
- **Route non trouvée (404) :** Gérée par `PageNotFoundComponent`.

## Tests
Des tests unitaires sont implémentés pour assurer le bon fonctionnement des composants et du service. Ils utilisent [Jasmine](https://jasmine.github.io/) et [Karma](https://karma-runner.github.io/latest/index.html) comme framework de test.
Pour exécuter les tests :

```bash
ng test
```