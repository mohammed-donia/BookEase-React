import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#d2e8ef] px-6 md:px-24 py-16 flex flex-col justify-center">

      {/* العنوان */}
      <header className="text-center mb-16">
        <p className="text-4xl font-extrabold  text-[#287094] tracking-wide">
          CONTACT <span className="text-gray-800 font-semibold">US</span>
        </p>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-24">

        {/* صورة التواصل */}
        <img
          src={assets.contact_image}
          alt="صورة فريق الدعم والتواصل"             
          className="w-full max-w-md rounded-2xl shadow-lg object-cover border border-gray-200"
        />

        {/* معلومات الاتصال */}
        <section className="max-w-lg flex flex-col gap-10 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">

          {/* مكتبنا */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#287094]">
              OUR OFFICE
            </h2>
            <p className="text-gray-700 leading-relaxed">
             Al-Wahda Street, Al-Shifa Medical Tower, 4th Floor <br />Gaza, Palestine
            </p>
            <p className="text-gray-700 leading-relaxed mt-6">
              Tel: (972) 597-845-859 <br />
              Email: doniaMohammed@gmail.com
            </p>
          </div>

          {/* فرص العمل */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#287094]">
              CAREERS AT PRESCRIPTO
            </h2>
            <p className="text-gray-700 mb-8">
              Learn more about our teams and job openings.
            </p>
            <button
              type="button"
              className="bg-[#287094] text-white px-10 py-4 rounded-full font-semibold
                         hover:bg-[#1f5c73] active:bg-[#087094] transition-colors duration-200 shadow-md"
            >
              Explore Jobs
            </button>
          </div>

        </section>
      </main>
    </div>
  );
};

export default Contact;
