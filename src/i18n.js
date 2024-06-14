// i18n.js

import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import ru from "../locales/ru.json";

const messages = {
  en: en,
  ru: ru,
};

const i18n = createI18n({
  locale: "en", // Установи язык по умолчанию
  fallbackLocale: "en", // Язык по умолчанию, если перевод не найден
  messages, // Сообщения с переводами
});

export default i18n;
