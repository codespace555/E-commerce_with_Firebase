import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    themeMode : "light",
  };

  const themeChange = createSlice({
    name: "theme",
    initialState,
    reducers: {
        darkTheme : (state, action) => {
        if(state.themeMode === "light"){
           state.themeMode ="dark";
        }else{
         state.themeMode ="light"
        }

     
      },
     
    },
  });
  export const { lightTheme, darkTheme } = themeChange.actions;
  
  export default themeChange.reducer;