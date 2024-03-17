import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import themeChange from "./theam/theme"

const store = configureStore({
  reducer:{
auth:authSlice,
theme:themeChange
    }
})

export default store