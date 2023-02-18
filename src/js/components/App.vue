<script setup>
import { defineAsyncComponent } from 'vue';

// Composants
const Loader = defineAsyncComponent(() => import(/* webpackChunkName: "components-UI" */ '@components/UI/Loader.vue'));

</script>

<template>
  <loader></loader>
</template>

<style src="@sass/app.scss"></style>