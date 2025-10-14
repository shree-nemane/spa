import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import contactHeroImg from "../assets/contact/contact-hero.jpg";

const Contact = () => {
  const [state, handleSubmit] = useForm("mzzjkljv"); // Replace with actual Formspree Form ID

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-[50vh] flex items-center justify-center text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHeroImg})` }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-serif tracking-wide leading-tight drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main Contact Content */}
      <div className="bg-[#fcf8f6] py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Column: Form */}
          <div>
            <h2 className="text-3xl font-serif text-gray-800 mb-8 border-b pb-2 border-[#A5783A]/40">
              Get in Touch
            </h2>

            {state.succeeded ? (
              <div className="p-6 bg-green-50 border border-green-300 text-green-700 rounded-lg shadow-md text-center transition-all">
                <p className="text-lg font-medium">
                  ✅ Thank you! Your message has been sent successfully.
                </p>
                <p className="text-sm mt-2 text-gray-600">
                  We’ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="peer w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-transparent focus:border-[#A5783A] focus:ring-[#A5783A] focus:ring-1 outline-none transition-all"
                    placeholder="Your Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-sm peer-focus:text-[#A5783A] transition-all"
                  >
                    Name
                  </label>
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    className="peer w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-transparent focus:border-[#A5783A] focus:ring-[#A5783A] focus:ring-1 outline-none transition-all"
                    placeholder="Your Phone Number"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-sm peer-focus:text-[#A5783A] transition-all"
                  >
                    Phone
                  </label>
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="peer w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-transparent focus:border-[#A5783A] focus:ring-[#A5783A] focus:ring-1 outline-none transition-all"
                    placeholder="Your Message"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-sm peer-focus:text-[#A5783A] transition-all"
                  >
                    Message
                  </label>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-[#A5783A] text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-[#8e632f] active:scale-95 transition-all duration-300"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>

                {/* Error Message */}
                {state.errors && state.errors.length > 0 && (
                  <p className="text-red-600 text-sm font-medium">
                    ⚠️ There was an error submitting your message. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Right Column: Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif text-gray-800 border-b pb-2 border-[#A5783A]/40">
              Our Details
            </h2>

            <div className="space-y-3 text-gray-700">
              <p><strong>Phone:</strong> +91 9251276392</p>
              <p><strong>Email:</strong> ruathewellnessspa@gmail.com</p>
              <p><strong>Address:</strong> 1st Floor, Raj Mall, Pratap Nagar, Chittaurgarh, India</p>
            </div>

            <div>
              <h3 className="text-xl font-serif text-gray-800 font-bold mb-3">Business Hours</h3>
              <ul className="text-gray-700 space-y-1">
                <li>Mon–Fri: 9:00 AM – 7:00 PM</li>
                <li>Saturday: 10:00 AM – 5:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115801.5891744721!2d74.53919243297176!3d24.90481431764317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968a0424d11a8d9%3A0x79f097c869345f8d!2sChittorgarh%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1760258507659!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;