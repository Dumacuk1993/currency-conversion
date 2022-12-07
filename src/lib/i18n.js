import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      "Конвертация валют": "Конвертация валют",
      "У меня есть": "У меня есть",
      "Хочу приобрести": "Хочу приобрести",
      "Язык": "Язык",
      "lang": "Ru"
    }
  },
  en: {
    translation: {
      "Конвертация валют": "CURRENCY CONVERSION",
      "У меня есть": "I have",
      "Хочу приобрести": "I want to purchase",
      "Язык": "Language",
      "lang": "En"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru", 
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;