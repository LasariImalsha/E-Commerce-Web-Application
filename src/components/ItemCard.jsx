import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice"; // Import the addToCart action
import { addToFavorites, removeFromFavorites } from "../redux/favoriteSlice"; // Import the addToFavorites and removeFromFavorites actions

const ItemCard = ({ item }) => {
  const [selectedSize, setSelectedSize] = useState(""); // Manage the selected size state
  const favorites = useSelector((state) => state.favorites.items); // Access favorites from the Redux store
  const dispatch = useDispatch();

  // Check if the current item is already in the favorites list
  const isFavorite = favorites.some((favItem) => favItem.id === item.id);

  useEffect(() => {
    if (isFavorite) {
      setSelectedSize(favorites.find((favItem) => favItem.id === item.id)?.size || "");
    }
  }, [isFavorite, item.id, favorites]);

  const handleAddToCart = () => {
    if (selectedSize) {
      dispatch(addToCart({ ...item, size: selectedSize }));
    } else {
      alert("Please select a size");
    }
  };

  const handleToggleFavorite = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to favorites");
      return;
    }

    if (isFavorite) {
      dispatch(removeFromFavorites(item.id)); // Remove from favorites if it's already added
    } else {
      dispatch(addToFavorites({ ...item, size: selectedSize })); // Add to favorites with size
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
      <div className="flex justify-center space-x-2 mt-2">
        {item.sizeOptions.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`w-6 h-6 rounded-full text-xs border ${selectedSize === size ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          >
            {size}
          </button>
        ))}
      </div>
      <p className="mt-2 text-gray-700">{item.price}</p>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
        >
          Add to Bag
        </button>
        <button
          onClick={handleToggleFavorite}
          className={`py-2 px-4 rounded-md ${isFavorite ? "text-red-500" : "text-black"}`}
        >
          <FaHeart size={20} className={isFavorite ? "text-red-500" : "text-gray-300"} />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
