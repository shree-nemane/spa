import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import the icons you'll need, like MenuIcon and XIcon
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Header = () => {
  // State to manage the mobile menu's visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 font-bold text-xl text-gray-800">
            [Logo/Home]
          </Link>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">Home</Link>
          <Link to="/services" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">Services</Link>
          <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">About</Link>
          <Link to="/branches" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">Branches</Link>
          <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">Contact</Link>
        </div>

        
      </nav>

      {/* Mobile Menu (Conditionally Rendered) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Link to="/" className="-m-1.5 p-1.5 font-bold text-xl text-gray-800" onClick={() => setMobileMenuOpen(false)}>
                    [Logo/Home]
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link to="/" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                    <span className="ml-3 text-base font-medium text-gray-900">Home</span>
                  </Link>
                  <Link to="/services" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                    <span className="ml-3 text-base font-medium text-gray-900">Services</span>
                  </Link>
                  <Link to="/about" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                    <span className="ml-3 text-base font-medium text-gray-900">About</span>
                  </Link>
                  <Link to="/branches" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                    <span className="ml-3 text-base font-medium text-gray-900">Branches</span>
                  </Link>
                  <Link to="/contact" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                    <span className="ml-3 text-base font-medium text-gray-900">Contact</span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;