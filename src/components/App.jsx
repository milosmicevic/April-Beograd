import React, { useState, useRef, useEffect } from "react";

import Loader from "./Loader/Loader";
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

  const sectionRefs = [
    homeSectionRef,
    ourStorySectionRef,
    reservationSectionRef,
    menuSectionRef,
    beveragesListSectionRef,
    gallerySectionRef,
    contactSectionRef,
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      <Loader isLoading={isLoading} />
      {/* {isLoading ? <Loader isLoading={isLoading} /> : ""} */}
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
