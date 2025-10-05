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

const BranchIcon = ({ city }) => {
    // A more modern, abstract icon representing a building or landmark
    return (
        <svg
            className="w-16 h-16 mx-auto mb-4 text-[#c19a6b] transform group-hover:scale-110 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="M12 2L1 12h3v9h16v-9h3L12 2zm-1 7c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V9z" />
        </svg>
    );
};

const Branches = () => {
    return (
        <div>
            <Header />

            {/* Hero Section */}
            <div className="relative w-full h-[50vh] flex flex-col items-center justify-center text-center font-serif">
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${branchesHeroImg})` }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 p-4">
                    <p className="uppercase text-sm font-semibold mb-2 text-white tracking-widest">
                        Find your perfect escape
                    </p>
                    <h1 className="text-5xl md:text-7xl text-white leading-tight font-extrabold">
                        Our Locations
                    </h1>
                </div>
            </div>

            {/* Locations Grid */}
            <div className="bg-[#fcf8f6] py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Subheading/Intro */}
                    <div className="text-center mb-16">
                        <p className="text-sm uppercase tracking-widest text-[#a87f6e] mb-2">
                            A Tranquil Oasis, Wherever You Are
                        </p>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5c4a45]">
                            Discover Our Branches
                        </h2>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-12">
                        {branchLocations.map((location) => (
                            <div 
                                key={location.id} 
                                className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center font-sans"
                            >
                                <BranchIcon city={location.city} />
                                
                                <h3 className="text-2xl font-bold uppercase tracking-wider text-[#5c4a45] mb-2">
                                    {location.city}
                                </h3>
                                
                                <p className="text-sm text-gray-500 mb-3 italic">
                                    {location.description}
                                </p>

                                <p className="text-sm text-gray-700 leading-relaxed max-w-[250px] mt-auto">
                                    {location.address}
                                </p>
                                <a href="#" className="mt-6 text-[#a87f6e] font-semibold text-sm uppercase tracking-widest hover:underline transition-colors duration-300">
                                    Get Directions &rarr;
                                </a>
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