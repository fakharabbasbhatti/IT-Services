import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

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

const iconMap = {
  twitter: <FaTwitter size={28} />,
  linkedin: <FaLinkedin size={28} />,
  instagram: <FaInstagram size={28} />,
};

const TeamDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = teamMembers.find((m) => m.id === parseInt(id));

  if (!member) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#0c1c26] text-white text-xl">
        Team member not found.
      </div>
    );
  }

  return (
    <div className="bg-[#0c1c26] text-white min-h-screen px-4 py-12">
      {/* Breadcrumbs */}
      <motion.div
        className="max-w-5xl mx-auto mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 text-sm text-[#a17d29] font-semibold">
          <button onClick={() => navigate("/")} className="hover:underline hover:cursor-pointer">Home</button>
          <MdOutlineNavigateNext />
          <button onClick={() => navigate("/about")} className="hover:underline hover:cursor-pointer">Team</button>
          <MdOutlineNavigateNext />
          <span className="text-white">{member.name}</span>
        </div>
      </motion.div>

      {/* Team Member Content */}
      <motion.div
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover rounded-xl shadow-md border border-[#a17d29]"
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#a17d29] mb-2">{member.name}</h1>
          <h2 className="text-lg font-semibold text-white uppercase tracking-wide">{member.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white">{member.bio}</p>

          {/* Social Links */}
          <div className="flex gap-6 mt-6">
            {member.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#a17d29] transition-colors duration-300"
              >
                {iconMap[social.platform]}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Back Button */}
      <div className="max-w-5xl mx-auto mt-10 text-center">
        <button
          onClick={() => navigate("/about")}
          className="inline-block text-[#a17d29] hover:text-white border border-[#a17d29] px-6 py-2 rounded-md transition duration-300 hover:cursor-pointer"
        >
          ← Back to Team
        </button>
      </div>
    </div>
  );
};

export default TeamDetail;
