import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../API";

const initialState = {
  products: [],
  cart: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export default productsSlice.reducer;
