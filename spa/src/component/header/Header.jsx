import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/header/Logo.jpg';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24" aria-label="Global">
        
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-24 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          <Link to="/" className="text-md font-semibold text-gray-900 hover:text-gray-700 transition duration-150">Home</Link>
          <Link to="/services" className="text-md font-semibold text-gray-900 hover:text-gray-700 transition duration-150">Services</Link>
          <Link to="/about" className="text-md font-semibold text-gray-900 hover:text-gray-700 transition duration-150">About</Link>
          <Link to="/branches" className="text-md font-semibold text-gray-900 hover:text-gray-700 transition duration-150">Branches</Link>
          <Link to="/contact" className="text-md font-semibold text-gray-900 hover:text-gray-700 transition duration-150">Contact</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-white shadow-md border-t border-gray-200">
          <div className="flex flex-col px-4 py-3 space-y-1">
            {['/', '/services', '/about', '/branches', '/contact'].map((path, idx) => {
              const name = ['Home', 'Services', 'About', 'Branches', 'Contact'][idx];
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
