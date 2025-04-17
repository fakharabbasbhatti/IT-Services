import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const blogs = [
    {
        id: "1",
        title: "The Future of Web Development in 2025",
        summary: "Explore the key trends shaping the web development landscape and how your business can stay ahead.",
        image: "/Blogs/web.jpg",
        author: "Jane Smith",
        date: "April 10, 2025"
    },
    {
        id: "2",
        title: "Why Content Strategy Is Crucial for Digital Success",
        summary: "Learn how effective content strategy drives engagement, SEO, and long-term growth.",
        image: "/Blogs/content.jpg",
        author: "John Doe",
        date: "April 12, 2025"
    },
    {
        id: "3",
        title: "Top Graphic Design Trends That Boost Conversions",
        summary: "Stay visually competitive with design elements proven to increase user interaction.",
        image: "/Blogs/graphic.jpg",
        author: "Emily Chen",
        date: "April 15, 2025"
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

const Blogs = () => {
    return (
        <motion.div
            className="max-w-7xl mx-auto px-4 py-16"
            initial="hidden"
            animate="show"
            variants={container}
        >
            <motion.h2
                className="text-4xl font-bold text-center mb-6 text-[#0c1c26]"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Latest Blogs
            </motion.h2>
            <motion.p
                className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                Stay up-to-date with the latest trends, strategies, and insights in the IT industry.
            </motion.p>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
            >
                {blogs.map((blog) => (
                    <motion.div
                        key={blog.id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-[#a17d29]"
                        variants={card}
                    >
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105 p-2 rounded-2xl"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-[#0c1c26] mb-2">
                                {blog.title.length > 40 ? `${blog.title.substring(0, 40)}...` : blog.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-3">By {blog.author} • {blog.date}</p>
                            <p className="text-gray-700 mb-4">
                                {blog.summary.length > 100 ? `${blog.summary.substring(0, 100)}...` : blog.summary}
                            </p>
                            <Link to={`/blogs/${blog.id}`}>
                                <button className="relative overflow-hidden group cursor-pointer flex items-center gap-2 bg-[#a17d29] text-white px-6 py-3 font-semibold text-md shadow-md rounded-md transition-all duration-300">
                                    <span className="relative z-10 bg-transparent">Read More</span>
                                    <span className="absolute inset-0 bg-[#0c1c26] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                ))}

            </motion.div>
        </motion.div>
    );
};

export default Blogs;
