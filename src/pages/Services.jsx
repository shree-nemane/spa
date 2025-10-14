import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';

import serviceImg from '../assets/services_assets/services_hero.jpg';
import headShoulderImg from '../assets/services_assets/head_shoulder.jpg';
import footMassageImg from '../assets/services_assets/foot_massage.jpg';
import footReflexologyImg from '../assets/services_assets/foot_reflexology.jpg';
import swedishMassageImg from '../assets/services_assets/swedish_massage.jpg';
import massage2 from '../assets/services_assets/massage.png';
import heal from '../assets/services_assets/heal.png';
import wash from '../assets/services_assets/wash.png';
import facial from '../assets/services_assets/facial.png';
import aromatherapyImg from '../assets/services_assets/AROMATHERAPY.jpg';
import balineseImg from '../assets/services_assets/BALINESE_MASSAGE.jpg';
import sportsImg from '../assets/services_assets/SPORTS_MASSAGE.jpg';
import facialImg from '../assets/services_assets/FACIAL_MASSAGE.jpg';
import deeptissueImg from '../assets/services_assets/DEEP_TISSUE_MASSAGE.jpg';
import treatmentMassageImg from '../assets/services_assets/TREATMENT_MASSAGE.jpg';

// 🎨 Color constants
const COLORS = {
  primary: "#C4912F",
  primaryLight: "#E8C99B",
  textDark: "#C4912F",
  textLight: "#7E5A1E",
  muted: "#6b7280",
  bgLight: "#f9fafb",
  bgGray: "#f3f4f6",
  white: "#ffffff",
  border: "#e5e7eb",
};

const Services = () => {
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
      text: "Foot Reflexology offers more than relaxation—it has significant health benefits. Regular reflexology helps improve circulation, relieve tension, and balance energy throughout the body.",
      image: footReflexologyImg,
      imageRight: false,
    },
    {
      title: 'HOLISTIC SWEDISH MASSAGE',
      text: "Swedish massage therapy promotes relaxation, eases aches, and releases the body's natural painkillers for a sense of total well-being.",
      image: swedishMassageImg,
      imageRight: true,
    },
    {
      title: 'AROMATHERAPY',
      text: "Aromatherapy uses essential oils to calm, relax, or energize you. Oils can be inhaled, bathed in, or massaged into the skin for holistic healing.",
      image: aromatherapyImg,
      imageRight: false,
    },
    {
      title: 'BALINESE MASSAGE',
      text: "Balinese Massage blends techniques like acupressure, reflexology, and stretching for deep relaxation and improved circulation.",
      image: balineseImg,
      imageRight: true,
    },
    {
      title: 'SPORTS MASSAGE',
      text: "Designed for athletes, sports massage helps prevent injuries, improves performance, and supports faster recovery after workouts.",
      image: sportsImg,
      imageRight: false,
    },
    {
      title: 'DEEP TISSUE MASSAGE',
      text: "Deep tissue massage targets inner muscle layers to release tension, reduce inflammation, and accelerate healing from injuries.",
      image: deeptissueImg,
      imageRight: true,
    },
    {
      title: 'FACIAL MASSAGE',
      text: "Facial massage enhances circulation, reduces puffiness, and helps skincare products absorb deeply, leaving your skin radiant and relaxed.",
      image: facialImg,
      imageRight: false,
    },
    {
      title: 'TREATMENT MASSAGE',
      text: "Tailored treatments like lymphatic drainage, gua sha, and anti-aging massages improve skin health and vitality.",
      image: treatmentMassageImg,
      imageRight: true,
    },
  ];

  return (
    <>
      <Header />

      {/* 🧘 Hero Section */}
      <section
        className="relative h-[60vh] md:h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${serviceImg})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-bold tracking-wide">
            Services
          </h1>
        </div>
      </section>

      {/* 💆‍♀️ Services Grid */}
      <section className="bg-white py-14 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm font-semibold uppercase tracking-wider mb-3"
            style={{ color: COLORS.primary }}
          >
            OUR TREATMENT SPECIAL
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-10"
            style={{ color: COLORS.textDark }}
          >
            Treats Your Soul
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: massage2, title: "Medi Facial" },
              { img: heal, title: "Youth Preserve" },
              { img: wash, title: "Body Sculpting" },
              { img: facial, title: "Hair Restore" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-6 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
                style={{ borderColor: COLORS.border }}
              >
                <img
                  className="w-20 sm:w-24 md:w-28 object-contain mb-4"
                  src={item.img}
                  alt={item.title}
                />
                <h3
                  className="text-lg sm:text-xl font-semibold"
                  style={{ color: COLORS.textDark }}
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧴 Alternating Services Section */}
      <section
        className="py-16 px-4 md:px-8"
        style={{ backgroundColor: COLORS.bgLight }}
      >
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
          {alternatingServices.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                service.imageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-10 md:gap-16`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-2xl shadow-lg transform hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <p
                  className="text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2"
                  style={{ color: COLORS.primary }}
                >
                  Signature Service
                </p>
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight"
                  style={{ color: COLORS.textDark }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: COLORS.textLight }}
                >
                  {service.text}
                </p>
                <Link
                  to="/contact"
                  className="inline-block mt-6 md:mt-8 font-semibold py-3 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: COLORS.primary,
                    color: COLORS.white,
                  }}
                >
                  BOOK NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
