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

### Icon

Un composant permettant d'afficher un icône SVG. L'utilisation de ce composant suppose que 
vous avez chargé un sprite des icônes affichables.  
Le composant est localisé dans le fichier `src/js/components/UI/Icons/SVG/Icon.vue`.  

Le composant prend en prop le `name` de l'icône sans son prefixe. Le préfixe par défaut est `icon-`. Si vous voulez le modifier globalement, vous pouvez le faire directement dans le fichier du composant, en changeant la valeur par défaut de la prop `prefix`. Si vous souhaitez utiliser un autre préfixe pour un icône, vous devrez définir la prop `prefix` pour cet icône. Une dernière prop `classes` permet de définir des classes CSS à utiliser pour l'icône.

Exemples : 

```html
<script setup>
import Icon from '@components/UI/Icons/SVG/Icon.vue';
</script>

<template>
    <!-- Utilisation standard -->
    <icon name="user"></icon>

    <!-- Modification du préfixe -->
    <icon name="welcome" prefix="user-icon-"></icon>

    <!-- Ajout des classes CSS -->
    <icon name="close" v-bind:classes="[ 'closeable' ]"></icon>
</template>
```
