import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/cartSlice';
import { FaTrashAlt, FaMinus, FaPlus } from 'react-icons/fa'; // Import required icons

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Handle item removal
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  // Handle increment of quantity
  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  // Handle decrement of quantity
  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="flex flex-col md:flex-row p-6 space-y-6 md:space-x-6">
      {/* Items List */}
      <div className="flex-1 space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 border rounded-md">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
            <div className="flex flex-col flex-1 px-4">
              <h4 className="font-semibold text-lg">{item.name}</h4>
              <p>{item.size}</p>
              <p className="text-gray-500">{item.price}</p>
            </div>

            <div className='flex flex-row gap-x-4'>
              {/* Left-side Bin Icon or Minus Icon */}
              <div className="flex items-center space-x-2">
                {item.quantity > 1 ? (
                  <FaMinus
                    className="text-red-600 cursor-pointer"
                    size={15}
                    onClick={() => handleDecrement(item.id)}
                  />
                ) : (
                  <FaTrashAlt
                    className="text-red-600 cursor-pointer"
                    size={15}
                    onClick={() => handleRemoveItem(item.id)}
                  />
                )}
              </div>

              {/* Quantity Display */}
              <span className="text-sm font-semibold">{item.quantity}</span>

              {/* Right-side Plus Icon */}
              <div className="flex items-center space-x-2">
                <FaPlus
                  className="text-EcomBrown cursor-pointer"
                  size={15}
                  onClick={() => handleIncrement(item.id)}
                />
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="w-full md:w-1/3 bg-gray-100 p-4 border rounded-md">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${calculateSubtotal()}</span>
          </div>
          <div className="flex justify-between">
            <span>Items ({cartItems.length})</span>
            <span>{cartItems.length}</span>
          </div>
        </div>
        <button className="w-full bg-gradient-to-r from-EcomBrown to-EcomDarkGray text-white py-2 mt-4 rounded-md hover:bg-EcomDark/50">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
