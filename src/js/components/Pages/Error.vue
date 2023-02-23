<script setup>
import { computed, onMounted, defineAsyncComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
/***/
import { useApplication } from '@compositions/Application';

// Composants
const Layout = defineAsyncComponent(() => import(/* webpackChunkName: "components-layouts" */ '@components/Layouts/Base.vue'));

// Route
const route = useRoute();

// I18n
const { t } = useI18n();

// Détermine le code d'erreur
const statusCodeParam = route.params.statusCode || '404';
const allowedStatusCodes = [ '401', '403', '404', '500', '503' ];
const statusCode = (allowedStatusCodes.indexOf(statusCodeParam) !== -1) ? statusCodeParam : '404';

// Classes de la div racine
const rootClasses = (() => {
    const classes = [ 
        'page-error',
        'page-error-' + statusCode
    ];
   return classes;
});

// Titre de la page
const pageTitle = (() => t('errors.:status.title'.replace(':status', statusCode)));

// Composition pour l'application
const { setDocumentTitle } = useApplication();

onMounted(() => {
    setDocumentTitle(pageTitle())
});

</script>

<template>
    <layout
        :page-title="pageTitle()"
        :root-classes="rootClasses()"
    >
        <p>{{ $t('errors.:status.message'.replace(':status', statusCode)) }}</p>
    </layout>
</template>
