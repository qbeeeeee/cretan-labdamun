import React, { useEffect, useRef, useState } from "react";
import logo from "./../assets/logo.png";
import youtube from "./../assets/socials/youtube.svg";
import whatsapp from "./../assets/socials/whatsapp.svg";
import linkedin from "./../assets/socials/linkedin.svg";
import "./../assets/css/custom.css";
import cross from "./../assets/header/cross.svg";
import menu from "./../assets/header/menu.svg";
import { useTranslation } from "react-i18next";
import topArrow from "./../assets/top-arrow.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const socials = [
  {
    name: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/cretan-labdanum-74a50abb/",
  },
  { name: "WhatsApp", icon: whatsapp, url: "https://wa.me/306945294725" },
  {
    name: "Youtube",
    icon: youtube,
    url: "https://www.youtube.com/channel/UCxhUXIqiZ4fzd_NbZA7l_EA",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const headerSections = [
    {
      name: t("header.cretan"),
      url: "#home",
      subItems: [
        { name: t("header.phyto"), url: "#phyto" },
        { name: t("header.resin"), url: "#resin" },
        {
          name: t("header.product"),
          url: "#product",
        },
      ],
    },
    { name: t("header.about"), url: "#about" },
    { name: t("header.imageGallery"), url: "#gallery" },
    { name: t("header.contact"), url: "#contact" },
  ];

  const [currentLanguage, setCurrentLanguage] = useState("en");

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (url) => {
    setActiveDropdown(activeDropdown === url ? null : url);
  };

  useEffect(() => {
    if (!i18n.language) {
      return;
    }
    const langCode = i18n.language.split("-")[0];
    setCurrentLanguage(langCode);
  }, [i18n.language]);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();

    // Close mobile menu when a link is clicked
    setIsMenuOpen(false);

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: targetId,
        offsetY: 150,
      },
      ease: "power3.inOut",
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed w-full h-screen z-50 pointer-events-none"
    >
      {/* Main Header Container */}
      <div
        ref={headerRef}
        className="w-full h-25 flex items-center justify-between border-b border-[#d9d9d9] px-6 2xl:px-9 py-2 
        bg-white pointer-events-auto relative z-51"
      >
        <img
          src={logo}
          alt="Cretan Labdamun"
          className="h-20 w-auto z-52 pointer-events-auto"
        />

        {/* Desktop Navigation (Hidden on < 1280px) */}
        <div className="hidden xl:flex items-center justify-center gap-10">
          <div className="flex gap-5 2xl:gap-10 items-center justify-center text-lg font-roboto-slab font-light">
            {headerSections.map((header) => (
              <div key={header.url} className="relative group">
                {/* Main Header Link */}
                <a
                  href={header.url}
                  onClick={(e) => handleScroll(e, header.url)}
                  className="transition-all duration-300 hover:-translate-y-1 block max-w-max"
                >
                  <div className="relative cursor-pointer">
                    {header?.name}
                    {/* Animated Underline */}
                    <span className="absolute left-0 -bottom-1 h-px w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
                  </div>
                </a>

                {/* Dropdown Menu (Only renders if subItems exist) */}
                {header.subItems && (
                  <div className="absolute left-0 top-full pt-4 hidden group-hover:flex flex-col w-72 z-50">
                    <div className="bg-white shadow-lg border border-gray-100 rounded-md p-3 flex flex-col gap-2">
                      {header.subItems.map((sub, index) => (
                        <a
                          key={index}
                          href={sub.url}
                          onClick={(e) => handleScroll(e, sub.url)}
                          className="text-base text-gray-700 hover:text-black hover:bg-gray-50 p-2 rounded transition-colors duration-200"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Socials (Hidden on < 1280px) */}
        <div className="hidden xl:flex gap-3 2xl:gap-6 items-center justify-center">
          <div
            className={`border-b font-roboto-slab font-light transition-colors duration-300 ease-in-out cursor-pointer ${
              currentLanguage === "en" ? "border-black" : "border-transparent"
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleLanguageChange("en");
            }}
          >
            {t("header.english")}
          </div>
          <div
            className={`border-b font-roboto-slab font-light transition-colors duration-300 ease-in-out cursor-pointer ${
              currentLanguage === "el" ? "border-black" : "border-transparent"
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleLanguageChange("el");
            }}
          >
            {t("header.greek")}
          </div>

          {socials.map(({ icon, name, url }) => {
            return (
              <a
                key={name}
                href={url}
                target={"_blank"}
                rel={"noopener noreferrer"}
                className="relative flex items-center justify-center group"
              >
                <img
                  src={icon}
                  alt={name}
                  className={`w-6 h-6 text-white cursor-pointer transition-all duration-300 group-hover:scale-120 group-hover:-translate-y-1
                        ${name === "LinkedIn" ? "rounded-full" : ""}`}
                />

                <div
                  className="absolute top-10 flex flex-col items-center
                           opacity-0 translate-y-0 scale-75
                           group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
                           transition-all duration-300 pointer-events-none"
                >
                  <div className="px-3 py-1 text-xs text-black font-roboto-slab bg-black/10 backdrop-blur-md rounded-md border border-white/20">
                    {name}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Button (Visible on < 1280px) */}
        <button
          className="block xl:hidden p-2 text-black focus:outline-none transition-transform active:scale-95"
          onClick={() => setIsMenuOpen(true)}
        >
          <img src={menu} alt="|||" className="w-7 sm:w-8 h-7 sm:h-8" />
        </button>
      </div>

      {/* Mobile Menu Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-52 transition-opacity duration-300 xl:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[80vw] max-w-sm bg-white z-53 transform transition-transform duration-500 ease-in-out flex flex-col pt-24 px-8 shadow-2xl pointer-events-auto xl:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button Inside Mobile Menu */}
        <button
          className="absolute top-6 right-6 p-2 text-black focus:outline-none"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={cross} alt="|||" className="w-10 h-10" />
        </button>

        {/* Mobile Nav Links */}
        <div className="flex flex-col gap-6 text-lg font-roboto-slab font-light mt-4">
          {headerSections.map((header) => (
            <div
              key={header.url}
              className="border-b border-gray-100 pb-4 flex flex-col"
            >
              {/* Main Link & Toggle Button Container */}
              <div className="flex justify-between items-center">
                <a
                  href={header.url}
                  onClick={(e) => handleScroll(e, header.url)}
                  className="text-black hover:text-gray-500 transition-colors"
                >
                  {header.name}
                </a>

                {/* Dropdown Toggle Arrow (Only shows if subItems exist) */}
                {header.subItems && (
                  <button
                    onClick={() => toggleDropdown(header.url)}
                    className="p-2 text-gray-500 hover:text-black"
                    aria-label="Toggle sub-menu"
                  >
                    <img
                      src={topArrow}
                      alt="^"
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeDropdown === header.url ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Mobile Expandable Sub-menu */}
              {header.subItems && activeDropdown === header.url && (
                <div className="flex flex-col gap-4 mt-4 pl-4 border-l-2 border-gray-200 animate-fade-in-down">
                  {header.subItems.map((sub, index) => (
                    <a
                      key={index}
                      href={sub.url}
                      onClick={(e) => {
                        handleScroll(e, sub.url);
                        toggleDropdown();
                      }}
                      className="text-base text-gray-600 hover:text-black transition-colors"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Social Links */}
        <div className="flex flex-col gap-4 lg:gap-8 mt-auto mb-12">
          <div className="flex flex-col gap-2 font-roboto-slab font-light">
            <div
              className={`border-b max-w-max transition-colors duration-300 ease-in-out cursor-pointer ${
                currentLanguage === "en" ? "border-black" : "border-transparent"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleLanguageChange("en");
              }}
            >
              {t("header.english")}
            </div>
            <div
              className={`border-b max-w-max transition-colors duration-300 ease-in-out cursor-pointer ${
                currentLanguage === "el" ? "border-black" : "border-transparent"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleLanguageChange("el");
              }}
            >
              {t("header.greek")}
            </div>
          </div>

          <div className="flex gap-4 lg:gap-8 items-center justify-start">
            {socials.map(({ icon, name, url }) => {
              return (
                <a
                  key={name}
                  href={url}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  className="relative flex items-center justify-center group"
                >
                  <img
                    src={icon}
                    alt={name}
                    className={`w-6 h-6 text-white cursor-pointer transition-all duration-300 group-hover:scale-120 group-hover:-translate-y-1
                        ${name === "LinkedIn" ? "rounded-full" : ""}`}
                  />

                  <div
                    className="absolute top-10 flex flex-col items-center
                           opacity-0 translate-y-0 scale-75
                           group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
                           transition-all duration-300 pointer-events-none"
                  >
                    <div className="px-3 py-1 text-xs text-black font-roboto-slab bg-black/10 backdrop-blur-md rounded-md border border-white/20">
                      {name}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
