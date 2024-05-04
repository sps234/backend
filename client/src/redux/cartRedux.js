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
      const existingProductIndex = state.products.findIndex((product) => product._id === action.payload._id);

      if (existingProductIndex >= 0) {
        state.products = state.products.map((product, index) => {
          if (index !== existingProductIndex) {
            return product;
          }
          return {
            ...product,
            quantity: product.quantity + action.payload.quantity,
          };
        });
      } else {
        state.products.push(action.payload);
      }

      state.quantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
    },

    removeProduct: (state, action) => {
      const index = state.products.findIndex((product) => product._id === action.payload);
      if (index !== -1) {
        const product = state.products[index];
        state.quantity -= product.quantity;
        state.total -= product.price * product.quantity;
        state.products.splice(index, 1);
      }
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
        state.quantity += 1;
        state.total += product.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const product = state.products.find((product) => product._id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.quantity -= 1;
        state.total -= product.price;
      }
    },
  },
});

export const { addProduct, removeProduct, resetCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;