import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookRecommender = () => {
  const [form, setForm] = useState({
    subject: '',
    budget: '',
    preference: '',
    favoriteAuthor: '',
    language: '',
    level: '',
  });

  const [recommendation, setRecommendation] = useState('');
  const [localBooks, setLocalBooks] = useState([]);
  const [matchedBooks, setMatchedBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setLocalBooks(storedBooks);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post('http://localhost:5000/api/ai/book', form);
    setRecommendation(res.data.response);

    const keywords = form.subject.toLowerCase().split(' ');
    const matches = localBooks.filter(book =>
      keywords.some(word =>
        book.title.toLowerCase().includes(word) || book.author.toLowerCase().includes(word)
      )
    );
    setMatchedBooks(matches);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">📚 Smart Book Recommender</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">📘 Subject / Topic</label>
            <input
              name="subject"
              placeholder="e.g. novel, sci-fi, motivation"
              value={form.subject}
              onChange={handleChange}
              className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">💸 Budget (in ₹)</label>
            <input
              name="budget"
              type="number"
              placeholder="e.g. 100, 500"
              value={form.budget}
              onChange={handleChange}
              className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">📖 Reading Preference</label>
            <input
              name="preference"
              placeholder="e.g. fiction, beginner, spiritual"
              value={form.preference}
              onChange={handleChange}
              className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">👤 Favorite Author or Book</label>
            <input
              name="favoriteAuthor"
              placeholder="e.g. J.K. Rowling, Atomic Habits"
              value={form.favoriteAuthor}
              onChange={handleChange}
              className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">🌍 Preferred Language</label>
              <select
                name="language"
                value={form.language}
                onChange={handleChange}
                className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Any">Any</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">📚 Reading Level</label>
              <select
                name="level"
                value={form.level}
                onChange={handleChange}
                className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
          >
            Get Book Suggestions
          </button>
        </form>

        {recommendation && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">📖 AI Suggestions:</h2>
            <p className="whitespace-pre-line bg-blue-50 p-4 rounded text-gray-700">{recommendation}</p>
          </div>
        )}

        {matchedBooks.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">🛒 Available in our Bookstore:</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {matchedBooks.map((book, i) => (
                <div key={i} className="border p-3 rounded bg-white shadow-sm">
                  <img src={book.image} alt={book.title} className="w-full h-40 object-cover rounded mb-2" />
                  <h3 className="font-bold text-lg">{book.title}</h3>
                  <p className="text-sm text-gray-600">{book.author}</p>
                  <p className="text-sm text-pink-600 font-medium">₹{book.price}</p>
                  <a
                    href="/bookstore"
                    className="inline-block mt-2 text-blue-600 hover:underline"
                  >
                    View in Bookstore →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookRecommender;
