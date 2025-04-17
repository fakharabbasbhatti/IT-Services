import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        image: "/Services/graphics.webp",
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
        image: "/Services/shopify.webp",
    },
    {
        id: "9",
        title: "Amazon Store Setup",
        description: "Launch and optimize your brand presence on Amazon with our expertise.",
        image: "/Services/amazon.webp",
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
            className="max-w-7xl mx-auto px-4 py-16"
            initial="hidden"
            animate="show"
            variants={containerVariants}
        >
            <motion.h2
                className="text-4xl font-bold text-center mb-6 text-[#0c1c26]"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Our Services
            </motion.h2>

            <motion.p
                className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
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
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                        variants={cardVariants}
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        initial="hidden"
                    >
                        <div className="h-56 overflow-hidden">
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
                            <h3 className="text-2xl font-semibold text-[#0c1c26] mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <Link to={`/services/${service.id}`}>
                                <button className="relative overflow-hidden group cursor-pointer flex items-center gap-2 bg-[#a17d29] text-white px-6 py-3 font-semibold text-lg shadow-md rounded-md transform-gpu">
                                    <span className="relative z-10 flex items-center gap-2 bg-transparent">
                                        Learn More
                                    </span>
                                    <span className="absolute inset-0 bg-[#0c1c26] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out will-change-transform"></span>
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
