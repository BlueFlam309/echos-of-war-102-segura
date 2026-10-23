import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { es } from './locales/es';
import { en } from './locales/en';

i18n
    .use(initReactI18next)
    .init({
        lng: localStorage.getItem('language') || 'es',
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        },
        resources: {
            es: {
                translation: es
            },
            en: {
                translation: en
            }

        }
    });

export default i18n;