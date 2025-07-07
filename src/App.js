import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { CartProvider, useCart } from "./CartContext";
import Cart from "./pages/Cart";

function StickyCartButton() {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const navigate = useNavigate();
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    if (cartCount > 0) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [cartCount]);
  return (
    <button
      onClick={() => navigate("/cart")}
      className={`fixed z-50 bottom-6 right-6 bg-green-700 hover:bg-green-800 text-white rounded-full shadow-xl flex items-center px-6 py-4 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-200 text-lg font-bold ${animate ? 'animate-bounce' : ''}`}
      aria-label="View Cart"
      style={{ boxShadow: "0 4px 24px rgba(34,197,94,0.18)", minWidth: 80 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L6.6 9.75m-1.407-4.478h13.228c.885 0 1.542.86 1.319 1.711l-1.347 4.856a1.25 1.25 0 01-1.212.933H8.217m-1.407-4.478L8.217 15.75m0 0a2.25 2.25 0 104.5 0m-4.5 0h4.5" />
      </svg>
      <span>Cart</span>
      {cartCount > 0 && (
        <span className="ml-2 bg-white text-green-700 text-sm rounded-full px-3 py-0.5 font-bold border border-green-700 shadow animate-pulse">{cartCount}</span>
      )}
    </button>
  );
}

function WhatsAppButton() {
  // Replace with your business WhatsApp number (in international format, e.g., 91XXXXXXXXXX for India)
  const phone = "919999999999";
  const message = encodeURIComponent("Hello! I have a question about South Spice Cloud Kitchen.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center px-4 py-3 md:px-5 md:py-3 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-200"
      aria-label="Chat on WhatsApp"
      style={{ boxShadow: "0 4px 24px rgba(34,197,94,0.15)" }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="currentColor" className="mr-2">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.828-2.205C13.41 27.597 14.686 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.18 0-2.337-.207-3.432-.615l-.245-.09-4.646 1.308 1.324-4.527-.16-.234C7.21 18.14 6.5 16.6 6.5 15c0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5zm5.07-7.75c-.277-.139-1.637-.809-1.89-.902-.253-.093-.437-.139-.62.14-.184.278-.71.902-.87 1.086-.16.185-.32.208-.597.07-.277-.139-1.17-.431-2.23-1.375-.824-.735-1.38-1.642-1.542-1.92-.16-.278-.017-.428.122-.566.126-.125.278-.326.417-.489.139-.163.185-.278.278-.463.093-.185.047-.347-.023-.486-.07-.139-.62-1.497-.85-2.05-.224-.54-.453-.466-.62-.475l-.528-.009c-.162 0-.425.06-.648.278-.223.217-.85.83-.85 2.02s.87 2.346.99 2.509c.122.163 1.71 2.61 4.145 3.557.58.199 1.032.318 1.385.407.582.147 1.112.126 1.53.077.467-.056 1.637-.669 1.87-1.316.232-.647.232-1.202.162-1.316-.07-.115-.253-.185-.53-.324z" />
      </svg>
      <span className="font-bold text-lg">WhatsApp</span>
    </a>
  );
}

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
          <StickyCartButton />
          <WhatsAppButton />
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