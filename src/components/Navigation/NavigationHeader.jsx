import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Phone from "../../assets/phone-solid.svg";
import Mail from "../../assets/envelope-solid.svg";

const NavigationHeader = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language);

  const handleChangeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="container flex justify-between py-5 text-sm">
      {/* <h1 className="text-primary">{t("welcomeMessage")}</h1> */}

      <div className="flex gap-2.5 text-base">
        <button
          className={language === "srb" ? "text-primary" : "text-white"}
          onClick={() => handleChangeLanguage("srb")}
          aria-label="Switch to Serbian"
        >
          Sr
        </button>
        <span> / </span>
        <button
          className={language === "en" ? "text-primary" : "text-white"}
          onClick={() => handleChangeLanguage("en")}
          aria-label="Switch to English"
        >
          En
        </button>
      </div>
      <div className="flex gap-5">
        <a href="tel:+381 060/626-26-20">
          <span className="hidden mr-2 lg:inline-block text-primary">{t("headerPhone")}</span>{" "}
          <span className="hidden lg:inline-block">+381 060/626-26-20</span>
          <img src={Phone} className="w-5 h-5 lg:hidden" alt="Call us button" />
        </a>
        <a href="mailto:rezervacije@aprilbeograd.com">
          <span className="hidden mr-2 lg:inline-block text-primary">{t("headerMail")}</span>
          <span className="hidden lg:inline-block"> rezervacije@aprilbeograd.com</span>
          <img src={Mail} className="w-5 h-5 lg:hidden" alt="Mail us button" />
        </a>
      </div>
    </div>
  );
};

export default NavigationHeader;
