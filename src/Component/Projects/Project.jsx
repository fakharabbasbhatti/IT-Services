import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
    {
        id: "1",
        title: "E-Commerce Platform Redesign",
        description: "A complete UI/UX revamp and backend optimization for a Shopify-based store.",
        image: "/Projects/img1.webp",
    },
    {
        id: "2",
        title: "Custom CMS Development",
        description: "A scalable content management system built for speed and flexibility.",
        image: "/Projects/img2.webp",
    },
    {
        id: "3",
        title: "Brand Identity for Tech Startup",
        description: "Logo, branding, and digital assets designed to make a bold statement.",
        image: "/Projects/img3.webp",
    },
    {
        id: "4",
        title: "Mobile App for Food Delivery",
        description: "Intuitive UI and real-time tracking features for a seamless user experience.",
        image: "/Projects/img4.webp",
    },
    {
        id: "5",
        title: "Portfolio Website Design",
        description: "A sleek and modern portfolio to showcase creative work with impact.",
        image: "/Projects/img5.webp",
    },
    {
        id: "6",
        title: "SaaS Dashboard UI",
        description: "Analytics dashboard with interactive charts and responsive layout.",
        image: "/Projects/img6.webp",
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Project() {
    return (
        <motion.div
            className="w-full px-4 py-16 bg-[#0c1c26]"
            initial="hidden"
            animate="show"
            variants={container}
        >
            <motion.h2
                className="text-4xl font-bold text-center mb-6 text-[#a17d29]"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Our Latest Projects
            </motion.h2>

            <motion.p
                className="text-center text-lg text-white mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                Discover how we’ve transformed ideas into reality with innovative solutions across web development, design, e-commerce, and more.
            </motion.p>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="relative rounded-2xl overflow-hidden shadow-md shadow-[#a17b29] border border-[#a17d29] group"
                        variants={card}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-[#0c1c26]/90 flex flex-col justify-center items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
                            <h3 className="text-xl font-bold text-[#a17d29] mb-2">{project.title}</h3>
                            <p className="text-sm text-white mb-4">{project.description}</p>
                            <Link
                                to={`/projects/${project.id}`}
                                className="bg-[#a17d29] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-white hover:text-[#0c1c26] transition duration-300"
                            >
                                View Project
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default Project;
