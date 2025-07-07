import React from "react";
import { useCart } from "../CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, updateQty, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalValue = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('€', '')) || 0;
    return sum + (price * item.qty);
  }, 0);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="max-w-xl mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Your Cart is Empty</h2>
        <Link to="/menu" className="text-green-700 underline">Go to Menu</Link>
      </div>
    );
  }

  function handleOrder() {
    const orderDetails = cart.map((item) => `${item.name} x${item.qty} - ${item.price}`).join("\n");
    navigate("/contact", { state: { orderDetails: `Order:\n${orderDetails}\n\nTotal items: ${total}\nTotal value: €${totalValue.toFixed(2)}` } });
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Your Cart</h2>
      <ul className="space-y-6 mb-8">
        {cart.map((item) => {
          const itemPrice = parseFloat(item.price.replace('€', '')) || 0;
          const itemTotal = itemPrice * item.qty;
          return (
            <li key={item.name} className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-bold text-lg text-green-700">{item.name}</div>
                <div className="text-gray-600 mb-2">{item.desc}</div>
                <div className="text-sm text-green-600 font-semibold">
                  {item.price} each • Total: €{itemTotal.toFixed(2)}
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-2 md:mt-0">
                <button onClick={() => updateQty(item.name, Math.max(1, item.qty - 1))} className="px-2 py-1 bg-green-100 rounded">-</button>
                <span className="font-semibold w-6 text-center">{item.qty}</span>
                <button onClick={() => updateQty(item.name, item.qty + 1)} className="px-2 py-1 bg-green-100 rounded">+</button>
                <button onClick={() => removeFromCart(item.name)} className="ml-4 text-red-500 hover:underline">Remove</button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-between items-center mb-8">
        <div className="text-lg font-semibold">Total items: {total}</div>
        <div className="text-lg font-semibold text-green-600">Total value: €{totalValue.toFixed(2)}</div>
      </div>
      <div className="flex justify-between items-center mb-8">
        <button onClick={clearCart} className="text-sm text-gray-500 underline">Clear Cart</button>
      </div>
      <button onClick={handleOrder} className="bg-gradient-to-r from-green-600 to-green-400 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:from-green-700 hover:to-green-500 transition-all duration-200 block text-center w-full">Place Order</button>
    </div>
  );
} 