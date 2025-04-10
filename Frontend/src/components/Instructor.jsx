import React from "react";
import { FaStar } from "react-icons/fa";

// Sample instructors (replace with real data or map from backend)
const instructors = [
  {
    name: "John Doe",
    title: "Full Stack Developer",
    image: "/instructors/john.jpg",
    skills: ["React", "Node.js", "MongoDB"],
    rating: 4.8,
    reviews: 120,
  },
  {
    name: "Jane Smith",
    title: "UI/UX Designer",
    image: "/instructors/jane.jpg",
    skills: ["Figma", "Sketch", "Adobe XD"],
    rating: 4.6,
    reviews: 85,
  },
  {
    name: "Ravi Kumar",
    title: "SEO Specialist",
    image: "/instructors/ravi.jpg",
    skills: ["SEO", "Google Analytics", "Content Strategy"],
    rating: 4.9,
    reviews: 143,
  },
];

const InstructorsPage = () => {
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
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#12033e]">
          Meet Our Top Instructors
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {instructors.map((inst, idx) => (
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
                <span className="text-sm text-gray-600 ml-2">({inst.reviews} reviews)</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InstructorsPage;
