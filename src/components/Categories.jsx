// Categories.js
import React, { useState } from "react";
import { itemsData } from "../db/db";
import ItemCard from "../components/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../redux/favoriteSlice"; 
import FavoritesList from "../components/FavouritesList"; 
import { useNavigate } from "react-router-dom"; 

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("casual-wear");
  const [isFavoritesVisible, setFavoritesVisible] = useState(false); 
  const [selectedItem, setSelectedItem] = useState(null); 
  const favorites = useSelector((state) => state.favorites.items); 
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

  // Function to toggle favorites list visibility
  const toggleFavoritesVisibility = () => {
    setFavoritesVisible(!isFavoritesVisible); 
  };

  const handleAddToFavorites = (item) => {
    dispatch(addToFavorites(item)); 
  };

  // Function to handle "View" button click
  const handleViewItem = (item) => {
    setSelectedCategory(item.category); 
    setSelectedItem(item); 
    setFavoritesVisible(false); 
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
                  className="text-lg font-semibold text-EcomBrown hover:text-orange-300"
                >
                  Casual Wear
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedCategory("sport-wear")}
                  className="text-lg font-semibold text-EcomBrown hover:text-orange-300"
                >
                  Sport Wear
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedCategory("foot-wear")}
                  className="text-lg font-semibold text-EcomBrown hover:text-orange-300"
                >
                  Foot Wear
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedCategory("accessories")}
                  className="text-lg font-semibold text-EcomBrown hover:text-orange-300"
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
            closeFavoritesList={toggleFavoritesVisibility} 
            onViewItem={handleViewItem} 
          />
        )}

        {/* If a selected item exists, show its detailed view */}
        {selectedItem && (
          <div className="mt-8 p-6 bg-white shadow-lg rounded-md">
            <h3 className="text-xl font-semibold">{selectedItem.name}</h3>
            <p>{selectedItem.description}</p>
            <p className="mt-2 text-gray-500">Price: {selectedItem.price}</p>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
