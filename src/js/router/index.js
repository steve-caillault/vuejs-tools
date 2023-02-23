/**
 * Configuration des routes
 */

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: (() => import(/* webpackChunkName: "routes" */ '@components/Pages/Home.vue'))
    },
    
    // Pages d'erreur
    {
        path: '/error/:statusCode([0-9]+)',
        name: 'error',
        component: (() => import(/* webpackChunkName: "routes" */ '@components/Pages/Error.vue'))
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'error.not-found',
        component: (() => import(/* webpackChunkName: "routes" */ '@components/Pages/Error.vue'))
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition;
        }

        // Evite d'avoir un scrollToTop lorsqu'on ne le souhaite pas (une query qui change en get par exemple)
        if (to.params.savePosition) {
            return {};
        }

        return {
            el: '#app'
        };
    }
});

export default router;
