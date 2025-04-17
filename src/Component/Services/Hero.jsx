import React from 'react';
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const Hero = () => {
  return (
    <div className="relative h-[100vh] max-h-[600px] flex justify-center items-center">
      <img
        src="/Home/hero2.jpg"
        alt="Visa Consultancy & Travel Solutions"
        className="w-full h-full "
        loading="lazy"
      />
      <div className="absolute bg-black/50 flex items-center px-4 py-2">
        <div className="text-white text-left max-w-4xl flex flex-col items-center gap-4">
          <p className="text-sm bg-[#0c1c26] text-white hover:bg-[#a17d29] rounded-full font-light uppercase inline-block px-4 py-2 cursor-pointer">
            Experience IT Services
          </p>
          <h1 className="text-xl text-center md:text-3xl font-bold leading-tight w-full">
            Discover Your Perfect IT Services
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
