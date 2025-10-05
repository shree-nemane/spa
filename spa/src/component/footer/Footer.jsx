import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Footer = () => {
  return (
    <footer className="bg-[#f8f5f0] text-[#5c4a45] py-14 px-4 sm:px-8 font-serif">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Brand Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-extrabold mb-2 text-[#a87f6e] tracking-wide">XYZ SPA</h2>
          <p className="text-sm italic mb-4">— Where Serenity Meets Radiance —</p>
          <div className="flex space-x-4 text-xl">
            {/* Note: In a real app, you would need to load font-awesome/fontawesome to see these icons */}
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f hover:text-[#a87f6e] transition-colors"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram hover:text-[#a87f6e] transition-colors"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter hover:text-[#a87f6e] transition-colors"></i></a>
          </div>
        </div>

        {/* Column 2: Quick Links (Now using Link component) */}
        <div>
          <h4 className="text-lg font-bold mb-5 text-[#8b6b5e] uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              {/* Home link, corresponding to Header's root link */}
              <Link to="/" className="hover:text-[#a87f6e] transition-colors">Home</Link>
            </li>
            <li>
              {/* Services link, corresponding to Header's /services link */}
              <Link to="/services" className="hover:text-[#a87f6e] transition-colors">Services</Link>
            </li>
            <li>
              {/* About Us link, corresponding to Header's /about link */}
              <Link to="/about" className="hover:text-[#a87f6e] transition-colors">About Us</Link>
            </li>
            <li>
              {/* Placeholder for Our Team route */}
              <Link to="/team" className="hover:text-[#a87f6e] transition-colors">Our Team</Link>
            </li>
            <li>
              {/* Placeholder for Booking route */}
              <Link to="/book" className="hover:text-[#a87f6e] transition-colors">Book an Appointment</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Spa Treatments (Kept as standard <a> tags pointing to #) */}
        <div>
          <h4 className="text-lg font-bold mb-5 text-[#8b6b5e] uppercase tracking-wider">Our Treatments</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-[#a87f6e] transition-colors">Hot Stone Massage</a></li>
            <li><a href="#" className="hover:text-[#a87f6e] transition-colors">Aromatherapy</a></li>
            <li><a href="#" className="hover:text-[#a87f6e] transition-colors">Swedish Massage</a></li>
            <li><a href="#" className="hover:text-[#a87f6e] transition-colors">Hydrating Facials</a></li>
            <li><a href="#" className="hover:text-[#a87f6e] transition-colors">Couples' Retreat</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-5 text-[#8b6b5e] uppercase tracking-wider">Contact & Location</h4>
          <address className="space-y-3 not-italic text-sm">
            <p>123 Serenity Blvd, Wellness City, 10001</p>
            <p>Phone: <a href="tel:+00111222333" className="hover:underline">+00 111 222 333</a></p>
            <p>Email: <a href="mailto:contact@lavandaspas.com" className="hover:underline">contact@xyzspas.com</a></p>
          </address>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="mt-16 pt-8 border-t border-gray-300 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Xyz Spa. All Rights Reserved. | Designed with care by Nerdtech LLC.</p>
      </div>
    </footer>
  );
};

export default Footer;
