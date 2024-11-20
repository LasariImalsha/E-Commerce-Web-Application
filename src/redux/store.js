import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Import the authSlice reducer
import cartReducer from './cartSlice';
import favoriteSlice from './favoriteSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Local storage
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Only persist the 'auth' slice
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  favorites: favoriteSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
