import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { InstructorContext } from '../context/InstructorContext';

const RegisterTutor = () => {
  const { setInstructors } = useContext(InstructorContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "",
    skills: "",
    expertise: "",
    whyTutor: "",
    resume: null,
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInstructor = {
      name: formData.fullName,
      title: formData.expertise,
      image: "https://via.placeholder.com/150", // placeholder or upload logic
      skills: formData.skills.split(",").map(s => s.trim()),
      rating: 5.0,
      reviews: 0,
    };
    setInstructors(prev => [newInstructor, ...prev]);
    navigate("/instructor");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-400 to-orange-200 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Register as a Tutor</h2>
        <p className="text-center text-gray-600 mb-6">Empower others by sharing your knowledge.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="fullName" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-xl" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-xl" onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-xl" onChange={handleChange} required />

          <input type="text" name="institution" placeholder="Institution / University" className="w-full p-3 border border-gray-300 rounded-xl" onChange={handleChange} />
          <input type="text" name="skills" placeholder="Skills" className="w-full p-3 border border-gray-300 rounded-xl" onChange={handleChange} />
          <input type="text" name="expertise" placeholder="Areas of Expertise" className="w-full p-3 border border-gray-300 rounded-xl" onChange={handleChange} />

          <label className="block">
            <span className="text-gray-700">Upload Resume</span>
            <input type="file" name="resume" className="w-full p-3 border border-gray-300 rounded-xl mt-1" onChange={handleChange} />
          </label>

          <label className="flex items-center text-sm text-gray-600">
            <input type="checkbox" name="agree" className="mr-2" onChange={handleChange} />
            I agree to the Terms & Conditions
          </label>

          <button type="submit" className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800">
            Submit 
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterTutor;
