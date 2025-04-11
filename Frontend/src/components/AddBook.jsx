import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBookPage() {
  const [newBook, setNewBook] = useState({ title: "", author: "", price: "", image: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleAddBook = () => {
    if (newBook.title && newBook.author && newBook.price && newBook.image) {
      const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
      const updatedBooks = [
        ...storedBooks,
        {
          ...newBook,
          price: parseInt(newBook.price),
          rating: 4.0,
          popularity: 50,
          coverType: "Paperback"
        }
      ];
      localStorage.setItem("books", JSON.stringify(updatedBooks));
      alert("Book added successfully!");
      setNewBook({ title: "", author: "", price: "", image: "" });
      navigate("/bookstore"); // 👈 Redirect to bookstore page
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: "url('/images/bg.jpeg')" }}
      ></div>
      <div className="relative z-10 bg-white bg-opacity-90 p-12 rounded-2xl shadow-lg w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Add a New Book</h1>
        <div className="space-y-6">
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={newBook.title}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded text-lg"
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={newBook.author}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded text-lg"
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={newBook.price}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded text-lg"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newBook.image}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded text-lg"
          />
          <button
            onClick={handleAddBook}
            className="w-full bg-blue-500 text-white px-6 py-3 rounded text-lg hover:bg-blue-600 transition"
          >
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
}
