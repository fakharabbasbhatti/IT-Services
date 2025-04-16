import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const TopReviews = () => {
  return (
    <section className="bg-[#fdfdfa]  py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-block bg-[#FFE5DA] text-[#FF4E00] px-6 py-2 rounded-full text-sm font-semibold mb-4">
          TESTIMONIALS
        </div>

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
