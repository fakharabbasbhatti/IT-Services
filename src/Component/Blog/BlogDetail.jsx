import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const blogPosts = [
    {
        id: "1",
        title: "The Future of Web Development in 2025",
        content: `Web development is evolving faster than ever before. In 2025, technologies like WebAssembly, AI-driven interfaces, and no-code platforms are reshaping how we build for the web. Businesses must adopt responsive, accessible, and lightning-fast experiences to stay relevant.

Progressive Web Apps (PWAs) are gaining traction as they provide app-like functionality without needing downloads. Meanwhile, frameworks like Next.js, Astro, and Remix are pushing performance boundaries.

By investing in a scalable and modern tech stack, your business stays competitive and prepared for the digital future.`,
        image: "/Blogs/web.jpg",
        author: "Jane Smith",
        date: "April 10, 2025"
    },
    {
        id: "2",
        title: "Why Content Strategy Is Crucial for Digital Success",
        content: `Content strategy is more than just planning blog posts. It involves understanding your audience, creating content for each stage of the funnel, and ensuring SEO best practices.

Great content builds trust, boosts conversions, and supports every part of your customer journey. Whether you're launching a startup or scaling your ecommerce brand, a solid content plan is non-negotiable in 2025.`,
        image: "/Blogs/content.jpg",
        author: "John Doe",
        date: "April 12, 2025"
    },
    {
        id: "3",
        title: "Top Graphic Design Trends That Boost Conversions",
        content: `Design isn't just about aesthetics—it's about results. In 2025, minimalism, dynamic gradients, and animated visuals dominate the landscape. These trends help brands tell stories visually and improve user experience.

Designs that adapt to dark mode, incorporate motion, and use storytelling techniques are proven to keep visitors engaged and convert more leads.`,
        image: "/Blogs/graphic.jpg",
        author: "Emily Chen",
        date: "April 15, 2025"
    }
];

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = blogPosts.find((post) => post.id === id);

    if (!blog) {
        return (
            <div className="text-center py-24">
                <h2 className="text-[#a17d29] font-semibold text-xl">
                    Blog not found.
                </h2>
                <button
                    onClick={() => navigate("/blogs")}
                    className="mt-4 px-4 py-2 bg-[#a17d29] hover:cursor-pointer text-white rounded"
                >
                    Back to Blogs
                </button>
            </div>
        );
    }

    return (
        <motion.div
            className="max-w-full mx-auto px-4 py-16 bg-[#142c38]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <button
                onClick={() => navigate(-1)}
                className="mb-6 text-[#a17d29] font-semibold hover:underline hover:cursor-pointer"
            >
                ← Back to Blogs
            </button>

            <motion.h1
                className="text-4xl font-bold text-[#a17d29] mb-4"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {blog.title}
            </motion.h1>

            <p className="text-sm text-white mb-6">
                By {blog.author} • {blog.date}
            </p>

            <motion.img
                src={blog.image}
                alt={blog.title}
                className="rounded-xl w-full h-64 object-cover mb-8 shadow-md"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            />

            <motion.p
                className="text-white leading-relaxed whitespace-pre-line text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                {blog.content}
            </motion.p>
        </motion.div>
    );
};

export default BlogDetail;
