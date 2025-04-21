import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
    {
        id: "1",
        title: "Content Specialist",
        description:
            "Our Content Specialist services go beyond just writing. We work with you to develop a full-scale content strategy...",
        image: "/Services/contentSp.webp",
        details: [
            {
                icon: "/Services/writer.png",
                title: "Content Strategy",
                text: "We build a roadmap for your brand content based on trends, keywords, and audience behavior.",
            },
            {
                icon: "/Services/seo.png",
                title: "SEO Optimization",
                text: "Every content piece is SEO-optimized to boost visibility and rank better.",
            },
            {
                icon: "/Services/engagement.png",
                title: "Audience Engagement",
                text: "We craft content that drives interaction, shares, and customer loyalty.",
            },
        ],
    },
    {
        id: "2",
        title: "Content Writing",
        description:
            "Quality content is the backbone of any digital presence. Our Content Writing services provide you with...",
        image: "/Services/contentW.webp",
        details: [
            {
                icon: "/Services/copy-writing.png",
                title: "Professional Writing",
                text: "We create high-quality content tailored to your voice and audience.",
            },
            {
                icon: "/Services/target.png",
                title: "Audience Focus",
                text: "Content is shaped around what matters most to your ideal customer.",
            },
            {
                icon: "/Services/badge.png",
                title: "SEO Best Practices",
                text: "We help your content rank by applying the latest SEO techniques.",
            },
        ],
    },
    {
        id: "3",
        title: "Web Development",
        description:
            "Your website is often your first impression — let’s make it a great one. We offer full-stack Web Development services...",
        image: "/Services/web.webp",
        details: [
            {
                icon: "/Services/responsive.png",
                title: "Responsive Design",
                text: "Our websites look and work great on all devices and screen sizes.",
            },
            {
                icon: "/Services/software-developer.png",
                title: "Full Stack Development",
                text: "We handle both front-end and back-end to deliver complete web solutions.",
            },
            {
                icon: "/Services/shield.png",
                title: "Secure & Scalable",
                text: "We prioritize security and future growth with every site we build.",
            },
        ],
    },
    {
        id: "4",
        title: "Graphic Design",
        description:
            "Visuals speak louder than words — and our Graphic Design team knows how to make them unforgettable...",
        image: "/Services/graphic.jpg",
        details: [
            {
                icon: "/Services/branding.png",
                title: "Brand Identity",
                text: "We craft cohesive brand visuals from logos to full design kits.",
            },
            {
                icon: "/Services/ui.png",
                title: "UI/UX Mockups",
                text: "Our mockups are functional, attractive, and user-centered.",
            },
            {
                icon: "/Services/social.png",
                title: "Social Media Graphics",
                text: "We create scroll-stopping visuals for all social platforms.",
            },
        ],
    },
    {
        id: "5",
        title: "Video Editing",
        description:
            "In today’s fast-paced digital world, video content is king. Our Video Editing services help you produce high-quality, engaging videos...",
        image: "/Services/videoEd.webp",
        details: [
            {
                icon: "/Services/video-edit.png",
                title: "Professional Editing",
                text: "From transitions to color grading, we deliver clean, polished videos.",
            },
            {
                icon: "/Services/dubbing.png",
                title: "Sound Design",
                text: "We add music, effects, and voiceovers that enhance viewer experience.",
            },
            {
                icon: "/Services/platform.png",
                title: "Platform Ready",
                text: "Videos are formatted for YouTube, Reels, Ads, or any platform you need.",
            },
        ],
    },
    {
        id: "6",
        title: "Game Development",
        description:
            "Dive into the world of gaming with our creative and technically skilled Game Development services...",
        image: "/Services/Game.webp",
        details: [
            {
                icon: "/Services/unity.png",
                title: "Unity & Unreal",
                text: "We use industry-standard engines to bring your game to life.",
            },
            {
                icon: "/Services/game.png",
                title: "Game Design",
                text: "From concept to storyboard, we design immersive game worlds.",
            },
            {
                icon: "/Services/coding.png",
                title: "Cross-Platform Coding",
                text: "Build once, deploy anywhere — mobile, desktop, or console.",
            },
        ],
    },
    {
        id: "7",
        title: "Call Center Services",
        description:
            "Deliver exceptional customer support with our scalable and reliable Call Center Services...",
        image: "/Services/call-center.webp",
        details: [
            {
                icon: "/Services/inbound.png",
                title: "Inbound & Outbound",
                text: "From support to sales, our agents handle it all with professionalism.",
            },
            {
                icon: "/Services/call.png",
                title: "24/7 Availability",
                text: "We ensure your customers are always heard and helped.",
            },
            {
                icon: "/Services/report.png",
                title: "Detailed Reporting",
                text: "You get insights on every interaction and campaign performance.",
            },
        ],
    },
    {
        id: "8",
        title: "Shopify Store Setup",
        description:
            "Ready to sell online? We offer complete Shopify Store Setup services to help you launch a professional store...",
        image: "/Services/shopify.jpg",
        details: [
            {
                icon: "/Services/theme.png",
                title: "Theme Customization",
                text: "We design your store to match your brand and stand out.",
            },
            {
                icon: "/Services/setup.png",
                title: "Product & Payment Setup",
                text: "We handle listings, inventory, checkout, and payment gateways.",
            },
            {
                icon: "/Services/integration.png",
                title: "App Integrations",
                text: "Add features like reviews, email, and analytics with ease.",
            },
        ],
    },
    {
        id: "9",
        title: "Amazon Store Setup",
        description:
            "Maximize your reach and sales potential with a fully optimized Amazon Store...",
        image: "/Services/amazon.jpg",
        details: [
            {
                icon: "/Services/features.png",
                title: "Product Listings",
                text: "We write keyword-rich titles, bullet points, and descriptions.",
            },
            {
                icon: "/Services/a.png",
                title: "A+ Content",
                text: "Create rich visuals and content to boost product conversion.",
            },
            {
                icon: "/Services/reputation.png",
                title: "Brand Registry",
                text: "Protect and promote your brand on the world’s largest marketplace.",
            },
        ],
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
            className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#142c38] text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <button
                onClick={() => navigate(-1)}
                className="mb-8 text-[#a17d29] font-semibold hover:underline hover:cursor-pointer"
            >
                ← Back to Services
            </button>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg"
                />

                <div>
                    <h1 className="text-2xl md:text-4xl font-bold text-[#a17d29] mb-4">
                        {service.title}
                    </h1>
                    <p className="text-md md:text-lg text-gray-200 leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </div>

            {/* More Information Section */}
            {service.details && (
                <div className="mt-16">
                    <h2 className="text-xl md:text-2xl font-semibold text-[#a17d29] mb-4">
                        Why Choose Us for {service.title}?
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        We offer expert-level {service.title.toLowerCase()} services with results that speak for themselves.
                    </p>

                    <div className="grid gap-6 md:grid-cols-3">
                        {service.details.map((detail, index) => (
                            <div key={index} className="bg-[#1e3b4d] p-5 rounded-xl shadow-md hover:scale-105 transition">
                                <img src={detail.icon} alt={detail.title} className="w-12 h-12 mb-4 filter invert brightness-0 contrast-200" />
                                <h3 className="text-lg font-bold text-[#a17d29] mb-2">{detail.title}</h3>
                                <p className="text-gray-300 text-sm">{detail.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </motion.div>
    );
};

export default ServiceDetail;
