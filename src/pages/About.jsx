import React from 'react';
import { Link } from "react-router-dom";
// Import page components
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';

// Import all necessary images
import officeImg from '../assets/about/office.jpg';
import spaTreatmentImg from '../assets/about/spa-treatment.jpg';

const About = () => {

  // Define a single set of color variables for consistency
  const COLORS = {
    bgGray: '#f3f4f6',   // light golden background
    darkGoldenText: '#A67C2B',   // darker golden/brown text
    primaryGold: '#C4912F',     // main gold accent (previously primaryGold)
    callToActionBg: '#D4A63A',
  };

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-start p-8">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${officeImg})` }}></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-white p-4 max-w-lg md:max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-2 leading-tight">
            About Us
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-sans">
            The Best Spa Experience services you can Sunlift on.
          </p>
        </div>
      </div>

      {/* Tranquility Section */}
      <div style={{ backgroundColor: COLORS.bgGray }} className="py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              <img
                src={spaTreatmentImg}
                alt="Spa treatment with hot stones"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div style={{ background: `linear-gradient(to bottom right, transparent, ${COLORS.primaryGold})`, opacity: 0.1 }} className="absolute inset-0 rounded-lg"></div>
            </div>
          </div>
          <div className="w-full relative z-10 pt-16 lg:pt-0">
            <div style={{ color: COLORS.primaryGold }} className="flex items-center text-sm uppercase font-semibold mb-2">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zM12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
              </svg>
              About Us
            </div>
            <h2 style={{ color: COLORS.darkGoldenText }} className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              Welcome To Home Of<br />Tranquility, Relaxation<br />And Respite
            </h2>
            <p className="text-base text-gray-500 mb-8 max-w-xl">
              Everybody is looking for places where to relax and get more energy. In our wellness center silence, energy, beauty and vitality meet. The treatments we offer will refresh both your body and soul. We'll be glad to welcome you and recommend our facilities and services.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 mb-8">
              <div className="flex items-center space-x-2" style={{ color: COLORS.darkGoldenText }}>
                <svg className="w-5 h-5" style={{ color: COLORS.primaryGold }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.707 9.293a1 1 0 000 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 00-1.414 0z" />
                </svg>
                <span>Countless happy customers</span>
              </div>
              <div className="flex items-center space-x-2" style={{ color: COLORS.darkGoldenText }}>
                <svg className="w-5 h-5" style={{ color: COLORS.primaryGold }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.707 9.293a1 1 0 000 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 00-1.414 0z" />
                </svg>
                <span>Comprehensive Solution</span>
              </div>
            </div>
            <Link
              to="/contact"
              style={{ backgroundColor: COLORS.primaryGold }}
              className="inline-block py-3 px-8 rounded-full font-bold text-white hover:bg-[#eac4b2] transition-colors duration-300"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>

      {/* Philosophy, Mission, Team Section */}
      <div className="bg-white py-12 px-6 lg:px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left my-16 mb-20">
          <div className='flex flex-col items-center'>
            <h3 style={{ color: COLORS.darkGoldenText }} className="text-xl md:text-2xl font-serif font-bold mb-2">
              Our Philosophy:
            </h3>
            <p style={{ color: COLORS.darkGoldenText }}>Holistic wellness and personal care</p>
          </div>
          <div className='flex flex-col items-center'>
            <h3 style={{ color: COLORS.darkGoldenText }} className="text-xl md:text-2xl font-serif font-bold mb-2">
              Established in 2025
            </h3>
            <p style={{ color: COLORS.darkGoldenText }}>A journey of rejuvenation</p>
          </div>
          <div className='flex flex-col items-center'>
            <h3 style={{ color: COLORS.darkGoldenText }} className="text-xl md:text-2xl font-serif font-bold mb-2">
              Mission:
            </h3>
            <p style={{ color: COLORS.darkGoldenText }}>To inspire wellness through nature and care</p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: COLORS.bgGray }} className="py-20 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 style={{ color: COLORS.darkGoldenText }} className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe that true wellness is a journey of balance and self-care. Our philosophy is rooted in a commitment to quality, tranquility, and personalized service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
              <svg className="w-12 h-12 mb-4" style={{ color: COLORS.callToActionBg }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2.91 14.59L5 12.5l1.41-1.41L9.09 13.59l4.59-4.59L15 10.41l-5.91 5.91z"></path>
              </svg>
              <h3 style={{ color: COLORS.darkGoldenText }} className="text-2xl font-serif font-semibold mb-2">Quality & Purity</h3>
              <p className="text-gray-500">
                We use only the finest organic and ethically sourced products, ensuring every treatment is safe, effective, and free from harmful chemicals.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
              <svg className="w-12 h-12 mb-4" style={{ color: COLORS.callToActionBg }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"></path>
              </svg>
              <h3 style={{ color: COLORS.darkGoldenText }} className="text-2xl font-serif font-semibold mb-2">Holistic Wellness</h3>
              <p className="text-gray-500">
                Our approach goes beyond treatments, focusing on restoring balance to your mind, body, and spirit in a peaceful and serene environment.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
              <svg className="w-12 h-12 mb-4" style={{ color: COLORS.callToActionBg }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
              </svg>
              <h3 style={{ color: COLORS.darkGoldenText }} className="text-2xl font-serif font-semibold mb-2">Dedicated Experts</h3>
              <p className="text-gray-500">
                Our team of specialists provides a customized experience tailored to your unique needs, ensuring you receive the highest level of care.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
