// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ru from './locales/ru.json';
import './styles/global.css';
import router from './router';

// Предварительное применение темы для избежания миграции
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark-theme');
}

const savedLocale = localStorage.getItem('locale') || 'en';

const i18n = createI18n({
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    ru,
  },
});

createApp(App).use(i18n).use(router).mount('#app');
