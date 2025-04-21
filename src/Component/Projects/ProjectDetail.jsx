import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlineNavigateNext } from "react-icons/md";

const projects = [
    {
        id: "1",
        title: "E-Commerce Platform Redesign",
        description: "We redesigned a Shopify store with an intuitive UI/UX, enhanced performance, and mobile-first responsiveness to boost conversions and customer satisfaction.",
        image: "/Projects/img1.webp",
    },
    {
        id: "2",
        title: "Custom CMS Development",
        description: "We built a custom CMS from scratch focused on speed, scalability, and simplicity for a content-heavy website with dynamic user roles.",
        image: "/Projects/img2.webp",
    },
    {
        id: "3",
        title: "Brand Identity for Tech Startup",
        description: "A bold and modern branding package for a startup including logo, typography, color palette, and digital assets.",
        image: "/Projects/img3.webp",
    },
    {
        id: "4",
        title: "Mobile App for Food Delivery",
        description: "A mobile-first food ordering platform with GPS tracking, push notifications, and seamless payments.",
        image: "/Projects/img4.webp",
    },
    {
        id: "5",
        title: "Portfolio Website Design",
        description: "A stunning personal website built to showcase creative work, optimized for speed and SEO.",
        image: "/Projects/img5.webp",
    },
    {
        id: "6",
        title: "SaaS Dashboard UI",
        description: "An analytics dashboard UI for a SaaS product featuring charts, filters, and real-time updates.",
        image: "/Projects/img6.webp",
    }
];

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((item) => item.id === id);

    if (!project) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#0c1c26] text-white text-xl">
                Project not found
            </div>
        );
    }

    return (
        <div className="bg-[#0c1c26] text-white min-h-screen px-4 py-12">
            {/* Header Breadcrumb */}
            <motion.div
                className="max-w-5xl mx-auto mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-2 text-[10px] md:text-sm text-[#a17d29] font-semibold">
                    <button onClick={() => navigate("/")} className="hover:underline hover:cursor-pointer">Home</button>
                    <MdOutlineNavigateNext />
                    <button onClick={() => navigate("/projects")} className="hover:underline hover:cursor-pointer">Projects</button>
                    <MdOutlineNavigateNext />
                    <span className="text-white">{project.title}</span>
                </div>
            </motion.div>

            {/* Project Detail Content */}
            <motion.div
                className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl shadow-md border border-[#a17d29]"
                />
                <div>
                    <h1 className="text-xl md:text-4xl font-bold text-[#a17d29] mb-4">{project.title}</h1>
                    <p className="text-[15px] md:text-lg text-white leading-relaxed">{project.description}</p>
                </div>
            </motion.div>

            {/* Back Button */}
            <div className="max-w-5xl mx-auto mt-10 text-center">
                <button
                    onClick={() => navigate("/projects")}
                    className="inline-block text-[#a17d29] hover:text-white border border-[#a17d29] md:px-6 md:py-2 px-3 py-1 rounded-md transition duration-300 hover:cursor-pointer"
                >
                    ← Back to Projects
                </button>
            </div>
        </div>
    );
};

export default ProjectDetail;
