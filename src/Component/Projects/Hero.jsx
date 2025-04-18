import React from 'react';
import { motion } from "framer-motion";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Hero = ({ title, prevRoute, nextRoute }) => {
    const navigate = useNavigate();
    return (
        <div className="relative md:h-[60vh] h-full flex justify-center items-center overflow-hidden">
            {/* Animated Background Image */}
            <motion.img
                src="/Projects/bg.webp"
                alt="Visa Consultancy & Travel Solutions"
                className="absolute top-0 left-0 w-full h-full object-cover"
                loading="lazy"
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0c1c26] opacity-50 z-10" />

            {/* Text Content */}
            <div className="absolute flex items-center justify-center w-full z-20 px-4 py-2">
                <div className="text-white text-center max-w-4xl flex flex-col items-center gap-4">

                    <motion.p
                        className="text-xl font-bold text-[#fff] rounded-full uppercase inline-block px-4 py-2 cursor-pointer transition-colors duration-300"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        {title}
                    </motion.p>

                    <motion.h1
                        className="w-full mt-4"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <div className="flex items-end gap-2 text-lg md:text-xl font-semibold leading-tight text-white">
                            <button onClick={() => navigate("/")} className="hover:text-[#a17d29] transition-colors hover:cursor-pointer">{prevRoute}</button>
                            <MdOutlineNavigateNext className="text-[#a17d29]" />
                            <button onClick={() => navigate("/projects")} className="text-[#a17d29] hover:cursor-pointer">{nextRoute}</button>
                        </div>

                    </motion.h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
