import React from "react";
import { useParams, useNavigate } from "react-router-dom";
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

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = services.find(s => s.id === id);

    if (!service) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-[#a17d29]">Service not found!</h2>
                <button
                    onClick={() => navigate("/services")}
                    className="mt-4 px-4 py-2 bg-[#a17d29] text-white rounded hover:cursor-pointer"
                >
                    Back to Services
                </button>
            </div>
        );
    }

    return (
        <motion.div
            className="max-w-full mx-auto px-6 py-16 bg-[#142c38]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <button
                onClick={() => navigate(-1)}
                className="mb-6 text-[#a17d29] font-semibold hover:underline hover:cursor-pointer"
            >
                ← Back to Services
            </button>
            <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 sm:h-96 object-cover rounded-xl mb-8 shadow-lg"
            />

            <h1 className="text-4xl font-bold text-[#a17d29] mb-4">{service.title}</h1>
            <p className="text-lg text-white leading-relaxed">{service.description}</p>

            {/* Optional: Add more detail */}
        </motion.div>
    );
};

export default ServiceDetail;
