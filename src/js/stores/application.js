/**
 * Store pour la gestion de l'application
 */

import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useApplicationStore = defineStore('application', (() => {

    // Nom de l'application
    const name = ref('VueJS Tools');

    // Retourne le nom de l'application
    const getApplicationName = computed(() => name.value);

    return {
        getApplicationName
    };

}));
