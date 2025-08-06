import React from 'react';
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

export default function YourJourney() {
  const navigate = useNavigate();
  return (
    <section className="relative  px-4 md:px-8 py-12 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/Home/goof.jpg')" }}
      ></div>
      {/* Content */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Right: Content */}
        <div className="w-full lg:w-1/2 space-y-6  lg:text-left px-2 sm:px-6">
          <span className="text-sm text-[#a17d29] uppercase font-semibold tracking-wide">
            Explore the World
          </span>

          <h1 className="text-xl sm:text-4xl font-bold text-white leading-snug">
            IT Solutions for Modern Businesses
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
            Empower your business with end-to-end IT services designed to enhance efficiency,
            security, and scalability. From managed support and cloud integration to
            cybersecurity and custom software — we provide the tech backbone your business
            needs to thrive in the digital age.
          </p>

          {/* Features List */}
          <div className="flex flex-wrap justify-start gap-4 text-sm text-gray-200">
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
            {/* Learn More Button */}
            <button className="relative overflow-hidden group flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white border border-[#a17d29] rounded-md shadow-md transition-all duration-500 ease-in-out hover:cursor-pointer" onClick={() => navigate("/services")}>
              <span className="relative z-10 group-hover:text-[#0c1c26] transition-colors duration-300">Learn more</span>
              <MdOutlineArrowCircleRight className="relative z-10 group-hover:text-[#0c1c26] transition-colors duration-300" />
              <span className="absolute inset-0 w-0 group-hover:w-full bg-[#a17d29] transition-all duration-500 ease-in-out"></span>
            </button>

            {/* Contact Us Button */}
            <button className="relative overflow-hidden group px-6 py-3 text-lg font-semibold text-white border border-[#a17d29] rounded-md transition-all duration-500 ease-in-out hover:cursor-pointer" onClick={() => navigate("/contact")}>
              <span className="relative z-10 group-hover:text-[#0c1c26] transition-colors duration-300">Contact Us</span>
              <span className="absolute inset-0 w-0 group-hover:w-full bg-[#a17d29] transition-all duration-500 ease-in-out"></span>
            </button>
          </div>


          {/* Guide Info */}
          <div className="flex items-center pt-6 justify-start space-x-4">
            <img
              src="/Home/right.jpg"
              alt="Fakhar Abbas - Senior IT Guide"
              className="w-12 h-12 rounded-full object-cover border border-gray-300"
              onError={(e) => {
                e.target.src = '/fallback-profile.jpg';
              }}
            />
            <div>
              <div className="font-medium text-gray-200">Fakhar Abbas</div>
              <div className="text-sm text-gray-300">Senior IT Guide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
