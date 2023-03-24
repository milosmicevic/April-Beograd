import React, { useRef, useEffect } from "react";

import HomeSectionOverlay from "./HomeSectionOverlay/HomeSectionOverlay";
import Navigation from "./Navigation/Navigation";
import HomeSection from "./HomeSection/HomeSection";
import OurStorySection from "./OurStorySection/OurStorySection";
import ReservationSection from "./ReservationSection/ReservationSection";
import MenuSection from "./MenuSection/MenuSection";
import BeveragesListSection from "./BeveragesListSection/BeveragesListSection";
import GallerySection from "./GallerySection/GallerySection";
import ContactSection from "./ContactSection/ContactSection";

const App = () => {
  const homeSectionRef = useRef(null);
  const ourStorySectionRef = useRef(null);
  const reservationSectionRef = useRef(null);
  const menuSectionRef = useRef(null);
  const beveragesListSectionRef = useRef(null);
  const gallerySectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  //   const sectionRefs = {
  //     "#home-section": homeSectionRef,
  //     "#our-story-section": ourStorySectionRef,
  //     "#reservation-section": reservationSectionRef,
  //     "#menu-section": menuSectionRef,
  //     "#beverages-list-section": beveragesListSectionRef,
  //     "#gallery-section": gallerySectionRef,
  //     "#contact-section": contactSectionRef,
  //   };
  const sectionRefs = [
    homeSectionRef,
    ourStorySectionRef,
    reservationSectionRef,
    menuSectionRef,
    beveragesListSectionRef,
    gallerySectionRef,
    contactSectionRef,
  ];
  return (
    <React.Fragment>
      <HomeSectionOverlay />
      <Navigation sectionRefs={sectionRefs} />
      <HomeSection ref={homeSectionRef} />
      <OurStorySection ref={ourStorySectionRef} />
      <ReservationSection ref={reservationSectionRef} />
      <MenuSection ref={menuSectionRef} />
      <BeveragesListSection ref={beveragesListSectionRef} />
      <GallerySection ref={gallerySectionRef} />
      <ContactSection ref={contactSectionRef} />
    </React.Fragment>
  );
};

export default App;
