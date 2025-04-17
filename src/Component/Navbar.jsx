import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Inline styles for hover effect */}
      <style>{`
        .nav-underline {
          position: relative;
          display: inline-block;
        }

        .nav-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          height: 2px;
          width: 0%;
           background-color: #a17d29; 
          transition: width 0.3s ease-in-out;
        }

        .nav-underline:hover::after {
          width: 100%;
        }
      `}</style>

      <nav className="bg-white text-[#0c1c26] py-4">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between flex-wrap relative">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logobg.png"
              alt="Logo"
              className="w-28 h-26 absolute"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0c1c26] p-2 rounded-lg focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Navigation Menu */}
          <div
            className={`w-full lg:flex lg:items-center lg:justify-center lg:w-auto transition-all duration-300 ease-in-out  ${isOpen ? "block mt-4" : "hidden"
              }`}
          >
            {/* Nav Links */}
            <ul className="flex flex-col   items-center text-center lg:flex-row lg:items-start lg:space-x-8 text-[#0c1c26] text-xl font-bold lg:text-center">
              {["Home", "Team", "Projects", "Services", "Blogs", "About", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="nav-underline  text-[#0c1c26] hover:text-[#a17d29] transition py-2 px-3"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            {/* <div className="mt-4 lg:hidden flex justify-center">
              <button className="cursor-pointer  flex items-center  text-[#0c1c26] border-[#a17d29]  bg-[#a17d29] hover:bg-[#0c1c26] transition-all duration-500 rounded-md hover:text-white hover:border-[#a17d29] px-4.5 py-2.5 font-semibold  shadow-md">
                Plan Your Trip
              </button>
            </div> */}
          </div>

          {/* Desktop CTA */}
          {/* <div className="hidden lg:flex items-center ">
            <div className="relative group inline-block">
              <button className="relative z-10 cursor-pointer text-lg flex items-center text-[#0c1c26] border-[#a17d29] border bg-[#a17d29] transition-all duration-500 rounded-md px-5 py-2.5 font-semibold shadow-md overflow-hidden group-hover:text-white">
                <span className="relative z-10">Plan Your Trip</span>
                <span className="absolute inset-0 bg-[#0c1c26] w-0 group-hover:w-full transition-all duration-500 ease-in-out  "></span>
              </button>
            </div>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
