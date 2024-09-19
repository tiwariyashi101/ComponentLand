import { useDispatch, useSelector } from "react-redux";
import { clearCart, incrementQuantity, decrementQuantity } from "./utility/CartSlice.jsx"; 
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Importing icons

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState(0); // State for discount

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      dispatch(clearCart());
    }
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedPrice = totalPrice - (totalPrice * (discount / 100));

  return (
    <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
        </div>

        <div className="mx-auto mt-8 max-w-2xl md:mt-12">
          {cartItems.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-gray-500">Your cart is empty.</p>
            </div>
          ) : (
            <div className="bg-white shadow-lg rounded-lg">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <ul className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex flex-col space-y-3 py-4 text-left sm:flex-row sm:space-x-5 sm:space-y-0 hover:shadow-md transition">
                      <div className="shrink-0">
                        <img
                          className="h-32 w-32 rounded-lg object-cover"
                          src={item.image} 
                          alt={item.title} 
                        />
                      </div>

                      <div className="relative flex flex-1 flex-col justify-between">
                        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                          <div className="pr-8 sm:pr-5">
                            <p className="text-lg font-semibold text-gray-900">
                              {item.title}
                            </p>
                            <p className="mt-1 mb-0 text-sm text-gray-400">
                              {item.size}
                            </p>
                          </div>

                          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                            <p className="shrink-0 w-24 text-lg font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>

                            <div className="sm:order-1">
                              <div className="flex h-10 items-center space-x-1 border border-gray-300 rounded-md overflow-hidden">
                                <button
                                  className="flex items-center justify-center bg-gray-200 px-2 transition hover:bg-black hover:text-white"
                                  onClick={() => handleDecrement(item.id)}
                                >
                                  <FaMinus />
                                </button>
                                <div className="flex items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                  {item.quantity}
                                </div>
                                <button
                                  className="flex items-center justify-center bg-gray-200 px-2 transition hover:bg-black hover:text-white"
                                  onClick={() => handleIncrement(item.id)}
                                >
                                  <FaPlus />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {/* Discount Input Field */}
          <div className="flex justify-between items-center mt-6 px-4 bg-gray-50 border rounded-md py-3">
            <label className="text-gray-700 font-medium">Discount (%):</label>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-24 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Total Price */}
          <div className="flex justify-between px-4 mt-4 font-semibold">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          {/* Total Price After Discount */}
          <div className="flex justify-between px-4 mt-2 font-semibold">
            <span>Total After Discount:</span>
            <span>${discountedPrice.toFixed(2)}</span>
          </div>
          
          <button
            type="button"
            className="mt-6 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
            onClick={handleClear}
          >
            Delete Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
