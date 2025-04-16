import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';


const Footer = () => {
    return (
        <>
            <footer className="bg-[#06141B] text-white px-6 md:px-12 py-25 pb-4">
                <div className="max-w-7xl mx-auto">
                    {/* Top Section: Logo & Grid */}
                    <div className="flex flex-col lg:flex-row justify-between gap-10">
                        {/* Logo and Description */}
                        <div className="lg:max-w-sm">
                            <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <span className="text-2xl">🌍</span>
                                ADVENTURE AURA
                            </h2>
                            <p className="text-gray-300 mt-5">
                                Your trusted partner for extraordinary travel experiences since 2015.
                            </p>
                        </div>

                        {/* Grid Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 flex-1">
                            {/* Quick Links */}
                            <div>
                                <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
                                <ul className="space-y-3 text-gray-300">
                                    {["Home", "About", "Packages", "Contact"].map((item) => (
                                        <li
                                            key={item}
                                            className="transition-all duration-200 hover:text-[#a17d29] hover:scale-105"
                                        >
                                            <a href="#">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Social Media */}
                            <div>
                                <h3 className="text-lg font-semibold mb-5">Follow Us</h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-center gap-3 group transition hover:scale-105 cursor-pointer">
                                        <FaInstagram className="text-gray-300 group-hover:text-pink-500 transition duration-200" />
                                        Instagram
                                    </li>
                                    <li className="flex items-center gap-2 group transition hover:scale-105 cursor-pointer">
                                        <FaTwitter className="text-gray-300 group-hover:text-sky-400 transition duration-200" />
                                        Twitter
                                    </li>
                                    <li className="flex items-center gap-2 group transition hover:scale-105 cursor-pointer">
                                        <FaLinkedin className="text-gray-300 group-hover:text-blue-600 transition duration-200" />
                                        LinkedIn
                                    </li>
                                    <li className="flex items-center gap-2 group transition hover:scale-105 cursor-pointer">
                                        <FaFacebook className="text-gray-300 group-hover:text-blue-500 transition duration-200" />
                                        Facebook
                                    </li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div>
                                <h3 className="text-lg font-semibold mb-5">Contact</h3>
                                <p className="text-gray-300">
                                    455 West Orchard Street Kings<br />
                                    Mountain, NC 280867
                                </p>
                                <div className="mt-3 flex items-center gap-2 text-orange-400 hover:text-white transition duration-200">
                                    <FaPhoneAlt className="hover:text-orange-400 transition" />
                                    <span className="text-gray-300">+088 (246) 642-27-10</span>
                                </div>
                                <div className="mt-2 flex items-center gap-2 text-orange-400 hover:text-white transition duration-200">
                                    <FaEnvelope className="hover:text-orange-400 transition" />
                                    <span className="text-gray-300">example@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom line */}
                    <div className="mt-12 border-t border-gray-200 pt-4 text-center text-gray-100">
                        Copyright © 2025 Travel Agency
                    </div>
                </div>
            </footer>



        </>
    );
};

export default Footer;