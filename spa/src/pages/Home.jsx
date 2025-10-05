import React from 'react'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import homeSpaImg from '../assets/home_assets/home_spa.jpg';
import massageImg1 from '../assets/home_assets/massageImg1.jpg';
import massageImg2 from '../assets/home_assets/massageImg2.jpg';


const Home = () => {
    return (
        <div>
            <Header />
            <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${homeSpaImg})` }}>
                {/* Overlay to darken the image slightly for better text readability */}
                <div className="absolute inset-0 bg-black opacity-30"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-5xl md:text-6xl font-serif mb-6 text-center tracking-wide">
                        Sopa Now
                    </h1>
                    <button className="bg-[#eac4b2] hover:bg-[#eac4] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
                        Book Now
                    </button>
                </div>
            </div>

            <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                <div class="max-w-7xl mx-auto grid lg:grid-cols-2 lg:gap-x-12">
                    <div class="lg:col-span-1">
                        <h2 class="text-4xl sm:text-5xl font-serif text-gray-900 leading-tight">
                            A sanctuary of calm, where mind, body, and spirit find harmony
                        </h2>
                        <p class="mt-4 text-xl text-gray-600">
                            A sanctuary of calm, where mind, body, and spirit find harmony and recharge for a peaceful, beautifully scented place to relax and unwind.
                        </p>
                    </div>

                    <div class="lg:col-span-1 mt-10 lg:mt-0">
                        <div class="flex items-center justify-between mb-6">
                            <h3 class="text-2xl font-semibold text-gray-900">
                                Featured Service
                            </h3>
                            <a href="#" class="text-black hover:text-[#eac4b2] font-medium">View all →</a>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="relative group">
                                <img src= {massageImg1} alt="Person getting a massage" class="rounded-xl shadow-md transition-transform duration-300 transform group-hover:scale-105" />
                            </div>

                            <div class="relative group">
                                <img src={massageImg2} alt="Bathtub with flowers" class="rounded-xl shadow-md transition-transform duration-300 transform group-hover:scale-105" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>

    )
}

export default Home