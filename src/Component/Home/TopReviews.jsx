import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const TopReviews = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Badge */}
        <p className="relative overflow-hidden group text-sm text-white cursor-pointer font-light uppercase inline-block px-8 py-2 mb-2 rounded-full bg-[#a17d29] transition-all duration-500 ease-in-out transform hover:scale-105 shadow-md">
        <span className="relative z-10">TESTIMONIALS</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#0c1c26] via-[#1a1a1a] to-[#0c1c26] w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-full"></span>
      </p>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Top Reviews</h2>

        {/* Quote Icon */}
        <div className="text-[#FF] text-5xl mb-6 flex justify-center">
          <FaQuoteRight />
        </div>

        {/* Review Text */}
        <p className="text-lg text-gray-700 mb-10">
          “An absolutely incredible experience! The attention to detail and personalized service made our Maldives trip unforgettable. Highly recommend!”
        </p>

        {/* User */}
        <div className="flex flex-col items-center">
          <img
            src="/Home/review.png"
            alt="James Anderson"
            className="w-20 h-20 rounded-full object-cover mb-4"
          />
          <h4 className="text-xl font-semibold">James Anderson</h4>
        </div>
      </div>
    </section>
  );
};

export default TopReviews;
