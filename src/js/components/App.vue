<script setup>
import { ref, defineAsyncComponent } from 'vue';

// Composants
const Loader = defineAsyncComponent(() => import(/* webpackChunkName: "components-ui" */ '@components/UI/Loader.vue'));

const ready = ref(true);

</script>

<template>
  <loader v-if="! ready"></loader>
  <template v-else>
    <router-view></router-view>
  </template>

</template>

<style src="@sass/app.scss"></style>