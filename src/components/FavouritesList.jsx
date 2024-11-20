import React from "react";
import { FaTrash, FaShoppingBag } from "react-icons/fa"; // Import delete and bag icons
import { useDispatch } from "react-redux"; // Import dispatch from Redux
import { removeFromFavorites } from "../redux/favoriteSlice"; // Import the removeFromFavorites action
import { addToCart } from "../redux/cartSlice"; // Import addToCart action from cartSlice

const FavoritesList = ({ favorites, closeFavoritesList, onViewItem }) => {
  const dispatch = useDispatch();

  // Handle item deletion from favorites
  const handleDeleteFromFavorites = (itemId) => {
    dispatch(removeFromFavorites(itemId)); // Remove from favorites using Redux
  };

  // Handle adding item to cart
  const handleAddToCart = (item) => {
    dispatch(addToCart(item)); // Dispatch action to add item to cart
  };

  return (
    <div className="favorites-list bg-white shadow-lg p-4 rounded-md absolute top-16 right-4 w-96 max-h-96 overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4">Favorites</h3>
      {favorites.length > 0 ? (
        favorites.map((item) => (
          <div key={item.id} className="favorite-item mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="ml-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.price}</p>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <button
                onClick={() => handleDeleteFromFavorites(item.id)}
                className="text-red-500"
              >
                <FaTrash size={20} />
              </button>
              <button
                onClick={() => handleAddToCart(item)} // Add item to cart
                className="bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600"
              >
                <FaShoppingBag size={20} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
