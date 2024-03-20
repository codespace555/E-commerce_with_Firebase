import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    status: false,
    userData: "",
    admin:false,
    product:false,
  };

  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      loginauth: (state, action) => {
        state.status = true;
        state.userData = action.payload.userData;
        console.log(action.userData)
      
      },
      admin:(state)=>{
          state.admin=true
      },
      logoutauth: (state) => {
        state.status = false;
        state.userData = null;
      },
    },
  });
  export const { loginauth, logoutauth, admin} = authSlice.actions;
  
  export default authSlice.reducer;