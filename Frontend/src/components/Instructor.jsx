import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { InstructorProvider } from "../context.jsx/InstructorContext";
import { useContext } from "react";
import { InstructorContext } from "../context.jsx/InstructorContext";
import { useEffect } from "react";



const InstructorsPage = () => {
    const { instructors } = useContext(InstructorContext);
    const [sortBy, setSortBy] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
  
    const sortInstructors = (list) => {
      switch (sortBy) {
        case "rating":
          return [...list].sort((a, b) => b.rating - a.rating);
        case "popularity":
          return [...list].sort((a, b) => b.reviews - a.reviews);
        case "alphabetical":
          return [...list].sort((a, b) => a.name.localeCompare(b.name));
        default:
          return list;
      }
    };
  
    const filteredInstructors = sortInstructors(
      instructors.filter((inst) =>
        inst.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#12033e] to-[#2b0b62] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Learn New Skills Online With Top <span className="text-green-400">Educators</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Build skills with courses, certifications, and degrees online from world-class instructors and companies.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#6C63FF] hover:bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition">
            Join for Free
          </button>
          <button className="border border-white hover:bg-white hover:text-[#12033e] px-6 py-3 rounded-full font-semibold transition">
            Find Courses
          </button>
        </div>
      </div>

      {/* Instructors Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-3xl font-semibold text-[#12033e] text-center sm:text-left">
            Meet Our Top Instructors
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Search by skill..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <select
              onChange={(e) => setSortBy(e.target.value)}
              className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="">Sort By</option>
              <option value="rating">Rating (High to Low)</option>
              <option value="popularity">Popularity</option>
              <option value="alphabetical">Alphabetical (A-Z)</option>
            </select>

            <button
              onClick={() => navigate("/register-tutor")}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              Register as Instructor
            </button>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredInstructors.map((inst, idx) => (
            <div
              key={idx}
              className="bg-white shadow-xl rounded-2xl p-6 text-center hover:shadow-2xl transition duration-300"
            >
              <img
                src={inst.image}
                alt={inst.name}
                className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#1e1e2f]">{inst.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{inst.title}</p>

              <div className="flex justify-center gap-2 flex-wrap mb-4">
                {inst.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-600 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.round(inst.rating) ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  ({inst.reviews} reviews)
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InstructorsPage;
