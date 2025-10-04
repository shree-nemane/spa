import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#eba98a] text-white py-12 px-4 md:px-8 font-helvetica">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Important Links */}
        <div>
          <h4 className="text-lg font-extrabold mb-4 text-white">IMPORTANT LINKS</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">HOME</a></li>
            <li><a href="#" className="hover:underline">SERVICES</a></li>
            <li><a href="#" className="hover:underline">ABOUT</a></li>
            <li><a href="#" className="hover:underline">OUR BRANCHES</a></li>
            <li><a href="#" className="hover:underline">CONTACT</a></li>
          </ul>
        </div>

        {/* Column 2: Our Services */}
        <div>
          <h4 className="text-lg font-extrabold mb-4 text-white">OUR SERVICES</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">HAMMAM MASSAGE</a></li>
            <li><a href="#" className="hover:underline">AROMA</a></li>
            <li><a href="#" className="hover:underline">SWEDISH</a></li>
            <li><a href="#" className="hover:underline">DEEP TISSUE</a></li>
          </ul>
        </div>

        {/* Column 3: Franchise Contact */}
        <div>
          <h4 className="text-lg font-extrabold mb-4 text-white">FRANCHISE CONTACT</h4>
          <ul className="space-y-2">
            <li>NUMBER: +00 111 222 333</li>
            <li>EMAIL: INFO@xyz123.COM</li>
          </ul>
        </div>
      </div>
      
      {/* Footer Bottom Text */}
      <div className="mt-8 text-center text-sm font-sans text-gray-800">
        Made with 💖 by nerdtech LLC.
      </div>
    </footer>
  );
};

export default Footer;