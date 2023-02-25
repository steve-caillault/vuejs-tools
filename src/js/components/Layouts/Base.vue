<script setup>
import { defineAsyncComponent } from 'vue';

// Composants

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
        <header>
            <h1>{{ pageTitle }}</h1>
        </header>

        <div class="main-content">
            <slot></slot>
        </div>
    </div>
</template>