import React from 'react';

const Hero = () => {
  return (
    <div className="relative md:h-[100vh] h-[50vh] max-h-[80vh] flex justify-center items-center">
      <img
        src="/about/go.jpg"
        alt="Visa Consultancy & Travel Solutions"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
        <p className="text-[10px] md:text-sm bg-[#a17d29] text-white hover:bg-[#0c1c26] rounded-full font-light uppercase inline-block px-4 py-2 cursor-pointer">
          About us
        </p>
        <h1 className="text-white text-[15px] md:text-4xl font-bold leading-tight max-w-3xl mt-4 md:mt-10">
          Founded with a Passion for Innovation and Exploration in Global Solutions
        </h1>
      </div>
    </div>
  );
};

export default Hero;