import React from 'react';
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-[60vh] md:h-[100vh] max-h-[80vh] flex justify-center items-center">
      <img
        src="/Home/bg.jpg"
        alt="Visa Consultancy & Travel Solutions"
        className="w-full h-full "
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center px-4">
        <div className="text-white text-left max-w-4xl space-y-4 ml-4 md:ml-16">
          <p className="text-[10px] md:text-sm bg-[#0c1c26] text-white hover:bg-[#a17d29] rounded-full font-light uppercase inline-block px-4 py-2 cursor-pointer">
            Experience IT Services
          </p>
          <h1 className="text-md md:text-2xl lg:text-4xl font-bold leading-tight w-full md:w-[60%]">
            Experience IT Services Like Never Before
          </h1>
          <p className="text-[15px] md:text-xl font-light w-full md:w-[70%]">
            Curated digital solutions for your most ambitious business goals. Let us transform your IT vision into powerful, lasting impact.
          </p>
          <div className="flex gap-4 flex-wrap mt-6">
            {/* Start Planning Button */}
            <button className="relative overflow-hidden group cursor-pointer flex items-center gap-2 bg-[#a17d29] text-white md:px-6 md:py-3 p-2 font-semibold text-sm md:text-lg shadow-md rounded-md transition-all duration-500" onClick={() => navigate("/services")}>
              <span className="relative z-10 flex items-center gap-2">
                See Services
                <MdOutlineArrowCircleRight />
              </span>
              <span className="absolute inset-0 bg-[#0c1c26] w-0 group-hover:w-full transition-all duration-500 ease-in-out "></span>
            </button>

            {/* Watch Video Button */}
            <button className="relative overflow-hidden group cursor-pointer flex items-center gap-2 border border-[#a17d29] text-white md:px-6 md:py-3 p-2 font-semibold text-sm md:text-lg shadow-md rounded-md transition-all duration-500">
              <span className="relative z-10 flex items-center gap-2">
                <FaRegCirclePlay />
                Watch Video
              </span>
              <span className="absolute inset-0 bg-[#a17d29] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
