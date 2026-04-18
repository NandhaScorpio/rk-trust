import React from 'react';
import logo from "../img/logo2.jpg";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="flex flex-col space-y-4">
                        <div className="bg-white p-2 rounded-lg inline-block w-max">
                            <img src={logo} alt="RK Trusts Logo" className="w-48 h-auto" />
                        </div>
                        <p className="text-slate-400 mt-4 leading-relaxed">
                            Dedicated to empowering communities and making a positive impact through our various initiatives and services.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-blue-400">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Services', 'Contact', 'Gallery'].map((item) => {
                                const href = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                                return (
                                    <li key={item}>
                                        <Link to={href} className="text-slate-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center">
                                            <span className="mr-2 text-blue-500">›</span> {item}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-blue-400">Contact Us</h3>
                        <ul className="space-y-4 text-slate-300">
                            <li className="flex items-start space-x-3">
                                <svg className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>7C/22, Vivekananda Nagar, Singanallur, Coimbatore - 641005</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+91 96295 53775</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>rktrust23@gmail.com</span>
                            </li>
                        </ul>
                    </div>


                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:items-center">
                    <p className="text-slate-400 text-sm">
                        &copy; {new Date().getFullYear()} RK Trusts. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;