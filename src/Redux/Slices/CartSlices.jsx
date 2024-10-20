import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    Cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      if (!action.payload || !action.payload.id) {
        console.error("Invalid payload for addToCart");
        return;
      }

      const existingItem = state.Cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        state.Cart = state.Cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.Cart.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      if (!action.payload || !action.payload.id) {
        console.error("Invalid payload for removeFromCart");
        return;
      }

      state.Cart = state.Cart.filter((item) => item.id !== action.payload.id);
    },
    incrementQty: (state, action) => {
      state.Cart = state.Cart.map((item)=> item.id === action.payload.id ? {...item, qty: item.qty +1} : item); 
    },
    decrementQty: (state, action) => {
      state.Cart = state.Cart.map((item)=> item.id === action.payload.id ? {...item, qty:item.qty -1} : item);
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } = CartSlice.actions;
export default CartSlice.reducer;