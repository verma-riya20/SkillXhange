import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TutorProfile = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="min-h-screen bg-gradient-to-b from-[#fef1ed] via-[#e2b091] to-[#1c637b] py-12 px-6 flex justify-center items-center"
    >
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        
        {/* Left Section */}
        <div className="bg-[#fef1ed] md:w-1/3 p-6 flex flex-col items-center">
          <img
            src="/riya-profile.jpg" // Replace with actual image
            alt="Riya"
            className="rounded-full w-32 h-32 object-cover mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-700 text-center">Riya</h2>
          <p className="text-sm text-[#1e5e75] text-center">Web Development Tutor</p>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Institution</p>
            <p className="text-sm font-medium text-black">NIT Delhi</p>
            <p className="text-sm text-gray-500">Role</p>
            <p className="text-sm font-medium text-black">Mentor - SkillXchange</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-8 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <h2 className="text-2xl font-bold text-[#1e5e75]">Riya</h2>
              <p className="text-gray-500">New Delhi, India</p>
            </div>
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <p className="text-lg font-medium">9.1</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <FaPhone className="text-[#1e5e75]" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#1e5e75]" />
              <span>riya@skillxchange.in</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGlobe className="text-[#1e5e75]" />
              <span>www.skillxchange.in/riya</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#1e5e75] font-semibold">Skills:</span>
              <span>React, Tailwind, Node.js</span>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-[#1e5e75] mb-1">About</h3>
            <p className="text-gray-600 text-sm">
              I’m passionate about helping students build real-world projects with JavaScript, React, and full-stack concepts. I believe in collaborative learning and love simplifying complex topics for others.
            </p>
          </div>

          {/* Button */}
          <button className="bg-[#1e5e75] hover:bg-[#174d5c] text-white px-6 py-2 rounded-full text-sm">
            Send Message
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TutorProfile;
