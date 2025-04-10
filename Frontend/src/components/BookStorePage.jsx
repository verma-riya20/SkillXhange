import React from "react";
import { Search } from "lucide-react";

const books = [
  {
    title: "Cape-Cod Stories",
    author: "Hans Christian Andersen",
    price: "$39.00",
    image: "/images/cod.jpg"
  },
  {
    title: "Broken Silence",
    author: "J.A. Templeton",
    price: "$30.00",
    image: "/images/ilence.webp"
  },
  {
    title: "A Thousand Seed",
    author: "Anonna Sultana",
    price: "$25.00",
    image: "/images/sun.jpg"
  }
];

export default function BookstorePage() {
  return (
    <div className="p-6">
      {/* Header Banner */}
      <div className="bg-purple-100 rounded-2xl p-8 mb-10 flex items-center justify-between">
        <div className="px-20">
          <h2 className="text-4xl font-bold mb-4 ">40% Discount On Books By Susan Merrill</h2>
          <button className="bg-pink-500 text-white px-3 py-2 rounded hover:bg-pink-600 transition">Shop Now</button>
        </div>
        <img src="/images/bookstore.jpg" alt="Books" className="px-20 rounded-xl bg-cover" />
      </div>

      {/* Services */}
      <div className="grid grid-cols-3 gap-4 text-center mb-8">
        <div>
          <h3 className="font-semibold">Free Shipping</h3>
          <p className="text-sm">Select between a wide range of books and media.</p>
        </div>
        <div>
          <h3 className="font-semibold">Fast Delivery</h3>
          <p className="text-sm">Enjoy free shipping and our fast delivery service.</p>
        </div>
        <div>
          <h3 className="font-semibold">Discounted Free</h3>
          <p className="text-sm">Get discount on our most top-rated product every Sunday.</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex gap-4 items-center mb-10">
        <input type="text" placeholder="All Category" className="border px-3 py-2 rounded w-full" />
        <input type="text" placeholder="All Author" className="border px-3 py-2 rounded w-full" />
        <button className="bg-pink-500 text-white px-20 py-2 max-w-full rounded flex items-center gap-2 hover:bg-pink-600 transition">
          <Search className="h-4 w-4 " /> Find Book
        </button>
      </div>

      {/* Popular Books */}
      <h2 className="text-xl font-bold mb-6">Popular Book</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div key={index} className="rounded-2xl shadow-md p-4 bg-white">
            <img src={book.image} alt={book.title} className="w-full h-auto rounded-lg mb-4" />
            <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{book.author}</p>
            <p className="text-pink-500 font-semibold mb-4">{book.price}</p>
            <button className="w-full bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}