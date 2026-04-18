import React from 'react';
import Navbar from "./navbar";
import qrCode from "../img/qrCode.jpeg"

const Contact = () => {
    return (
        <div className="min-h-screen bg-slate-100 flex flex-col">
            <Navbar />
            
            {/* Hero Section */}
            <div className="bg-slate-900 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Contact Us</h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100">
                    We'd love to hear from you. Whether you have a question about our services, initiatives, or anything else, our team is ready to answer all your questions.
                </p>
            </div>

            {/* Main Contact Section */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[500px]">
                    
                    {/* Contact Information */}
                    <div className="bg-slate-900 text-white p-8 lg:p-12 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
                        {/* Decorative circle */}
                        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-blue-500 rounded-full opacity-20"></div>
                        
                        <div className="z-10">
                            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                            <p className="text-slate-300 mb-10 text-lg">
                                Reach out to us through any of the following contact details. We're here to help.
                            </p>
                            
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-blue-400 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-lg hover:text-blue-300 cursor-pointer transition-colors">+91 96295 53775</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-blue-400 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-lg hover:text-blue-300 cursor-pointer transition-colors">info@rktrusts.org</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-blue-400 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-lg">7C/22, Vivekananda Nagar,<br /> Singanallur,<br /> Coimbatore - 641005</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Support / Donation Section */}
                    <div className="lg:w-3/5 flex flex-col justify-center items-center p-8 lg:p-12 bg-slate-600 text-slate-100 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 -mt-20 -ml-20 w-64 h-64 bg-slate-500 rounded-full opacity-10"></div>
                        <div className="z-10 flex flex-col items-center">
                            <h2 className="text-3xl font-bold mb-4 text-white">Support Our Cause</h2>
                            <p className="text-slate-300 text-lg max-w-md mb-10">
                                Your generous contributions help us make a lasting impact. Scan the QR code below to donate securely.
                            </p>
                            
                            <div className="bg-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-500 flex flex-col items-center space-y-4 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <div className="bg-white p-4 rounded-2xl w-56 h-56 flex items-center justify-center shadow-inner">
                                    <img src={qrCode} alt="GPay QR Code" className="w-full h-full object-contain" />
                                </div>
                                <div className="flex items-center space-x-2 text-slate-200 font-medium">
                                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm..."/>
                                    </svg>
                                    <span>GPay Accepted Here</span>
                                </div>
                            </div>
                            
                            <p className="mt-10 font-semibold text-xl text-blue-300 tracking-wide">
                                Thank you for your support!
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;