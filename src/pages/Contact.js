import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../CartContext";

export default function Contact() {
  const location = useLocation();
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Pre-fill message with order details if provided
  useEffect(() => {
    if (location.state && location.state.orderDetails) {
      setForm((f) => ({ ...f, message: location.state.orderDetails }));
    }
  }, [location.state]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  }

  return (
    <section className="max-w-xl mx-auto py-16 px-4 bg-gradient-to-b from-white to-green-50 rounded-lg shadow-md mt-8">
      {/* Contact Image */}
      <img
        src="/contact-friendly.jpg"
        alt="Contact us"
        className="w-full max-w-md rounded-3xl shadow-lg mb-8 object-cover h-40 md:h-56 mx-auto"
        style={{ objectPosition: 'center' }}
      />
      <div className="flex justify-center mb-6">
        <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="40" fill="#22c55e" fillOpacity="0.08"/>
          <path d="M40 28c-6 0-10 4-10 10 0 5 4 9 10 9s10-4 10-9c0-6-4-10-10-10zm0 16c-4 0-7-3-7-7s3-7 7-7 7 3 7 7-3 7-7 7z" fill="#22c55e"/>
        </svg>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-4 text-center drop-shadow">Contact / Order</h2>
      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded text-center font-semibold shadow mb-4 animate-fade-in">
          Thank you for reaching out! We will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white shadow rounded-xl p-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border-2 border-green-200 rounded p-3 focus:border-green-500 focus:outline-none text-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border-2 border-green-200 rounded p-3 focus:border-green-500 focus:outline-none text-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message or Order Details"
            value={form.message}
            onChange={handleChange}
            className="w-full border-2 border-green-200 rounded p-3 focus:border-green-500 focus:outline-none text-lg"
            rows={4}
            required
          />
          <button type="submit" className="bg-gradient-to-r from-green-600 to-green-400 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:from-green-700 hover:to-green-500 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200">
            Send
          </button>
        </form>
      )}
      <div className="mt-8 text-center text-gray-600">
        Or email us at <a href="mailto:info@southspicecloud.com" className="text-green-700 underline">info@southspicecloud.com</a>
      </div>
    </section>
  );
} 