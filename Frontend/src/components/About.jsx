import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1c637b] via-[#e2b091] to-[#f9f1e9] p-8">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About SkillXChange</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
        Our website is a modern, user-friendly platform built for readers, learners, and educators. It started as an online bookstore and has grown into a full learning hub. You can browse and buy books, enroll in a variety of online courses, and even register as a tutor to share your expertise.
        </p>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        With clean design and intuitive navigation, the site offers a seamless experience — whether you're discovering your next favorite book, picking up a new skill, or reaching students as a tutor. We aim to provide a space where stories, learning, and teaching all come together.
        </p>
        <p className="mt-6 text-sm text-gray-400">Made with ❤️ by Book Lovers.</p>
      </div>
    </div>
  );
}
