import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

import logo from '../../assets/footer/Logo.jpg'

// 🌈 Centralized Color Constants
const COLORS = {
  background: '#ffffff',
  mainText: '#C4912F',
  accentText: '#B3701F',
  subheadingText: '#7E5A1E',
  grayBorder: '#e5e7eb',
  grayText: '#6b7280',
};

const Footer = () => {
  return (
    <footer
      className="py-14 px-4 sm:px-8 font-serif"
      style={{ backgroundColor: COLORS.background, color: COLORS.mainText }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Brand Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="" className='w-32'/>
          <p className="text-sm italic mb-4">— Where Serenity Meets Radiance —</p>
          <div className="flex space-x-4 text-xl">
            {/* Social icons (requires font-awesome) */}
            <a href="#" aria-label="Facebook">
              <i
                className="fab fa-facebook-f transition-colors"
                style={{ color: COLORS.mainText }}
                onMouseEnter={(e) => (e.target.style.color = COLORS.accentText)}
                onMouseLeave={(e) => (e.target.style.color = COLORS.mainText)}
              ></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i
                className="fab fa-instagram transition-colors"
                style={{ color: COLORS.mainText }}
                onMouseEnter={(e) => (e.target.style.color = COLORS.accentText)}
                onMouseLeave={(e) => (e.target.style.color = COLORS.mainText)}
              ></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i
                className="fab fa-twitter transition-colors"
                style={{ color: COLORS.mainText }}
                onMouseEnter={(e) => (e.target.style.color = COLORS.accentText)}
                onMouseLeave={(e) => (e.target.style.color = COLORS.mainText)}
              ></i>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4
            className="text-lg font-bold mb-5 uppercase tracking-wider"
            style={{ color: COLORS.subheadingText }}
          >
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="transition-colors hover:underline" style={{ color: COLORS.mainText }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition-colors hover:underline" style={{ color: COLORS.mainText }}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors hover:underline" style={{ color: COLORS.mainText }}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/branches" className="transition-colors hover:underline" style={{ color: COLORS.mainText }}>
                Our Branches
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:underline" style={{ color: COLORS.mainText }}>
                Book an Appointment
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Treatments */}
        <div>
          <h4
            className="text-lg font-bold mb-5 uppercase tracking-wider"
            style={{ color: COLORS.subheadingText }}
          >
            Our Treatments
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              'Hot Stone Massage',
              'Aromatherapy',
              'Swedish Massage',
              'Hydrating Facials',
              "Couples' Retreat",
            ].map((treatment, idx) => (
              <li key={idx}>
                <p
  className="transition-colors hover:underline"
  style={{ color: COLORS.mainText }}
>
  {treatment}
</p>

              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4
            className="text-lg font-bold mb-5 uppercase tracking-wider"
            style={{ color: COLORS.subheadingText }}
          >
            Contact & Location
          </h4>
          <address className="space-y-3 not-italic text-sm">
            <p>
              1st Floor, Ofc. No.1, Raj Mall, Pratap Nagar, Chittaurgarh, India, 312205
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+919251276392" className="hover:underline" style={{ color: COLORS.mainText }}>
                +91 9251276392
              </a>
            </p>
            <p>
              Email:{' '}
              <a
                href="mailto:ruathewellnessspa@gmail.com"
                className="hover:underline"
                style={{ color: COLORS.mainText }}
              >
                ruathewellnessspa@gmail.com
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="mt-16 pt-8 border-t text-center text-xs"
        style={{ borderColor: COLORS.grayBorder, color: COLORS.grayText }}
      >
        <p>
  &copy; 2025 Rua Wellness Spa. All Rights Reserved. | Designed with care by{' '}
  <a 
    href="https://nerdtech.in/" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: COLORS.accentText, textDecoration: 'underline' }}
  >
    Nerdtech LLC
  </a>.
</p>

      </div>
    </footer>
  );
};

export default Footer;
