import React from "react";
import {
  FaUsers,
  FaBullseye,
  FaCheckCircle,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-t from-[#1c637b] via-[#e2b091] to-[#d7aa89] py-16 text-center">
        <h2 className="text-5xl font-bold mb-4">About SkillXChange</h2>
        <p className="text-lg max-w-xl mx-auto">
          Your one-stop platform for buying, selling, learning, teaching, and sharing books.
        </p>
      </section>

      {/* Feature Image Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-10 max-w-6xl mx-auto">
        {[
          {
            label: "Sell Books",
            image:
              "/images/sells.jpg",
          },
          {
            label: "Find Tutors",
            image:
              "/images/tutor.jpg",
          },
          {
            label: "Explore Courses",
            image:
              "/images/course.jpg",
          },
          {
            label: "Lend & Borrow",
            image:
              "/images/lend.jpg",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="relative h-40 bg-gray-100 rounded-xl overflow-hidden shadow-md group"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Core Features Section */}
      <section className="px-6 py-12 md:flex md:justify-between gap-8 max-w-6xl mx-auto">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">
            We make books and learning accessible
          </h3>
          <p className="text-gray-600 mb-4">
            At SkillXChange, we believe in making education sustainable and
            collaborative. Whether you're buying, selling, or donating books,
            or taking a course – we're here to help.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Sell Books:</strong> Give your used books a new home &
              earn money.
            </li>
            <li>
              <strong>Borrow Books</strong> (Coming Soon): Get the book you need
              temporarily.
            </li>
            <li>
              <strong>Lend Books</strong> (Coming Soon): Share what you have
              with your community.
            </li>
            <li>
              <strong>Donate Books</strong> (Coming Soon): Give back through NGOs and local libraries.
            </li>
          </ul>
        </div>

        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">
            We empower learners and educators
          </h3>
          <p className="text-gray-600 mb-4">
            Learning shouldn't be limited by cost or access. That’s why we offer:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Explore Courses:</strong> Learn skills from coding to
              communication.
            </li>
            <li>
              <strong>Find a Tutor:</strong> Get help from verified educators
              anytime.
            </li>
            <li>
              <strong>Become a Tutor:</strong> Teach what you love, on your own
              schedule.
            </li>
          </ul>
        </div>
      </section>

      {/* Founder Quote Section */}
      <section className="px-6 py-10 flex flex-col items-center bg-gray-100">
        <div className="w-full md:w-2/3">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="/images/image2.png"
              alt="Founder"
              className="w-full"
            />
            <div className="p-4 text-center">
              <p className="text-xl font-semibold">
                "Making learning accessible and impactful"
              </p>
    
            </div>
          </div>
        </div>
      </section>

      {/* Value Icons Section */}
      <section className="py-12 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">
          Built for learners, by learners
        </h3>
        <p className="max-w-2xl mx-auto mb-10 text-gray-600">
          SkillXChange is more than a marketplace – it's a movement to make
          education accessible, affordable, and community-driven.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaUsers className="text-yellow-400 text-3xl mb-3 mx-auto" />
            <h4 className="text-xl font-semibold mb-2">Professional Community</h4>
            <p className="text-gray-600">
              Built by a network of teachers, learners & book lovers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaBullseye className="text-yellow-400 text-3xl mb-3 mx-auto" />
            <h4 className="text-xl font-semibold mb-2">Skill-Oriented</h4>
            <p className="text-gray-600">
              Focused on growth, creativity, and purpose-driven learning.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaCheckCircle className="text-yellow-400 text-3xl mb-3 mx-auto" />
            <h4 className="text-xl font-semibold mb-2">Trust & Success</h4>
            <p className="text-gray-600">
              A platform you can rely on for results and support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
