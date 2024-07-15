import { createSlice } from "@reduxjs/toolkit";
import productData from "../../productData";

const initialState = { cart: [], productData, totalQuantity: 0, totalPrice: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      console.log(find);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    // getTotalCart : (state) => {
    //   let {totalQuantity, totalPrice} = state.cart.reduce((cartTotal, cartItem) => {
    //     console.log("CartTotal",cartTotal);
    //     console.log("CartItem",cartItem);
    //     const
    //   })
    // }
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;