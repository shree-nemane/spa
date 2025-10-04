import React from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';

// Placeholder image for the hero section
import branchesHeroImg from '../assets/branches/branches-hero.jpg'; 

const branchLocations = [
  { id: 1, city: 'SURAT', description: 'Main Flagship Branch', address: '101 Wellness Street, Surat, Gujarat' },
  { id: 2, city: 'NASHIK', description: 'Specialized Skincare Center', address: '202 Tranquility Road, Nashik, Maharashtra' },
  { id: 3, city: 'HYDERABAD', description: 'Luxury Wellness & Retreat', address: '303 Relaxation Avenue, Hyderabad, Telangana' },
  { id: 4, city: 'VADODARA', description: 'Traditional Therapy Hub', address: '404 Serenity Lane, Vadodara, Gujarat' },
  { id: 5, city: 'ROURKELA', description: 'New Opening - Urban Spa', address: '505 Oasis Circle, Rourkela, Odisha' },
  { id: 6, city: 'PUNE', description: 'Holistic & Ayurvedic Treatments', address: '606 Rejuvenation Path, Pune, Maharashtra' },
 
];

const CityIconPlaceholder = ({ city }) => (
  // Simple geometric placeholder for the city landmark icon
  <svg 
    className="w-24 h-24 mx-auto mb-4 text-[#4b5563]" 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="10" y="50" width="80" height="40" fill="currentColor" opacity="0.1"/>
    <rect x="25" y="30" width="15" height="40" fill="currentColor"/>
    <rect x="60" y="30" width="15" height="40" fill="currentColor"/>
    <polygon points="50,10 70,30 30,30" fill="currentColor"/>
    <circle cx="50" cy="80" r="8" fill="white" stroke="currentColor" strokeWidth="2"/>
    <text x="50" y="85" fontSize="10" textAnchor="middle" fill="#4b5563" fontWeight="bold">{city.substring(0, 1)}</text>
  </svg>
);


const Branches = () => {
  const lightBeigeBg = '#fcf8f6'; 
  const darkGrayText = '#4b5563'; 
  const warmPinkBg = '#eac4b2'; 

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-[40vh] flex flex-col items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${branchesHeroImg})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 p-4">
            <p className="uppercase text-sm font-semibold mb-2 text-white">
                Welcome to Spa
            </p>
            <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
                Our Global Branches
            </h1>
        </div>
      </div>

      {/* Locations/Branches Grid */}
      <div className={`bg-[${lightBeigeBg}] py-16 px-4 md:px-8 lg:px-16`}>
        <div className="container mx-auto">
          {/* Subheading/Intro */}
          <div className="text-center mb-12">
            <p className={`text-sm text-[${darkGrayText}] mb-2`}>
                Experience Tranquility at Spa.
            </p>
            <h2 className={`text-3xl md:text-4xl font-serif font-bold text-[${darkGrayText}]`}>
                Popular Cities
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8">
            {branchLocations.map((location) => (
              <div 
                key={location.id} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center"
              >
                <CityIconPlaceholder city={location.city} />
                
                <h3 className={`text-lg font-bold uppercase tracking-wider text-[${darkGrayText}] mb-1`}>
                  {location.city}
                </h3>
                
                <p className="text-sm text-gray-500 mb-2">
                  {location.description}
                </p>

                <p className={`text-xs text-[${darkGrayText}]`}>
                    {location.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Branches;