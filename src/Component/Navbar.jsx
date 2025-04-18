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
              {["Home", "Projects", "Services", "Blogs", "About", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="nav-underline  text-[#0c1c26] hover:text-[#a17d29] transition py-2 px-3"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
