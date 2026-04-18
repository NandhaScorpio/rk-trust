import React, { useState } from 'react';
import logo from "../img/logo2.jpg"
import phone from "../img/phone-solid-full.svg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky bg-white top-0 z-50 w-full border-b border-gray-200 transition-colors duration-300">
            <div className="max-w-7xl mx-auto lg: py-5">
                <div className="flex flex-col justify-between h-16">
                    <div className="">
                        <div className="mr-2 flex-shrink-0 flex items-center justify-between">
                            <a href="/" className="flex items-center gap-8 group">
                                <img src={logo} alt="logo" className='w-60 h-30' />
                            </a>
                            <a href="#" className='flex gap-2 py-2 items-center border-2 border-black rounded-2xl'>
                                <img src={phone} alt="phone" className='w-8 h-8' />
                                <span className='text-lg font-medium pr-2 text-black'>+91 96295 53775</span>
                            </a>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8 bg-blue-400 my-5 py-4" >
                            <a href="/" className="block px-3 py-2  rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50  dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-colors duration-200">Home</a>
                            <a href="/about-us" className="block px-3 py-2  rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50  dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-colors duration-200">About Us</a>
                            <a href="/services" className="block px-3 py-2  rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50  dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-colors duration-200">Services</a>
                            <a href="/contact" className="block px-3 py-2  rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50  dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-colors duration-200">Contact</a>
                            <a href="/gallery" className="block px-3 py-2  rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50  dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-colors duration-200">Gallery</a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 focus:outline-none transition-colors duration-200"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 pt-4 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-4 pt-2 pb-4 space-y-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-800">
                    <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-colors duration-200">Home</a>
                    <a href="/about-us" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-colors duration-200">About Us</a>
                    <a href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-colors duration-200">Services</a>
                    <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-colors duration-200">Contact</a>
                    <a href="/gallery" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-colors duration-200">Gallery</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;