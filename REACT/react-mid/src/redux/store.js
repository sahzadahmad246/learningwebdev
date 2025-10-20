import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import toDoReducer from "../features/Todo/Todo";
import productReducer from "../features/Cart/ProductSlice";
import cartReducer from "../features/Cart/CartSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    toDo: toDoReducer,
    products: productReducer,
    cart: cartReducer,
  },
});
