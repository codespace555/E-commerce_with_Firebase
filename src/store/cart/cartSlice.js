import { createSlice } from "@reduxjs/toolkit";

let storedCart;
try {
  storedCart = JSON.parse(localStorage.getItem('cart'));
} catch (error) {
  console.error("Error from localStorage:", error);
  storedCart = [];
}
const initialState = {
  cartItem:storedCart|| [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      // Check if the product is already in the cart
      const ItemIndex = state.cartItem.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (ItemIndex !== -1) {
        state.cartItem[ItemIndex].quantity += item.quantity; 
       
        
      } else {
        state.cartItem.push(item);
      }
    },
    
    deleteFromCart(state, action) {
      console.log(action.payload.id,"is deleted");
      state.cartItem = state.cartItem.filter((item) => item.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    },
  },
});

export const { addToCart, deleteFromCart} = cartSlice.actions;

export default cartSlice.reducer;
