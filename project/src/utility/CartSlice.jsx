import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

// Export the actions so they can be dispatched in your components
export const { addCart, removeCart, clearCart } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;
