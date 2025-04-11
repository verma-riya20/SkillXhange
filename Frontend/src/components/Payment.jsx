import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [paymentInfo, setPaymentInfo] = useState({ name: "", card: "", expiry: "", cvv: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    const sum = storedCart.reduce((acc, item) => acc + parseFloat(item.price), 0);
    setTotal(sum);
  }, []);

  const handleChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handlePayNow = () => {
    if (Object.values(paymentInfo).every((v) => v !== "")) {
      alert("Payment Successful! 🎉");
      localStorage.setItem("cart", JSON.stringify([]));
      navigate("/");
    } else {
      alert("Please fill in all payment fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c637b] via-[#e2b091] to-[#f9f1e9] flex items-center justify-center px-4">
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Payment Details</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
        {cart.map((item, index) => (
          <div key={index} className="flex justify-between py-1 border-b">
            <span>{item.title}</span>
            <span>₹{item.price}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold text-lg mt-4">
          <span>Total</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </div>
      </div>

      <div className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Cardholder Name"
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded text-lg"
        />
        <input
          name="card"
          type="text"
          placeholder="Card Number"
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded text-lg"
        />
        <div className="flex space-x-4">
          <input
            name="expiry"
            type="text"
            placeholder="MM/YY"
            onChange={handleChange}
            className="w-1/2 px-4 py-3 border rounded text-lg"
          />
          <input
            name="cvv"
            type="text"
            placeholder="CVV"
            onChange={handleChange}
            className="w-1/2 px-4 py-3 border rounded text-lg"
          />
        </div>
        <button
          onClick={handlePayNow}
          className="w-full bg-green-600 text-white py-3 rounded text-xl hover:bg-green-700"
        >
          Pay Now
        </button>
      </div>
    </div>
    </div>
  );
}
