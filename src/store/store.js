import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import themeChange from "./theam/theme"
import cartSlice from "./cart/cartSlice";

const store = configureStore({
  reducer:{
auth:authSlice,
theme:themeChange,
cart:cartSlice
    },
    devTools:true
})

export default store