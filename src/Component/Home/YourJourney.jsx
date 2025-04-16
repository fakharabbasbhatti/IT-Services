import React from 'react';
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { TiTick } from "react-icons/ti";

export default function YourJourney() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 py-12 bg-[#0c1c26] min-h-screen">
      {/* Left: Hero Image */}
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <img
          src="/Home/right.png"
          alt="Illustration showing modern IT services"
          className="w-full max-w-[500px] sm:max-w-[700px] lg:max-w-[800px] h-auto object-cover"
          onError={(e) => {
            e.target.src = '/fallback-image.png';
          }}
        />
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left px-2 sm:px-6">
        <span className="text-sm text-[#a17d29] uppercase font-semibold tracking-wide">
          Explore the World
        </span>

        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
          IT Solutions for Modern Businesses
        </h1>

        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
          Empower your business with end-to-end IT services designed to enhance efficiency,
          security, and scalability. From managed support and cloud integration to
          cybersecurity and custom software — we provide the tech backbone your business
          needs to thrive in the digital age.
        </p>

        {/* Features List */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-200">
          {[
            "Cybersecurity Solutions",
            "Cloud Computing",
            "24/7 Support",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="border border-[#a17d29] p-1 rounded-full text-[#a17d29] text-lg">
                <TiTick />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
          <button className="flex items-center gap-2 bg-[#a17d29] hover:bg-[#0c1c26] hover:border-[#a17d29] border border-[#a17d29] transition-all rounded-md text-white px-6 py-3 font-semibold text-lg shadow-md cursor-pointer">
            Learn more
            <MdOutlineArrowCircleRight />
          </button>
          <button className="border border-[#a17d29] text-white hover:border-[#0c1c26] hover:text-white hover:bg-[#a17d29] transition-all rounded-md px-6 py-3 font-semibold text-lg cursor-pointer">
            Contact Us
          </button>
        </div>

        {/* Guide Info */}
        <div className="flex items-center pt-6 justify-center lg:justify-start space-x-4">
          <img
            src="/Home/right.jpg"
            alt="Fakhar Abbas - Senior IT Guide"
            className="w-12 h-12 rounded-full object-cover border border-gray-300"
            onError={(e) => {
              e.target.src = '/fallback-profile.jpg';
            }}
          />
          <div>
            <div className="font-medium text-gray-500">Fakhar Abbas</div>
            <div className="text-sm text-gray-300">Senior IT Guide</div>
          </div>
        </div>
      </div>
    </section>
  );
}
