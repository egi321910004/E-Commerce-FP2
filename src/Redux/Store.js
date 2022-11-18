import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import ProductsReducer from "./ProductSlice";

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: CartReducer,
}});
