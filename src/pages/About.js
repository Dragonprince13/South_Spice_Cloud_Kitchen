import React from "react";

export default function About() {
  return (
    <section className="max-w-3xl mx-auto text-center py-16 px-4 bg-gradient-to-b from-white to-green-50 rounded-lg shadow-md mt-8">
      {/* About Image */}
      <img
        src="/about-kitchen.jpg"
        alt="Our Kitchen"
        className="w-full max-w-xl rounded-3xl shadow-lg mb-8 object-cover h-56 md:h-72 mx-auto"
        style={{ objectPosition: 'center' }}
      />
      {/* Decorative SVG */}
      <div className="mb-6 flex justify-center">
        <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="40" fill="#22c55e" fillOpacity="0.08"/>
          <path d="M40 24c-7 0-12 5-12 12 0 6 5 11 12 11s12-5 12-11c0-7-5-12-12-12zm0 19c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z" fill="#22c55e"/>
        </svg>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-4 drop-shadow">About Us</h2>
      <p className="text-lg md:text-xl text-gray-700 mb-4">
        South Spice Cloud Kitchen was born from a passion for authentic South Indian flavors. Our mission is to bring the rich culinary heritage of the South to your doorstep, using only the freshest ingredients and traditional recipes.
      </p>
      <p className="text-gray-600 mb-2">
        We specialize in a wide variety of biryanis, starters, sweets, and drinks, all prepared in a hygienic, cloud kitchen environment. Whether you crave a spicy biryani or a sweet kheer, we have something for everyone!
      </p>
      <p className="text-gray-600">
        Experience the taste of home, delivered with love and care. Thank you for choosing us for your South Indian food cravings!
      </p>
    </section>
  );
} 