import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../CartContext";
import emailjs from '@emailjs/browser';

// EmailJS integration for sending orders via email
const sendOrderEmail = async (orderData) => {
  try {
    // You'll need to set up EmailJS account and replace these with your actual IDs
    const serviceID = 'YOUR_EMAILJS_SERVICE_ID';
    const templateID = 'YOUR_EMAILJS_TEMPLATE_ID';
    const userID = 'YOUR_EMAILJS_USER_ID';
    
    const templateParams = {
      to_email: 'orders@southspicecloud.com', // Your business email
      customer_name: orderData.customerDetails.name,
      customer_email: orderData.customerDetails.email,
      customer_phone: orderData.customerDetails.phone || 'Not provided',
      order_number: orderData.orderNumber,
      order_date: new Date().toLocaleString(),
      order_items: orderData.orderItems.map(item => 
        `${item.name} x${item.qty} (${item.desc})`
      ).join('\n'),
      total_items: orderData.orderItems.reduce((sum, item) => sum + item.qty, 0),
      order_summary: `Order #${orderData.orderNumber} - ${orderData.customerDetails.name} - ${orderData.orderItems.reduce((sum, item) => sum + item.qty, 0)} items`
    };

    // Uncomment this when you set up EmailJS
    // await emailjs.send(serviceID, templateID, templateParams, userID);
    
    console.log('Order email would be sent with:', templateParams);
    return true;
  } catch (error) {
    console.error('Failed to send order email:', error);
    return false;
  }
};

// Order Receipt Component
function OrderReceipt({ customerDetails, orderItems, orderNumber }) {
  const totalItems = orderItems.reduce((sum, item) => sum + item.qty, 0);
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden print:shadow-none">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-400 text-white p-6 text-center">
        <h1 className="text-3xl font-bold mb-2">South Spice Cloud Kitchen</h1>
        <p className="text-green-100 text-lg">Authentic South Indian Cuisine</p>
        <p className="text-green-100 text-sm mt-2">Bringing the taste of home to your doorstep</p>
      </div>

      {/* Order Details */}
      <div className="p-6 space-y-6">
        {/* Order Info */}
        <div className="flex justify-between items-start border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Receipt</h2>
            <p className="text-gray-600">Order #: {orderNumber}</p>
            <p className="text-gray-600">Date: {currentDate}</p>
          </div>
          <div className="text-right">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
              Order Confirmed
            </div>
          </div>
        </div>

        {/* Customer Details */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Customer Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <p className="font-semibold text-gray-800">{customerDetails.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-semibold text-gray-800">{customerDetails.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="font-semibold text-gray-800">{customerDetails.phone || 'Not provided'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Order Status</p>
              <p className="font-semibold text-green-600">Pending Confirmation</p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-3">Ordered Items</h3>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-gray-700">
                <div className="col-span-5">Item</div>
                <div className="col-span-2 text-center">Qty</div>
                <div className="col-span-3 text-center">Price</div>
                <div className="col-span-2 text-right">Category</div>
              </div>
            </div>
            {orderItems.map((item, index) => {
              const itemPrice = parseFloat(item.price.replace('€', '')) || 0;
              const itemTotal = itemPrice * item.qty;
              return (
                <div key={index} className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-5">
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                    <div className="col-span-2 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-bold">
                        {item.qty}
                      </span>
                    </div>
                    <div className="col-span-3 text-center text-sm text-green-600 font-semibold">
                      {item.price} each<br/>
                      <span className="text-gray-600">€{itemTotal.toFixed(2)} total</span>
                    </div>
                    <div className="col-span-2 text-right text-sm text-gray-600">
                      {item.desc.replace('From ', '')}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-bold text-gray-800">Total Items</p>
              <p className="text-2xl font-bold text-green-600">{totalItems}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Total Value</p>
              <p className="text-xl font-bold text-green-600">€{orderItems.reduce((sum, item) => {
                const price = parseFloat(item.price.replace('€', '')) || 0;
                return sum + (price * item.qty);
              }, 0).toFixed(2)}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Estimated Delivery</p>
              <p className="font-semibold text-gray-800">30-45 minutes</p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center py-6 border-t border-gray-200">
          <blockquote className="italic text-gray-600 text-lg">
            "Food is not just eating energy. It's an experience."
          </blockquote>
          <p className="text-sm text-gray-500 mt-2">- Guy Fieri</p>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-4">
          <p>Thank you for choosing South Spice Cloud Kitchen!</p>
          <p className="mt-1">We'll contact you shortly to confirm your order.</p>
          <p className="mt-2">
            <strong>Contact:</strong> +91 99999 99999 | 
            <strong> Email:</strong> info@southspicecloud.com
          </p>
        </div>

        {/* Print Button */}
        <div className="text-center pt-4 print:hidden">
          <button
            onClick={handlePrint}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-200"
          >
            📄 Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const location = useLocation();
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [orderNumber] = useState(() => `SS${Date.now().toString().slice(-6)}`);

  // Pre-fill message with order details if provided
  useEffect(() => {
    if (location.state && location.state.orderDetails) {
      setForm((f) => ({ ...f, message: location.state.orderDetails }));
    }
  }, [location.state]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    
    // If there are items in cart, send order email
    if (cart.length > 0) {
      const orderData = {
        customerDetails: form,
        orderItems: cart,
        orderNumber: orderNumber
      };
      
      await sendOrderEmail(orderData);
    }
    
    clearCart();
  }

  // If order was submitted and cart had items, show receipt
  if (submitted && cart.length > 0) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4">
        <OrderReceipt 
          customerDetails={form}
          orderItems={cart}
          orderNumber={orderNumber}
        />
      </div>
    );
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
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border-2 border-green-200 rounded p-3 focus:border-green-500 focus:outline-none text-lg"
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
            {cart.length > 0 ? 'Place Order' : 'Send Message'}
          </button>
        </form>
      )}
      <div className="mt-8 text-center text-gray-600">
        Or email us at <a href="mailto:info@southspicecloud.com" className="text-green-700 underline">info@southspicecloud.com</a>
      </div>
    </section>
  );
} 