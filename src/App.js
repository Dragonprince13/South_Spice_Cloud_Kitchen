import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { CartProvider, useCart } from "./CartContext";
import Cart from "./pages/Cart";

function NavBar({ menuOpen, setMenuOpen }) {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center relative">
      <div className="text-2xl font-bold text-green-700">South Spice Cloud Kitchen</div>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4 items-center">
        <Link to="/" className="hover:text-green-700">Home</Link>
        <Link to="/menu" className="hover:text-green-700">Menu</Link>
        <Link to="/about" className="hover:text-green-700">About</Link>
        <Link to="/contact" className="hover:text-green-700">Contact</Link>
        <Link to="/cart" className="relative ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-green-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L6.6 9.75m-1.407-4.478h13.228c.885 0 1.542.86 1.319 1.711l-1.347 4.856a1.25 1.25 0 01-1.212.933H8.217m-1.407-4.478L8.217 15.75m0 0a2.25 2.25 0 104.5 0m-4.5 0h4.5" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full px-2 py-0.5 font-bold">{cartCount}</span>
          )}
        </Link>
      </div>
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-green-700 mb-1 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-green-700 mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-green-700 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg flex flex-col items-start p-4 space-y-2 z-50 md:hidden animate-fade-in">
          <Link to="/" className="hover:text-green-700 w-full" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/menu" className="hover:text-green-700 w-full" onClick={() => setMenuOpen(false)}>Menu</Link>
          <Link to="/about" className="hover:text-green-700 w-full" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="hover:text-green-700 w-full" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/cart" className="hover:text-green-700 w-full flex items-center" onClick={() => setMenuOpen(false)}>
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="ml-2 bg-green-600 text-white text-xs rounded-full px-2 py-0.5 font-bold">{cartCount}</span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 font-sans">
          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <main className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App; 