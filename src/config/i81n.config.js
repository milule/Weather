import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../i81n/en.json";
import vn from "../i81n/vn.json";

const resources = {
  en: {
    translation: en
  },
  vn: {
    translation: vn
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en", // use en if detected lng is not available
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

export const i18next = i18n;
