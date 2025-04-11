import React from "react";
import { motion } from "framer-motion";
import BookstorePage from "./BookStorePage";

const Books = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/book.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 "></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
        >
          Sell. Buy. Lend. Borrow
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
        >
          A student-powered book exchange platform that saves money, reduces waste, and keeps learning accessible.
        </motion.p>
        <motion.button
         onClick={() => window.location.href = "/bookstore"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md transition"
        >
          Get Started
        </motion.button>
      </div>
      <div className="fixed bottom-6 right-6 z-50 animate-bounce">
  <img
   onClick={() => window.open('http://localhost:5173/ai/book-recommend')}
    src="/images/chatbot.svg"
    alt="AI Chatbot"
    className="w-24 h-24 rounded-full shadow-lg cursor-pointer hover:scale-105 transition"
    title="Need help? Chat with us!"
  />
</div>

    </div>
    
  );
};

export default Books;
