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
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-4 drop-shadow">About South Spice Cloud Kitchen</h2>
      <p className="text-lg md:text-xl text-gray-700 mb-6">
        <span className="font-semibold text-green-700">Welcome to South Spice Cloud Kitchen!</span> <br />
        We are more than just a kitchen—we are a celebration of South Indian flavors, tradition, and hospitality. Our journey began with a simple dream: to bring the authentic taste of home-cooked South Indian food to your doorstep, wherever you are.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Every dish at South Spice is crafted with love, using fresh ingredients and time-honored recipes passed down through generations. From our aromatic biryanis and hearty curries to our refreshing drinks and sweet treats, each bite is a tribute to the vibrant culinary heritage of the South.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Whether you're craving a comforting meal after a long day, planning a family gathering, or simply exploring new flavors, we promise an experience that's warm, welcoming, and unforgettable. Our team is passionate about sharing the joy of good food and great company with every customer.
      </p>
      <p className="text-lg text-green-700 font-semibold mb-2">
        Thank you for making us a part of your story. We can't wait to serve you!
      </p>
      <p className="text-gray-500 italic">— The South Spice Cloud Kitchen Family</p>
    </section>
  );
} 