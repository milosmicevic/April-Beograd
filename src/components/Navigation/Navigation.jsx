import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Navigation.scss";
import NavigationHeader from "./NavigationHeader";
import Logo from "../../assets/asset 0.svg";
import Instagram from "../../assets/instagram.svg";
import { debounce } from "lodash";

const Navigation = ({ sectionRefs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState(false);

  const mainNavigationRef = useRef(null);
  const navListRef = useRef(null);
  const navigationHeaderRef = useRef(null);
  const mainNavigationContainerRef = useRef(null);

  const navigationLinks = [
    { label: "navigationLink1", href: "#home-section" },
    { label: "navigationLink2", href: "#our-story-section" },
    { label: "navigationLink3", href: "#reservation-section" },
    { label: "navigationLink4", href: "#menu-section" },
    { label: "navigationLink5", href: "#beverages-list-section" },
    { label: "navigationLink6", href: "#gallery-section" },
    { label: "navigationLink7", href: "#contact-section" },
  ];

  const { t } = useTranslation();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    navListRef.current.classList.toggle("nav-list--open");
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSectionId(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    });

    const sections = sectionRefs;

    sections.forEach((section) => {
      observer.observe(section.current);
    });

    const handleScroll = debounce(() => {
      const navigationHeaderHeight = navigationHeaderRef.current.offsetHeight;
      const mainNavigationHeight = mainNavigationRef.current.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > navigationHeaderHeight && !isFixed) {
        setIsFixed(true);
      } else if (scrollPosition <= navigationHeaderHeight && isFixed) {
        setIsFixed(false);
      }

      if (scrollPosition > mainNavigationHeight) {
        setIsFixed(true);
      } else if (scrollPosition <= mainNavigationHeight && isFixed) {
        setIsFixed(false);
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);

    const setNavigationHeight = () => {
      mainNavigationRef.current.style.width = mainNavigationContainerRef.current.clientWidth - 48 + "px";
    };

    setNavigationHeight();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", setNavigationHeight);
    window.addEventListener("load", () => {
      window.scrollTo(0, 0);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section.current);
      });

      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed, activeSectionId]);

  return (
    <header>
      <NavigationHeader ref={navigationHeaderRef} />
      <div className="container" ref={mainNavigationContainerRef}>
        <div
          ref={mainNavigationRef}
          className={`${
            isFixed ? " -translate-y-[60px]" : ""
          } transition-transform z-50 fixed flex items-center justify-between h-[70px] pl-6 text-sm border bg-gray-system-1 border-gray-system-2`}
        >
          <div className="logo">
            <a href="/">
              <img src={Logo} className="h-14" alt="My Logo" />
            </a>
          </div>
          <nav className="h-[70px]">
            <div className="relative flex items-center h-full">
              <ul
                ref={navListRef}
                className="nav-list font-semibold absolute right-[-1px] lg:w-full w-[161px] flex flex-col gap-5 px-4 py-4 border-b top-full lg:flex-row lg:static lg:py-0 bg-gray-system-1 lg:border-none border-x border-gray-system-2"
              >
                {navigationLinks.map((link) => (
                  <li
                    key={link.href}
                    className={`${
                      link.href == "#" + activeSectionId ? "text-primary" : "text-white"
                    } duration-200 md:hover:text-primary nav-item`}
                  >
                    <a href={link.href} aria-label={t(link.label)}>
                      {t(link.label)}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                className="grid w-[70px] h-[70px] border-l border-gray-system-2 place-content-center menu-toggle lg:hidden"
                onClick={handleMenuClick}
                aria-label="Menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
              >
                <span className="h-0.5 bg-primary w-3 rounded block"></span>
                <span className="h-0.5 bg-primary w-5 rounded block my-1"></span>
                <span className="h-0.5 bg-primary w-5 rounded block"></span>
              </button>
              <a
                className="grid w-[70px] h-[70px] border-l border-gray-system-2 place-content-center"
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
