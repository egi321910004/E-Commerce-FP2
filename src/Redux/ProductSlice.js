import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../API";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getProducts.fulfilled]  : (state, { payload }) => {
      state.products = payload;
    },
  },

  addCheckout: (state) => {
    let idx = -1;
    state.cart.forEach(item => {
        if (item.cartQuantity >= 1) {
            const isProductFound = state.checkout.some((data, dataIdx) => {
                if (data.id === item.id) {
                    idx = dataIdx;
                    return true;
                }
                return false;
            });

            if (isProductFound)
                state.checkout[idx].sold += parseInt(item.cartQuantity);
            else
                state.checkout.push({ ...item, sold: item.cartQuantity });

            state.products.forEach((product, productIdx) => {
                if (product.id === item.id)
                    state.products[productIdx].quantity -= item.cartQuantity;
            })
        }
    })

    state.cart = [];
},
});

export const addCheckout = productsSlice.actions;
export default productsSlice.reducer;
