import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1c637b] via-[#e2b091] to-[#f9f1e9] p-8">
      <div className="bg-white p-12 rounded-2xl shadow-xl max-w-5xl w-full text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About SkillXChange</h1>
        <div className="text-gray-700 space-y-6 text-lg leading-relaxed">
          <p>
            <strong>Welcome to SkillXChange</strong> – your all-in-one destination for everything books and learning!
          </p>

          <p>
            At SkillXChange, we believe in the power of knowledge and community. Whether you're a passionate reader, a lifelong learner, or someone looking to share knowledge, we’ve got something for you.
          </p>

          <p>
            <strong>📖 Buy & Sell Books</strong><br />
            Tired of buying expensive books or not sure what to do with books you've already read? We've got a sustainable solution! 
            Explore a growing marketplace of books – from bestsellers to academic texts. Got books you no longer need? List them and earn while helping others learn.
          </p>

          <p>
            <strong>🧠 Learn with Us</strong><br />
            Dive into curated courses on a variety of topics – from coding and design to personal development and academics.
          </p>

          <p>
            <strong>🎓 Find a Tutor</strong><br />
            Need extra help? Connect with verified tutors who can guide you one-on-one in your learning journey.
          </p>

          <p>
            <strong>✏️ Be a Tutor — Share Your Knowledge</strong><br />
            Do you have a passion for teaching? Join SkillXChange as a tutor and help students grow while earning on your own schedule.
          </p>

          <p>
            <strong>🔄 Lend & Borrow (Coming Soon!)</strong><br />
            Our upcoming Lend & Borrow feature will allow you to share books with others around you. Borrow what you need, lend what you can – all in a safe, community-driven environment.
          </p>

          <p>
            <strong>🎁 Donate Books (Coming Soon!)</strong><br />
            Have books collecting dust? Give them a second life. Soon, you'll be able to donate books and we’ll send them to NGOs to make someone’s life better.
          </p>

          <p>
            <strong>🌱 Built for Learners, by Learners</strong><br />
            Whether you're prepping for exams, learning a new skill, or just love reading – SkillXChange is your cozy corner of the internet built to support learning and sharing.
          </p>
        </div>

        <p className="mt-8 text-sm text-center text-gray-400">Made with ❤️ by Book Lovers.</p>
      </div>
    </div>
  );
}

