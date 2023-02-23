<script setup>
import { defineAsyncComponent } from 'vue';

// Composants
const MainMenu = defineAsyncComponent(() => import(/* webpackChunkName: "components-ui-menus" */ '@components/UI/Menus/Main.vue'));

// Props
const props = defineProps({
    pageTitle: {
        type: String,
        required: true
    },
    rootClasses: {
        type: Array,
        required: false,
        default: []
    }
});

const getClasses = (() => {
    return [
        'page',
        ...props.rootClasses
    ];
});

</script>

<template>
    <div :class="getClasses()">
        <main-menu></main-menu>
        <header>
            <h1>{{ pageTitle }}</h1>
        </header>

        <div class="main-content">
            <slot></slot>
        </div>
    </div>
</template>