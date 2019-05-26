import React from 'react';
import i18n from 'i18next';
import locales from './locales/index';

i18n.init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  },
  resources: locales
});

React.$t = (e, t) => i18n.t(e, t);