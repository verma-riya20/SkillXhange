import React, { useState } from 'react';
import axios from 'axios';

const MentorAssistant = () => {
  const [form, setForm] = useState({ skill: '', level: '', availability: '' });
  const [response, setResponse] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/ai/mentor', form);
    setResponse(res.data.response);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Mentor Finder</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input name="skill" onChange={handleChange} placeholder="Skill" className="input" required />
        <input name="level" onChange={handleChange} placeholder="Your Level" className="input" required />
        <input name="availability" onChange={handleChange} placeholder="Availability" className="input" required />
        <button type="submit" className="btn">Find Mentor</button>
      </form>
      <div className="text-sm text-gray-700 whitespace-pre-line">{response}</div>
    </div>
  );
};

export default MentorAssistant;
