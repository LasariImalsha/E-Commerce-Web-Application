import React from "react";
import { FaTrash, FaShoppingBag } from "react-icons/fa"; 
import { useDispatch } from "react-redux"; 
import { removeFromFavorites } from "../redux/favoriteSlice"; 
import { addToCart } from "../redux/cartSlice"; 

const FavoritesList = ({ favorites, closeFavoritesList, onViewItem }) => {
  const dispatch = useDispatch();

  // Handle item deletion from favorites
  const handleDeleteFromFavorites = (itemId) => {
    dispatch(removeFromFavorites(itemId)); 
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
                className="text-red-600"
              >
                <FaTrash size={15} />
              </button>
              <button
                onClick={() => handleAddToCart(item)} // Add item to cart
                className="bg-EcomBrown text-white py-1 px-4 rounded-md"
              >
                <FaShoppingBag size={15} />
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
