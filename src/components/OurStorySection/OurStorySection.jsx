import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import "./OurStorySection.scss";
import OurStoryMainImage from "../../assets/our-story-main.webp";
import OurStorySecondaryImage from "../../assets/our-story-secondary.webp";
import WaveImage from "../../assets/wave.webp";
import CubeImage from "../../assets/cube.webp";

const OurStorySection = forwardRef((props, ref) => {
  const { t } = useTranslation();
  return (
    <section ref={ref} id="our-story-section" className="relative grid bg-gray-system-3 place-items-center">
      <div className="container flex flex-col xl:flex-row gap-14 xl:gap-28">
        <div className="relative flex-1">
          <div className="relative our-story-title-container">
            <p className="italic text-primary font-playfairDisplay">{t("ourStoryLabel")}</p>
            <h2 className="font-playfairDisplay">{t("ourStoryTitle")}</h2>
            <div className="mb-8 separator"></div>
          </div>
          <div className="mb-12">
            <p className="text-sm leading-6">{t("ourStoryParagraphOne")}</p>
            <p className="text-sm leading-6">{t("ourStoryParagraphTwo")}</p>
          </div>
          <a
            className="flex font-semibold items-center gap-8 py-3.5 px-5 font-playfairDisplay w-max text-sm bg-primary/60 our-story-link"
            href="#menu-section"
          >
            {t("ourStoryButtonText")} <span className="-mt-1 text-lg duration-500"> &#x2192;</span>
          </a>
          <img src={WaveImage} className="absolute -bottom-10 -left-32" alt="Wave Shape Image" />
          <img src={CubeImage} className="absolute right-0 -top-10 xl:-right-32" alt="Cube Shape Image" />
        </div>
        <div className="relative flex justify-end flex-1 our-story-main-image-container">
          <img className="w-full xl:h-[85%] aspect-[1.53] z-10 our-story-main-image" src={OurStoryMainImage} alt="Our Story Main Image" />
        </div>
      </div>
      <img
        className="absolute right-0 hidden our-story-secondary-image xl:block"
        src={OurStorySecondaryImage}
        alt="Our Story Secondary Image"
      />
    </section>
  );
});

export default OurStorySection;
