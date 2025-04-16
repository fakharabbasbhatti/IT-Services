import React from 'react';
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const Hero = () => {
  return (
    <div className="relative h-[100vh] max-h-[600px] flex justify-center items-center">
      <img
        src="/Home/hero2.jpg"
        alt="Visa Consultancy & Travel Solutions"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/60 flex items-center px-4">
        <div className="text-white text-left max-w-4xl space-y-4 ml-4 md:ml-16">
          <p className="text-sm bg-[#0c1c26] text-white hover:bg-[#a17d29] rounded-full font-light uppercase inline-block px-4 py-2 cursor-pointer">
            Experience IT Services
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight w-full md:w-[60%]">
            Experience IT Services Like Never Before
          </h1>
          <p className="text-[15px] md:text-xl font-light w-full md:w-[70%]">
          Curated digital solutions for your most ambitious business goals. Let us transform your IT vision into powerful, lasting impact.
          </p>
          <div className="flex gap-4 flex-wrap mt-6 ">
            <button className="cursor-pointer flex items-center gap-2 bg-[#a17d29] hover:bg-[#0c1c26] transition-all rounded-md text-white px-6 py-3 font-semibold text-lg shadow-md">
              Start Planning
              <MdOutlineArrowCircleRight />
            </button>
            <button className="cursor-pointer flex items-center gap-2 border border-[#a17d29] hover:bg-[#a17d29] transition-all rounded-md text-white px-6 py-3 font-semibold text-lg shadow-md">
              <FaRegCirclePlay />
              Watch Video
            </button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
