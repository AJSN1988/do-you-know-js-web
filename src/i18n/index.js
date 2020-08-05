import Vue from 'vue';
import VueI18n from 'vue-i18n';
import RU from './locales/__ru';
import EN from './locales/__en';

Vue.use(VueI18n);

export default new VueI18n({
  locale: navigator.language === 'ru-RU' ? 'ru' : 'en',
  fallbackLocale: 'en',
  messages: {
    en: EN,
    ru: RU,
  },
});
