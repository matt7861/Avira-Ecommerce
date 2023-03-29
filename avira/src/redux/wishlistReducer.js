import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistProducts: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = state.wishlistProducts.find(
        (item) => item.id === action.payload.id
      );

      if (!item) {
        state.wishlistProducts.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.wishlistProducts = state.wishlistProducts.filter(
        (item) => item.id !== action.payload
      );
    },
    resetWishlist: (state) => {
      state.wishlistProducts = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWishlist, removeItem, resetWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
