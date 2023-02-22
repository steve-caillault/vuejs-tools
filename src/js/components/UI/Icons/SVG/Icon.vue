<script setup>
/**
 * Affichage d'un icône SVG
 * Un sprite SVG doit être chargé en amont
 */

import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Props
const props = defineProps({
    // Nom de l'icône sans le préfixe
    name: {
        type: String,
        required: true
    },
    // Préfixe pour les identifiants des icônes
    prefix: {
        type: String,
        required: false,
        default: 'icon-'
    },
    // Classe à ajouter à la balise svg
    classes: {
        type: Array,
        required: false,
        default: []
    }
});

// I18n
const { t } = useI18n();

// Paramètre href pour la balise use
const href = computed(() => {
    const id = '#' + props.prefix + props.name;
    return id;
});

// Retourne les classes de la balise sgv
const getClasses = (() => {
    return [
        'icon',
        ...props.classes,
        'icon-' + props.name
    ] ;
});

// Texte alternatif pour la balise svg
const altLabel = computed(() => t('misc.icon.altLabel', {
    name: props.name
}));

</script>

<template>
    <svg 
        role="img" 
        :class="getClasses()" 
        :title="altLabel" 
        :aria-label="altLabel"
    >
        <use :xlink:href="href"></use>
    </svg>
</template>
