import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBookPage() {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    price: "",
    image: "",
    coverType: "CoverType",
    purpose: "Sell or Lend"
  });
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewBook({ ...newBook, image: reader.result });
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddBook = () => {
    const { title, author, price, image } = newBook;
    if (title && author && price && image) {
      const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
      const updatedBooks = [
        ...storedBooks,
        {
          ...newBook,
          price: parseInt(newBook.price),
          rating: 4.0,
          popularity: 50
        }
      ];
      localStorage.setItem("books", JSON.stringify(updatedBooks));
      alert("Book added successfully!");
      setNewBook({
        title: "",
        author: "",
        price: "",
        image: "",
        coverType: "CoverType",
        purpose: "Sell or Lend"
      });
      setPreviewImage(null);
      navigate("/bookstore");
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
            type="number"
            name="price"
            placeholder="Price"
            value={newBook.price}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded text-lg"
          />

          {/* Cover Type Dropdown */}
          <select
            name="coverType"
            value={newBook.coverType}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded text-lg"
          >
            <option value="Paperback">Paperback</option>
            <option value="Hardcover">Hardcover</option>
          </select>

          {/* Sell or Lend Dropdown */}
          <select
            name="purpose"
            value={newBook.purpose}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded text-lg"
          >
            <option value="Sell">Sell</option>
            <option value="Lend">Lend</option>
          </select>

          {/* Image Upload */}
          <div className="space-y-2">
            <label className="block font-medium text-gray-700">Upload Book Cover</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full text-sm"
            />
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="w-32 h-48 object-cover rounded-lg mt-2"
              />
            )}
          </div>

          <button
            onClick={handleAddBook}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded text-lg hover:bg-blue-700 transition"
          >
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
}
