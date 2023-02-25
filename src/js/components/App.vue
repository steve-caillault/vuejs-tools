<script setup>
import { defineAsyncComponent } from 'vue';

// Composants
const Icons = defineAsyncComponent(() => import(/* webpackChunkName: "components-ui" */ '@components/UI/Icons/SVG/Sprite.vue'));

</script>

<template>
    <icons></icons>
    <router-view></router-view>
</template>

<style src="@sass/app.scss"></style>