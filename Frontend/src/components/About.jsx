import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1c637b] via-[#e2b091] to-[#f9f1e9] p-8">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Our Bookstore</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to our cozy little online bookstore! We’re passionate about connecting readers with stories that inspire, entertain, and inform. Whether you're into thrilling mysteries, heartfelt memories, mind-bending sci-fi or academic, we’ve got something for you.
        </p>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          This platform was built with love for the written word and aims to make discovering and buying books as enjoyable as reading them. Browse, explore, and fall in love with your next favorite read!
        </p>
        <p className="mt-6 text-sm text-gray-400">Made with ❤️ by Book Lovers.</p>
      </div>
    </div>
  );
}
