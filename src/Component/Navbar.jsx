import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
          background-color: #0c1c26;
          transition: width 0.3s ease-in-out;
        }

        .nav-underline:hover::after {
          width: 100%;
        }
      `}</style>

      <nav className="bg-[#a17d29] py-4">
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
              className="text-white p-2 rounded-lg focus:outline-none"
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
            className={`w-full lg:flex lg:items-center lg:justify-center lg:w-auto transition-all duration-300 ease-in-out  ${
              isOpen ? "block mt-4" : "hidden"
            }`}
          >
            {/* Nav Links */}
            <ul className="flex flex-col   items-center text-center lg:flex-row lg:items-start lg:space-x-8 text-[#0c1c26] text-xl font-bold lg:text-center">
              {["Home", "About", "Packages", "Contact"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="nav-underline text-[#0c1c26] hover:text-[#0c1c26] transition py-2 px-3"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="mt-4 lg:hidden flex justify-center">
            <button className="cursor-pointer flex items-center border border-[#0c1c26] gap-2 bg-[#0c1c26] hover:bg-[#a17d29] transition-all rounded-md text-white px-6 py-3 font-semibold text-sm shadow-md">
              Plan Your Trip
            </button>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <button className="cursor-pointer flex items-center border border-[#0c1c26] gap-2 bg-[#0c1c26] hover:bg-[#a17d29] transition-all rounded-md text-white px-6 py-3 font-semibold text-sm shadow-md">
              Plan Your Trip
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
