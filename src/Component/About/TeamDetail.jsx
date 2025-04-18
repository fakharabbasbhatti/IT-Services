import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useParams } from "react-router-dom";

// Team members data with social links
const teamMembers = [
  {
    id: 1,
    name: "Ayesha",
    title: "Web Developer",
    image: "/about/t3.jpg",
    bio: "Ayesha is a dynamic marketing strategist with a decade of experience in brand management and digital campaigns.",
    socials: [
      { platform: "twitter", url: "https://twitter.com/ayesha" },
      { platform: "linkedin", url: "https://linkedin.com/in/ayesha" },
      { platform: "instagram", url: "https://instagram.com/ayesha.dev" },
    ],
  },
  {
    id: 2,
    name: "Waqas",
    title: "UI/UX Designer",
    image: "/about/t1.png",
    bio: "Waqas creates intuitive and visually appealing designs that enhance user experience and accessibility.",
    socials: [
      { platform: "linkedin", url: "https://linkedin.com/in/waqas" },
      { platform: "instagram", url: "https://instagram.com/waqas.design" },
      { platform: "twitter", url: "https://twitter.com/waqas" },
    ],
  },
  {
    id: 3,
    name: "Kinza",
    title: "Project Manager",
    image: "/about/t2.jpg",
    bio: "Kinza is a full-stack developer skilled in modern frontend and backend technologies, with a focus on clean code.",
    socials: [
      { platform: "twitter", url: "https://twitter.com/kinza" },
      { platform: "linkedin", url: "https://linkedin.com/in/kinza" },
      { platform: "instagram", url: "https://instagram.com/kinza.design" },
    ],
  },
];

// Icon map with default color
const iconMap = {
  twitter: <FaTwitter size={28} />,
  linkedin: <FaLinkedin size={28} />,
  instagram: <FaInstagram size={28} />,
};

const TeamDetail = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === parseInt(id));

  if (!member) {
    return (
      <div className="text-center font-bold text-[#1e5170] mt-20 text-xl">
        Team member not found.
      </div>
    );
  }

  return (
    <>
      <style>{`
        .shine-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
        }
        .shine-wrapper img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
        }
        .shine-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
        }
        .group:hover .shine-wrapper::after {
          animation: shine-move 1s ease-in-out;
        }
        @keyframes shine-move {
          100% {
            left: 125%;
          }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row mt-16 bg-gradient-to-br from-[#f8f9fa] to-[#eaeff2] overflow-hidden">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-4 group">
            <div className="shine-wrapper">
              <img
                src={member.image}
                alt={member.name}
                className="w-[300px] h-[350px] object-cover rounded-xl shadow-xl border-4 border-[#1e5170]"
              />
            </div>
          </div>

          {/* Info */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center text-[#1e5170]">
            <h1 className="text-4xl lg:text-5xl font-extrabold">
              {member.name}
            </h1>
            <h2 className="text-lg font-semibold text-[#a17d29] mt-3 tracking-wide uppercase">
              {member.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#374151]">
              {member.bio}
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-8">
              {member.socials.slice(0, 3).map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.platform}
                  className="text-[#1e5170] hover:text-[#a17d29] transition-colors duration-300"
                >
                  {iconMap[social.platform]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetail;
