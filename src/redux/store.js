import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo-slice";
import demoSlice from "./demo-slice";
import authSlice from "./auth-slice";
import { firebaseAPI } from "./services/firebaseAPI";

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    demo: demoSlice.reducer,
    auth: authSlice.reducer,
    [firebaseAPI.reducerPath]: firebaseAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(firebaseAPI.middleware);
  },
});
