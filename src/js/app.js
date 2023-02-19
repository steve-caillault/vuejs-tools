import { createApp } from 'vue';
// import { createPinia } from 'pinia';
/***/
import i18n from '@js/i18n';
// import router from '@js/router';
/***/
import App from '@components/App.vue';

const app = createApp(App);

app.use(i18n);
// app.use(createPinia());
// app.use(router);

app.mount('#app');
