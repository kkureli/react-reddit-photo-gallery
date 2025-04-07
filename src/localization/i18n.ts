import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      search: "Search...",
      title: "Reddit Photo Gallery",
      searchPrompt: "Search for your favorite subreddit images!",
    },
  },
  tr: {
    translation: {
      search: "Ara...",
      title: "Reddit Fotoğraf Galerisi",
      searchPrompt: "Favori subreddit görsellerinizi arayın!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
