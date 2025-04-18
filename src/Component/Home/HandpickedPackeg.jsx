import React from 'react';
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

// Sample data
const packages = [
  {
    country: "Spain",
    price: "From $2.9k",
    image: "/Home/p1.jpeg",
    title: "The Future of Web Development in 2025",
    summary: "Explore the key trends shaping the web development landscape and how your business can stay ahead.",
  },
  {
    country: "Australia",
    price: "From $3.1k",
    image: "/Home/p2.webp",
    title: "Why Content Strategy Is Crucial for Digital Success",
    summary: "Learn how effective content strategy drives engagement, SEO, and long-term growth.",
  },
  {
    country: "England",
    price: "From $2.5k",
    image: "/Home/p3.webp",
    title: "Top Graphic Design Trends That Boost Conversions",
    summary: "Stay visually competitive with design elements proven to increase user interaction.",
  },
];

const HandpickedPackeg = () => {
  const navigate = useNavigate();
  return (
    <div className="py-16 bg-white text-center">
      <p className="relative overflow-hidden group text-sm text-white cursor-pointer font-light uppercase inline-block px-8 py-2 mb-2 rounded-full bg-[#a17d29] transition-all duration-500 ease-in-out transform hover:scale-105 shadow-md">
        <span className="relative z-10">Popular Blogs</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#0c1c26] via-[#1a1a1a] to-[#0c1c26] w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-full"></span>
      </p>

      <h2 className="text-3xl md:text-5xl font-bold mb-10">
        Tailored IT Blogs
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {packages.map((item, index) => (
          <div
            key={index}
            className="w-[400px] bg-white shadow-lg rounded-[25px] overflow-hidden hover:scale-105 transition-transform duration-300"
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
            <div className="bg-[#ffffff] py-4 px-5 rounded-b-[30px] text-start">
              {/* Top Row: Country + Heart Icon */}
              <div className="flex justify-between items-center mb-2">
                <p className="text-xl font-semibold text-[#0c1c26]">
                  {item.title.length > 40 ? `${item.title.substring(0, 40)}...` : item.title}
                </p>
              </div>

              {/* Price */}
              <p className="text-sm text-gray-500 mb-3">
                {item.summary.length > 100 ? `${item.summary.substring(0, 100)}...` : item.summary}
                </p>

              {/* Bottom Row: Location + Button */}
              <div className="flex items-center">
                <button className="bg-[#a17d29] text-white text-sm px-4 py-1 rounded-full hover:bg-[#0c1c26] transition-colors hover:cursor-pointer" onClick={() => navigate("/blogs")}>
                  Read More
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

