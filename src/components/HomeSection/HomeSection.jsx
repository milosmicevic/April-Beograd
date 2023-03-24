import React from "react";
import "./HomeSection.scss";
import { useTranslation } from "react-i18next";
import BrushImage from "../../assets/asset 18.png";

const HomeSection = () => {
  const { t } = useTranslation();
  return (
    <section id="home-section" className="relative grid place-items-center -mt-[60px]">
      <div className="container">
        <div className="hero-title-container relative max-w-full sm:max-w-[70%] lg:max-w-[50%]">
          <p className="text-base italic font-playfairDisplay">{t("heroSubTitle")}</p>
          <h1 className="lg:leading-[70px] mb-10">{t("heroTitle")}</h1>
          <a
            className="flex font-semibold items-center gap-8 py-3.5 px-5 font-playfairDisplay border border-primary w-max text-sm bg-white/10 duration-200 hover:border-white hover:bg-white hover:text-black"
            href="#menu-section"
          >
            {t("heroButtonText")} <span className="-mt-1 text-lg"> &#x2192;</span>
          </a>
        </div>
        <div className="absolute flex items-center gap-5 text-xs font-semibold bottom-20">
          <div className="w-5 h-8 border-[2px] border-white rounded-md scroll-down-indicator-container p-1.5">
            <div className="w-1 h-1 rounded-full bg-primary scroll-down-indicator"></div>
          </div>
          <span>Scroll down to Discover</span>
        </div>
      </div>
      <img src={BrushImage} className="absolute -bottom-[1px] w-full" alt="Brush Effect Image" />
    </section>
  );
};

export default HomeSection;
