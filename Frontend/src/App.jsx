import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import TutorProfile from './components/Tutorprofile';
import Instructor from './components/Instructor';
import RegisterTutor from './components/RegisterTutor';
import BookStorePage from './components/BookStorePage';
import Books from './components/Books';
import AddBook from './components/AddBook';
import AboutPage from './components/About';
import CartPage from './components/Cart';
import PaymentPage from './components/Payment';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tutorprofile" element={<TutorProfile />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/register-tutor" element={<RegisterTutor />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/books" element={<Books />} />
        <Route path="/bookstore" element={<BookStorePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </>
  )
}

export default App;
