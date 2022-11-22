import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartProducts: localStorage.getItem("cartProducts") ? JSON.parse(localStorage.getItem("cartProducts")) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const productIndex = state.cartProducts.findIndex((product) => product.id === action.payload.id);

      if (productIndex >= 0) {
        state.cartProducts[productIndex].cartQuantity += 1;
        toast.info(`${state.cartProducts[productIndex].title} telah ditambahkan`, {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartProducts.push(tempProduct);
        toast.info(`${action.payload.title} telah ditambahkan`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
    removeFromCart(state, action) {
      const nextCartProducts = state.cartProducts.filter((cartProduct) => cartProduct.id !== action.payload.id);
      state.cartProducts = nextCartProducts;
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
    decreaseProducts(state, action) {
      const productIndex = state.cartProducts.findIndex((cartProduct) => cartProduct.id === action.payload.id);
      if (state.cartProducts[productIndex].cartQuantity > 1) {
        state.cartProducts[productIndex].cartQuantity -= 1;
      } else if (state.cartProducts[productIndex].cartQuantity === 1) {
        const nextCartProducts = state.cartProducts.filter((cartProduct) => cartProduct.id !== action.payload.id);
        state.cartProducts = nextCartProducts;
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
    increaseProducts(state, action) {
      const productIndex = state.cartProducts.findIndex((product) => product.id === action.payload.id);

      if (productIndex >= 0) {
        state.cartProducts[productIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartProducts.push(tempProduct);
      }

      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
    clearCart(state, action) {
      state.cartProducts = [];
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
    getTotal(state, action) {
      let { total, quantity } = state.cartProducts.reduce(
        (cartTotal, cartProduct) => {
          const { price, cartQuantity } = cartProduct;
          const productTotal = price * cartQuantity;

          cartTotal.total += productTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, removeFromCart, decreaseProducts, increaseProducts, clearCart, getTotal } = CartSlice.actions;
export default CartSlice.reducer;
