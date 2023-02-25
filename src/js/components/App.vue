<script setup>
import { defineAsyncComponent } from 'vue';

// Composants
const Icons = defineAsyncComponent(() => import(/* webpackChunkName: "components-ui" */ '@components/UI/Icons/SVG/Sprite.vue'));
const MainMenu = defineAsyncComponent(() => import(/* webpackChunkName: "components-ui-menus" */ '@components/UI/Menus/Main.vue'));

</script>

<template>
    <icons></icons>

    <main-menu></main-menu>

    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
</template>

<style src="@sass/app.scss"></style>