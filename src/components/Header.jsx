import React, { useRef, useState } from "react";
import logo from "./../assets/logo.png";
import viber from "./../assets/socials/viber.svg";
import whatsapp from "./../assets/socials/whatsapp.svg";
import linkedin from "./../assets/socials/linkedin.svg";
import "./../assets/css/custom.css";
import cross from "./../assets/header/cross.svg";
import menu from "./../assets/header/menu.svg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

const socials = [
  {
    name: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/cretan-labdanum-74a50abb/",
  },
  { name: "Viber", icon: viber, url: "viber://chat?number=%2B306945294725" },
  { name: "WhatsApp", icon: whatsapp, url: "https://wa.me/306945294725" },
];

const headerSections = [
  { name: "Cretan Labdamun", icon: linkedin, url: "#home" },
  { name: "About Us", icon: viber, url: "#about" },
  { name: "Image Gallery", icon: whatsapp, url: "#gallery" },
  { name: "Contact", icon: whatsapp, url: "#contact" },
];

const Header = () => {
  const logoRef = useRef(null);
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(
    () => {
      gsap.set(logoRef.current, {
        xPercent: -50,
        yPercent: -50,
        left: "50%",
        top: "30%",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "400px top",
          scrub: 1,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      tl.to(
        logoRef.current,
        {
          left: "36px",
          top: "50%",
          yPercent: -50,
          xPercent: 0,
          height: "80px",
          duration: 1,
        },
        0,
      );

      tl.to(
        headerRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        0,
      );

      tl.to(
        containerRef.current,
        {
          height: "100px",
          duration: 1,
        },
        0,
      );
    },
    { dependencies: [], scope: containerRef },
  );

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
      <img
        ref={logoRef}
        src={logo}
        alt="Cretan Labdamun"
        className="h-[25vh] sm:h-[35vh] w-auto absolute z-52 pointer-events-auto"
      />

      {/* Main Header Container */}
      <div
        ref={headerRef}
        className="opacity-0 -translate-y-full w-full h-25 flex items-center justify-between border-b border-[#d9d9d9] px-6 sm:px-9 py-2 bg-white pointer-events-auto relative z-[51]"
      >
        <div className="w-20 h-20"></div>

        {/* Desktop Navigation (Hidden on < 1024px) */}
        <div className="hidden lg:flex items-center justify-center gap-10">
          <div className="flex gap-10 items-center justify-center text-lg font-poppins font-light">
            {headerSections.map((header) => (
              <a
                key={header.name}
                href={header.url}
                onClick={(e) => handleScroll(e, header.url)}
                className="group transition-all duration-300 hover:-translate-y-1 max-w-max"
              >
                <div className="relative cursor-pointer">
                  {header?.name}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Socials (Hidden on < 1024px) */}
        <div className="hidden lg:flex gap-6 items-center justify-center">
          {socials.map(({ icon, name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
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
                <div className="px-3 py-1 text-xs text-black font-inter bg-black/10 backdrop-blur-md rounded-md border border-white/20">
                  {name}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button (Visible on < 1024px) */}
        <button
          className="block lg:hidden p-2 text-black focus:outline-none transition-transform active:scale-95"
          onClick={() => setIsMenuOpen(true)}
        >
          <img src={menu} alt="|||" className="w-7 sm:w-8 h-7 sm:h-8" />
        </button>
      </div>

      {/* Mobile Menu Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-52 transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[80vw] max-w-sm bg-white z-53 transform transition-transform duration-500 ease-in-out flex flex-col pt-24 px-8 shadow-2xl pointer-events-auto lg:hidden ${
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
        <div className="flex flex-col gap-6 text-lg font-poppins font-light mt-4">
          {headerSections.map((header) => (
            <a
              key={header.name}
              href={header.url}
              onClick={(e) => handleScroll(e, header.url)}
              className="border-b border-gray-100 pb-4 text-black hover:text-gray-500 transition-colors"
            >
              {header.name}
            </a>
          ))}
        </div>

        {/* Mobile Social Links */}
        <div className="flex gap-8 items-center justify-start mt-auto mb-12">
          {socials.map(({ icon, name, url }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer">
              <img
                src={icon}
                alt={name}
                className={`w-8 h-8 transition-transform active:scale-95 ${
                  name === "LinkedIn" ? "rounded-full" : ""
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
