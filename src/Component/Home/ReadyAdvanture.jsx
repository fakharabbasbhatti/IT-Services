import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const ReadyAdvanture = () => {
    return (
        <>
            <section className=" relative bg-[#0c1c26] md:pt-10">
                <div className="relative z-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-26 max-md:pt-15 h-[100%] lg:py-28 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                    {/* Text Section */}
                    <div className="text-white max-w-xl text-left">
                        <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                            Ready to Start Your <br /> Adventure?
                        </h2>
                        <p className="text-lg mb-8">
                            Let us help you create the perfect journey. Our travel experts are
                            ready to craft your dream vacation.
                        </p>
                        <button className="text-[#0c1c26] bg-[#a17d29] border border-[#a17d29] transition duration-500 ease-in-out font-medium px-6 py-3.5 text-xl rounded-md flex items-center gap-2 hover:text-white hover:bg-[#0c1c26] cursor-pointer">
                            Start Planning <FaArrowRight />
                        </button>

                    </div>

                    {/* Image */}
                    <div className="flex-shrink-0 absolute -z-10 right-3 bottom-0 max-md:right-0">
                        <img
                            src="/Home/lady.png"
                            alt="Traveler"
                            className="object-contain"
                        />
                    </div>
                    <div className="flex-shrink-0 absolute -z-10 right-80 bottom-0 max-md:-bottom-10  max-md:-right-20">
                        <img
                            src="/Home/line.svg"
                            alt="Traveler"
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReadyAdvanture;