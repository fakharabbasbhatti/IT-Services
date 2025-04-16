import React from "react";

const ItPopular = () => {
  return (
    <div className="w-full p-10 min-h-screen flex flex-col gap-10 text-white bg-[#0c1c26] py-15">
      {/* First Row */}
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-4 p-5 lg:w-1/2">
          <h3 className="px-4 py-1 text-[#a17d29] bg-orange-100 rounded-full w-fit font-medium">
            Choose Your Place
          </h3>
          <h1 className="text-5xl font-bold">Popular Destinations</h1>
          <p className="text-lg">
            Join us as we explore the wonders of the globe, one incredible
            journey at a time.
          </p>
          <button className="px-7 py-3 bg-[#0c1c26] border-[#a17d29] bg- w-fit border-2  transition duration-500 ease-in-out font-medium text-xl rounded-md flex items-center gap-2 hover:text-white hover:border-white hover:bg-[#0c1c26] hover:text- cursor-pointer">
            Find Packages
          </button>
        </div>

        <div className="flex gap-6 lg:w-1/2">
          <div className="relative w-1/2 h-72 rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/Home/web.avif"
              alt="London"
            />
            <p className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow">
              Web Development
            </p>
          </div>
          <div className="relative w-1/2 h-72 rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/Home/contentW.avif"
              alt="London"
            />
            <p className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow">
              Content Writing
            </p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="relative w-full lg:w-1/3 h-64 rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/Home/graphics.webp"
            alt="London"
          />
          <p className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow">
            Graphics Designing
          </p>
        </div>
        <div className="relative w-full lg:w-1/3 h-64 rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/Home/shopify.avif"
            alt="Europe"
          />
          <p className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow">
            Shopify Store
          </p>
        </div>
        <div className="relative w-full lg:w-1/3 h-64 rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/Home/amazon.avif"
            alt="Africa"
          />
          <p className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow">
            Amazon Store
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="relative w-full lg:w-1/3 h-64 rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/Home/videoEd.webp"
            alt="London"
          />
          <p className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow">
            Video Editing
          </p>
        </div>
        <div className="relative w-full lg:w-1/3 h-64 rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/Home/Game.avif"
            alt="Europe"
          />
          <p className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow">
            Game Development
          </p>
        </div>
        <div className="relative w-full lg:w-1/3 h-64 rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/Home/contentSp.webp"
            alt="Africa"
          />
          <p className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow">
            Content Specialist
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItPopular;