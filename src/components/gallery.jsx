import React from "react";
import Navbar from "./navbar";
import img1 from "../img/WhatsApp Image 2026-04-11 at 1.01.37 PM.jpeg";
import img2 from "../img/WhatsApp Image 2026-04-11 at 1.02.14 PM.jpeg";
import img3 from "../img/WhatsApp Image 2026-04-11 at 1.02.19 PM.jpeg";
import img4 from "../img/WhatsApp Image 2026-04-11 at 1.02.20 PM.jpeg";
import img5 from "../img/WhatsApp Image 2026-04-11 at 1.02.49 PM.jpeg";
import img6 from "../img/WhatsApp Image 2026-04-11 at 7.11.49 PM.jpeg"

const images = [
    { 
        id: 1, 
        src: img1, 
        title: "Community Outreach", 
        description: "Empowering individuals through active engagement and heartfelt support in our local neighborhoods." 
    },
    { 
        id: 2, 
        src: img2, 
        title: "Charity Drive", 
        description: "Providing essential resources and uplifting the spirits of those who are most in need." 
    },
    { 
        id: 3, 
        src: img3, 
        title: "Awareness Campaign", 
        description: "Spreading vital knowledge and fostering positive, sustainable change across the region." 
    },
    { 
        id: 4, 
        src: img4, 
        title: "Team Effort", 
        description: "Our dedicated volunteers working hand-in-hand to make these ambitious initiatives a reality." 
    },
    { 
        id: 5, 
        src: img5, 
        title: "Milestone Event", 
        description: "Celebrating our achievements, shared smiles, and the continuous growth of our community." 
    },
    {
        id:6,
        src: img6,
        title: "Award for Police",
        description: "Inspiring police officers for their sincere work."
    }
];

const Gallery = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-16">
            <Navbar />
            
            {/* Hero Section */}
            <div className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden shadow-lg">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/40 mix-blend-multiply z-10"></div>
                    {/* Using first image as a stylish, blurred background hero */}
                    <img 
                        src={img1} 
                        alt="Background" 
                        className="w-full h-full object-cover blur-md opacity-30 transform scale-110" 
                    />
                </div>
                
                <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Visual Stories
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Gallery</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-300 leading-relaxed">
                        A visual narrative of our compassion in action, vibrant community events, and the countless lives we've transformed together.
                    </p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 sm:mt-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Moments of Impact</h2>
                    <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Flip through our collection of memories. Each picture represents a milestone in our continuing journey to bring lasting positive change. Hover over the images to read more!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((image) => (
                        <div 
                            key={image.id} 
                            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white"
                        >
                            <div className="overflow-hidden">
                                <img 
                                    src={image.src} 
                                    alt={image.title} 
                                    className="w-full h-72 lg:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                                />
                            </div>
                            
                            {/* Overlay Gradient for Text */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Text Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-white">
                                <h3 className="text-2xl font-bold mb-2 text-emerald-300">{image.title}</h3>
                                <p className="text-sm text-slate-200 font-medium leading-relaxed">
                                    {image.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Motivational Quote Section */}
                <div className="mt-24 bg-gradient-to-br from-indigo-50 to-emerald-50 rounded-3xl p-10 lg:p-16 text-center border border-indigo-100 shadow-sm relative overflow-hidden">
                    {/* Decorative quotes icon */}
                    <div className="absolute -top-6 -left-6 text-indigo-200 opacity-40 transform -rotate-12">
                        <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                    </div>
                    <div className="relative z-10 flex flex-col items-center">
                        <h3 className="text-2xl md:text-4xl font-serif italic text-slate-800 mb-6 tracking-wide max-w-3xl">
                            "A picture is worth a thousand words, but the smiles we share across the community are truly priceless."
                        </h3>
                        <p className="text-emerald-600 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-emerald-600"></span>
                            The RK Trust Family
                            <span className="w-8 h-[2px] bg-emerald-600"></span>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Gallery;