import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },

    resetCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },

    increaseQuantity: (state, action) => {
      const product = state.products.find((product) => product._id === action.payload);
      if (product) {
        product.quantity += 1;
        state.total += product.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find((product) => product._id === action.payload);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
        state.total -= product.price;
      }
    },


  },
});

export const { addProduct, resetCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
