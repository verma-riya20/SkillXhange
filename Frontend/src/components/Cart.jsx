import React, { useEffect, useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <div className="bg-gradient-to-b from-[#1c637b] via-[#e2b091] to-[#f9f1e9]">
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {cartItems.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-md flex gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-36 object-cover rounded"
                />
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500">{item.author}</p>
                  <p className="text-pink-500 font-bold mb-2">₹{item.price}</p>
                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-right mt-4">
            <p className="text-xl font-bold">Total: ₹{totalPrice.toLocaleString("en-IN")}</p>
            <a href="/payment">
              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
             Proceed to Payment
              </button>
            </a>
            
           

          </div>
        </>
      )}
    </div>
    </div>
  );
}
