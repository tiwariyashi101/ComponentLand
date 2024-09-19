import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Adjust the import path based on your project

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
