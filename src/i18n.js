// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import arTranslation from './locales/ar/translation.json';

i18n
  .use(LanguageDetector) // يكتشف اللغة تلقائياً من المتصفح
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      ar: {
        translation: arTranslation
      }
    },
    fallbackLng: 'en', // اللغة الافتراضية
    interpolation: {
      escapeValue: false // لا نحتاج لهذه الخاصية مع React
    }
  });

export default i18n;
