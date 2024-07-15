import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/productSlice/cartSlice";

export const store = configureStore({
  reducer: {
    allCart: cartReducer,
  },
});