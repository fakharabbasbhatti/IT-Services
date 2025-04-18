import React from 'react';
import { useNavigate } from 'react-router-dom';


// Sample data
const packages = [
  {
    id: 1,
    name: "Ayesha",
    founder: "Web Developer",
    image: "/about/t3.jpg",
  },
  {
    id: 2,
    name: "Waqas",
    founder: "UI/UX Designer",
    image: "/about/t1.png",
  },
  {
    id: 3,
    name: "Kinza",
    founder: "Project Manager",
    image: "/about/t2.jpg",
  },
];


const OurTeam = () => {
  const navigate = useNavigate();
  return (
    <div className="py-16 bg-white text-center">
      <p className="relative overflow-hidden group text-sm text-white cursor-pointer font-light uppercase inline-block px-8 py-2 mb-2 rounded-full bg-[#a17d29] transition-all duration-500 ease-in-out transform hover:scale-105 shadow-md">
        <span className="relative z-10">Our Team</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#0c1c26] via-[#1a1a1a] to-[#0c1c26] w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-full"></span>
      </p>

      <h2 className="text-3xl md:text-5xl font-bold mb-10">
        Meet IT Solutions Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {packages.map((item, index) => (
          <div
            key={index}
            className="rounded-[30px] overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => navigate(`/about/teamdetail/${item.id}`)}
          >
            {/* Image with Shine Effect */}
            <div className="shine-effect">
              <img
                src={item.image}
                alt={item.country}
                className="h-[400px] w-full object-cover rounded-[50px]"
              />
            </div>

            {/* Footer section */}
            <div className="text-center mt-6">
              <h2 className="text-3xl font-bold text-[#0c1c26]">{item.name}</h2>
              <p className="text-lg font-medium text-gray-600">{item.founder}</p>
            </div>
          </div>
        ))}
      </div>


      {/* Shine Effect CSS */}
      <style>{`
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        .shine-effect::before {
          content: '';
          position: absolute;
          top: -100%;
          left: -45%;
          width: 60%;
          height: 300%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 30%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 70%
          );
          transform: rotate(25deg);
          transition: all 0.6s ease-in-out;
          z-index: 2;
        }
        .shine-effect:hover::before {
          top: 100%;
          left: 100%;
        }
      `}</style>
    </div>
  );
};

export default OurTeam;

