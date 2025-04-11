import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Search, Plus } from "lucide-react";

const initialBooks = [
  {
    title: "Cape-Cod Stories",
    author: "Hans Christian Andersen",
    price: 200,
    image: "/images/cod.jpg",
    rating: 4.2,
    popularity: 100,
    coverType: "Hardcover"
  },
  {
    title: "Broken Silence",
    author: "J.A. Templeton",
    price: 80,
    image: "/images/ilence.webp",
    rating: 4.5,
    popularity: 95,
    coverType: "Paperback"
  },
  {
    title: "A Thousand Seed",
    author: "Anonna Sultana",
    price: 100,
    image: "/images/sun.jpg",
    rating: 4.1,
    popularity: 80,
    coverType: "Hardcover"
  }
];

export default function BookstorePage() {
  const location = useLocation(); // Triggers effect on return
  const [books, setBooks] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [sortBy, setSortBy] = useState("priceAsc");
  const [filterCover, setFilterCover] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    const allBooks = [...initialBooks, ...storedBooks];
    setBooks(allBooks);
  }, [location]);

  const filteredBooks = books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
        book.author.toLowerCase().includes(searchAuthor.toLowerCase()) &&
        (filterCover === "" || book.coverType === filterCover) &&
        book.price >= priceRange[0] &&
        book.price <= priceRange[1]
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "priceAsc":
          return a.price - b.price;
        case "priceDesc":
          return b.price - a.price;
        case "alphabetical":
          return a.title.localeCompare(b.title);
        case "rating":
          return b.rating - a.rating;
        case "popularity":
          return b.popularity - a.popularity;
        default:
          return 0;
      }
    });

  return (
    <div className="p-6">
      {/* Header Banner */}
      <div className="bg-[#f1decd] rounded-2xl p-8 mb-10 flex items-center justify-between">
        <div className="px-20">
          <h2 className="text-4xl font-bold mb-4">
            Give Old Books a New Life – Sell, Lend & Borrow with Ease
          </h2>
          <a href="/addbook">
            <button className="bg-[#1e5e75] text-white px-3 py-2 rounded hover:bg-pink-600 transition">
              Add Your Book
            </button>
          </a>
        </div>
        <img
          src="/images/bookstore.jpg"
          alt="Books"
          className="px-20 rounded-xl bg-cover"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        <input
          type="text"
          placeholder="Search by Title"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Search by Author"
          value={searchAuthor}
          onChange={(e) => setSearchAuthor(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="priceAsc">Sort by Price: Low to High</option>
          <option value="priceDesc">Sort by Price: High to Low</option>
          <option value="alphabetical">Sort by Title (A-Z)</option>
          <option value="rating">Sort by Rating</option>
          <option value="popularity">Sort by Popularity</option>
        </select>
        <select
          value={filterCover}
          onChange={(e) => setFilterCover(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">All Cover Types</option>
          <option value="Paperback">Paperback</option>
          <option value="Hardcover">Hardcover</option>
        </select>
      </div>

      {/* Book Listings */}
      <h2 className="text-xl font-bold mb-6">Available Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBooks.map((book, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
            <p className="text-sm text-gray-500 mb-1">{book.author}</p>
            <p className="text-sm text-gray-400 mb-1">{book.coverType}</p>
            <p className="text-yellow-600 font-semibold mb-1">⭐ {book.rating}</p>
            <p className="text-pink-500 font-semibold mb-4">
              ₹{book.price.toLocaleString("en-IN")}
            </p>
            <button className="w-full bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
