import React from "react";
import heroImage from "../assets/Labdanum4.jpg";
import Labdanum11 from "../assets/Labdanum11.jpg";
import Labdanum10 from "../assets/Labdanum10.webp";
import Labdanum9 from "../assets/Labdanum9.jpg";
import "../assets/css/custom.css";
import { Trans, useTranslation } from "react-i18next";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <div className="font-roboto-slab mx-auto text-lg font-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="phyto" className="text-xl font-bold  mb-3">
            {t("hero.firstTextHeader")}
          </h2>

          <p>{t("hero.firstText")}</p>
        </div>

        <img
          src={heroImage}
          alt="Cretan Labdanum"
          className="h-auto w-360 max-w-[100vw] max-h-145 2xl:rounded-[20px] object-cover mx-auto my-15"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="resin" className="text-xl font-bold mb-3">
            {t("hero.secondTextHeader")}
          </h2>

          <p>{t("hero.secondText")}</p>
        </div>

        <img
          src={Labdanum11}
          alt="Cretan Labdanum"
          className="h-auto w-360 max-w-[100vw] max-h-170 2xl:rounded-[20px] object-cover mx-auto my-15"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>{t("hero.thirdText")}</p>
        </div>

        <img
          src={Labdanum10}
          alt="Cretan Labdanum"
          className="h-auto w-360 max-w-[100vw] max-h-145 2xl:rounded-[20px] object-cover mx-auto mt-20 mb-5"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="product" className="text-xl font-bold mb-3">
            {t("hero.fourthTextHeader")}
          </h2>

          <p>{t("hero.fourthText")}</p>
        </div>

        <img
          src={Labdanum9}
          alt="Cretan Labdanum"
          className="h-auto w-4xl max-w-[100vw] max-h-145 2xl:rounded-[20px] object-cover mx-auto my-15"
        />

        <div id="about" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-3">
            {t("hero.fifthTextHeader")}
          </h2>

          <p>{t("hero.fifthText")}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
