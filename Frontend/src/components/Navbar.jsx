import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Sun, Moon } from 'lucide-react';
// Adjust the path to your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Instructor', path: '/instructor' },
  ];

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <img src= '../assets/logo-SkillXhange.png' alt="SkillXchange Logo" className="h-10 w-auto" />
          </Link>

          <div className="hidden md:flex space-x-8 text-white font-medium">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="hover:text-gray-300 transition duration-300">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={toggleDarkMode}>
              {darkMode ? <Sun className="text-white w-6 h-6" /> : <Moon className="text-white w-6 h-6" />}
            </button>
            <Link to="/profile">
              <User className="text-white w-6 h-6 hover:text-gray-300 transition duration-300" />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
              {isOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 py-2' : 'max-h-0 py-0'} px-4 backdrop-blur-md bg-gray-900/90 text-white`}>
        {[...navLinks, { name: 'Profile', path: '/profile' }].map((link) => (
          <Link key={link.path} to={link.path} className="block py-2 hover:text-gray-300 transition duration-300">
            {link.name}
          </Link>
        ))}
        <button onClick={toggleDarkMode} className="block py-2 w-full text-left">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
