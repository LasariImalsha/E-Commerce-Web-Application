// Categories.js
import React, { useState } from "react";
import { itemsData } from "../db/db";
import ItemCard from "../components/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../redux/favoriteSlice"; // Import the action for adding to favorites
import FavoritesList from "../components/FavouritesList"; // Import the FavoritesList component
import { useNavigate } from "react-router-dom"; // Import for navigation

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("casual-wear");
  const [isFavoritesVisible, setFavoritesVisible] = useState(false); // Manage visibility of the favorites list
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item for detailed view
  const favorites = useSelector((state) => state.favorites.items); // Access favorites from the Redux store
  const dispatch = useDispatch(); // Use the useDispatch hook to get the dispatch function
  const navigate = useNavigate(); // Use navigate to change category view

  // Function to toggle favorites list visibility
  const toggleFavoritesVisibility = () => {
    setFavoritesVisible(!isFavoritesVisible); // Toggle visibility of the favorites list
  };

  const handleAddToFavorites = (item) => {
    dispatch(addToFavorites(item)); // Dispatch the action to add the item to favorites
  };

  // Function to handle "View" button click
  const handleViewItem = (item) => {
    setSelectedCategory(item.category); // Update selected category
    setSelectedItem(item); // Set the selected item for detailed view
    setFavoritesVisible(false); // Close the favorites list
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Category Nav */}
        <div className="text-center mb-6">
          <nav>
            <ul className="flex justify-center space-x-6">
              <li>
                <button
                  onClick={() => setSelectedCategory("casual-wear")}
                  className="text-lg font-semibold hover:text-blue-500"
                >
                  Casual Wear
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedCategory("sport-wear")}
                  className="text-lg font-semibold hover:text-blue-500"
                >
                  Sport Wear
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedCategory("foot-wear")}
                  className="text-lg font-semibold hover:text-blue-500"
                >
                  Foot Wear
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedCategory("accessories")}
                  className="text-lg font-semibold hover:text-blue-500"
                >
                  Accessories
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Category Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {itemsData[selectedCategory].map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onAddToFavorites={handleAddToFavorites}
            />
          ))}
        </div>

        {/* Render Favorites List */}
        {isFavoritesVisible && (
          <FavoritesList
            favorites={favorites}
            closeFavoritesList={toggleFavoritesVisibility} // Correctly pass closeFavoritesList
            onViewItem={handleViewItem} // **Pass the onViewItem function correctly here**
          />
        )}

        {/* If a selected item exists, show its detailed view */}
        {selectedItem && (
          <div className="mt-8 p-6 bg-white shadow-lg rounded-md">
            <h3 className="text-xl font-semibold">{selectedItem.name}</h3>
            <p>{selectedItem.description}</p>
            <p className="mt-2 text-gray-500">Price: {selectedItem.price}</p>
            {/* Additional item details here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
