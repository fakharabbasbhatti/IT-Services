import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const blogPosts = [
    {
        id: "1",
        title: "The Future of Web Development in 2025",
        content: `Web development is undergoing a transformational shift as we step into 2025, driven by innovations in both technology and user expectations. One of the most exciting advancements is the widespread adoption of WebAssembly, which allows code written in languages like Rust, C++, or Go to run in the browser with near-native performance. This enables developers to build more powerful, real-time applications — such as complex games, video editors, and 3D modeling tools — directly on the web without plugins.
    
    Artificial Intelligence (AI) is also becoming a core part of the development process. AI-assisted coding tools like GitHub Copilot are streamlining workflows, reducing development time, and helping teams debug and refactor code faster. Even UI/UX design is being influenced by AI, with tools suggesting layouts, color schemes, and content placement based on user behavior patterns and heatmaps.
    
    The rise of no-code and low-code platforms is democratizing development. Entrepreneurs, marketers, and designers can now build fully functional web apps, landing pages, and even eCommerce stores with minimal technical knowledge. This trend is reshaping team dynamics and project timelines, allowing faster prototyping and iteration.
    
    Modern development frameworks like Next.js, Astro, SvelteKit, and Remix are pushing performance to new heights with features like edge rendering, serverless functions, and hybrid static/dynamic content. These tools focus on speed, developer experience, and SEO — which are crucial in today’s digital landscape.
    
    Another key movement is toward headless architecture and composable platforms. Instead of using monolithic CMS systems, developers are integrating APIs from best-in-class services (like content management, payments, authentication) into a flexible and scalable frontend. This makes websites more adaptable and future-proof.
    
    Accessibility and performance remain non-negotiables. Google’s Core Web Vitals now directly impact search rankings, so optimizing for fast load times, responsive design, and inclusive user experiences is essential. Mobile-first design, dark mode support, and privacy-focused features are now standard expectations rather than nice-to-haves.
    
    In conclusion, web development in 2025 is all about **speed, flexibility, intelligence, and inclusivity**. By embracing modern tools and practices, businesses can not only stay relevant but also create meaningful, user-centric digital experiences that stand out in a crowded online world.`,
        image: "/Home/p1.jpeg",
        author: "Jane Smith",
        date: "April 10, 2025"
    },
    {
        id: "2",
        title: "Why Content Strategy Is Crucial for Digital Success",
        content: `In 2025, content remains the foundation of every successful digital marketing strategy — but it's no longer just about creating blog posts or writing catchy captions. A powerful content strategy starts with **deep audience insights**, mapping out customer personas, identifying their pain points, and crafting messages that resonate at each stage of the buyer’s journey.
    
    Effective content strategy connects the dots between brand goals and audience needs. It ensures you're producing the right content — in the right format, at the right time, and on the right platform. Whether it’s SEO-driven blogs, social media posts, product descriptions, email newsletters, or video scripts, each piece should serve a specific purpose, from awareness to decision-making.
    
    SEO is still a major pillar, but in 2025 it's evolved beyond keywords. Search engines now prioritize **search intent**, user experience, and topic authority. That means businesses need content clusters, internal linking, and E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) to rank well and attract qualified traffic.
    
    A well-executed strategy also considers **content repurposing** — turning a single long-form blog into social media carousels, infographics, short videos, podcasts, or newsletters. This maximizes reach and keeps messaging consistent across channels, while saving time and resources.
    
    Additionally, personalization and AI-driven content are transforming how we communicate. Brands now leverage behavioral data to deliver hyper-relevant content, increasing engagement and boosting conversions. The better your strategy, the more your content feels tailored, helpful, and human — even when it's automated.
    
    In today’s saturated digital environment, where attention is currency, a strategic approach to content isn’t optional — it's essential. Businesses that invest in a long-term, audience-focused content strategy not only **build trust** and **increase retention**, but also future-proof their marketing efforts against evolving algorithms and market shifts.`,
        image: "/Home/p2.webp",
        author: "John Doe",
        date: "April 12, 2025"
    },
    {
        id: "3",
        title: "Top Graphic Design Trends That Boost Conversions",
        content: `Graphic design in 2025 isn’t just about making things look good — it's about creating experiences that guide, inspire, and convert. As consumer attention spans grow shorter and competition intensifies, brands must embrace design trends that not only capture the eye but also influence behavior.
    
    One of the most impactful trends is **minimalism with purpose**. Clean layouts, generous white space, and simplified navigation allow users to focus on what matters — your product or message. Minimalism also enhances mobile responsiveness and improves site speed, two major factors in boosting conversion rates.
    
    **Dynamic gradients and color transitions** are also back in style, bringing depth and emotion to digital designs. When paired with bold typography, these gradients can make call-to-actions (CTAs) pop and establish a memorable brand aesthetic. Combined with high-contrast color schemes and accessibility-conscious choices, your design becomes both inclusive and conversion-focused.
    
    **Motion design** is another game-changer. Subtle animations, hover effects, micro-interactions, and scroll-triggered transitions add life to static pages. They help guide the user's attention, make interfaces feel intuitive, and drive engagement by rewarding interaction. When used strategically, motion can increase time-on-site and reduce bounce rates.
    
    Another vital trend is **storytelling through visuals**. Instead of just using decorative graphics, brands now craft design narratives — using illustration, iconography, and image sequences to explain concepts, highlight benefits, and build emotional connections. These visuals are more digestible than text and create a seamless path from interest to action.
    
    As more users prefer **dark mode**, designs must be adaptive. Creating visuals that retain clarity and vibrancy across both light and dark backgrounds ensures your brand remains consistent and visually appealing across all devices and preferences.
    
    Lastly, **AI-assisted design** tools are empowering designers to create faster and smarter, suggesting layout improvements, color combinations, and even generating custom assets. The result? Increased productivity and more room for creative experimentation.
    
    In short, graphic design in 2025 is no longer a luxury — it's a strategic tool for growth. By aligning with these cutting-edge trends, your brand can **stand out**, **connect emotionally**, and **drive real business results** through visual excellence.`,
        image: "/Home/p3.webp",
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
                className=",md:text-4xl text-xl font-bold text-[#a17d29] mb-4"
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
                className="text-white leading-relaxed whitespace-pre-line text-md md:text-lg"
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
