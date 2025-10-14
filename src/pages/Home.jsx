import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import { useNavigate } from "react-router-dom";

// Image imports
import homeSpaImg from '../assets/home_assets/home_spa.jpg';
import headShoulderImg from '../assets/home_assets/head_shoulder_massage.jpg';
import swedishMassageImg from '../assets/home_assets/swedish_massage.jpg';
import aromatherapyImg from '../assets/home_assets/aromatherapy.jpg';
import deeptissueImg from '../assets/home_assets/deep_tissue_massage.jpg';
import facialImg from '../assets/home_assets/facial_massage.jpg';
import treatmentMassageImg from '../assets/home_assets/treatment_massage.jpg';


// 🎨 Centralized Color Constants
const COLORS = {
    primary: "#C4912F",        // Main theme / accent (now main font color)
    primaryLight: "#E8C99B",   // Lighter tone for hover or accents
    textDark: "#C4912F",       // Main text color (headings / emphasis)
    textLight: "#7E5A1E",      // Subheading / paragraph color (softer than main)
    muted: "#6b7280",          // Muted/auxiliary gray for less emphasis
    bgLight: "#f9fafb",        // Very light gray
    bgGray: "#f3f4f6",         // Light gray blocks
    white: "#ffffff",
    black: "#000000",
};

const Home = () => {

    const navigate = useNavigate();

    const serviceData = {
        stressed: [
            {
                name: "HEAD & SHOULDER MASSAGE",
                description:
                    "This unique combination of lavender & geranium oil relieves stress levels and induces sleep. The massage will make your head feel lighter and you feel healthier psychologically.",
                image: headShoulderImg
            },
            {
                name: "AROMATHERAPY",
                description:
                    "Aromatherapy uses essential oils to make you feel calm, relaxed or energised. This oil works with your sense of smell — inhale them, bathe in them or be massaged with them.",
                image: aromatherapyImg
            }
        ],
        recharge: [
            {
                name: "DEEP TISSUE MASSAGE",
                description:
                    "Applying sustained pressure using slow, deep strokes to target the inner layers of your muscles and connective tissues to promote faster healing.",
                image: deeptissueImg
            },
            {
                name: "HOLISTIC SWEDISH MASSAGE",
                description:
                    "Promotes relaxation and helps ease aches and pains. This massage offers long lasting stress relief and a fantastic feeling of well-being.",
                image: swedishMassageImg
            }
        ],
        glow: [
            {
                name: "FACIAL MASSAGE",
                description:
                    "This specialized technique enhances skin health and appearance through manual manipulation, improving circulation and reducing puffiness.",
                image: facialImg
            },
            {
                name: "TREATMENT MASSAGE",
                description:
                    "A wider range of techniques addressing specific skin concerns such as detoxification, hydration, anti-aging, and brightening.",
                image: treatmentMassageImg
            }
        ],
    };

    const [activeMood, setActiveMood] = useState('stressed');

    return (
        <div>
            {/* 🧠 Helmet for SEO and Metadata */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Rua The Wellness Spa | Relax, Recharge, and Glow</title>
                <meta
                    name="description"
                    content="Rua The Wellness Spa offers relaxing massages and holistic treatments for stress relief, rejuvenation, and glowing skin."
                />
                <link rel="canonical" href="http://ruathewellness.com/home" />
            </Helmet>
            <Header />

            {/* Section 1: Hero */}
            <div
                className="relative h-[400px] md:h-[500px] bg-cover bg-center"
                style={{ backgroundImage: `url(${homeSpaImg})` }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif mb-3 md:mb-3 tracking-wide" style={{ color: COLORS.white }}>
                        Rua The Wellness
                    </h1>
                    <h1 className="text-4xl md:text-6xl font-serif mb-4 md:mb-6 tracking-wide" style={{ color: COLORS.white }}>
                        Spa
                    </h1>
                    <p className="text-base md:text-xl max-w-2xl" style={{ color: COLORS.white }}>
                        Your Sanctuary for Mind, Body, and Spirit
                    </p>
                </div>
            </div>

            {/* Section 2: Intro */}
            <div className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg md:text-2xl mb-6 md:mb-8 font-serif" style={{ color: COLORS.textLight }}>
                        Imagine a space where the world melts away—a quiet haven filled with the gentle aroma of essential oils and the soft sound of tranquil music.
                    </p>
                    <p className="text-lg md:text-2xl mb-6 md:mb-8 font-serif" style={{ color: COLORS.textLight }}>
                        We invite you to surrender to a moment of pure bliss, where every touch is designed to soothe your senses and every treatment is a ritual of renewal.
                    </p>
                    <div className="mt-8 md:mt-12">
                        <h3 className="text-2xl sm:text-4xl font-serif leading-tight" style={{ color: COLORS.textDark }}>
                            This is Rua The Wellness.
                        </h3>
                        <p className="mt-4 text-base md:text-lg" style={{ color: COLORS.textLight }}>
                            Come, immerse yourself in an atmosphere crafted for your complete serenity and allow us to restore your inner balance.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section 3: Choose Your Mood */}
            <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: COLORS.bgGray }}>
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-serif mb-2 md:mb-4" style={{ color: COLORS.textDark }}>
                        Choose Your Mood
                    </h2>
                    <p className="text-base md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto" style={{ color: COLORS.textLight }}>
                        Discover the perfect treatment to match how you feel.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row justify-center gap-4 mb-8 md:mb-12">
                        {['stressed', 'recharge', 'glow'].map((mood) => (
                            <button
                                key={mood}
                                onClick={() => setActiveMood(mood)}
                                style={{
                                    backgroundColor: activeMood === mood ? COLORS.primary : COLORS.white,
                                    color: activeMood === mood ? COLORS.white : COLORS.textDark,
                                    border: `1px solid ${COLORS.primary}`,
                                }}
                                className="py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:opacity-90"
                            >
                                {mood === 'stressed' && "Feeling Stressed?"}
                                {mood === 'recharge' && "Need to Recharge?"}
                                {mood === 'glow' && "Want to Glow?"}
                            </button>
                        ))}
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {serviceData[activeMood].map((service, index) => (
                            <div
                                key={index}
                                className="relative group bg-white p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                            >
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="rounded-xl mb-4 w-full h-64 object-cover object-center"
                                />
                                <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: COLORS.textDark }}>
                                    {service.name}
                                </h3>
                                <p className="mb-4 text-sm md:text-base" style={{ color: COLORS.textLight }}>
                                    {service.description}
                                </p>
                                <button
                                    style={{
                                        backgroundColor: COLORS.primary,
                                        color: COLORS.white,
                                    }}
                                    className="font-semibold py-2 px-6 rounded-full shadow-lg hover:opacity-90 transition duration-300 ease-in-out"
                                >
                                    Book Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 4: Benefits */}
            <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: COLORS.bgLight }}>
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-serif mb-2 md:mb-4" style={{ color: COLORS.textDark }}>
                        Discover the Benefits of Our Services
                    </h2>
                    <p className="text-base md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto" style={{ color: COLORS.textLight }}>
                        Beyond relaxation, our treatments are designed to improve your overall well-being.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Reduce Stress & Anxiety",
                                desc: "Our soothing treatments help calm your mind and release built-up tension, leaving you feeling centered.",
                                icon: (
                                    <svg className="w-12 h-12 md:w-16 md:h-16 mb-4" fill="none" viewBox="0 0 24 24" stroke={COLORS.primary}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Ease Muscle Tension",
                                desc: "Targeted massages and therapies work to alleviate aches and chronic pain, restoring flexibility and comfort.",
                                icon: (
                                    <svg className="w-12 h-12 md:w-16 md:h-16 mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier"> 
                                            <path d="M21.37 36C22.82 30.75 27.89 27 33.73 27.62C39.29 28.21 43.71 32.9 43.99 38.48C44.06 39.95 43.86 41.36 43.43 42.67C43.17 43.47 42.39 44 41.54 44H11.7584C6.71004 44 2.92371 39.3814 3.91377 34.4311L9.99994 4H21.9999L25.9999 11L17.43 17.13L14.9999 14" stroke="#C4912F" stroke-width="4" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                                            <path d="M17.4399 17.13L22 34" stroke="#C4912F" stroke-width="4" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </g>
                                    </svg>
                                )
                            },
                            {
                                title: "Enhance Mental Clarity",
                                desc: "By quietening the mind, our services help improve focus, creativity, and your overall sense of well-being.",
                                icon: (
                                    <svg className="w-12 h-12 md:w-16 md:h-16 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier"> 
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.75C11.0337 2.75 10.2502 3.5335 10.2502 4.5C10.2502 5.4665 11.0337 6.25 12.0002 6.25C12.9667 6.25 13.7502 5.4665 13.7502 4.5C13.7502 3.5335 12.9667 2.75 12.0002 2.75ZM8.75016 4.5C8.75016 2.70507 10.2052 1.25 12.0002 1.25C13.7951 1.25 15.2502 2.70507 15.2502 4.5C15.2502 6.29493 13.7951 7.75 12.0002 7.75C10.2052 7.75 8.75016 6.29493 8.75016 4.5ZM12.8689 9.82208C12.2983 9.72597 11.702 9.72597 11.1314 9.82208C8.62372 10.2445 6.75016 12.4461 6.75016 15.0196C6.75016 15.5842 6.43448 16.1049 5.92728 16.3612L3.33841 17.6694C2.96871 17.8562 2.51757 17.7079 2.33077 17.3382C2.14396 16.9685 2.29222 16.5174 2.66192 16.3306L5.24941 15.0231C5.2498 15.0224 5.25016 15.0213 5.25016 15.0196C5.25016 11.7143 7.65199 8.88701 10.8823 8.34292C11.6178 8.21903 12.3825 8.21903 13.1181 8.34292C16.3483 8.88701 18.7502 11.7143 18.7502 15.0196C18.7502 15.0213 18.7505 15.0224 18.7509 15.0231L21.3384 16.3306C21.7081 16.5174 21.8564 16.9685 21.6696 17.3382C21.4827 17.7079 21.0316 17.8562 20.6619 17.6694L18.073 16.3612C17.5658 16.1049 17.2502 15.5842 17.2502 15.0196C17.2502 12.4461 15.3766 10.2445 12.8689 9.82208ZM9.95016 15.4C10.2815 15.6485 10.3487 16.1186 10.1002 16.45L9.05382 17.8451C9.02652 17.8815 9.00508 17.9101 8.98291 17.9381C8.6212 18.3954 8.12354 18.7258 7.56179 18.8817C7.52737 18.8913 7.49265 18.9 7.44854 18.911L7.44108 18.9129L5.95629 19.284C5.24744 19.4613 4.75016 20.0982 4.75016 20.8288C4.75016 21.0614 4.93872 21.25 5.17133 21.25H6.72743C7.34385 21.25 7.59247 21.2488 7.82961 21.2209C8.40779 21.153 8.96585 20.967 9.46917 20.6744C9.67561 20.5544 9.87522 20.4062 10.3683 20.0364L10.5502 19.9L12.5502 18.4C12.8815 18.1515 13.3516 18.2186 13.6002 18.55C13.8487 18.8814 13.7815 19.3515 13.4502 19.6L12.5455 20.2785L13.8032 20.7501C14.4299 20.9851 14.6827 21.0784 14.9397 21.1385C15.0782 21.1709 15.2182 21.1963 15.3593 21.2146C15.621 21.2486 15.8905 21.25 16.5598 21.25H18.829C19.0616 21.25 19.2502 21.0614 19.2502 20.8288C19.2502 20.0982 18.7529 19.4613 18.044 19.284L16.5514 18.9109C16.5074 18.8999 16.4729 18.8913 16.4385 18.8817C15.8768 18.7258 15.3791 18.3954 15.0174 17.9381C14.9953 17.9102 14.9737 17.8814 14.9465 17.8451L14.9419 17.839L13.9002 16.45C13.6516 16.1186 13.7188 15.6485 14.0502 15.4C14.3815 15.1515 14.8516 15.2186 15.1002 15.55L16.1419 16.939C16.1759 16.9843 16.1852 16.9966 16.1938 17.0075C16.3582 17.2153 16.5844 17.3655 16.8398 17.4364C16.8531 17.4401 16.8679 17.4439 16.923 17.4576L18.4078 17.8288C19.7844 18.173 20.7502 19.4099 20.7502 20.8288C20.7502 21.8899 19.89 22.75 18.829 22.75L16.5081 22.75C15.9063 22.75 15.5354 22.7501 15.1661 22.7021C14.9752 22.6773 14.7857 22.6429 14.5983 22.5991C14.2356 22.5144 13.8884 22.3841 13.3249 22.1728L11.1215 21.3465C10.741 21.6316 10.4899 21.8161 10.2229 21.9713C9.54197 22.3671 8.78696 22.6187 8.00471 22.7107C7.6698 22.7501 7.3291 22.75 6.77561 22.75H5.17133C4.1103 22.75 3.25016 21.8899 3.25016 20.8288C3.25016 19.4099 4.21589 18.173 5.59249 17.8288L7.07728 17.4576C7.13237 17.4439 7.14719 17.4401 7.16057 17.4364C7.41591 17.3655 7.64211 17.2153 7.80653 17.0075C7.81514 16.9966 7.82435 16.9844 7.85843 16.939L8.90016 15.55C9.14869 15.2186 9.61879 15.1515 9.95016 15.4Z" fill="#C4912F"></path> 
                                        </g>
                                    </svg>

                                )
                            },
                        ].map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
                            >
                                {benefit.icon}
                                <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: COLORS.textDark }}>
                                    {benefit.title}
                                </h3>
                                <p className="text-sm md:text-base" style={{ color: COLORS.textLight }}>
                                    {benefit.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 5: Call-to-Action */}
            <div
                className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-center"
                style={{ backgroundColor: COLORS.primary }}
            >
                <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight">
                    Ready for Your Moment of Peace?
                </h2>
                <p className="mt-4 text-base md:text-xl text-white max-w-2xl mx-auto">
                    Escape the stress and immerse yourself in a world of tranquility. Your journey to wellness begins with a single step.
                </p>
                <div className="mt-6 md:mt-8">
                    <button
      onClick={() => navigate("/contact")}
      style={{
        backgroundColor: COLORS.white,
        color: COLORS.primary,
      }}
      className="font-semibold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition duration-300 ease-in-out"
    >
      Book an Appointment
    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;