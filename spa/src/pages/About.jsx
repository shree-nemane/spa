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
      count: '25 +',
      label: 'Year Of Experience',
      svgPath: [
        'M12 11.5L12.5 14L15 15.5L12.5 17L12 19.5L11.5 17L9 15.5L11.5 14L12 11.5Z',
        'M12 2L12 10',
        'M19 11.5C19 15.9183 15.9183 19 11.5 19',
        'M5 11.5C5 15.9183 8.08172 19 12.5 19',
        'M12 11.5C14.2091 11.5 16 9.70914 16 7.5C16 5.29086 14.2091 3.5 12 3.5C9.79086 3.5 8 5.29086 8 7.5C8 9.70914 9.79086 11.5 12 11.5Z', // Updated icon path for better structure
      ],
      svgViewBox: '0 0 24 24',
    },
    {
      count: '10K +',
      label: 'Happy Clients',
      svgPath: [
        'M12 17.5V21.5',
        'M12 21.5L8 16.5',
        'M12 21.5L16 16.5',
        'M12 17.5C12 17.5 12 16.5 15.5 14.5C19 12.5 19 9.5 19 9.5L15 10',
        'M12 17.5C12 17.5 12 16.5 8.5 14.5C5 12.5 5 9.5 5 9.5L9 10',
        'M12 17.5V12',
        'M12 7.5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0', // Circle short form for cx=12, cy=7.5, r=2
        'M16 1.5L18.5 4L21 1.5',
        'M3 1.5L5.5 4L8 1.5',
      ],
      svgViewBox: '0 0 24 24',
    },
    {
      count: '250 +',
      label: 'Our Experts Teams',
      svgPath: [
        'M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z',
        'M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z',
        'M12 14V22',
        'M12 14C12 14 16 17 16 22',
        'M12 14C12 14 8 17 8 22',
      ],
      svgViewBox: '0 0 24 24',
    },
    {
      count: '15K +',
      label: 'Students Enroll',
      svgPath: [
        'M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z',
        'M12 10.5C12 10.5 12 10 16 10C20 10 20 14 20 14',
        'M12 10.5C12 10.5 12 10 8 10C4 10 4 14 4 14',
        'M12 10.5V18',
        'M12 10.5C12 10.5 12 6.5 8 6.5',
        'M12 10.5C12 10.5 12 6.5 16 6.5',
        'M12 18V22',
        'M12 18C12 18 16 17 16 19.5',
        'M12 18C12 18 8 17 8 19.5',
      ],
      svgViewBox: '0 0 24 24',
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
          <div className="w-12 h-12 mb-4">
            <svg className="w-full h-full text-[#d05e5e]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zM12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
            </svg>
          </div>
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
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zM12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
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
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.707 9.293a1 1 0 000 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 00-1.414 0z"/>
                </svg>
                <span>15M+ Happy Clients</span>
              </div>
              <div className={`flex items-center space-x-2 text-[${darkGrayText}]`}>
                <svg className={`w-5 h-5 text-[${accentPink}]`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.707 9.293a1 1 0 000 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 00-1.414 0z"/>
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
      <div className='pb-20'>
        <div className="bg-white py-12 px-6 lg:px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left my-16 mb-20 ">
          <div>
            <h3 className="text-xl md:text-2xl font-serif text-[#4b5563] font-bold mb-2">Our Philosophy:</h3>
            <p className="text-[#4b5563]">Holistic wellness and personal care</p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-serif text-[#4b5563] font-bold mb-2">Established in 2015</h3>
            <p className="text-[#4b5563]">A journey of rejuvenation</p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-serif text-[#4b5563] font-bold mb-2">Mission:</h3>
            <p className="text-[#4b5563]">To inspire wellness through nature and care</p>
          </div>
        </div>
        <div className="container mx-auto relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gray-50 opacity-20 transform -translate-x-1/2 -z-10 hidden lg:block"></div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
            <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
              <h2 className="text-4xl md:text-5xl font-serif text-[#4b5563] leading-tight">Spa Team</h2>
              <p className="text-sm text-gray-500 mt-2">Meet our dedicated specialists.</p>
            </div>
            <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img src={team1Img} alt="Team member 1" className="w-full h-auto object-cover rounded-lg mb-4" />
                <h4 className="text-lg font-serif text-[#4b5563] font-semibold">T.L</h4>
                <p className="text-sm text-gray-600 mt-1">4th year in a row best therapist</p>
              </div>
              <div className="text-center">
                <img src={team2Img} alt="Team member 2" className="w-full h-auto object-cover rounded-lg mb-4" />
                <h4 className="text-lg font-serif text-[#4b5563] font-semibold">T.D</h4>
                <p className="text-sm text-gray-600 mt-1">Specializes in organic skincare</p>
              </div>
              <div className="text-center">
                <img src={team3Img} alt="Team member 3" className="w-full h-auto object-cover rounded-lg mb-4" />
                <h4 className="text-lg font-serif text-[#4b5563] font-semibold">C.B</h4>
                <p className="text-sm text-gray-600 mt-1">Specializes in organic detoxes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      

      {/* Stats Section */}
<div className='p-4 md:p-10 lg:px-18 lg:py-14'>
      <div className="bg-[#eac4b2] py-12 md:py-16 px-6 sm:px-10 rounded-3xl relative overflow-hidden shadow-2xl">
        
        {/* Decorative absolute background (can be an image or pattern) */}
        <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
           {/* Placeholder for a subtle background texture/pattern */}
        </div>

        <div className="container mx-auto relative z-10">
          {/*
            Grid Layout:
            - Mobile (default): 2 columns
            - Medium screens (md): 4 columns
          */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                count={stat.count}
                label={stat.label}
                svgPath={stat.svgPath}
                svgViewBox={stat.svgViewBox}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
      

      {/* Testimonial Section */}
      <div className={`bg-[${lightBeigeBg}] my-10 p-12 lg:p-24 relative flex flex-col lg:flex-row items-center justify-center`}>
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative z-10">
            <p className={`text-[${accentPink}] uppercase text-sm font-semibold mb-2`}>Our Testimonial</p>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif text-[${darkGrayText}] leading-tight mb-8`}>
              Peoples Talk About <br /> Sunlit Beauty Care
            </h2>
            <div className="relative w-full h-auto flex justify-center lg:justify-start">
              <img src={women2} alt="Two women in spa" className="w-full max-w-sm rounded-lg shadow-xl" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper w-full max-w-lg"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl w-full">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-8">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <p className={`text-[${darkGrayText}] text-lg md:text-xl text-center mb-8`}>
                      {testimonial.text}
                    </p>
                    <div className="text-center">
                      <h4 className={`text-xl font-bold text-[${darkGrayText}] font-serif`}>{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                      <div className="flex justify-center mt-4">
                        {[...Array(5)].map((star, i) => (
                          <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? `text-[${accentPink}]` : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
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