import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import srb from "./locales/srb.json";

import Navigation from "./components/Navigation/Navigation";

i18n
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: en,
      },
      srb: {
        translation: srb,
      },
    },
    fallbackLng: "srb",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    const rootElement = document.getElementById("root");

    if (rootElement) {
      ReactDOM.createRoot(rootElement).render(
        <I18nextProvider i18n={i18n}>
          <Navigation />
        </I18nextProvider>
      );
    }
  });
