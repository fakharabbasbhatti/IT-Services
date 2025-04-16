import React from 'react';
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { TiTick } from "react-icons/ti";



export default function YourJourney
    () {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 bg-[#fdf5e6] min-h-screen">
            {/* Left: Image with landmarks */}
            <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
                <img
                    src="/Home/left.png"
                    alt="Travel landmarks"
                    className="max-w-full h-auto"
                />
            </div>

            {/* Right: Text Content */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                <span className="text-sm text-[#a17d29] uppercase font-semibold">Explore the World</span>
                <h1 className="text-4xl font-bold text-gray-800">
                IT Solutions for Modern Businesses
                </h1>
                <p className="text-gray-600 text-lg max-w-xl">
                Empower your business with end-to-end IT services designed to enhance efficiency, security, and scalability. From managed support and cloud integration to cybersecurity and custom software — we provide the tech backbone your business needs to thrive in the digital age.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-700">
                    {[
                        "Cybersecurity Solutions",
                        " Cloud Computing",
                        "24/7 Support",
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <div className="border border-[#a17d29] p-1 rounded-full text-[#a17d29] text-lg">
                                <TiTick />
                            </div>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                    <button className="flex items-center gap-2 bg-[#a17d29] hover:bg-[#0c1c26] transition-all rounded-md text-white px-6 py-3 font-semibold text-lg shadow-md">
                        Learn more
                        <MdOutlineArrowCircleRight />
                    </button>
                    <button className="border border-[#a17d29]  text-black hover:border-[#0c1c26] hover:text-white hover:bg-[#0c1c26]  transition-all rounded-md px-6 py-3 font-semibold text-lg">
                        Contact Us
                    </button>
                </div>

                {/* Guide section */}
                <div className="flex items-center pt-6 space-x-4">
                    <img
                        src="/Home/right.jpg"
                        alt="Travel Guide"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <div className="font-medium text-gray-800">Fakhar Abbas</div>
                        <div className="text-sm text-gray-500">Senior Travel Guide</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

