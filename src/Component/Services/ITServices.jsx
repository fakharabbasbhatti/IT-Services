import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./ITServices.css";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const services = [
    {
        id: "1",
        title: "Content Specialist",
        description: "Crafting strategies and content that resonate with your target audience.",
        image: "/Services/contentSp.webp",
    },
    {
        id: "2",
        title: "Content Writing",
        description: "Professional writing services for blogs, websites, and marketing materials.",
        image: "/Services/contentW.webp",
    },
    {
        id: "3",
        title: "Web Development",
        description: "High-performance, modern websites tailored to your business goals.",
        image: "/Services/web.webp",
    },
    {
        id: "4",
        title: "Graphic Design",
        description: "Eye-catching graphics and brand visuals to make you stand out.",
        image: "/Services/graphic.jpg",
    },
    {
        id: "5",
        title: "Video Editing",
        description: "Polished, professional videos for marketing, social media, and more.",
        image: "/Services/videoEd.webp",
    },
    {
        id: "6",
        title: "Game Development",
        description: "Creative and engaging games built with cutting-edge technology.",
        image: "/Services/Game.webp",
    },
    {
        id: "7",
        title: "Call Center Services",
        description: "Reliable customer service and tele-support tailored to your business.",
        image: "/Services/call-center.webp",
    },
    {
        id: "8",
        title: "Shopify Store Setup",
        description: "Beautiful, functional Shopify stores that convert browsers into buyers.",
        image: "/Services/shopify.jpg",
    },
    {
        id: "9",
        title: "Amazon Store Setup",
        description: "Launch and optimize your brand presence on Amazon with our expertise.",
        image: "/Services/amazon.jpg",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ITServices = () => {
    return (
        <motion.div
            className="max-w-full mx-auto px-4 py-16 bg-[#0c1c26]"
            initial="hidden"
            animate="show"
            variants={containerVariants}
        >
            <motion.h2
                className="text-xl md:text-4xl font-bold text-center mb-6 text-[#a17d29]"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Our Services
            </motion.h2>

            <motion.p
                className="text-center text-md md:text-lg text-white mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                We offer a complete range of services to help your business succeed in today’s digital world.
            </motion.p>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-[#142c38] rounded-2xl shadow-md overflow-hidden hover:shadow-xl shadow-[#a17b29] transition duration-300 border border-[#a17d29]"
                        variants={cardVariants}
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        initial="hidden"
                    >
                        <div className="h-56 overflow-hidden shine-effect">
                            <img
                                src={service.image}
                                alt={service.title}
                                loading="lazy"
                                decoding="async"
                                width="400"
                                height="224"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-[#a17d29] mb-2">
                                {service.title.length > 40 ? `${service.title.substring(0, 40)}...` : service.title}
                            </h3>
                            <p className="text-white mb-4">
                                {service.description.length > 100 ? `${service.description.substring(0, 100)}...` : service.description}

                            </p>
                            <Link to={`/services/${service.id}`}>
                                <button
                                    className="relative overflow-hidden group cursor-pointer flex items-center gap-2 bg-[#a17d29] text-white px-6 py-3 font-semibold text-lg shadow-md rounded-md transition-all duration-500"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Learn More
                                        <MdOutlineArrowCircleRight className="text-2xl transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                                    </span>

                                    {/* Background hover fill effect */}
                                    <span className="absolute inset-0 bg-[#0c1c26] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default ITServices;
