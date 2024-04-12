import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux-toolkit/userSlice";
export const store = configureStore({
  reducer: { user: userReducer },
});
