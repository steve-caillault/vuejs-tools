<script setup>

/**
 * Affichage d'un élément du menu principal
 */

import { computed, defineAsyncComponent } from 'vue';

// Composants
const Items = defineAsyncComponent(() => import(/* webpackChunkName: "components-menus" */ '@components/UI/Menus/Main/Items.vue'));

// Props
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
});

// Items enfants
const children = computed(() => {
    const children = props.item.children || {};
    return Object.values(children);
})
</script>

<template>
    <router-link v-if="item.route"
        :to="item.route"
        :title="item.altLabel"
    >{{ item.label }}</router-link>
    <template v-else-if="item.label">
        {{ item.label }}
    </template>
    <items
        v-if="children.length > 0"
        :items="children"
    ></items>
</template>