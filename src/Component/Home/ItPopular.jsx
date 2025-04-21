import React from "react";
import { useNavigate } from "react-router-dom";

const cardData = [
  { title: "Web Development", image: "/Home/web.jpg" },
  { title: "Content Writing", image: "/Home/contentW.jpg" },
  { title: "Graphics Designing", image: "/Services/graphic.jpg" },
  { title: "Shopify Store", image: "/Services/shopify.jpg" },
  { title: "Amazon Store", image: "/Services/amazon.jpg" },
  { title: "Video Editing", image: "/Home/videoEd.webp" },
  { title: "Game Development", image: "/Home/Game.jpg" },
  { title: "Content Specialist", image: "/Home/contentSp.webp" },
];

const ItPopular = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full p-10 max-md:px-1 min-h-screen flex flex-col gap-10 text-white bg-[#0c1c26] py-15 mx-md:pt-30">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-4 p-5 lg:w-1/2">
          <h3 className="text-sm text-[#fff] bg-[#a17d29] w-fit border-2 border-[#0c1c26] hover:border-[#a17d29] hover:bg-[#0c1c26] cursor-pointer duration-500 rounded-full font-light uppercase inline-block px-8 py-2 mb-2">
            Choose Your Service
          </h3>
          <h1 className="text-xl md:text-3xl font-bold">Top IT Solutions</h1>
          <p className="text-lg">
            Join us as we transform businesses through innovative technology, one solution at a time.
          </p>
          <button className="relative overflow-hidden group px-7 py-3 w-fit border-2 border-[#a17d29] cursor-pointer font-medium text-sm md:text-xl rounded-md flex items-center gap-2 text-white transition duration-500 ease-in-out hover:cursor-pointer" onClick={() => navigate("/services")}>
            <span className="relative z-10 group-hover:text-[#0c1c26] transition duration-300">Find Services</span>
            <span className="absolute inset-0 w-0 group-hover:w-full bg-[#a17d29] transition-all duration-500 ease-in-out"></span>
          </button>

        </div>

        {/* First 2 cards */}
        <div className="flex md:flex-row flex-col gap-6 lg:w-1/2">
          {cardData.slice(0, 2).map((card, index) => (
            <Card key={index} title={card.title} image={card.image} />
          ))}
        </div>
      </div>

      {/* Remaining cards in rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.slice(2).map((card, index) => (
          <Card key={index} title={card.title} image={card.image} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, image }) => {
  return (
    <div className="relative h-64 rounded-3xl overflow-hidden group">
      <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src={image} alt={title} />
      <p className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow">
        {title}
      </p>

      {/* Shine Effect */}
      <div className="absolute inset-0 z-10 overflow-hidden rounded-3xl pointer-events-none">
        <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-white opacity-10 transform rotate-12 scale-y-125 transition-all duration-700 group-hover:translate-x-[250%]" />
      </div>
    </div>
  );
};

export default ItPopular;
