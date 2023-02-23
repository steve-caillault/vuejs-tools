<script setup>
import { defineAsyncComponent } from 'vue';
/***/
import { useApplication } from '@compositions/Application';

// Composants
const Layout = defineAsyncComponent(() => import(/* webpackChunkName: "components-layouts" */ '@components/Layouts/Base.vue'));

// Composition pour l'application
const { applicationName } = useApplication();
</script>

<template>
    <layout :page-title="applicationName"></layout>
</template>