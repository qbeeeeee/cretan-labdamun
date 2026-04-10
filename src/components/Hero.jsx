import React from "react";
import heroImage from "../assets/heroImage.jpg";
import "../assets/css/custom.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={heroImage}
        alt="Cretan Labdanum"
        className="h-full w-auto max-h-150 rounded-[20px]"
      />

      <div id="about" className="mt-20 font-montserrat max-w-4xl mx-auto">
        {/* The Hero Statement - Keeping this text-2xl for high impact */}
        <p className="text-2xl font-light text-gray-900 leading-relaxed mb-12">
          <strong className="font-bold">
            Rassoulis Stylianos General Trading
          </strong>{" "}
          is a family-owned business founded in Sisses, Crete in 1975. For
          almost five decades, our vision has been to build strong, trustworthy
          ties with our clients through the trade of premium Greek Labdanum
          (لابدانوم يوناني).
        </p>

        {/* The Story & Process - Dropping to text-lg for comfortable long-form reading */}
        <div className="space-y-10 text-lg font-light text-gray-700 leading-relaxed">
          {/* Section 1: History */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              A Bridge of Ancient Commerce
            </h3>
            <p>
              The commerce of Labdanum from the island of Crete to the Middle
              East dates back to ancient times. Thanks to this historic trade,
              deep bonds of friendship have developed between our peoples.
              Today, as the demands of our customers are higher than ever, we
              strive to meet their expectations through fast service and
              exceptional products.
            </p>
          </section>

          {/* Section 2: Cultivation */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Grown in Sisses, Crete
            </h3>
            <p>
              Labdanum is a natural plant that thrives on the island of Crete,
              particularly in the village of Sisses, where our factory is
              located. Over the last 20 years, our company has meticulously
              organized the cultivation and harvesting of this plant. Backed by
              years of experience and a dedicated workforce, we proudly produce
              the highest quality Labdanum, perfected in its aroma, color, and
              texture.
            </p>
          </section>

          {/* Section 3: The Harvest */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              The Art of the Harvest
            </h3>
            <p className="mb-4">
              The collection period runs from mid-April until the end of August
              and is directly influenced by the weather. Ideal conditions yield
              a bountiful harvest, while heavy rains and hot south winds can
              endanger the crop. Harvesting is a laborious, delicate procedure
              carried out by exceptionally skilled workers across hundreds of
              acres.
            </p>
            <p>
              By rubbing a traditional tool called a{" "}
              <span className="italic">“ladanisterion”</span> over the plant,
              the resin sticks to its leather strips. Slowly and methodically,
              the resin is collected from the leaves. The tools are then left in
              the sun so the Labdanum becomes warm and soft, making it easier to
              separate using a <span className="italic">“Xistre,”</span> a
              specialized tool designed to drag the resin from the strips.
            </p>
          </section>

          {/* Section 4: Quality Control */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Laboratory & Quality Assurance
            </h3>
            <p>
              Once collected, the solid Labdanum is brought to our laboratory
              for careful finishing and quality control. It undergoes final
              testing for hardness, smell, and burning properties. Only then is
              it ready for our packaging section, where it is kept under
              strictly controlled temperatures to preserve its unique, ancient
              attributes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
