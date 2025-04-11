import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Search, Plus } from "lucide-react";

const initialBooks = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 200,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR819TtvIV0JJ5_Wzzfcnk3y2eXfPpamZmdbrg5ofv0Ydafpw_f",
    rating: 4.2,
    popularity: 100,
    coverType: "Hardcover"
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    price: 80,
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRFADq12xEBVFEIELEeq8A0PoqRp_UUrFjxfLEosw3IR5E8tzwv",
    rating: 4.5,
    popularity: 95,
    coverType: "Paperback"
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    price: 100,
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR-W_4DKzfvPOVZPfwHRn4OVbWYkTZRRT_F7QmPo8894_0QSzMG",
    rating: 4.1,
    popularity: 80,
    coverType: "Hardcover"
  },
  {
    title: "Who Moved My Cheese?",
    author: "Spencer Johnson",
    price: 250,
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3Hma0cJxc5jxy7Wi-pGT9HeIOzQ2L7PO9JRnat9XcT_JyhtY8",
    rating: 4.3,
    popularity: 90,
    coverType: "Hardcover"
  },
  {
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 300,
    image: "https://images.penguinrandomhouse.com/cover/9780593540480",
    rating: 4.6,
    popularity: 120,
    coverType: "Paperback"
  },
  {
    title: "The Child",
    author: "Fiona Barton",
    price: 220,
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSvygWX_b4vUUCGzgAMnBiX60zPmSRZiX2LYy4JVBoIu_qOmAVp",
    rating: 4.4,
    popularity: 110,
    coverType: "Hardcover"
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    price: 180,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxaG_KUYyx8LpEu5RkIlvoCYoB9S1sB8xEGBjfSTPyRDrxB0p",
    rating: 4.7,
    popularity: 130,
    coverType: "Paperback"
  },
  {
    title: "The Human Stain",
    author: "Philip Roth",
    price: 350,
    image: "https://books.google.co.in/books/publisher/content?id=YbtNDwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72S1tG75ArnUOTlbVbWIkiYFDj6ixOFgjtlKa_2997KCqZKm51MQEKmxvWG1LYAqk7XMY5nQu_2tKjA46eGAbqE6Y6pnGMPZsevwtQ0bc2x-AVQlfCveTvTHD6OsUzyuCjnbW7S",
    rating: 4.8,
    popularity: 150,
    coverType: "Hardcover"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 200,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG4DIZ8zeBMCj1s7gRvHEAliiPmGukocfFUr8wElGeM73oZ2SY",
    rating: 4.5,
    popularity: 140,
    coverType: "Paperback"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    price: 280,
    image: "https://books.google.com/books/about/Atomic_Habits.html?id=lFhbDwAAQBAJ&source=kp_cover",
    rating: 4.9,
    popularity: 160,
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
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const existingTitles = new Set(storedBooks.map((b) => b.title));

    const mergedBooks = [
      ...storedBooks,
      ...initialBooks.filter((book) => !existingTitles.has(book.title))
    ];
  
    setBooks(mergedBooks);
    setCartItems(storedCart);
  
    localStorage.setItem("books", JSON.stringify(mergedBooks));
  }, []);
  
 
  const isInCart = (book) => {
    return cartItems.some((item) => item.title === book.title);
  };
  

  const handleAddToCart = (book) => {
    const newCart = [...cartItems, book];
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  
  

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
            <button className="bg-[#1e5e75] text-white px-3 py-2 rounded hover:bg-[#3a758a] transition">
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
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 auto-rows-fr">
        {filteredBooks.map((book, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition flex flex-col justify-between h-full min-h-[400px]"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-[180px] object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
            <p className="text-sm text-gray-500 mb-1 truncate max-w-full">{book.author}</p>
            <p className="text-sm text-gray-400 mb-1">{book.coverType}</p>
            <p className="text-yellow-600 font-semibold mb-1">⭐ {book.rating}</p>
            <p className="text-[#1e5e75] font-semibold mb-4">
              ₹{book.price.toLocaleString("en-IN")}
            </p>
            {isInCart(book) ? (
            <button
             disabled
             className="w-full bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed" >
              Added to Cart
              </button>
             ) : (
             <button
               onClick={() => handleAddToCart(book)}
               className="w-full bg-[#1e5e75] text-white px-4 py-2 rounded hover:bg-[#3a758a] transition" >
                 Add To Cart
               </button>
            )}


          </div>
        ))}
      </div>
    </div>
  );
}