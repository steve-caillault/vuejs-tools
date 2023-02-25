<script setup>
/**
 * Menus principal du site
 * On charge le fichier src/data/main-menu.js pour récupérer les éléments du menu
 */

import { defineAsyncComponent } from 'vue';
/***/
import itemsData from '@data/main-menu.js';

// Composants
const Items = defineAsyncComponent(() => import(/* webpackChunkName: "components-ui-menus" */ '@components/UI/Menus/Main/Items.vue'));

</script>

<template>
    <items :items="itemsData"></items>
</template>