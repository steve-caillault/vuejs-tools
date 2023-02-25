/**
 * Données pour générer le menu principal
 */

import i18n from '@js/i18n';

/**
 * 
 * @param string messageKey Clé du message dans les fichiers de traduction
 * @param object params Paramètre du message à remplacer
 * @return string
 */
const translate = ((messageKey, params = {}) => {
    return i18n.global.t(messageKey, params);
});

export default {

    home: {
        route: {
            name: 'home',
        },
        label: translate('menus.main.home.label'),
        altLabel: translate('menus.main.home.altLabel')
    },

    components: {
        label: translate('menus.main.components.label'),
        children: {
            // Test du composant de chargement
            loader: {
                route: {
                    name: 'components.loader',
                },
                label: translate('menus.main.components.loader.label'),
                altLabel: translate('menus.main.components.loader.altLabel')
            },
            // Test du composant d'icône SVG
            icon: {
                route: {
                    name: 'components.icon',
                },
                label: translate('menus.main.components.icon.label'),
                altLabel: translate('menus.main.components.icon.altLabel')
            }
        }
    }
};