import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });  // Ensure initial quantity is set to 1
      }
    },
    removeCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity >= 1) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        // If quantity is 1, remove the item from the cart
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    }
  }
});

// Export the actions so they can be dispatched in your components
export const { addCart, removeCart, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;
