import React, { forwardRef } from "react";

import quotesIcon from "../../assets/quote.svg";
import { useTranslation } from "react-i18next";
import reservationOverlayImageOne from "../../assets/reservations-overlay-1.webp";
import reservationOverlayImageTwo from "../../assets/reservations-overlay-2.webp";
import "./ReservationSection.scss";

const ReservationSection = forwardRef((props, ref) => {
  const { t } = useTranslation();

  return (
    <section ref={ref} id="reservation-section" className="xl:flex">
      <div className="relative flex-1 overflow-hidden">
        <div
          className="absolute w-full h-full bg-center bg-cover overlay-image"
          style={{ backgroundImage: `url(${reservationOverlayImageOne})` }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="relative flex flex-col justify-center h-full max-w-full px-6 py-24 mx-auto text-center w-max">
          <img className="self-center w-10 h-10 mb-5" src={quotesIcon} alt="quotes-icon" />
          <p className="self-center mb-24 text-3xl font-playfairDisplay">{t("reservationQuote")}</p>
          <p className="text-sm font-bold text-right">Lucius Annaeus Seneca the Younger</p>
        </div>
      </div>
      <div className="relative flex items-center justify-center flex-1 p-4 sm:p-14 bg-gray-system-1">
        <div
          className="absolute w-full h-full bg-center bg-cover pointer-events-none overlay-image opacity-20"
          style={{ backgroundImage: `url(${reservationOverlayImageTwo})` }}
        ></div>
        <div className="grid w-full h-full p-4 text-center border border-dashed sm:p-12 bg-gray-system-1 place-content-center border-white/20">
          <p className="mb-4 italic text-primary font-playfairDisplay">{t("reservationLabel")}</p>
          <h2 className="mb-4 text-3xl font-playfairDisplay">{t("reservationTitle")}</h2>
          <div className="relative mb-7 dots-separator">
            <span></span>
          </div>

          <div className="flex gap-28 mb-11">
            <div>
              <h3 className="mb-3 text-sm font-normal text-primary">{t("reservationSubTitleOne")}</h3>
              <div>
                <span className="block text-3xl font-semibold">08:00</span>
                <span className="block text-3xl font-semibold">24:00</span>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-normal text-primary">{t("reservationSubTitleTwo")}</h3>
              <div>
                <span className="block text-3xl font-semibold">08:00</span>
                <span className="block text-3xl font-semibold">24:00</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-10">
            <div className="h-[1px] bg-primary w-2/6"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="h-[1px] bg-primary w-2/6"></div>
          </div>
          <a
            className="px-5 py-3 mx-auto text-3xl font-bold duration-200 border w-max border-primary hover:text-primary font-playfairDisplay"
            href="tel:+381 060/626-26-20"
          >
            +381 060/626-26-20
          </a>
        </div>
      </div>
    </section>
  );
});

export default ReservationSection;
