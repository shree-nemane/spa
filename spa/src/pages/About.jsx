// src/pages/About.jsx

import React from 'react';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// Import page components
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';

// Import all necessary images
import officeImg from '../assets/about/office.jpg';
import team1Img from '../assets/about/team1.jpg';
import team2Img from '../assets/about/team2.jpg';
import team3Img from '../assets/about/team3.jpg';
import testimonials1 from '../assets/about/testimonials1.jpg';
import testimonials2 from '../assets/about/testimonials2.jpg';
import testimonials3 from '../assets/about/testimonials3.jpg';
import spaTreatmentImg from '../assets/about/spa-treatment.jpg';
import women2 from '../assets/about/women2.jpg';


import stat1Img from '../assets/about/experience.png';
import stat2Img from '../assets/about/customers.png';
import stat3Img from '../assets/about/people.png';
import stat4Img from '../assets/about/office.png';


const StatItem = ({ count, label, svgPath, svgViewBox }) => (
  <div className="flex flex-col items-center p-4">
    {/* Icon */}
    <svg className="w-16 h-16 md:w-20 md:h-20 text-white mb-3" viewBox={svgViewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Set fill="none" only if the icon is stroke-based, otherwise use fill="currentColor" */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Render paths from props */}
        {svgPath.map((d, index) => (
          <path key={index} d={d} />
        ))}
      </g>
    </svg>
    {/* Count */}
    <span className="text-5xl md:text-6xl font-extrabold font-serif tracking-tight">{count}</span>
    {/* Label */}
    <p className="mt-2 text-base md:text-lg font-medium opacity-85">{label}</p>
  </div>
);

const testimonials = [
  {
    image: testimonials1,
    text: 'posuere luctus orci donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet. Being a survivor now realized was not educated or aware about what breas.',
    name: 'Kevin Smith',
    title: 'Marketing Manager',
    rating: 5,
  },
  {
    image: testimonials2,
    text: 'This is the second testimonial. The services here are amazing and have made a huge difference in my life. I highly recommend it to everyone seeking wellness.',
    name: 'Jane Doe',
    title: 'Wellness Enthusiast',
    rating: 4,
  },
  {
    image: testimonials3,
    text: 'Third testimonial. I am so happy with the results. The team is professional, friendly, and truly cares about their clients. A fantastic experience all around.',
    name: 'John Doe',
    title: 'Satisfied Customer',
    rating: 5,
  },
];

const About = () => {

  const stats = [
    {
      count: '30+',
      label: 'Years Of Experience',
      image: stat1Img,
    },
    {
      count: '15K+',
      label: 'Happy Clients',
      image: stat2Img,
    },
    {
      count: '300+',
      label: 'Our Experts Teams',
      image: stat3Img,
    },
    {
      count: '12',
      label: 'Branches in City',
      image: stat4Img,
    },
  ];

  // Define a single set of color variables for consistency
  const lightBeigeBg = '#fcf8f6';
  const darkGrayText = '#4b5563';
  const accentPink = '#d05e5e';
  const callToActionBg = '#eac4b2';

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
      <div className={`bg-[${lightBeigeBg}] py-20 px-4 md:px-8 lg:px-16`}>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              <img
                src={spaTreatmentImg}
                alt="Spa treatment with hot stones"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-[${accentPink}] opacity-10 rounded-lg`}></div>
            </div>
          </div>
          <div className="w-full relative z-10 pt-16 lg:pt-0">
            <div className={`flex items-center text-sm uppercase text-[${accentPink}] font-semibold mb-2`}>
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zM12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
              </svg>
              About Us
            </div>
            <h2 className={`text-4xl md:text-5xl font-serif leading-tight text-[${darkGrayText}] mb-6`}>
              Welcome To Home Of<br />Tranquility, Relaxation<br />And Respite
            </h2>
            <p className={`text-base text-gray-500 mb-8 max-w-xl`}>
              Everybody is looking for places where to relax and get more energy. In our wellness center silence, energy, beauty and vitality meet. The treatments we offer will refresh both your body and soul. We'll be glad to welcome you and recommend our facilities and services.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 mb-8">
              <div className={`flex items-center space-x-2 text-[${darkGrayText}]`}>
                <svg className={`w-5 h-5 text-[${accentPink}]`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.707 9.293a1 1 0 000 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 00-1.414 0z" />
                </svg>
                <span>15M+ Happy Clients</span>
              </div>
              <div className={`flex items-center space-x-2 text-[${darkGrayText}]`}>
                <svg className={`w-5 h-5 text-[${accentPink}]`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.707 9.293a1 1 0 000 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 00-1.414 0z" />
                </svg>
                <span>Comprehensive Solution</span>
              </div>
            </div>
            <a href="#" className={`inline-block py-3 px-8 rounded-full font-bold text-white bg-[${callToActionBg}] hover:bg-[#d05e5e] transition-colors duration-300`}>
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      {/* Philosophy, Mission, Team Section */}
<div className="bg-white py-12 px-6 lg:px-12">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left my-16 mb-20">
    <div className='flex flex-col items-center'>
      <h3 className="text-xl md:text-2xl font-serif text-[#4b5563] font-bold mb-2">
        Our Philosophy:
      </h3>
      <p className="text-[#4b5563]">Holistic wellness and personal care</p>
    </div>
    <div className='flex flex-col items-center'>
      <h3 className="text-xl md:text-2xl font-serif text-[#4b5563] font-bold mb-2">
        Established in 2015
      </h3>
      <p className="text-[#4b5563]">A journey of rejuvenation</p>
    </div>
    <div className='flex flex-col items-center'>
      <h3 className="text-xl md:text-2xl font-serif text-[#4b5563] font-bold mb-2">
        Mission:
      </h3>
      <p className="text-[#4b5563]">To inspire wellness through nature and care</p>
    </div>
  </div>
</div>


    <div className="py-20 px-6 lg:px-12 bg-[#fcf8f6]">
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-serif text-[#4b5563] font-bold mb-4">
        Our Core Values
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        We believe that true wellness is a journey of balance and self-care. Our philosophy is rooted in a commitment to quality, tranquility, and personalized service.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Value 1: Commitment to Quality */}
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
        <svg className="w-12 h-12 text-[#eac4b2] mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2.91 14.59L5 12.5l1.41-1.41L9.09 13.59l4.59-4.59L15 10.41l-5.91 5.91z"></path>
        </svg>
        <h3 className="text-2xl font-serif text-[#4b5563] font-semibold mb-2">Quality & Purity</h3>
        <p className="text-gray-500">
          We use only the finest organic and ethically sourced products, ensuring every treatment is safe, effective, and free from harmful chemicals.
        </p>
      </div>

      {/* Value 2: Tranquility & Serenity */}
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
        <svg className="w-12 h-12 text-[#eac4b2] mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"></path>
        </svg>
        <h3 className="text-2xl font-serif text-[#4b5563] font-semibold mb-2">Holistic Wellness</h3>
        <p className="text-gray-500">
          Our approach goes beyond treatments, focusing on restoring balance to your mind, body, and spirit in a peaceful and serene environment.
        </p>
      </div>
      
      {/* Value 3: Personalized Care */}
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
        <svg className="w-12 h-12 text-[#eac4b2] mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
        </svg>
        <h3 className="text-2xl font-serif text-[#4b5563] font-semibold mb-2">Dedicated Experts</h3>
        <p className="text-gray-500">
          Our team of specialists provides a customized experience tailored to your unique needs, ensuring you receive the highest level of care.
        </p>
      </div>
    </div>
  </div>
</div>

      {/* Stats Section */}

<div className='p-4 md:p-10 lg:px-18 lg:py-14'>
  <div className="bg-white py-12 md:py-16 px-6 sm:px-10 rounded-2xl shadow-xl">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex-1 flex flex-col items-center justify-center p-4 ${
              index < stats.length - 1 ? 'md:border-r border-[#eac4b2] last:border-r-0' : ''
            }`}
          >
            {/* Image icon container */}
            <div className="mb-4">
              <img src={stat.image} alt={stat.label} className="w-16 h-16 object-contain mx-auto" />
            </div>
            {/* Stat count */}
            <div className="text-4xl md:text-5xl font-serif font-bold text-[#4b5563]">
              {stat.count}
            </div>
            {/* Stat label */}
            <div className="text-md uppercase tracking-widest text-gray-600 mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>






      {/* Testimonial Section */}

    <div className="bg-[#f8f5f0] my-10 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column: Heading and Image */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
          <p className="text-[#c19a6b] uppercase text-sm font-semibold mb-2 tracking-widest">Our Testimonial</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#5c4a45] leading-tight mb-8">
            People Talk About <br /> Sunlit Beauty Care
          </h2>
          <div className="relative w-full h-auto flex justify-center lg:justify-start">
            <img 
              src={women2} 
              alt="Two women in spa" 
              className="w-full max-w-md rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>

        {/* Right Column: Testimonial Slider */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            className="mySwiper w-full max-w-lg"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mx-auto mb-8 ring-4 ring-offset-2 ring-[#c19a6b]">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[#5c4a45] text-lg md:text-xl text-center italic mb-8">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-[#5c4a45] font-serif">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">{testimonial.title}</p>
                    <div className="flex justify-center mt-4 text-sm">
                      {[...Array(5)].map((star, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#c19a6b]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  
      <Footer />
    </div>
  );
};

export default About;