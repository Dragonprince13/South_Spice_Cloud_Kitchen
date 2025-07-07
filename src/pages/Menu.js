import React, { useState } from "react";
import { useCart } from "../CartContext";

const menu = {
  Biryanis: [
    { name: "Hyderabadi Chicken Biryani", desc: "Aromatic basmati rice with tender chicken and spices." },
    { name: "Veg Dum Biryani", desc: "Fragrant rice with mixed vegetables and herbs." },
    { name: "Mutton Biryani", desc: "Juicy mutton pieces cooked with flavorful rice." },
  ],
  "Non-Veg Starters": [
    { name: "Chicken 65", desc: "Spicy deep-fried chicken bites." },
    { name: "Andhra Chilli Chicken", desc: "Fiery chicken starter with South Indian spices." },
    { name: "Fish Fry", desc: "Crispy fried fish with a tangy masala coating." },
  ],
  "Veg Starters": [
    { name: "Paneer 65", desc: "Crispy paneer cubes tossed in spicy sauce." },
    { name: "Gobi Manchurian", desc: "Cauliflower florets in Indo-Chinese sauce." },
    { name: "Medu Vada", desc: "Crispy lentil doughnuts, a classic snack." },
  ],
  Sweets: [
    { name: "Kheer", desc: "Creamy rice pudding with cardamom and nuts." },
    { name: "Gulab Jamun", desc: "Soft milk balls soaked in sugar syrup." },
  ],
  Drinks: [
    { name: "Cola", desc: "Chilled fizzy cola drink." },
    { name: "Sprite", desc: "Refreshing lemon-lime soda." },
    { name: "Mango Juice", desc: "Sweet and pulpy mango juice." },
    { name: "Lassi", desc: "Traditional yogurt-based drink." },
  ],
};

const categoryImages = {
  Biryanis: "/biryani.jpg",
  "Non-Veg Starters": "/starters.jpg",
  "Veg Starters": "/starters.jpg",
  Sweets: "/sweets.jpg",
  Drinks: "/drinks.jpg",
};

export default function Menu() {
  const { addToCart } = useCart();
  const [added, setAdded] = useState("");

  function handleAdd(item) {
    addToCart(item);
    setAdded(item.name);
    setTimeout(() => setAdded(""), 1000);
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="flex justify-center mb-8">
        <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="40" fill="#22c55e" fillOpacity="0.08"/>
          <path d="M40 24c-7 0-12 5-12 12 0 6 5 11 12 11s12-5 12-11c0-7-5-12-12-12zm0 19c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z" fill="#22c55e"/>
        </svg>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-8 text-center drop-shadow">Our Menu</h2>
      {Object.entries(menu).map(([category, items]) => (
        <div key={category} className="mb-12">
          <div className="flex justify-center mb-4">
            <img
              src={categoryImages[category]}
              alt={category}
              className="w-full max-w-xs h-40 object-cover rounded-2xl shadow-md border-4 border-green-100"
              style={{ objectPosition: 'center' }}
            />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{category}</h3>
          <ul className="grid md:grid-cols-2 gap-6">
            {items.map((item) => (
              <li key={item.name} className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-xl transition-all duration-200 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-bold text-lg text-green-700 mb-1">{item.name}</div>
                  <div className="text-gray-600 mb-2">{item.desc}</div>
                </div>
                <button
                  onClick={() => handleAdd(item)}
                  className={`ml-0 md:ml-4 mt-2 md:mt-0 px-4 py-2 rounded-full font-semibold text-white shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 ${added === item.name ? 'bg-green-400' : 'bg-green-700 hover:bg-green-800'}`}
                  disabled={added === item.name}
                >
                  {added === item.name ? 'Added!' : 'Add to Cart'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
} 