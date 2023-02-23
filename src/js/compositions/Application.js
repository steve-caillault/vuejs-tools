/**
 * Composition pour la gestion de l'application
 */

import { computed } from 'vue';
/***/
import { useApplicationStore } from '@stores/application';

/**
 * Composition de base de l'application
 * 
 * Permet de générer le titre de la page (balise title)
 */
export function useApplication() {

    const applicationStore = useApplicationStore();

    /**
     * Retourne le store de l'application
     * @return object
     */
    const getApplicationStore = (() => {
        return applicationStore;
    });

    // Nom de l'application
    const applicationName = computed(() => applicationStore.getApplicationName);

    /**
     * Modifie le titre de la balise title dans la balise head
     * On ajoute le nom de l'application en suffixe
     * @param string title
     * @return void
     */ 
    const setDocumentTitle = ((title) => {
        if(applicationName.value !== null) {
            title += ' - ' + applicationName.value;
        }
        document.title = title;
    });

    return {
        getApplicationStore,
        setDocumentTitle,
        /***/
        applicationName
    };
};