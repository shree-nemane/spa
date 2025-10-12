import React, { useState } from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';

// Image imports
import homeSpaImg from '../assets/home_assets/home_spa.jpg';
import headShoulderImg from '../assets/home_assets/head_shoulder_massage.jpg';
import swedishMassageImg from '../assets/home_assets/swedish_massage.jpg';
import aromatherapyImg from '../assets/home_assets/aromatherapy.jpg';
import deeptissueImg from '../assets/home_assets/deep_tissue_massage.jpg';
import facialImg from '../assets/home_assets/facial_massage.jpg';
import treatmentMassageImg from '../assets/home_assets/treatment_massage.jpg';

// ...existing code...

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
            <Header />

            {/* 🌸 Section 1: Hero */}
            <div
                className="relative h-[400px] md:h-[500px] bg-cover bg-center"
                style={{ backgroundImage: `url(${homeSpaImg})` }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif mb-4 md:mb-6 tracking-wide" style={{ color: COLORS.white }}>
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

            {/* 🌿 Section 2: Intro */}
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

            {/* 💆 Section 3: Choose Your Mood */}
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
                                    className="rounded-xl mb-4 w-full h-48 object-cover"
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

            {/* 🌼 Section 4: Benefits */}
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
                                    <svg className="w-12 h-12 md:w-16 md:h-16 mb-4" fill="none" viewBox="0 0 24 24" stroke={COLORS.primary}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.657-3.666 5.922-3.666 5.922s-3.667-4.265-3.667-5.922a7.333 7.333 0 017.333-7.333c1.92 0 3.667.78 4.908 2.05A7.333 7.333 0 0112 11zm0 0c-1.84 0-3.333 1.493-3.333 3.333S10.16 17.667 12 17.667c1.84 0 3.333-1.493 3.333-3.333S13.84 11 12 11z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Enhance Mental Clarity",
                                desc: "By quietening the mind, our services help improve focus, creativity, and your overall sense of well-being.",
                                icon: (
                                    <svg className="w-12 h-12 md:w-16 md:h-16 mb-4" fill="none" viewBox="0 0 24 24" stroke={COLORS.primary}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a9 9 0 00-6.6 15.646l.115.115" />
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

            {/* 💖 Section 5: Call-to-Action */}
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