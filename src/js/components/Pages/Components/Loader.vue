<script setup>
import { defineAsyncComponent, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
/***/
import { useApplication } from '@compositions/Application';

// Composants
const Layout = defineAsyncComponent(() => import(/* webpackChunkName: "components-layouts" */ '@components/Layouts/Base.vue'));
const Loader = defineAsyncComponent(() => import(/* webpackChunkName: "components-ui" */ '@components/UI/Loader.vue'));

// I18n
const { t } = useI18n();

// Composition pour l'application
const { setDocumentTitle } = useApplication();

const pageTitle = t('pages.components.loader.title');
onMounted(() => {
    setDocumentTitle(pageTitle);
});
</script>

<template>
    <layout :page-title="pageTitle">
        <div class="testing testing-component testing-component-loader">
            <loader></loader>
        </div>
    </layout>
</template>