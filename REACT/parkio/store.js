import { configureStore } from "@reduxjs/toolkit";
import slotReducer from "./src/redux/slotSlice";
export const store = configureStore({
  reducer: {
    slot: slotReducer,
  },
});
