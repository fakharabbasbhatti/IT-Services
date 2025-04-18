import React from 'react';
import { MdOutlineArrowCircleRight } from "react-icons/md";

// Image data array
const images = [
    { src: '/about/ab.jpg', alt: 'Image 1' },
    { src: '/about/ab2.jpg', alt: 'Image 2' },
    { src: '/about/ab4.jpg', alt: 'Image 3' },
    { src: '/about/ab3.jpg', alt: 'Image 4' },
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
            </div>
        </section>
    );
};

export default EnjoyAble;
