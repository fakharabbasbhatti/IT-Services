import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ReadyAdvanture = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className=" relative bg-[#a17d29]">
                <div className="relative z-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-26 max-md:pt-15 h-full lg:py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                    {/* Text Section */}
                    <div className="text-white max-w-xl text-left">
                        <h2 className="text-xl md:text-3xl font-bold leading-tight mb-6">
                            Ready to Elevate Your <br /> Business with IT
                        </h2>
                        <p className="text-lg mb-8">
                            Let us help you create the perfect system. Our IT specialists are here to develop solutions tailored to your business goals.
                        </p>
                        <button className=" text- bg- border-2  transition duration-500 ease-in-out font-medium px-6 py-3.5 text-sm md:text-xl rounded-md flex items-center gap-2 hover:text-white hover:border-[#0c1c26] hover:bg-[#0c1c26] cursor-pointer" onClick={() => navigate("/about")}>
                            Start Planning <FaArrowRight />
                        </button>


                    </div>

                    {/* Image */}
                    <div className="">
                        <img
                            src="/Projects/img1.webp"
                            alt="Traveler"
                            className="object-contain rounded-xl"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReadyAdvanture;