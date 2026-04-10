import React from "react";
import "./../assets/css/custom.css";

const Contact = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="text-center max-w-2xl mb-12 font-montserrat">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Have questions about our products? We'd love to hear from you. Choose
          your preferred method to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <a
          href="mailto:cretanlabdanum@gmail.com"
          className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="p-4 bg-amber-50 text-[#d07ea5] rounded-full mb-5 group-hover:scale-110 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
          <p className="text-gray-600 font-montserrat font-medium group-hover:text-[#d07ea5] transition-colors">
            cretanlabdanum@gmail.com
          </p>
        </a>

        <a
          href="tel:+306945294725"
          className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="p-4 bg-amber-50 text-[#d07ea5] rounded-full mb-5 group-hover:scale-110 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
          <p className="text-gray-600 font-montserrat font-medium group-hover:text-[#d07ea5] transition-colors">
            +30 694 529 4725
          </p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
