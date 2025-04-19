import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / windowHeight) * 100;

            setScrollPercent(scrolled);

            if (scrollTop > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const radius = 30;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

    return (
        visible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-150 w-16 h-16 flex items-center justify-center rounded-full bg-[#0c1c26] shadow-lg transition-all duration-300 group hover:cursor-pointer"
                aria-label="Scroll to Top"
            >
                {/* Circular Progress */}
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 80 80">
                    <circle
                        className="text-gray-200"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        r={radius}
                        cx="40"
                        cy="40"
                    />
                    <circle
                        className="text-[#a17d29]"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        r={radius}
                        cx="40"
                        cy="40"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        style={{
                            transition: "stroke-dashoffset 0.3s ease",
                            transform: "rotate(-90deg)",
                            transformOrigin: "50% 50%",
                        }}
                    />
                </svg>

                {/* Icon */}
                <FaArrowUp className="text-[#fff] z-110" />
            </button>
        )
    );
};

export default ScrollToTopButton;
