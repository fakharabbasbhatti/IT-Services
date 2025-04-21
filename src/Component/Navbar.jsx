import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleMobileLinkClick = () => {
    if (window.innerWidth < 1024) {
      setClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setClosing(false);
      }, 300);
    }
  };

  return (
    <>
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

        .active-link {
          color: #a17d29 !important;
        }
      `}</style>

      <nav className="bg-white text-[#0c1c26] py-4 sticky top-0 z-200">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between flex-wrap relative">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logobg.png" alt="Logo" className="w-28 h-26 absolute" />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0c1c26] p-2 rounded-lg focus:outline-none"
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>

          {/* Navigation Menu */}
          <div
            className={`w-full lg:flex lg:items-center lg:justify-center lg:w-auto transition-all duration-300 ease-in-out ${isOpen ? "block mt-4" : "hidden"
              } ${closing ? "menu-animation menu-animation-hide" : "menu-animation"}`}
          >
            <ul className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:space-x-8 text-[#0c1c26] text-xl font-bold lg:text-center">
              {["Home", "Projects", "Services", "Blogs", "About", "Contact"].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `nav-underline transition py-2 px-3 ${isActive ? "active-link" : "text-[#0c1c26] hover:text-[#a17d29]"
                      }`
                    }
                    onClick={handleMobileLinkClick}
                  >
                    {item}
                  </NavLink>
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
