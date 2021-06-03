# Custom-FAST-Componant-Example-With-Webpack

> 📃 Ce projet est utilisé dans le cadre d'un article disponible depuis le blog technique d'Ingéniance :
https://techblog.ingeniance.fr/fast-la-nouvelle-librairie-de-composants-web-par-microsoft/

Ce dépôt propose de visualiser le rendu d'un composant Web s'appuiyant sur la librairie [FAST](https://www.fast.design/) de Microsoft. Le composant est développé en **TypeScript** et l'exemple s'appuis sur la documentation fournie par Microsoft pour l'intégration avec **Webpack**.

Vous pouvez compiler le code **TypeScript** via le *loader* **ts-loader** de **Webpack** à l'aide de la commande :
```bash
npm run build
```

Vous pouvez lancer la page Web contenant le composant FAST personnalisé via le serveur http de **webpack** en utilsant la commande :
```bash
npm run dev
```
Une page du navigateur s'ouvrira sur l'adresse http://localhost:9000.

N'oubliez pas d'installer les dépendances avant d'exécuter l'une des commandes ci-dessus :
```bash
npm install
```