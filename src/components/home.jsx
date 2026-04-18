import Navbar from "./navbar";
import pic from "../img/pic.png";
import doctrate from "../img/Doctorate-Picsart-AiImageEnhancer.jpeg"
import { Link } from "react-router";

const Home = () => {
    return (
        <div className="min-h-screen bg-black overflow-x-hidden font-sans text-white selection:bg-amber-500 selection:text-white">
            <Navbar />

            {/* Main Hero Section */}
            <div className="relative pt-28 pb-16 md:pt-36 md:pb-24 flex min-h-screen">

                {/* Background Details & Ambient Glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-950 via-black to-gray-950 z-0"></div>
                    {/* Glow effect 1 */}
                    <div className="absolute top-1/4 -right-32 lg:-right-64 w-[30rem] h-[30rem] bg-yellow-600/20 rounded-full mix-blend-screen filter blur-[100px]"></div>
                    {/* Glow effect 2 */}
                    <div className="absolute bottom-1/4 -left-32 lg:-left-64 w-[30rem] h-[30rem] bg-orange-700/20 rounded-full mix-blend-screen filter blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                        {/* Image Column */}
                        <div className="w-full lg:w-5/12 flex justify-center lg:justify-end order-1 lg:order-none shrink-0">
                            <div className="relative group">
                                {/* Image back glow */}
                                <div className="absolute-inset-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-700"></div>
                                {/* Main Image */}
                                <img
                                    src={pic}
                                    alt="Dr. G. Radhakrishnan"
                                    className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover object-top rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.03] border border-gray-800/60"
                                />

                                <img
                                    src={doctrate}
                                    alt="doctorate-award"
                                    className="relative w-64 h-64 mt-20 sm:w-80 sm:h-80 md:w-96 md:h-96 pt-2 object-cover object-top rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.03] border border-gray-800/60"
                                />
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="w-full lg:w-7/12 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-none">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                                <span className="text-amber-400 font-semibold tracking-wider uppercase text-xs md:text-sm">
                                    Meet our founder
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-3 leading-tight tracking-tight">
                                Dr. G. Radhakrishnan
                            </h1>

                            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-400 font-medium mb-10 flex items-center justify-center lg:justify-start gap-3">
                                Founder & Chairman
                                <span className="hidden sm:inline-block w-12 border-t border-gray-600"></span>
                            </h2>

                            <div className="space-y-6 text-base sm:text-lg text-gray-300/90 text-left max-w-2xl leading-relaxed">
                                <p className="relative">
                                    <span className="absolute -left-6 top-0 text-3xl text-gray-600/30">"</span>
                                    Since 2005, our Chairman has dedicated his life to compassionate service—feeding the hungry through Annadhanam, supporting differently-abled individuals, caring for the elderly, educating children, planting trees, and serving temples. His journey reflects humanity in action, touching countless lives with kindness and purpose.
                                </p>
                                <p>
                                    During COVID-19, he served 5,000+ people and supported 400 visually impaired individuals. With the founding of RK Trust in 2023, his mission expanded further, earning 132+ awards, including an honorary doctorate.
                                </p>

                                <p>
                                    2005 முதல், எங்கள் தலைவர் அன்னதானம், மாற்றுத்திறனாளிகளுக்கு ஆதரவு, முதியோர் பராமரிப்பு, குழந்தைகளின் கல்வி, மரம் நடுதல் மற்றும் கோயில் சேவைகளில் தன்னை அர்ப்பணித்துள்ளார். அவரது சேவை, கருணையும் மனிதநேயமும் கொண்ட பயணமாக பலரின் வாழ்க்கையை தொட்டுள்ளது.
                                </p>

                                <p>
                                    கோவிட்-19 காலத்தில், அவர் 5,000க்கும் மேற்பட்ட மக்களுக்கு உதவி செய்து, 400 பார்வைத்திறன் குறைந்த நபர்களுக்கு ஆதரவளித்தார்.
                                    2023 ஆம் ஆண்டு RK Trust நிறுவப்பட்டதன் மூலம் அவரது சேவை மேலும் விரிவடைந்து, 132க்கும் மேற்பட்ட விருதுகள், அதில் ஒரு கௌரவ டாக்டரேட் பட்டம் உட்பட, பெற்றுள்ளார்.
                                </p>

                            </div>

                            {/* CTA / Divider to signify more content below or action */}
                            <div className="mt-12 flex items-center justify-center lg:justify-start w-full">
                                <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold tracking-wide shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transform transition-transform duration-300 hover:-translate-y-1">
                                    <Link to="/contact">Support Our Mission</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;