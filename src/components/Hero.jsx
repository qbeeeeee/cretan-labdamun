import React from "react";
import heroImage from "../assets/heroImage.jpg";
import "../assets/css/custom.css";
import { Trans, useTranslation } from "react-i18next";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <img
        src={heroImage}
        alt="Cretan Labdanum"
        className="h-full w-auto max-h-150 rounded-[20px]"
      />

      <div id="about" className="mt-20 font-montserrat max-w-4xl mx-auto">
        {/* The Hero Statement - Keeping this text-2xl for high impact */}
        <p className="text-xl lg:text-2xl font-light text-gray-900 leading-relaxed mb-12">
          <Trans
            t={t}
            i18nKey={"hero.firstText"}
            components={{
              1: <strong className="font-bold" />,
            }}
          />
        </p>

        {/* The Story & Process - Dropping to text-lg for comfortable long-form reading */}
        <div className="space-y-10 text-lg font-light text-gray-700 leading-relaxed">
          {/* Section 1: History */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t("hero.secondTitle")}
            </h3>
            <p>
              {t("hero.secondText")}
            </p>
          </section>

          {/* Section 2: Cultivation */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t("hero.thirdTitle")}
            </h3>
            <p>
              {t("hero.thirdText")}
            </p>
          </section>

          {/* Section 3: The Harvest */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t("hero.fourthTitle")}
            </h3>
            <p className="mb-4">
              {t("hero.fourthTextA")}
            </p>
            <p>
              <Trans
                t={t}
                i18nKey={"hero.fourthTextB"}
                components={{
                  1: <span className="italic" />,
                }}
              />
            </p>
          </section>

          {/* Section 4: Quality Control */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t("hero.fifthTitle")}
            </h3>
            <p>
              {t("hero.fifthText")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
