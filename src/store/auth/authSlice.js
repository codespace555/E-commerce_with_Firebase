import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    status: false,
    userData: null,
    admin:false,
    userImg: "",
    user:"",
    uId:""
    
  };

  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      loginauth: (state, action) => {
        state.status = true;
        state.userData = action.payload.userData;
        state.userImg = action.payload.userimg
        state.user = action.payload.user
        state.uId=action.payload.uid

      
      
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