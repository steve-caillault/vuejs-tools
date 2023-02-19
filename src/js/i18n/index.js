import { createI18n } from 'vue-i18n';

const messages = {};

// Chargement des messages
const modules = import.meta.glob('@js/i18n/**/*.js', { eager: true });
Object.keys(modules).forEach((filePath) => {

    const subDirectory = '/messages/';
    const indexOfMessages = filePath.indexOf(subDirectory);
    if(indexOfMessages === -1) {
        return;
    }
    const relativePath = filePath.substring(indexOfMessages + subDirectory.length, filePath.indexOf('.js'));
    const pathKeys = relativePath.split('/');

    const lang = pathKeys.at(0);
    const namespace = pathKeys.at(1);
    
    if(messages[lang] === undefined) {
        messages[lang] = {};
    }
    if(messages[lang][namespace] === undefined) {
        messages[lang][namespace] = {};
    }
    messages[lang][namespace] = modules[filePath].default;
});

const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'en',
    messages,
    silentTranslationWarn: true,
    warnHtmlMessage: false,
    legacy: false
});

export default i18n;
