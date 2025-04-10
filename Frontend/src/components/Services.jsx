import React from "react";

const Services = () => {
  const services = [
    {
      title: "Skill Exchange",
      desc: "Connect with students to teach and learn new skills collaboratively.",
    },
    {
      title: "Book Sharing",
      desc: "Borrow, lend, or sell books within your student community easily.",
    },
    {
      title: "AI Skill Matchmaking",
      desc: "AI-powered recommendations to find the perfect skill partner.",
    },
    {
      title: "Location-based Book Discovery",
      desc: "Find books available around your location for faster access.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 hover:scale-105 transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
