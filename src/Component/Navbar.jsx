import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0c1c26] py-3 ">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/az.jpeg"
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-xl font-semibold text-white hidden sm:inline">
            TravelX
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 rounded-lg focus:outline-none"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`w-full lg:flex lg:items-center lg:justify-between lg:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? "block mt-4" : "hidden"
          }`}
        >
          {/* Nav Links */}
          <ul className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:space-x-8 text-white font-medium lg:text-left">
  {["Home", "About", "Packages", "Contact"].map((item, index) => (
    <li key={index}>
      <a
        href="#"
        className="block py-2 pl-3 pr-4 rounded-lg hover:bg-white hover:text-[#333] transition lg:hover:bg-transparent lg:hover:text-yellow-200"
      >
        {item}
      </a>
    </li>
  ))}
</ul>

          {/* Mobile CTA */}
          <div className="mt-4 lg:hidden flex justify-center">
            <button className="cursor-pointer flex items-center gap-2  bg-[#a17d29] hover:bg-[#0c1c26] transition-all rounded-md text-white px-6 py-3 font-semibold text-sm shadow-md">
              Plan Your Trip
            </button>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <button className="cursor-pointer flex items-center border border-[#a17d29]  gap-2 bg-[#a17d29] hover:bg-[#0c1c26] transition-all rounded-md text-white px-6 py-3 font-semibold text-sm shadow-md">
            Plan Your Trip
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
