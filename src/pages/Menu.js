import React, { useRef, useState } from "react";
import { useCart } from "../CartContext";

const menu = [
  // Starters
  {
    icon: "🥗",
    category: "Veg Starters",
    description: "Delight in our vegetarian starters, bursting with flavor and perfect for every occasion.",
    items: [
      { name: "Paneer 65", price: "€8.50" },
      { name: "Mushroom Pepper", price: "€7.50" },
      { name: "Mushroom Creamy", price: "€8.00" },
      { name: "Soya 65", price: "€7.00" },
      { name: "Gobi 65", price: "€6.50" },
    ],
  },
  {
    icon: "🍗",
    category: "Non-Veg Starters",
    description: "Start your meal with our mouthwatering non-veg appetizers, perfect for sharing or enjoying solo.",
    items: [
      { name: "Chilli Chicken", price: "€10.50" },
      { name: "Lollipop", price: "€13.50" },
      { name: "Chicken Pakoda", price: "€9.50" },
      { name: "Fish Fry", price: "€12.00" },
      { name: "Pepper Chicken", price: "€11.50" },
      { name: "Chicken Fry with Kaju", price: "€12.50" },
      { name: "Tuna Fish Fry", price: "€13.00" },
      { name: "Egg Bhurji with Pepper", price: "€8.50" },
      { name: "Majestic Chicken", price: "€14.50" },
      { name: "Chicken Liver Fry", price: "€10.50" },
      { name: "Prawns Fry", price: "€15.50" },
      { name: "Leg Piece Fry", price: "€13.50" },
      { name: "Chicken Thokku Fry", price: "€11.50" },
    ],
  },
  // Biryanis & Rice
  {
    icon: "🍛",
    category: "Biryani",
    description: "Savor our signature biryanis, each cooked to perfection with aromatic rice and your choice of vegetables, chicken, mutton, prawns, or egg.",
    items: [
      { name: "Veg Dum Biryani", price: "€8.50" },
      { name: "Chicken Dum Biryani", price: "€13.50" },
      { name: "Mutton Dum Biryani", price: "€15.50" },
      { name: "Prawns Dum Biryani", price: "€17.00" },
      { name: "Egg Dum Biryani", price: "€10.50" },
    ],
  },
  {
    icon: "🍚",
    category: "Palav",
    description: "Enjoy our selection of fragrant palavs, from classic vegetable and chicken to unique regional specialties.",
    items: [
      { name: "Vegetable Palav", price: "€7.50" },
      { name: "Chicken Palav", price: "€11.50" },
      { name: "Mushroom Palav", price: "€8.50" },
      { name: "Peas Palav", price: "€8.00" },
      { name: "Soya Chunks Palav", price: "€9.00" },
      { name: "Bhagara Rice", price: "€9.50" },
      { name: "Pudina Rice", price: "€8.50" },
      { name: "Egg Palav", price: "€9.50" },
    ],
  },
  {
    icon: "🍳",
    category: "Fried Rice",
    description: "Satisfy your cravings with our selection of fried rice, made fresh to order.",
    items: [
      { name: "Chicken Fried Rice", price: "€10.50" },
      { name: "Egg Fried Rice", price: "€8.50" },
      { name: "Mushroom Fried Rice", price: "€9.00" },
      { name: "Veg Fried Rice", price: "€8.00" },
    ],
  },
  {
    icon: "🍽️",
    category: "Mandi",
    description: "Try our special mandi rice platters, served with a variety of delicious accompaniments.",
    items: [
      { name: "Mandi Rice with Chicken Fry piece and Chicken Gravy with Afghani Chicken / Egg", price: "€18.50" },
      { name: "Mandi Rice with Mutton Curry / Mutton Fry with Egg", price: "€20.50" },
      { name: "Mixed Mandi", price: "€22.00" },
    ],
  },
  {
    icon: "🥘",
    category: "Veg Combo",
    description: "Enjoy a wholesome vegetarian combo meal for a complete dining experience.",
    items: [
      { name: "White Rice / Dal / Rasam / Curd / Pickle / Sweet", price: "€9.50" },
    ],
  },
  // Curries & Gravies
  {
    icon: "🍲",
    category: "Curries",
    description: "Discover a range of rich, comforting curries, each simmered with authentic spices and fresh ingredients.",
    items: [
      { name: "Chicken Curry", price: "€13.50" },
      { name: "Mutton Curry", price: "€15.50" },
      { name: "Egg Curry", price: "€9.50" },
      { name: "Veg Curry", price: "€8.50" },
      { name: "Dal", price: "€5.50" },
      { name: "Fish Curry", price: "€14.50" },
      { name: "Prawns Curry", price: "€17.00" },
    ],
  },
  {
    icon: "🥚",
    category: "Egg Items",
    description: "Try our creative egg-based dishes, from curries to stir-fries.",
    items: [
      { name: "Egg Kheema Curry", price: "€10.50" },
      { name: "Egg Anda Curry", price: "€9.50" },
      { name: "Egg Curry", price: "€9.50" },
    ],
  },
  {
    icon: "🔥",
    category: "Chicken Specials",
    description: "Explore our chef's chicken specials, each bursting with unique flavors.",
    items: [
      { name: "Chicken Keema Biryani", price: "€14.50" },
      { name: "Chicken Breast Biryani", price: "€15.50" },
      { name: "Chicken Piece Biryani", price: "€13.50" },
      { name: "Chicken Fried Piece Biryani", price: "€16.50" },
      { name: "Chicken Broth Rice", price: "€12.50" },
      { name: "Hoskote Chicken Biryani", price: "€14.00" },
    ],
  },
  {
    icon: "🌾",
    category: "Ragi Ball",
    description: "Experience traditional favorites like ragi ball and sarva, a true taste of home.",
    items: [
      { name: "Ragi Ball / Chicken Gravy / Mutton Gravy / Egg Gravy", price: "€8.50" },
    ],
  },
  {
    icon: "🧈",
    category: "Butter Specials",
    description: "Indulge in our creamy butter specials, a true delight for every food lover.",
    items: [
      { name: "Paneer Butter Masala", price: "€13.50" },
      { name: "Chicken Butter Masala", price: "€15.50" },
      { name: "Palak Paneer", price: "€12.50" },
    ],
  },
  // Breads & Rolls
  {
    icon: "🥯",
    category: "Naans",
    description: "Pair your meal with our soft naans, rotis, and delicious breads, fresh from the tandoor.",
    items: [
      { name: "Butter Naan", price: "€2.00" },
      { name: "Kulcha", price: "€2.50" },
      { name: "Roti", price: "€1.50" },
      { name: "Paratha", price: "€2.20" },
    ],
  },
  {
    icon: "🌯",
    category: "Rolls",
    description: "Enjoy our tasty rolls, perfect for a quick bite or a satisfying snack.",
    items: [
      { name: "Chicken Roll", price: "€8.50" },
      { name: "Egg Roll", price: "€5.50" },
    ],
  },
  // Noodles & Pasta
  {
    icon: "🍜",
    category: "Noodles",
    description: "Try our flavorful noodles, stir-fried to perfection.",
    items: [
      { name: "Egg Noodles", price: "€7.50" },
      { name: "Chicken Noodles", price: "€9.50" },
    ],
  },
  {
    icon: "🍝",
    category: "Pasta",
    description: "Savor our creamy pasta dishes, available in both veg and chicken options.",
    items: [
      { name: "Creamy Pasta with Breast Chicken", price: "€13.50" },
      { name: "Veg Creamy Pasta", price: "€10.50" },
    ],
  },
  // Drinks & Sweets
  {
    icon: "🥛",
    category: "Lassi & Buttermilk",
    description: "Refresh yourself with our cool lassis and buttermilk.",
    items: [
      { name: "Lassi", price: "€3.80" },
      { name: "Butter Milk", price: "€2.80" },
    ],
  },
  {
    icon: "🥤",
    category: "Milkshakes",
    description: "Try our delicious milkshakes in a variety of flavors.",
    items: [
      { name: "Pista Milkshake", price: "€5.80" },
      { name: "Vanilla Milkshake", price: "€4.80" },
      { name: "Chocolate Milkshake", price: "€5.30" },
    ],
  },
  {
    icon: "🍹",
    category: "Fruit Juices",
    description: "Quench your thirst with our selection of fresh fruit juices.",
    items: [
      { name: "Orange Juice", price: "€4.30" },
      { name: "Pineapple Juice", price: "€4.80" },
      { name: "Vegetable Juice", price: "€5.30" },
      { name: "Muskmelon Juice", price: "€4.60" },
      { name: "Lemon Juice", price: "€3.30" },
    ],
  },
  {
    icon: "☕",
    category: "Tea & Coffee",
    description: "Enjoy a hot cup of tea or coffee to complete your meal.",
    items: [
      { name: "Tea", price: "€1.40" },
      { name: "Coffee", price: "€1.90" },
    ],
  },
  {
    icon: "🍰",
    category: "Sweet",
    description: "Finish your meal with a sweet treat.",
    items: [
      { name: "Kheer", price: "€3.80" },
    ],
  },
];

const sectionIds = menu.map(section => section.category.replace(/\s|&|\//g, "-").toLowerCase());

export default function Menu() {
  const { addToCart } = useCart();
  // Create refs for each section
  const sectionRefs = useRef(menu.map(() => React.createRef()));
  
  // State to track quantities for each item
  const [quantities, setQuantities] = useState({});
  // State to track which items are selected/expanded
  const [selectedItems, setSelectedItems] = useState({});

  // Scroll to section on nav click
  const handleNavClick = idx => {
    sectionRefs.current[idx].current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Toggle item selection
  const toggleItemSelection = (itemName) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
    // Initialize quantity to 1 when first selected
    if (!selectedItems[itemName]) {
      setQuantities(prev => ({
        ...prev,
        [itemName]: 1
      }));
    }
  };

  // Update quantity for an item
  const updateQuantity = (itemName, newQty) => {
    setQuantities(prev => ({
      ...prev,
      [itemName]: Math.max(1, newQty)
    }));
  };

  // Add item to cart with quantity
  const handleAddToCart = (itemName, category) => {
    const qty = quantities[itemName] || 1;
    const item = menu.find(section => section.category === category).items.find(i => i.name === itemName);
    
    addToCart({
      name: itemName,
      desc: `From ${category}`,
      price: item.price // Include the price
    }, qty);
    
    // Reset quantity and close selection after adding to cart
    setQuantities(prev => ({
      ...prev,
      [itemName]: 1
    }));
    setSelectedItems(prev => ({
      ...prev,
      [itemName]: false
    }));
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      {/* Quick Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur py-2 mb-8 rounded-xl shadow-md overflow-x-auto scrollbar-hide border border-green-100">
        <ul className="flex space-x-2 px-2 md:justify-center min-w-max">
          {menu.map((section, idx) => (
            <li key={section.category}>
              <button
                onClick={() => handleNavClick(idx)}
                className="flex items-center space-x-1 px-4 py-2 rounded-full bg-green-50 text-green-800 font-semibold shadow-sm hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-300 transition whitespace-nowrap border border-green-200"
                aria-label={`Go to ${section.category}`}
              >
                <span className="text-xl">{section.icon}</span>
                <span className="text-sm md:text-base font-bold">{section.category}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-4 text-center drop-shadow">Our Menu</h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
          Welcome to South Spice Cloud Kitchen! Explore our diverse menu, featuring authentic biryanis, flavorful curries, hearty rice dishes, and a variety of starters, breads, and beverages. Every dish is prepared with fresh ingredients and traditional recipes to bring you the true taste of South India. Whether you're craving a classic biryani, a spicy curry, or a refreshing drink, you'll find something to delight your palate.
        </p>
      </div>
      <div className="grid gap-10">
        {menu.map((section, idx) => (
          <div
            key={section.category}
            ref={sectionRefs.current[idx]}
            id={sectionIds[idx]}
            className="bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-2xl transition-all duration-200"
          >
            <div className="flex items-center justify-center mb-2">
              <span className="text-3xl md:text-4xl mr-2" aria-label={section.category}>{section.icon}</span>
              <h3 className="text-2xl font-bold text-green-700 border-b pb-2 border-green-100 text-center uppercase tracking-wide flex-1">{section.category}</h3>
            </div>
            <p className="text-gray-600 text-center mb-4 italic">{section.description}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {section.items.map((item) => {
                const qty = quantities[item.name] || 1;
                const isSelected = selectedItems[item.name];
                return (
                  <li key={item.name} className={`text-lg font-medium text-gray-800 bg-green-50 rounded px-4 py-3 shadow-sm transition-all duration-200 ${isSelected ? 'ring-2 ring-green-400 bg-green-100' : 'hover:bg-green-100'}`}>
                    <div 
                      className="flex justify-between items-center mb-2 cursor-pointer"
                      onClick={() => toggleItemSelection(item.name)}
                    >
                      <div className="flex-1">
                        <span className="font-bold text-green-800 text-lg">{item.name}</span>
                        <div className="text-lg text-green-600 font-bold mt-1">{item.price}</div>
                      </div>
                      <span className="text-green-600 text-sm">
                        {isSelected ? '▼' : '▶'}
                      </span>
                    </div>
                    
                    {isSelected && (
                      <div className="mt-3 p-3 bg-white rounded-lg border border-green-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.name, qty - 1)}
                              className="w-8 h-8 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
                              aria-label={`Decrease quantity for ${item.name}`}
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-bold text-green-700">{qty}</span>
                            <button
                              onClick={() => updateQuantity(item.name, qty + 1)}
                              className="w-8 h-8 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
                              aria-label={`Increase quantity for ${item.name}`}
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => handleAddToCart(item.name, section.category)}
                            className="ml-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
                            aria-label={`Add ${qty} ${item.name} to cart`}
                          >
                            Add ({qty})
                          </button>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 