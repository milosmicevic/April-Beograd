import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Navigation.scss";
import NavigationHeader from "./NavigationHeader";
import Logo from "../../assets/asset 0.svg";
import Instagram from "../../assets/instagram.svg";

//TODO Set active class to navlink which is active
//TODO Make navigation sticky

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navListRef = useRef(null);
  const { t } = useTranslation();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    navListRef.current.classList.toggle("nav-list--open");
  };

  // #home-section
  // #our-story-section
  // #reservation-section
  // #menu-section
  // #beverages-list-section
  // #gallery-section
  // #contact-section

  return (
    <header>
      <NavigationHeader />
      <div className="container">
        <div className="sticky top-0 flex items-center justify-between h-20 pl-6 text-sm duration-200 border bg-gray-system-1 border-gray-system-2">
          <div className="logo">
            <a href="/">
              <img src={Logo} className="h-14" alt="My Logo" />
            </a>
          </div>
          <nav className="h-20">
            <div className="relative flex items-center h-full">
              <ul
                ref={navListRef}
                className="nav-list absolute right-[-1px] lg:w-full w-[161px] flex flex-col gap-5 px-4 py-4 border-b top-full lg:flex-row lg:static lg:py-0 bg-gray-system-1 lg:border-none border-x border-gray-system-2"
              >
                <li className="duration-200 hover:text-primary nav-item">
                  <a href="#home-section" aria-label={t("navigationLink1")}>
                    {t("navigationLink1")}
                  </a>
                </li>
                <li className="duration-200 hover:text-primary nav-item">
                  <a href="#our-story-section" aria-label={t("navigationLink2")}>
                    {t("navigationLink2")}
                  </a>
                </li>
                <li className="duration-200 hover:text-primary nav-item">
                  <a href="#reservation-section" aria-label={t("navigationLink3")}>
                    {t("navigationLink3")}
                  </a>
                </li>
                <li className="duration-200 hover:text-primary nav-item">
                  <a href="#menu-section" aria-label={t("navigationLink4")}>
                    {t("navigationLink4")}
                  </a>
                </li>
                <li className="duration-200 hover:text-primary nav-item">
                  <a href="#beverages-list-section" aria-label={t("navigationLink5")}>
                    {t("navigationLink5")}
                  </a>
                </li>
                <li className="duration-200 hover:text-primary nav-item">
                  <a href="#gallery-section" aria-label={t("navigationLink6")}>
                    {t("navigationLink6")}
                  </a>
                </li>
                <li className="duration-200 hover:text-primary nav-item">
                  <a href="#contact-section" aria-label={t("navigationLink7")}>
                    {t("navigationLink7")}
                  </a>
                </li>
              </ul>
              <button
                className="grid w-20 h-20 border-l border-gray-system-2 place-content-center menu-toggle lg:hidden"
                onClick={handleMenuClick}
                aria-label="Menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
              >
                <span className="h-0.5 bg-primary w-3 rounded block"></span>
                <span className="h-0.5 bg-primary w-5 rounded block my-1"></span>
                <span className="h-0.5 bg-primary w-5 rounded block"></span>
              </button>
              <a
                className="grid w-20 h-20 border-l border-gray-system-2 place-content-center"
                href="https://www.instagram.com/april__beograd/"
              >
                <img src={Instagram} className="w-5 h-5" alt="Instagram Link" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
