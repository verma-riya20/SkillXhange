import React, { createContext, useState } from "react";

export const InstructorContext = createContext();

export const InstructorProvider = ({ children }) => {
  const [instructors, setInstructors] = useState([
    {
      name: "John Doe",
      title: "Full Stack Developer",
      image: "/instructors/john.jpg",
      skills: ["React", "Node.js", "MongoDB"],
      rating: 4.8,
      reviews: 120,
      availability: "evenings"
    },
    {
      name: "Jane Smith",
      title: "UI/UX Designer",
      image: "/instructors/jane.jpg",
      skills: ["Figma", "Sketch", "Adobe XD"],
      rating: 4.6,
      reviews: 85,
      availability: "mornings"
    },
    {
      name: "Ravi Kumar",
      title: "SEO Specialist",
      image: "/instructors/ravi.jpg",
      skills: ["SEO", "Google Analytics", "Content Strategy"],
      rating: 4.9,
      reviews: 143,
      availability: "weekends"
    },
    {
      name: "Emily Chen",
      title: "Data Scientist",
      image: "/instructors/emily.jpg",
      skills: ["Python", "Machine Learning", "Pandas"],
      rating: 4.7,
      reviews: 98,
      availability: "weekends"
    },
    {
      name: "Carlos Ramirez",
      title: "DevOps Engineer",
      image: "/instructors/carlos.jpg",
      skills: ["Docker", "Kubernetes", "CI/CD"],
      rating: 4.5,
      reviews: 76,
      availability: "mornings"
    },
    {
      name: "Aisha Khan",
      title: "Backend Developer",
      image: "/instructors/aisha.jpg",
      skills: ["Node.js", "Express", "MongoDB"],
      rating: 4.6,
      reviews: 92,
      availability: "evenings"
    },
    {
      name: "Daniel White",
      title: "Cybersecurity Expert",
      image: "/instructors/daniel.jpg",
      skills: ["Ethical Hacking", "Network Security"],
      rating: 4.9,
      reviews: 110,
      availability: "anytime"
    },
    {
      name: "Priya Singh",
      title: "Frontend Developer",
      image: "/instructors/priya.jpg",
      skills: ["HTML", "CSS", "JavaScript"],
      rating: 4.7,
      reviews: 101,
      availability: "evenings"
    },
    {
      name: "Liam Johnson",
      title: "Cloud Architect",
      image: "/instructors/liam.jpg",
      skills: ["AWS", "Azure", "GCP"],
      rating: 4.8,
      reviews: 134,
      availability: "weekends"
    },
    {
      name: "Mei Tan",
      title: "Mobile App Developer",
      image: "/instructors/mei.jpg",
      skills: ["Flutter", "Dart", "React Native"],
      rating: 4.5,
      reviews: 89,
      availability: "mornings"
    },
    {
      name: "Robert Lee",
      title: "Game Developer",
      image: "/instructors/robert.jpg",
      skills: ["Unity", "C#", "Game Design"],
      rating: 4.7,
      reviews: 94,
      availability: "evenings"
    },
    {
      name: "Natalie Brooks",
      title: "AI Researcher",
      image: "/instructors/natalie.jpg",
      skills: ["Deep Learning", "NLP", "TensorFlow"],
      rating: 4.8,
      reviews: 122,
      availability: "weekends"
    },
    {
      name: "Mohammed Ali",
      title: "Blockchain Developer",
      image: "/instructors/mohammed.jpg",
      skills: ["Solidity", "Ethereum", "Smart Contracts"],
      rating: 4.6,
      reviews: 99,
      availability: "anytime"
    },
    {
      name: "Grace Kim",
      title: "Product Manager",
      image: "/instructors/grace.jpg",
      skills: ["Agile", "Scrum", "Roadmaps"],
      rating: 4.7,
      reviews: 108,
      availability: "mornings"
    },
    {
      name: "Victor Zhang",
      title: "Systems Engineer",
      image: "/instructors/victor.jpg",
      skills: ["Linux", "Bash", "System Design"],
      rating: 4.5,
      reviews: 90,
      availability: "weekends"
    },
    {
      name: "Sophia Nguyen",
      title: "Robotics Engineer",
      image: "/instructors/sophia.jpg",
      skills: ["ROS", "Arduino", "C++"],
      rating: 4.8,
      reviews: 111,
      availability: "mornings"
    },
    {
      name: "James Allen",
      title: "Big Data Analyst",
      image: "/instructors/james.jpg",
      skills: ["Hadoop", "Spark", "SQL"],
      rating: 4.6,
      reviews: 105,
      availability: "evenings"
    },
    {
      name: "Haruka Saito",
      title: "IoT Specialist",
      image: "/instructors/haruka.jpg",
      skills: ["Sensors", "Raspberry Pi", "MQTT"],
      rating: 4.7,
      reviews: 88,
      availability: "anytime"
    },
    {
      name: "Noah Green",
      title: "Technical Writer",
      image: "/instructors/noah.jpg",
      skills: ["Documentation", "API Writing", "Markdown"],
      rating: 4.5,
      reviews: 73,
      availability: "weekends"
    },
    {
      name: "Zara Patel",
      title: "E-commerce Strategist",
      image: "/instructors/zara.jpg",
      skills: ["Shopify", "WooCommerce", "Email Marketing"],
      rating: 4.9,
      reviews: 132,
      availability: "mornings"
    }
  ]);

  return (
    <InstructorContext.Provider value={{ instructors, setInstructors }}>
      {children}
    </InstructorContext.Provider>
  );
};
