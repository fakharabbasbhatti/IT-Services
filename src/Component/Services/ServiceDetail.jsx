import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
    {
        id: "1",
        title: "Content Specialist",
        description: "Our Content Specialist services go beyond just writing. We work with you to develop a full-scale content strategy that aligns with your business objectives, audience preferences, and industry trends. Whether you're building a brand, launching a product, or growing a community, we ensure every piece of content has a purpose — from blog posts and social media to SEO-driven articles and branded storytelling. With a focus on quality, consistency, and audience engagement, we help you create a strong and lasting impression.",
        image: "/Services/contentSp.webp",
    },
    {
        id: "2",
        title: "Content Writing",
        description: "Quality content is the backbone of any digital presence. Our Content Writing services provide you with professionally written articles, blog posts, web pages, email campaigns, product descriptions, and more — all tailored to your tone, audience, and goals. We ensure every word serves a purpose, using persuasive language, engaging storytelling, and SEO best practices to drive traffic, build trust, and convert readers into customers.",
        image: "/Services/contentW.webp",
    },
    {
        id: "3",
        title: "Web Development",
        description: "Your website is often your first impression — let’s make it a great one. We offer full-stack Web Development services to build custom, high-performance, and responsive websites. From landing pages and corporate websites to complex web applications, we ensure every project is optimized for speed, security, and usability. With clean code, intuitive UI/UX design, and seamless integrations, our websites are built to scale with your business.",
        image: "/Services/web.webp",
    },
    {
        id: "4",
        title: "Graphic Design",
        description: "Visuals speak louder than words — and our Graphic Design team knows how to make them unforgettable. We create stunning visuals that align with your brand and captivate your audience, including logos, social media graphics, business cards, brochures, UI/UX mockups, and full brand identity kits. Whether you're starting from scratch or refreshing an existing look, we help bring your ideas to life with creativity, precision, and impact.",
        image: "/Services/graphic.jpg",
    },
    {
        id: "5",
        title: "Video Editing",
        description: "In today’s fast-paced digital world, video content is king. Our Video Editing services help you produce high-quality, engaging videos that tell your story, showcase your products, or boost your social media presence. From YouTube content and promotional videos to reels, ads, and tutorials, we handle everything — cuts, transitions, sound design, subtitles, effects, and more — ensuring a professional and polished final product.",
        image: "/Services/videoEd.webp",
    },
    {
        id: "6",
        title: "Game Development",
        description: "Dive into the world of gaming with our creative and technically skilled Game Development services. Whether you want to develop a mobile game, educational app, or a 2D/3D immersive experience, we bring your vision to life using industry-standard engines like Unity and Unreal. From concept design and storyboarding to coding, animation, and deployment — we offer end-to-end game creation that’s fun, functional, and future-ready.",
        image: "/Services/Game.webp",
    },
    {
        id: "7",
        title: "Call Center Services",
        description: "Deliver exceptional customer support with our scalable and reliable Call Center Services. We provide both inbound and outbound solutions tailored to your business — whether you need lead generation, customer assistance, appointment setting, or tech support. Our trained agents are equipped with excellent communication skills and customer service tools to ensure every interaction is professional, empathetic, and aligned with your brand values.",
        image: "/Services/call-center.webp",
    },
    {
        id: "8",
        title: "Shopify Store Setup",
        description: "Ready to sell online? We offer complete Shopify Store Setup services to help you launch a professional and conversion-driven eCommerce store. From theme selection and customization to product uploads, payment gateway configuration, and app integration — we handle every detail to get your store up and running smoothly. Whether you're new to Shopify or looking to optimize your existing store, we make sure it looks great and performs even better.",
        image: "/Services/shopify.jpg",
    },
    {
        id: "9",
        title: "Amazon Store Setup",
        description: "Maximize your reach and sales potential with a fully optimized Amazon Store. We help you set up your brand on Amazon, including product listings, keyword-rich descriptions, backend optimization, A+ content, and branding assets. With our expertise in Amazon’s algorithms and guidelines, we ensure your store ranks well, looks great, and drives conversions — so you can focus on fulfilling orders and scaling your brand.",
        image: "/Services/amazon.jpg",
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

            <h1 className="md:text-4xl text-xl font-bold text-[#a17d29] mb-4">{service.title}</h1>
            <p className="md:text-lg text-md text-white leading-relaxed">{service.description}</p>

            {/* Optional: Add more detail */}
        </motion.div>
    );
};

export default ServiceDetail;
