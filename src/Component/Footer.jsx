import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <footer className="bg-[#06141B] text-white px-6 md:px-12 py-25 pb-4">
                <div className="max-w-7xl mx-auto">
                    {/* Top Section: Logo & Grid */}
                    <div className="flex flex-col lg:flex-row justify-between gap-10">
                        {/* Logo and Description */}
                        <div className="max-w-full lg:max-w-sm px-0">
                            <h2 className="text-sm sm:text-base md:text-xl font-bold mb-4 flex items-center gap-3 relative">
                                <img
                                    src="/Home/az.jpeg"
                                    alt="Logo"
                                    className="w-14 h-7 sm:w-16 sm:h-8 md:w-20 md:h-10 object-contain absolute left-0"
                                />
                                <span className="pl-20">Azenterprisessdnbhd</span>
                            </h2>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                Your go-to freelance partner for reliable, custom IT solutions — from websites and mobile apps to cloud services and support. Helping startups and small businesses grow with smart tech since 2015.
                            </p>
                        </div>


                        {/* Grid Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 flex-1">
                            {/* Quick Links */}
                            <div className='lg:ms-10'>
                                <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
                                <ul className="space-y-3 text-gray-300">
                                    {["Home", "Projects", "Services", "Blogs", "About", "Contact"].map((item) => (
                                        <li
                                            key={item}
                                            className="transition-all duration-200 hover:text-[#a17d29] hover:scale-105"
                                        >
                                            <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                                                {item}
                                            </Link>
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
                                    M City Ampang <br /> office no 201 Selangor
                                </p>
                                <div className="mt-3 flex items-center gap-2 text-orange-400 hover:text-white transition duration-200">
                                    <FaPhoneAlt className="hover:text-orange-400 transition" />
                                    <span className="text-gray-300">+601128246982</span>
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
                        Copyright © 2025 Azenterprisessdnbhd
                    </div>
                </div>
            </footer>



        </>
    );
};

export default Footer;