import React from 'react';
import { MdOutlineArrowCircleRight } from "react-icons/md";

// Image data array
const images = [
    { src: './about/ab.avif', alt: 'Image 1' },
    { src: './about/ab2.avif', alt: 'Image 2' },
    { src: './about/ab4.avif', alt: 'Image 3' },
    { src: './about/ab3.avif', alt: 'Image 4' },
];

const EnjoyAble = () => {
    return (
        <section className="flex flex-col md:flex-row items-start gap-10 p-4 md:p-12 mt-8 bg-[#0c1c26]">
            {/* Left Side (Mapped Images Grid) */}
            <div className="flex-1 grid grid-cols-2 gap-4 mt-8 md:mt-0">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={img.alt}
                        className="rounded-2xl shadow-xl w-full h-[30vh] hover:scale-105 transition-transform duration-300 object-cover"
                    />
                ))}
            </div>

            {/* Right Side */}
            <div className="flex-1 flex flex-col items-start mt:6 md:mt-14 ">
                <button className="text-sm hover:bg-[#0c1c26] border border-[#a17d29]  text-white bg-[#a17d29] rounded-full font-light uppercase inline-block px-4 py-2 cursor-pointer">
                    Market Data
                </button>
                <h2 className="text-4xl text-[#a17d29] font-bold mt-5">Business IT Solutions</h2>
                <p className="text-white text-xl mt-5">
                    Business IT solutions help organizations improve their operations through the use of technology. These solutions can include ERP systems, CRM software, data analytics, and cloud services to automate processes and enhance decision-making.
                </p>
                <button className="relative overflow-hidden group cursor-pointer flex items-center gap-2 bg-[#a17d29] text-white px-6 py-3 font-semibold text-lg shadow-md rounded-md transition-all duration-500 mt-6 border border-[#a17d29]">
                    <span className="relative z-10 flex items-center gap-2">
                        Technical Details
                        <MdOutlineArrowCircleRight />
                    </span>
                    <span className="absolute inset-0 bg-[#0c1c26] w-0 group-hover:w-full transition-all duration-500 ease-in-out "></span>
                </button>
            </div>
        </section>
    );
};

export default EnjoyAble;
