<script setup>
import { defineAsyncComponent, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
/***/
import { useApplication } from '@compositions/Application';

// Composants
const Layout = defineAsyncComponent(() => import(/* webpackChunkName: "components-layouts" */ '@components/Layouts/Base.vue'));
const Icon = defineAsyncComponent(() => import(/* webpackChunkName: "components-ui" */ '@components/UI/Icons/SVG/Icon.vue'));

// I18n
const { t } = useI18n();

// Composition pour l'application
const { setDocumentTitle } = useApplication();

const pageTitle = t('pages.components.icon.title');
onMounted(() => {
    setDocumentTitle(pageTitle);
});
</script>

<template>
    <layout :page-title="pageTitle">
        <div class="testing testing-component testing-component-icon">
            <icon name="close"></icon>
        </div>
    </layout>
</template>