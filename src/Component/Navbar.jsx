import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md p-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <img
              className="w-20 sm:w-28 h-auto"
              src="/logobg.png"
              alt="Logo"
            />
          </div>
          {/* Center: Headings */}
          <div className="hidden md:flex space-x-12 mx-auto">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Blogs", to: "/blogs" },
              { label: "Services", to: "/services" },
              { label: "Projects", to: "/projects" },
              { label: "Contact", to: "/contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative group text-[#0c1c26] hover:text-[#a17d29] text-xl font-bold"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#a17d29] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right: Empty */}
          <div className="hidden md:block w-10"></div>


          {/* Right: Empty */}
          <div className="hidden md:block w-10"></div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0c1c26] hover:text-[#a17d29] text-3xl focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 mt-5 flex flex-col items-center">
          <Link to="/" className="relative group text-[#0c1c26] hover:text-[#a17d29] text-xl font-bold">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#a17d29] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="relative group text-[#0c1c26] hover:text-[#a17d29] text-xl font-bold">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#a17d29] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/blogs" className="relative group text-[#0c1c26] hover:text-[#a17d29] text-xl font-bold">
            Blogs
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#a17d29] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/services" className="relative group text-[#0c1c26] hover:text-[#a17d29] text-xl font-bold">
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#a17d29] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/projects" className="relative group text-[#0c1c26] hover:text-[#a17d29] text-xl font-bold">
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#a17d29] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="relative group text-[#0c1c26] hover:text-[#a17d29] text-xl font-bold">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#a17d29] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      )}
    </nav>
  );
}
