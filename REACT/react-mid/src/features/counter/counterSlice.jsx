import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    resetValue: (state) => {
      state.value = 0;
    },
    increamentByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increament, decreament, resetValue, increamentByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
