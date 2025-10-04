import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <nav className="mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5 font-bold text-xl text-gray-800">
                        [Logo/Home]
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link to="/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">Home</Link>
                    <Link to="/services" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">Services</Link>
                    <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">About</Link>
                    <Link to="/branches" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">Branches</Link>
                    <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">Contact</Link>
                </div>

                <div className="flex lg:flex-1 justify-end items-center gap-x-6">
                    <button className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;