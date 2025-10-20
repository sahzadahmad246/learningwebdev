import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],

  reducers: {
    createProduct: (state, action) => {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        quantity: action.payload.quantity,
      });
    },
  },
});

export const { createProduct } = productSlice.actions;

export default productSlice.reducer;
