import React, { useState, useEffect, useRef } from "react";
import "./../assets/css/custom.css";
import Labdanum1 from "./../assets/Labdanum1.jpg";
import Labdanum2 from "./../assets/Labdanum2.jpg";
import Labdanum4 from "./../assets/Labdanum4.jpg";
import Labdanum5 from "./../assets/Labdanum5.jpg";
import Labdanum6 from "./../assets/Labdanum6.jpg";
import Labdanum7 from "./../assets/Labdanum7.png";
import Labdanum8 from "./../assets/Labdanum8.jpg";
import Labdanum9 from "./../assets/Labdanum9.jpg";
import Labdanum10 from "./../assets/Labdanum10.webp";
import Labdanum11 from "./../assets/Labdanum11.webp";
import Labdanum12 from "./../assets/Labdanum12.webp";
import Labdanum13 from "./../assets/Labdanum13.jpg";

import leftArrow from "./../assets/left-arrow.svg";
import rightArrow from "./../assets/right-arrow.svg";
import { useTranslation } from "react-i18next";

const images = [
  Labdanum4,
  Labdanum2,
  Labdanum1,
  Labdanum5,
  Labdanum6,
  Labdanum7,
  Labdanum8,
  Labdanum9,
  Labdanum10,
  Labdanum11,
  Labdanum12,
  Labdanum13,
];

const ImageGallery = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);

  // [Last Image, ...All Images, First Image]
  const extendedImages = [images[images.length - 1], ...images, images[0]];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // If we reached the cloned First image at the very end
    if (currentIndex === extendedImages.length - 1) {
      if (trackRef.current) trackRef.current.style.transition = "none";
      setCurrentIndex(1); // Snap back to the real first image
    }

    // If we reached the cloned Last image at the very beginning
    if (currentIndex === 0) {
      if (trackRef.current) trackRef.current.style.transition = "none";
      setCurrentIndex(extendedImages.length - 2); // Snap back to real last image
    }
  };

  // Restore the smooth transition after our invisible snap
  useEffect(() => {
    if (!isTransitioning && trackRef.current) {
      // requestAnimationFrame ensures the DOM updates without transition first
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = "transform 500ms ease-in-out";
          }
        });
      });
    }
  }, [currentIndex, isTransitioning]);

  return (
    <div className="flex flex-col items-center justify-center my-30 sm:my-40 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl font-roboto-slab font-bold">
        {t("imageGallery.imageGal")}
      </h1>

      {/* Slider Viewport */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-video max-h-130 bg-gray-100 mt-14">
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className="flex w-full h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 500ms ease-in-out",
          }}
        >
          {extendedImages.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Labdanum slide ${index}`}
              className="w-full h-full object-contain shrink-0"
              loading={
                index === 0 || index === extendedImages.length - 1
                  ? "lazy"
                  : "eager"
              }
            />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/80 backdrop-blur-md cursor-pointer
         hover:bg-white/60 text-white hover:text-gray-900 rounded-full transition-all shadow-lg"
          aria-label="Previous slide"
        >
          <img src={leftArrow} alt="<" className="h-4 sm:h-5 w-auto" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/80 backdrop-blur-md cursor-pointer
         hover:bg-white/60 text-white hover:text-gray-900 rounded-full transition-all shadow-lg"
          aria-label="Next slide"
        >
          <img src={rightArrow} alt="<" className="h-4 sm:h-5 w-auto" />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 bg-black/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
          {images.map((_, index) => {
            const isActive =
              currentIndex === index + 1 ||
              (currentIndex === 0 && index === images.length - 1) ||
              (currentIndex === extendedImages.length - 1 && index === 0);

            return (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) setCurrentIndex(index + 1);
                }}
                className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-white w-4 sm:w-6"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
