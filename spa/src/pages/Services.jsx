import React from 'react';
import { Link } from 'react-router-dom';

// Import local image assets
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';

import massageImg from '../assets/services_assets/massage.jpg';
import facialImg from '../assets/services_assets/facial.jpg';
import scrubImg from '../assets/services_assets/scrub.jpg';
import washImg from '../assets/services_assets/wash.jpg';
import serviceImg from '../assets/services_assets/services_hero.jpg';
import headShoulderImg from '../assets/services_assets/head_shoulder.jpg'; // Assuming these paths exist
import footMassageImg from '../assets/services_assets/foot_massage.jpg';
import footReflexologyImg from '../assets/services_assets/foot_reflexology.jpg';
import swedishMassageImg from '../assets/services_assets/swedish_massage.jpg';
import massage2 from '../assets/services_assets/massage.png';
import heal from '../assets/services_assets/heal.png';
import wash from '../assets/services_assets/wash.png';
import facial from '../assets/services_assets/facial.png';

const Services = () => {
  const serviceCards = [
    {
      image: massageImg,
      title: "Relaxing Swedish massage to ease tension",
      price: "$80",
    },
    {
      image: facialImg,
      title: "Hydrating facial with natural extracts",
      price: "$95",
    },
    {
      image: scrubImg,
      title: "Detoxifying body scrub with sea salts",
      price: "$100",
    },
    {
      image: washImg,
      title: "Detoxifying body wash with sea salts",
      price: "$85",
    },
  ];

  const alternatingServices = [
    {
      title: 'HEAD & SHOULDER MASSAGE',
      text: "This unique combination of lavender & geranium oil relieves stress levels and induces sleep. The massage will make your head feel lighter and you feel healthier psychologically. Lavender oil with its unique aroma will give you a pampered feel.",
      image: headShoulderImg,
      imageRight: false,
    },
    {
      title: 'FOOT MASSAGE',
      text: "Treat your tired feet to a relaxing foot massage that helps alleviate tension and improve circulation. Our skilled therapists will target pressure points to relieve discomfort and leave your feet feeling refreshed and rejuvenated.",
      image: footMassageImg,
      imageRight: true,
    },
    {
      title: 'FOOT REFLEXOLOGY',
      text: "Foot Reflexology are often seen as a luxury rather than a necessity. But there's way more to the practice than sheer relaxation and pampering. Foot Reflexology have a host of benefits to your overall health, making them less of a splurge-worthy extra and more of an overloaded healthy habit. Needless to say, they shouldn't just be reserved for vacation massage tables and pedicure add-ons.",
      image: footReflexologyImg,
      imageRight: false,
    },
    {
      title: 'HOLISTIC SWEDISH MASSAGE',
      text: "Holistic Swedish massage therapy promotes relaxation can help ease aches and pains. It helps to release body's natural painkiller and gives a general sense of contentment. This massage not only feels exceptionally good, but it is relaxing and invigorating. It is incredibly popular massage offering long lasting stress relief and a fantastic feeling of well being.",
      image: swedishMassageImg,
      imageRight: true,
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${serviceImg})` }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-serif text-white tracking-wide">
            Services
          </h1>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="bg-white py-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#E5B6A7] flex items-center justify-center mb-4">
            OUR TREATMENT SPECIAL
          </p>
          <h2 className="text-5xl md:text-6xl font-serif text-gray-800 leading-tight mb-12">
            Treats Your Soul
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative bg-white border border-gray-200 rounded-xl p-6 h-[220px] flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group">
              <img className='w-30' src={massage2} alt="" />
              <h3 className="text-xl font-semibold text-gray-800 mt-2">Medi Facial</h3>
            </div>
            <div className="relative bg-white border border-gray-200 rounded-xl p-6 h-[220px] flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group">
              <img className='w-30' src={heal} alt="" />
              <h3 className="text-xl font-semibold text-gray-800 mt-2">Youth Preserve</h3>
            </div>
            <div className="relative bg-white border border-gray-200 rounded-xl p-6 h-[220px] flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group">
              <img className='w-30' src={wash} alt="" />
              <h3 className="text-xl font-semibold text-gray-800 mt-2">Body Sculpting</h3>
            </div>
            <div className="relative bg-white border border-gray-200 rounded-xl p-6 h-[220px] flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group">
              <img className='w-30' src={facial} alt="" />
              <h3 className="text-xl font-semibold text-gray-800 mt-2">Hair Restore</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Redesigned Alternating Services Section */}
      <div className="bg-[#f8f5f0] py-20 px-4 md:px-8 font-serif">
        <div className="max-w-7xl mx-auto space-y-24">
          {alternatingServices.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
              {/* Image Column */}
              <div className={`relative ${service.imageRight ? 'lg:order-2' : ''}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[450px] object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
              </div>

              {/* Text Column */}
              <div className={`flex flex-col justify-center p-6 ${service.imageRight ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}`}>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#a87f6e] mb-2">
                  Signature Service
                </p>
                <h3 className="text-4xl md:text-5xl font-bold text-[#5c4a45] mb-6 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.text}
                </p>
                <Link
                  to="/book-now"
                  className="mt-8 self-start bg-[#a87f6e] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#8b6b5e]"
                >
                  BOOK NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section (remains unchanged for this request) */}
      <div className="bg-[#F8F5F1] my-10 py-16 px-4 md:px-8 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Pricing Card 1 */}
          <div className="relative bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border-t-8 border-[#A5783A]">
            <div className="absolute top-0 right-8 transform -translate-y-1/2 rotate-45 h-16 w-16 bg-[#A5783A] shadow-md flex items-center justify-center">
              <span className="text-sm font-bold text-white uppercase tracking-wider transform -rotate-45">Basic Plan</span>
            </div>
            <div className="my-8">
              <h3 className="text-5xl font-serif text-gray-800">$129</h3>
              <p className="text-gray-500 mt-2">Par month</p>
            </div>
            <p className="text-gray-600 mb-6">
              Lnteger sapien nec sapien sollicitudin ultrices cras tempor id lorem.
            </p>
            <ul className="text-left w-full space-y-4 mb-8">
              <li className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-[#A5783A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Aromatherapy Candles</span>
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-[#A5783A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>True Transformation</span>
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-[#A5783A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Oil Massage</span>
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-[#A5783A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Meditation Retreats</span>
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-[#A5783A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Organic Essential Oil</span>
              </li>
            </ul>
            <p className="text-gray-500 text-sm mt-auto mb-6">Up to 10 users + $1.99 per user</p>
            <a href="#" className="bg-white border border-[#A5783A] text-[#A5783A] font-bold py-3 px-12 rounded-full transition-colors duration-300 hover:bg-[#A5783A] hover:text-white">
              CHOOSE PLAN
            </a>
          </div>
          {/* Pricing Card 2 */}
          <div className="relative bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border-t-8 border-[#A5783A]">
            <div className="absolute top-0 right-8 transform -translate-y-1/2 rotate-45 h-16 w-16 bg-[#A5783A] shadow-md flex items-center justify-center">
              <span className="text-sm font-bold text-white uppercase tracking-wider transform -rotate-45">Premium Plan</span>
            </div>
            <div className="my-8">
              <h3 className="text-5xl font-serif text-gray-800">$159</h3>
              <p className="text-gray-500 mt-2">Par month</p>
            </div>
            <p className="text-gray-600 mb-6">
              Lnteger sapien nec sapien sollicitudin ultrices cras tempor id lorem.
            </p>
            <ul className="text-left w-full space-y-4 mb-8">
              <li className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-[#A5783A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Aromatherapy Candles</span>
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-[#A5783A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>True Transformation</span>
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-[#A5783A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Oil Massage</span>
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-[#A5783A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Meditation Retreats</span>
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-[#A5783A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Organic Essential Oil</span>
              </li>
            </ul>
            <p className="text-gray-500 text-sm mt-auto mb-6">Up to 10 users + $1.99 per user</p>
            <a href="#" className="bg-white border border-[#A5783A] text-[#A5783A] font-bold py-3 px-12 rounded-full transition-colors duration-300 hover:bg-[#A5783A] hover:text-white">
              CHOOSE PLAN
            </a>
          </div>
          {/* Text Section */}
          <div className="bg-transparent p-8 flex flex-col justify-center">
            <h4 className="text-sm font-bold text-[#A5783A] mb-2 uppercase tracking-widest">
              <span className="mr-2">
                <svg className="h-4 w-4 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.393-7.555a.75.75 0 011.092.704l-.578 2.316a.75.75 0 11-1.456-.364L8.71 11.13a.75.75 0 01-.365-1.455zM10 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
              </span>
              CHOOSE A PLAN
            </h4>
            <h2 className="text-5xl font-serif text-gray-800 leading-tight mb-4">
              Flexible Pricing Plan
            </h2>
            <p className="text-gray-600 leading-relaxed">
              It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is ipsum less normal distribution of letters
            </p>
          </div>
        </div>
      </div>
          
      <Footer />
    </>
  );
};

export default Services;