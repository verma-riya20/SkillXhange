import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const InstructorContext = createContext();

export const InstructorProvider = ({ children }) => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/tutors");
        setInstructors(res.data);
      } catch (error) {
        console.error("Error fetching tutors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  return (
    <InstructorContext.Provider value={{ instructors, setInstructors, loading }}>
      {children}
    </InstructorContext.Provider>
  );
};
