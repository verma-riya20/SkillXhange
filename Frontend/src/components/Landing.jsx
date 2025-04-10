import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#e2cfcf] to-[#adcfd6] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-2">
            Professional courses<br />on creating websites
          </h2>
          <p className="text-white text-sm md:text-base max-w-xl mx-auto">
            Our courses are complete professional courses of high quality that include a set of video lessons,
            practical and training materials.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#fceaea] rounded-xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-600 font-semibold">DESIGN</p>
              <h3 className="text-lg font-medium mt-2 mb-4">
                How to make a quality site in WordPress in 40 hours without experience
              </h3>
            </div>
            <div className="mt-auto flex items-center justify-between">
              <a href="#" className="text-teal-600 font-semibold text-sm">READ MORE</a>
              <div className="w-10 h-10 bg-white rounded-full border-2 border-teal-300 flex items-center justify-center">
                <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-600 font-semibold">PROGRAMMING</p>
              <h3 className="text-lg font-medium mt-2 mb-4">
                WordPress: How to start in a developer without any basic knowledge
              </h3>
            </div>
            <div className="mt-auto flex items-center justify-between">
              <a href="#" className="text-teal-600 font-semibold text-sm">READ MORE</a>
              <div className="w-10 h-10 bg-white rounded-full border-2 border-teal-300 flex items-center justify-center">
                <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fceaea] rounded-xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-600 font-semibold">SEO</p>
              <h3 className="text-lg font-medium mt-2 mb-4">
                Creating dynamic sites with CMS WordPress + SEO for WordPress websites
              </h3>
            </div>
            <div className="mt-auto flex items-center justify-between">
              <a href="#" className="text-teal-600 font-semibold text-sm">READ MORE</a>
              <div className="w-10 h-10 bg-white rounded-full border-2 border-teal-300 flex items-center justify-center">
                <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
