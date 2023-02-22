<script setup>
import { ref, defineAsyncComponent } from 'vue';

// Composants
const Loader = defineAsyncComponent(() => import(/* webpackChunkName: "components-ui" */ '@components/UI/Loader.vue'));
const SpriteSvg = defineAsyncComponent(() => import(/* webpackChunkName: "components-ui" */ '@components/UI/Icons/SVG/Sprite.vue'));
const Icon = defineAsyncComponent(() => import(/* webpackChunkName: "components-ui" */ '@components/UI/Icons/SVG/Icon.vue'));

const ready = ref(true);

</script>

<template>
  <loader v-if="! ready"></loader>
  <template v-else>
    <icon name="close"></icon>
    <sprite-svg></sprite-svg>
  </template>

</template>

<style src="@sass/app.scss"></style>