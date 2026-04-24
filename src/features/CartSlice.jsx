import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(i => i.id === action.payload.id);
      if (item) item.qty++;
      else state.push({ ...action.payload, qty: 1 });
    },
    increment: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) item.qty++;
    },
    decrement: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item && item.qty > 1) item.qty--;
    },
    remove: (state, action) => {
      return state.filter(i => i.id !== action.payload);
    }
  }
});

export const { addToCart, increment, decrement, remove } = cartSlice.actions;
export default cartSlice.reducer;
