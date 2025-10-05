import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative z-50">
      <nav className="mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 font-bold text-xl text-gray-800">
            [Logo/Home]
          </Link>
        </div>

        {/* Desktop Navigation Links (unchanged) */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">Home</Link>
          <Link to="/services" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">Services</Link>
          <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">About</Link>
          <Link to="/branches" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">Branches</Link>
          <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">Contact</Link>
        </div>
        
        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} // Toggle the state
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu (Conditionally Rendered) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 z-40 bg-white shadow-lg">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/branches"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Branches
            </Link>
            <Link
              to="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;