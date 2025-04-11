import React, { useState } from 'react';
import axios from 'axios';

const BookRecommender = () => {
  const [form, setForm] = useState({ subject: '', budget: '', preference: '' });
  const [result, setResult] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/ai/book', form);
    setResult(res.data.response);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Book Recommender</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input name="subject" onChange={handleChange} placeholder="Subject" className="input" required />
        <input name="budget" onChange={handleChange} placeholder="Budget in ₹" className="input" required />
        <input name="preference" onChange={handleChange} placeholder="Preferences" className="input" required />
        <button type="submit" className="btn">Get Recommendations</button>
      </form>
      <div className="text-sm text-gray-700 whitespace-pre-line">{result}</div>
    </div>
  );
};

export default BookRecommender;
