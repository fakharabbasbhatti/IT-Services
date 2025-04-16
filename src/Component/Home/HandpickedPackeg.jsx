 



import React from 'react';
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";

// Sample data
const packages = [
    {
        country: "Spain",
        price: "From $2.9k",
        image: "/Home/p1.jpeg", // replace with your actual path
    },
    {
        country: "Australia",
        price: "From $3.1k",
        image: "/Home/p2.webp",
    },
    {
        country: "England",
        price: "From $2.5k",
        image: "/Home/p3.webp",
    },
];

const HandpickedPackeg = () => {
  return (
    <div className="py-16 bg-white text-center">
      <p className="text-sm text-[#Fb5607] bg-[#FFECE1] rounded-full font-light uppercase inline-block px-8 py-2 mb-2">
        Popular Destinations
      </p>
      <h2 className="text-3xl md:text-5xl font-bold mb-10">
        Handpicked Packages
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {packages.map((item, index) => (
          <div
            key={index}
            className="w-[400px] bg-white shadow-lg rounded-[30px] overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Image with Shine Effect */}
            <div className="shine-effect">
              <img
                src={item.image}
                alt={item.country}
                className="h-[320px] w-full object-cover"
              />
            </div>

            {/* fot section with rounded corners */}
            <div className="bg-[#ffffff] py-4 px-5 rounded-b-[30px] text-center">
              {/* Top Row: Country + Heart Icon */}
              <div className="flex justify-between items-center mb-2">
                <p className="text-xl font-semibold text-[#0c1c26]">
                  {item.country}
                </p>
                <FaHeart className="text-gray-400 hover:text-[#a17d29] cursor-pointer transition-colors" />
              </div>

              {/* Price */}
              <p className="text-sm text-gray-500 mb-3">{item.price}</p>

              {/* Bottom Row: Location + Button */}
              <div className="flex justify-center items-center">
                <div className="flex items-center text-gray-500 text-sm mr-4">
                  <FaMapMarkerAlt className="mr-1" />
                  {item.location || "Unknown"}
                </div>
                <button className="bg-[#a17d29] text-white text-sm px-4 py-1 rounded-full hover:bg-[#0c1c26] transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shine Effect CSS */}
      <style>{`
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        .shine-effect::before {
          content: '';
          position: absolute;
          top: -100%;
          left: -45%;
          width: 60%;
          height: 300%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 30%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 70%
          );
          transform: rotate(25deg);
          transition: all 0.6s ease-in-out;
          z-index: 2;
        }
        .shine-effect:hover::before {
          top: 100%;
          left: 100%;
        }
      `}</style>
    </div>
  );
};

export default HandpickedPackeg;

