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
  ]);

  return (
    <InstructorContext.Provider value={{ instructors, setInstructors }}>
      {children}
    </InstructorContext.Provider>
  );
};
