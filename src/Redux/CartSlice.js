import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartProducts: localStorage.getItem("cartProducts") ? JSON.parse(localStorage.getItem("cartProducts")) : [],
    cartTotalQuantitiy: 0,
    cartTotalAmount: 0,
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart(state, action){
            const productIndex = state.cartProducts.findIndex((product) => product.id === action.payload.id);

            if(productIndex >= 0){
                state.cartProducts[productIndex].cartQuantity += 1 
                toast.info(`${state.cartProducts[productIndex].title} telah ditambahkan`, {
                    position: "bottom-left"
                })
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1};
                state.cartProducts.push(tempProduct)
                toast.info(`${action.payload.title} telah ditambahkan`, {
                    position: "bottom-left"
                })
            }

            localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts))
            }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;