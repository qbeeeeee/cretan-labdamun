import React from "react";
import "./../assets/css/custom.css";
import phoneIcon from "./../assets/contact/telephone.png";
import emailIcon from "./../assets/contact/email.png";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="text-center max-w-2xl mb-12 font-montserrat">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          {t("contact.getInTouch")}
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          {t("contact.haveQuestions")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <a
          href="mailto:cretanlabdanum@gmail.com"
          className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="p-4 bg-amber-50 text-[#d07ea5] rounded-full mb-5 group-hover:scale-110 transition-transform duration-300">
            <img src={emailIcon} alt="email" className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("contact.emailUs")}</h3>
          <p className="text-gray-600 font-montserrat font-medium group-hover:text-[#d07ea5] transition-colors">
            cretanlabdanum@gmail.com
          </p>
        </a>

        <a
          href="tel:+306945294725"
          className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="p-4 bg-amber-50 text-[#d07ea5] rounded-full mb-5 group-hover:scale-110 transition-transform duration-300">
            <img src={phoneIcon} alt="email" className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("contact.callUs")}</h3>
          <p className="text-gray-600 font-montserrat font-medium group-hover:text-[#d07ea5] transition-colors">
            +30 694 529 4725
          </p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
