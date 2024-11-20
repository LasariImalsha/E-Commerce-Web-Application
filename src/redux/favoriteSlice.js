import { createSlice } from "@reduxjs/toolkit";

// Initial state for favorites
const initialState = {
  items: [], 
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
   
    addToFavorites: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload); // Add the new item to favorites
      }
    },
    
    // Action to remove item from favorites
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload); 
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
