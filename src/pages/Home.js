import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-b from-green-50 to-white min-h-[70vh]">
      {/* Hero Image */}
      <img
        src="/hero-food.jpg"
        alt="Delicious South Indian food"
        className="w-full max-w-2xl rounded-3xl shadow-lg mb-8 object-cover h-64 md:h-80"
        style={{ objectPosition: 'center' }}
      />
      {/* Decorative SVG */}
      <div className="mb-6">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="40" fill="#22c55e" fillOpacity="0.1"/>
          <path d="M40 20c-8 0-14 6-14 14 0 7 6 13 14 13s14-6 14-13c0-8-6-14-14-14zm0 24c-6 0-11-5-11-11s5-11 11-11 11 5 11 11-5 11-11 11z" fill="#22c55e"/>
          <ellipse cx="40" cy="54" rx="18" ry="6" fill="#22c55e" fillOpacity="0.15"/>
        </svg>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4 drop-shadow">Welcome to South Spice Cloud Kitchen</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
        Experience the authentic taste of South India! Enjoy a wide variety of biryanis, veg & non-veg starters, sweets, and refreshing drinks—all from the comfort of your home.
      </p>
      <Link to="/menu" className="bg-gradient-to-r from-green-600 to-green-400 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:from-green-700 hover:to-green-500 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200">Explore Our Menu</Link>
    </section>
  );
} 