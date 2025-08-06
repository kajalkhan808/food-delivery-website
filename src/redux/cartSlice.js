import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },

    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    IncrementQty: (state, action) => {
      const { id, sign } = action.payload;

      return state.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: sign === '+' ? item.qty + 1 : Math.max(1, item.qty - 1),
            }
          : item
      );
    },
  },
});

// 👇 Don't forget to export IncrementQty too
export const { AddItem, RemoveItem, IncrementQty } = cartSlice.actions;
export default cartSlice.reducer;
