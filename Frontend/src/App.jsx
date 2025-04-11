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
import MentorAssistant from './components/ai/MentorAssistant';
import BookRecommender from './components/ai/BookRecommender';
import BookChat from './components/ai/BookChat';
import PrivateRoute from './components/PrivateRoute';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
    

      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tutorprofile" element={<PrivateRoute> <TutorProfile /> </PrivateRoute>} />
        <Route path="/instructor" element={<PrivateRoute> <Instructor /> </PrivateRoute>} />
        
        <Route path="/register-tutor" element={<PrivateRoute> <RegisterTutor /> </PrivateRoute>} />
      
      
        <Route path="/addbook" element={<PrivateRoute> <AddBook /> </PrivateRoute>} />
        <Route path="/books" element={<Books />} />
        <Route path="/bookstore" element={ <BookStorePage />  } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<PrivateRoute> <CartPage /> </PrivateRoute>} />
        <Route path="/payment" element={<PrivateRoute> <PaymentPage /> </PrivateRoute>} />
        {/* AI Features */}
        <Route path="/ai/mentor" element={<PrivateRoute> <MentorAssistant /> </PrivateRoute>} />
        <Route path="/ai/book-recommend" element={<PrivateRoute> <BookRecommender /> </PrivateRoute>} />
        <Route path="/ai/book-chat" element={<PrivateRoute> <BookChat /> </PrivateRoute>} />
      </Routes>
    </>
  )
}

export default App;
