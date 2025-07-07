import React, { useRef } from "react";

const menu = [
  // Starters
  {
    icon: "🥗",
    category: "Veg Starters",
    image: "/veg starter.jpg",
    description: "Delight in our vegetarian starters, bursting with flavor and perfect for every occasion.",
    items: [
      "Paneer 65",
      "Mushroom Pepper",
      "Mushroom Creamy",
      "Soya 65",
    ],
  },
  {
    icon: "🍗",
    category: "Non-Veg Starters",
    image: "/Non veg starters.jpg",
    description: "Start your meal with our mouthwatering non-veg appetizers, perfect for sharing or enjoying solo.",
    items: [
      "Chilli Chicken",
      "Lollipop",
      "Chicken Pakoda",
      "Fish Fry",
      "Pepper Chicken",
      "Chicken Fry with Kaju",
      "Tuna Fish Fry",
      "Egg Bhurji with Pepper",
      "Majestic Chicken",
      "Chicken Liver Fry",
      "Prawns Fry",
    ],
  },
  // Biryanis & Rice
  {
    icon: "🍛",
    category: "Biryanis",
    image: "/Biryani.jpg",
    description: "Savor our signature biryanis, each cooked to perfection with aromatic rice and your choice of vegetables, chicken, mutton, prawns, or egg.",
    items: [
      "Veg Dum Biryani",
      "Chicken Dum Biryani / Egg / Sarva / Raitha / Cola",
      "Mutton Dum Biryani",
      "Prawns Dum Biryani",
      "Egg Dum Biryani",
    ],
  },
  {
    icon: "🍚",
    category: "Palav",
    description: "Enjoy our selection of fragrant palavs, from classic vegetable and chicken to unique regional specialties.",
    items: [
      "Vegetable Palav",
      "Chicken Palav",
      "Mushroom Palav",
      "Peas Palav",
      "Soya Chunks Palav",
      "Bhagara Rice",
      "Pudina Rice",
      "Egg Palav",
      "Hoskote Biryani",
    ],
  },
  {
    icon: "🍳",
    category: "Fried Rice",
    image: "/Fried rice.jpg",
    description: "Satisfy your cravings with our selection of fried rice, made fresh to order.",
    items: [
      "Chicken Fried Rice",
      "Egg Fried Rice",
      "Mushroom Fried Rice",
      "Veg Fried Rice",
    ],
  },
  {
    icon: "🍽️",
    category: "Mandi",
    image: "/Mandi.jpg",
    description: "Try our special mandi rice platters, served with a variety of delicious accompaniments.",
    items: [
      "Mandi Rice with Chicks Fry and Chicken Gravy with Afghani Chicken / Egg",
      "Mandi Rice with Mutton Curry / Mutton Fry with Egg",
      "Mixed Mandi",
    ],
  },
  {
    icon: "🥘",
    category: "Veg Combo",
    description: "Enjoy a wholesome vegetarian combo meal for a complete dining experience.",
    items: [
      "White Rice / Dal / Rasam / Curd / Pickle / Sweet",
    ],
  },
  // Curries & Gravies
  {
    icon: "🍲",
    category: "Curries",
    image: "/Curry.jpg",
    description: "Discover a range of rich, comforting curries, each simmered with authentic spices and fresh ingredients.",
    items: [
      "Chicken Curry",
      "Mutton Curry",
      "Egg Curry",
      "Veg Curry",
      "Dal",
      "Fish Curry",
      "Prawns Curry",
    ],
  },
  {
    icon: "🥚",
    category: "Egg Items",
    description: "Try our creative egg-based dishes, from curries to stir-fries.",
    items: [
      "Egg Kheema Curry",
      "Egg Anda Curry",
      "Egg Curry",
    ],
  },
  {
    icon: "🔥",
    category: "Chicken Specials",
    description: "Explore our chef's chicken specials, each bursting with unique flavors.",
    items: [
      "Chicken Keema Biryani",
      "Chicken Breast Biryani",
      "Chicken Piece Biryani",
      "Chicken Fried Piece Biryani",
      "Chicken Broth Rice",
      "Leg Piece Fry",
      "Chicken Thokku Fry",
    ],
  },
  {
    icon: "🌾",
    category: "Ragi Ball / Sarva",
    description: "Experience traditional favorites like ragi ball and sarva, a true taste of home.",
    items: [
      "Ragi Ball / Chicken Sarva / Mutton Sarva / Egg Sarva",
    ],
  },
  {
    icon: "🧈",
    category: "Butter Specials",
    description: "Indulge in our creamy butter specials, a true delight for every food lover.",
    items: [
      "Paneer Butter Masala",
      "Chicken Butter Masala",
      "Palak Paneer",
    ],
  },
  // Breads & Rolls
  {
    icon: "🥯",
    category: "Naans & Breads",
    image: "/Naans.jpg",
    description: "Pair your meal with our soft naans, rotis, and delicious breads, fresh from the tandoor.",
    items: [
      "Butter Naan",
      "Kulcha",
      "Roti",
      "Paratha",
    ],
  },
  {
    icon: "🌯",
    category: "Rolls",
    description: "Enjoy our tasty rolls, perfect for a quick bite or a satisfying snack.",
    items: [
      "Chicken Roll",
      "Egg Roll",
    ],
  },
  // Noodles & Pasta
  {
    icon: "🍜",
    category: "Noodles",
    description: "Try our flavorful noodles, stir-fried to perfection.",
    items: [
      "Egg Noodles",
      "Chicken Noodles",
    ],
  },
  {
    icon: "🍝",
    category: "Pasta",
    description: "Savor our creamy pasta dishes, available in both veg and chicken options.",
    items: [
      "Creamy Pasta with Breast Chicken",
      "Veg Creamy Pasta",
    ],
  },
  // Drinks & Sweets
  {
    icon: "🥛",
    category: "Lassi & Buttermilk",
    description: "Refresh yourself with our cool lassis and buttermilk.",
    items: [
      "Lassi",
      "Butter Milk",
    ],
  },
  {
    icon: "🥤",
    category: "Milkshakes",
    image: "/Milkshake.webp",
    description: "Try our delicious milkshakes in a variety of flavors.",
    items: [
      "Pista Milkshake",
      "Vanilla Milkshake",
      "Chocolate Milkshake",
    ],
  },
  {
    icon: "🍹",
    category: "Fruit Juices",
    description: "Quench your thirst with our selection of fresh fruit juices.",
    items: [
      "Orange Juice",
      "Pineapple Juice",
      "Vegetable Juice",
      "Muskmelon Juice",
      "Lemon Juice",
    ],
  },
  {
    icon: "☕",
    category: "Tea & Coffee",
    description: "Enjoy a hot cup of tea or coffee to complete your meal.",
    items: [
      "Tea",
      "Coffee",
    ],
  },
  {
    icon: "🍰",
    category: "Sweets",
    image: "/Sweet.jpg",
    description: "Finish your meal with a sweet treat.",
    items: [
      "Kheer",
    ],
  },
];

const sectionIds = menu.map(section => section.category.replace(/\s|&|\//g, "-").toLowerCase());

export default function Menu() {
  // Create refs for each section
  const sectionRefs = useRef(menu.map(() => React.createRef()));

  // Scroll to section on nav click
  const handleNavClick = idx => {
    sectionRefs.current[idx].current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      {/* Quick Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-green-50 py-2 mb-8 rounded-lg shadow-sm overflow-x-auto scrollbar-hide">
        <ul className="flex space-x-3 px-2 md:justify-center">
          {menu.map((section, idx) => (
            <li key={section.category}>
              <button
                onClick={() => handleNavClick(idx)}
                className="flex items-center space-x-1 px-3 py-1 rounded-full bg-white text-green-700 font-semibold shadow hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
                aria-label={`Go to ${section.category}`}
              >
                <span className="text-xl">{section.icon}</span>
                <span className="text-sm md:text-base">{section.category}</span>
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
            {section.image && (
              <div className="flex justify-center mb-4">
                <img
                  src={section.image}
                  alt={section.category}
                  className="w-full max-w-xs h-40 object-cover rounded-2xl shadow-md border-4 border-green-100"
                  style={{ objectPosition: 'center' }}
                />
              </div>
            )}
            <div className="flex items-center justify-center mb-2">
              <span className="text-3xl md:text-4xl mr-2" aria-label={section.category}>{section.icon}</span>
              <h3 className="text-2xl font-bold text-green-700 border-b pb-2 border-green-100 text-center uppercase tracking-wide flex-1">{section.category}</h3>
            </div>
            <p className="text-gray-600 text-center mb-4 italic">{section.description}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {section.items.map((item) => (
                <li key={item} className="text-lg font-medium text-gray-800 bg-green-50 rounded px-4 py-2 shadow-sm hover:bg-green-100 transition">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 