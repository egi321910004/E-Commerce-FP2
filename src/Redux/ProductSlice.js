import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { GetProduct } from "../API";

const productEntity = createEntityAdapter({
  selectID: (product) => product.id,
});

const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),
  extraReducers: {
    [GetProduct.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
  },
});

export const productSelector = productEntity.getSelectors((state) => state.product);
export default productSlice.reducer;
