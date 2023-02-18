# VueJS Tools

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Liste des composants

### Loader

Un composant permettant d'afficher un loader, le temps de charger des ressources.  
Le composant est localisé dans le répertoire `src/js/components/UI/Loader.vue`.

Pour l'utiliser :

```html
<script setup>
import Loader from '@components/UI/Loader.vue';
</script>

<template>
    <loader></loader>
</template>
```

Les styles pour le loader se trouvent dans le fichier `src/sass/app/loader.scss`.  
Le loader remplira l'espace de la section où il se trouve. Pour contrôler
la zone du loader, vous pouvez ajouter `position: absolute|relative` sur son parent.
