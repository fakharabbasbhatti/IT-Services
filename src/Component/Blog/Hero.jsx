import React from 'react';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="relative h-[100vh] max-h-[600px] flex justify-center items-center">
            <img
                src="/Blogs/bg.jpg"
                alt="Visa Consultancy & Travel Solutions"
                className="w-full h-full "
                loading="lazy"
            />
            <div className="absolute flex items-center px-4 py-2">
                <div className="text-white text-left max-w-4xl flex flex-col items-center gap-4">
                    <motion.p
                        className="text-sm bg-[#0c1c26] text-white hover:bg-[#a17d29] rounded-full font-light uppercase inline-block px-4 py-2 cursor-pointer transition-colors duration-300"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.25 }} // Trigger animation when 25% of the element is in view
                    >
                        Insights & Inspiration
                    </motion.p>

                    <motion.h1
                        className="text-xl text-center md:text-3xl font-bold leading-tight w-full text-[#fff] mt-4"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.25 }} // Same viewport behavior for this element
                    >
                        Explore the Latest in Tech & Innovation
                    </motion.h1>

                </div>
            </div>
        </div>
    );
};

export default Hero;
