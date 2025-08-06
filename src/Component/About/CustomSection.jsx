import React from 'react';
import { TiTick } from "react-icons/ti";

const CustomSection = () => {

    return (
        <section className="flex flex-col md:flex-row items-start gap-10 p-4 md:p-12 mt-8">
            {/* Left Side */}
            <div className="flex-1 mt-8">
                <button className="text-[10px] md:text-sm bg-[#0c1c26] text-white hover:bg-[#a17d29] rounded-full font-light uppercase inline-block px-4 py-2 cursor-pointer">
                    Smart Itinerary
                </button>
                <h2 className="text-xl md:text-4xl text-[#0c1c26] font-bold mt-5">Delivering Personalized Travel Through Intelligent IT Solutions</h2>
                <p className="text-gray-800 md:text-xl mt-3 md:mt-6">
                    Our intelligent travel platform blends advanced IT solutions with real-time data to create fully customized itineraries that reflect your unique travel preferences. Powered by automation and personalization technology, we turn every journey into a tailored digital experience.
                </p>
            </div>

            {/* Right Side */}
            <div className="flex-1 flex flex-col items-center">
                <img
                    src="./about/itpic.jpg"
                    alt="Image"
                    className="mb-4 rounded-2xl shadow hover:scale-103 transition-transform duration-300"
                />
                <div className="flex flex-wrap justify-start gap-4 md:gap-8 text-xl text-[#0c1c26]">
                    {[
                        "Journey Engine",
                        "Trek Planner",
                        "Route Designer",
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <div className="border border-[#a17d29] p-1 rounded-full text-[#a17d29] text-[10px] md:text-lg">
                                <TiTick />
                            </div>
                            <span className=''>{item}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CustomSection;
