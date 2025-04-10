import React from "react";

const EasyStudyHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFEBD2] to-[#FFF7ED] py-8 px-4 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Content */}
        <div className="md:col-span-2">
          {/* Navbar */}
          <nav className="flex justify-between items-center mb-10">
            <div className="flex gap-6 text-[13px] font-semibold text-[#5A5252]">
              <span>Features</span>
              <span>Docs</span>
              <span>Pricing</span>
              <span>Forum</span>
              <span>Dashboard</span>
              <span>Blog</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[13px] font-semibold text-[#5A5252]">Hi, Tommy</span>
              <button className="bg-[#1C1C1C] text-white text-[13px] px-4 py-2 rounded-full">Start Studying</button>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">Tomorrow is for the Taking</h1>
            <p className="text-[#5A5252] mb-6 text-sm max-w-lg">
              Anyone can join the millions of members in our community to learn cutting-edge skills. Thousands of classes to fuel your creativity and career.
            </p>
            <button className="bg-[#FFD160] text-[#1C1C1C] px-6 py-3 rounded-full text-sm font-semibold shadow-md">Get Started</button>
          </div>

          {/* Partners Section */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-wrap justify-between items-center">
            <div>
              <h3 className="text-[#5A5252] text-sm mb-1">They talked about us</h3>
              <p className="text-xs text-[#5A5252]">Our purpose is to make the new economy an open meritocracy</p>
              <p className="text-xs text-[#5A5252] mt-2 font-semibold">+10k reviews about us</p>
            </div>
            <div className="flex gap-6 items-center mt-4 md:mt-0">
              <img src="/dropbox.svg" alt="Dropbox" className="h-4" />
              <img src="/foursquare.svg" alt="Foursquare" className="h-4" />
              <img src="/opentable.svg" alt="OpenTable" className="h-4" />
              <img src="/unsplash.svg" alt="Unsplash" className="h-4" />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-[#1C1C1C] font-bold mb-6">Best of the week</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FFF4DD]">
              <div className="bg-[#FFD160] p-2 rounded-xl">
                <img src="/cinema.svg" alt="Cinema" className="h-8" />
              </div>
              <div>
                <h4 className="font-semibold text-[#1C1C1C] text-sm">Cinema 4D Abstract</h4>
                <p className="text-xs text-[#5A5252]">32:16 min</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FFEBF0]">
              <div className="bg-[#FF6F91] p-2 rounded-xl">
                <img src="/animation.svg" alt="Animation" className="h-8" />
              </div>
              <div>
                <h4 className="font-semibold text-[#1C1C1C] text-sm">Animation Essentials</h4>
                <p className="text-xs text-[#5A5252]">52:16 min</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#E4F9FF]">
              <div className="bg-[#4BC0C8] p-2 rounded-xl">
                <img src="/illustration.svg" alt="Illustration" className="h-8" />
              </div>
              <div>
                <h4 className="font-semibold text-[#1C1C1C] text-sm">Digital Illustration</h4>
                <p className="text-xs text-[#5A5252]">13:16 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyStudyHome;
