import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    status: false,
    userData: "",
    admin:false,
    product:false,
    data:""
  };

  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      loginauth: (state, action) => {
        state.status = true;
        state.userData = action.payload.userData;
        state.data=action.payload
      },
      logoutauth: (state) => {
        state.status = false;
        state.userData = null;
      },
    },
  });
  export const { loginauth, logoutauth } = authSlice.actions;
  
  export default authSlice.reducer;