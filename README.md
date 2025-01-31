# OlympicGamesStarter

Ce projet a été généré avec Angular CLI version 14.1.3.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé [Node.js](https://nodejs.org/) et [Angular CLI](https://angular.io/cli) sur votre machine.

## Installation

Clonez le dépôt sur votre machine locale :

```bash
git clone https://github.com/AntoineGallou31/OlympicGamesStarter.git
cd OlympicGamesStarter
```

Installez les dépendances du projet :

```bash
npm install
```

## Serveur de développement

Pour lancer le serveur de développement, exécutez :

```bash
ng serve
```

Naviguez ensuite vers `http://localhost:4200/`. L'application se rechargera automatiquement si vous modifiez l'un des fichiers sources.

## Structure du projet

L'architecture du projet est organisée comme suit :

- **components** : contient tous les composants réutilisables.
- **pages** : contient les composants utilisés pour le routage.
- **core** : contient la logique métier, y compris les services et les modèles.

## Fonctionnalités

L'application offre les fonctionnalités suivantes :

- Affichage du nombre total de médailles remportées par chaque pays.
- Affichage du nombre de médailles remportées par un pays par année.
- Affichage d'un graphique en courbes montrant l'évolution du nombre de médailles d'un pays au fil des ans.
- Affichage de diverses statistiques pour un pays, telles que le nombre total de médailles remportées, le nombre d'athlètes ayant participé et le nombre de Jeux Olympiques auxquels le pays a participé.

## Construction

Pour construire le projet, exécutez :

```bash
ng build
```

Les artefacts de construction seront stockés dans le répertoire `dist/`.

## Tests

Pour exécuter les tests unitaires via [Karma](https://karma-runner.github.io), lancez :

```bash
ng test
```

## Contribution

Les contributions sont les bienvenues. Si vous souhaitez proposer des améliorations ou signaler des problèmes, n'hésitez pas à ouvrir une issue ou une pull request sur le dépôt GitHub.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
