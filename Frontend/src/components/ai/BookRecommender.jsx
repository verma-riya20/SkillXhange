import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookRecommender = () => {
  const [form, setForm] = useState({ subject: '', budget: '', preference: '' });
  const [recommendation, setRecommendation] = useState('');
  const [localBooks, setLocalBooks] = useState([]);
  const [matchedBooks, setMatchedBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setLocalBooks(storedBooks);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/ai/book', form);
    setRecommendation(res.data.response);

    // Basic matching: match title or subject keywords
    const words = form.subject.toLowerCase().split(' ');
    const matches = localBooks.filter(book =>
      words.some(word => book.title.toLowerCase().includes(word) || book.author.toLowerCase().includes(word))
    );
    setMatchedBooks(matches);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">📚 Smart Book Recommender</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="subject"
            placeholder="Subject / Topic"
            value={form.subject}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />
          <input
            name="budget"
            placeholder="Budget (in ₹)"
            value={form.budget}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />
          <input
            name="preference"
            placeholder="Your preferences (e.g. beginner, fiction)"
            value={form.preference}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
          >
            Get Book Suggestions
          </button>
        </form>

        {recommendation && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">📖 AI Suggestions:</h2>
            <p className="whitespace-pre-line bg-blue-50 p-4 rounded text-gray-700">{recommendation}</p>
          </div>
        )}

        {matchedBooks.length > 0 && (
          <div className="mt-6">
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
