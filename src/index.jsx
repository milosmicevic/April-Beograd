import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import srb from "./locales/srb.json";

import HomeSectionOverlay from "./components/HomeSectionOverlay/HomeSectionOverlay";
import Navigation from "./components/Navigation/Navigation";
import HomeSection from "./components/HomeSection/HomeSection";
import OurStorySection from "./components/OurStorySection/OurStorySection";
import ReservationSection from "./components/ReservationSection/ReservationSection";
import MenuSection from "./components/MenuSection/MenuSection";
import BeveragesListSection from "./components/BeveragesListSection/BeveragesListSection";
import GallerySection from "./components/GallerySection/GallerySection";
import ContactSection from "./components/ContactSection/ContactSection";

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

    const handleMount = (id, ref) => {
      sectionRefs.current[id] = ref;
    };

    if (rootElement) {
      ReactDOM.createRoot(rootElement).render(
        <I18nextProvider i18n={i18n}>
          <HomeSectionOverlay />
          <Navigation />
          <HomeSection onMount={handleMount} />
          <OurStorySection onMount={handleMount} />
          <ReservationSection onMount={handleMount} />
          <MenuSection onMount={handleMount} />
          <BeveragesListSection onMount={handleMount} />
          <GallerySection onMount={handleMount} />
          <ContactSection onMount={handleMount} />
        </I18nextProvider>
      );
    }
  });
