<script setup>
import { defineAsyncComponent } from 'vue';

/**
 * Affichage des éléments du menu pricipal
 */

// Composants
const Item = defineAsyncComponent(() => import(/* webpackChunkName: "components-menus" */ '@components/UI/Menus/Main/Item.vue'));

// Props
const props = defineProps({
    items: {
        type: Array,
        required: true
    }
});

</script>

<template>
    <ul>
        <li
            v-for="(item, itemIndex) in items"
            :key="itemIndex"
        >
            <item :item="item"></item>
        </li>
    </ul>
</template>