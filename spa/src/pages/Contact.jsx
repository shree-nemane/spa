// src/pages/Contact.jsx

import React, { useState } from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';

// Assuming you have a background image for the hero section
import contactHeroImg from '../assets/contact/contact-hero.jpg'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send this data to a backend server
    alert('Thank you for your message!');
    setFormData({ name: '', phone: '', message: '' }); // Clear form
  };

  // Define colors for consistency within this file
  const lightBeigeBg = '#fcf8f6'; // For main content background
  const warmPinkBg = '#eac4b2'; // For hero section overlay or accents
  const darkGrayText = '#4b5563'; // For most text
  const accentPink = '#d05e5e'; // For highlights, icons, etc.
  const lightBlueButton = '#82c0fa'; // For the button

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-[50vh] flex items-center justify-center text-white text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${contactHeroImg})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-serif leading-tight">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main Contact Content */}
      <div className={`bg-[${lightBeigeBg}] py-16 px-4 md:px-8 lg:px-16`}>
        <div className="container mx-auto bg-white rounded-lg shadow-xl p-6 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Form and Map */}
          <div>
            <h2 className={`text-3xl font-serif text-[${darkGrayText}] mb-8`}>Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium text-[${darkGrayText}]`}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#d05e5e] focus:border-[#d05e5e]"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className={`block text-sm font-medium text-[${darkGrayText}]`}>Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#d05e5e] focus:border-[#d05e5e]"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium text-[${darkGrayText}]`}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#d05e5e] focus:border-[#d05e5e]"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-md overflow-hidden shadow-sm">
                {/* Replace with actual Google Maps iframe or a static map image */}
                <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.86053520977!2d75.79055784999998!3d26.885210750000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1759592522450!5m2!1sen!2sin" 
      width="600" 
      height="450" 
      style={{ border: 0 }} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
              </div>

              <button
                type="submit"
                className={`w-full bg-[${lightBlueButton}] bg-[#A5783A] text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out`}
              >
                Book Now
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info, Business Hours, FAQ */}
          <div>
            {/* Contact Information */}
            <h2 className={`text-3xl font-serif text-[${darkGrayText}] mb-8`}>Our Details</h2>
            <div className="space-y-4 mb-10">
              <p className={`text-[${darkGrayText}]`}>
                <strong>Phone:</strong> + 00 111 222 333
              </p>
              <p className={`text-[${darkGrayText}]`}>
                <strong>Email:</strong> info@xyzspa.com
              </p>
              <p className={`text-[${darkGrayText}]`}>
                <strong>Address:</strong> 123 Spa Wellness Rd, City, Country
              </p>
            </div>

            {/* Business Hours */}
            <h3 className={`text-xl font-serif text-[${darkGrayText}] font-bold mb-4`}>Business Hours</h3>
            <div className={`space-y-2 text-[${darkGrayText}] mb-10`}>
              <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
              <p>Saturday: 10:00 AM - 5:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            
            {/* Directions / Calendar - simplified to text */}
            <h3 className={`text-xl font-serif text-[${darkGrayText}] font-bold mb-4`}>Directions</h3>
            <p className={`text-[${darkGrayText}] mb-10`}>
              Ample parking available, easily accessible.
            </p>

            {/* Social Media Links */}
            <h3 className={`text-xl font-serif text-[${darkGrayText}] font-bold mb-4`}>Appointment Book</h3>
            <div className="flex space-x-4 mb-10">
              <a href="#" className={`text-[${darkGrayText}] hover:text-[#d05e5e] transition-colors`} aria-label="Facebook">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-2c-1.05 0-1.12.333-1.12 1.12v1.88h3l-.38 3h-2.62v7h-3v-7h-2v-3h2v-2.774c0-2.31 1.724-4.226 4.095-4.226h2.905v3z"/></svg>
              </a>
              <a href="#" className={`text-[${darkGrayText}] hover:text-[#d05e5e] transition-colors`} aria-label="Twitter">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.379 0-6.123 2.744-6.123 6.123 0 .47.054.925.156 1.36-.51-.028-1.025-.102-1.52-.224-4.254-.789-7.164-3.999-7.5-7.142-.4.664-.622 1.432-.622 2.261 0 4.23 2.87 7.784 6.74 8.549-.693.188-1.424.289-2.183.289-.53 0-1.04-.052-1.53-.146.735 2.181 2.84 3.774 5.335 3.819-2.84 2.222-6.403 3.558-10.279 3.558-.697 0-1.383-.04-2.052-.118 3.659 2.364 7.972 3.754 12.607 3.754 15.158 0 23.417-12.288 23.417-22.993 0-.35-.007-.695-.02-1.04-.962.695-2.144 1.168-3.414 1.384z"/></svg>
              </a>
              <a href="#" className={`text-[${darkGrayText}] hover:text-[#d05e5e] transition-colors`} aria-label="Instagram">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.148 3.228-1.667 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.668-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.358-2.618-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4c0 2.208-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z"/></svg>
              </a>
               {/* Add more social icons as needed */}
            </div>

            {/* FAQ Section */}
            <h3 className={`text-xl font-serif text-[${darkGrayText}] font-bold mb-4`}>FAQ</h3>
            <div className="space-y-4">
              <details className="group border-b border-gray-200 py-2">
                <summary className={`flex justify-between items-center cursor-pointer text-base font-medium text-[${darkGrayText}] hover:text-[#d05e5e]`}>
                  Q: What services do you offer?
                  <span className="ml-2">
                    <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                </summary>
                <p className={`text-sm text-[${darkGrayText}] mt-2`}>
                  A: We offer a wide range of spa services including massages, facials, body treatments, and manicures/pedicures.
                </p>
              </details>
              <details className="group border-b border-gray-200 py-2">
                <summary className={`flex justify-between items-center cursor-pointer text-base font-medium text-[${darkGrayText}] hover:text-[#d05e5e]`}>
                  Q: Do I need an appointment?
                  <span className="ml-2">
                    <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                </summary>
                <p className={`text-sm text-[${darkGrayText}] mt-2`}>
                  A: Appointments are highly recommended to ensure availability, especially for popular services. Walk-ins are accepted based on availability.
                </p>
              </details>
              {/* Add more FAQ items */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;