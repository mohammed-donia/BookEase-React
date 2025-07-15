import React, { useState } from 'react';
import { assets } from '../assets/assets';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null); // لتحديد الكرت النشط

  const cards = [
    {
      title: 'EFFICIENCY',
      desc: 'Book and manage appointments within seconds — no calls, no queues.',
    },
    {
      title: 'CONVENIENCE',
      desc: 'Access a network of verified doctors anytime, anywhere.',
    },
    {
      title: 'PERSONALIZATION',
      desc: 'Health recommendations and reminders tailored just for you.',
    },
  ];

  const activeColor = '#287094';

  return (
    <div className="bg-gradient-to-b from-white to-[#d2e8ef] py-16 px-4 sm:px-10 lg:px-20">
      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-800"style={{ color: '#287094' }}>
          ABOUT <span className='font-semibold text-gray-800'>US</span>
        </h2>
       
      </div>

      {/* ABOUT SECTION */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <img
          src={assets.about_image}
          alt="About Prescripto"
          className="w-full md:max-w-md rounded-2xl shadow-xl"
        />
        <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-6">
          <p>
            Welcome to <span style={{ color: '#287094', fontWeight: '600' }}>BaseEase</span>, where your health journey meets innovation...
          </p>
          <p>
            Through cutting-edge tech, we help you connect with the right doctors, manage your appointments, and stay informed...
          </p>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p>
              To empower patients with seamless, personalized access to healthcare anytime, anywhere...
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          WHY <span style={{ color: '#287094' }}>CHOOSE US</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-600">
        {cards.map((item, i) => {
          const isActive = activeIndex === i;
          return (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-xl shadow-lg transition-all duration-300 p-8 text-center cursor-pointer border ${
                isActive ? 'bg-[#287094] text-white border-[#287094]' : 'bg-white hover:shadow-2xl border-[#e0f0f4]'
              }`}
            >
              {/* NO ICONS */}
              <h4
                className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-[#287094]'
                }`}
              >
                {item.title}
              </h4>
              <p className={`text-sm transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-600'}`}>
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
