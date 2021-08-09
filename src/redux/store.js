import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo-slice";
import demoSlice from "./demo-slice";
import authSlice from "./auth-slice";
import { firebaseDBQuery } from "./services/firebase-query";

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    demo: demoSlice.reducer,
    auth: authSlice.reducer,
    [firebaseDBQuery.reducerPath]: firebaseDBQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firebaseDBQuery.middleware),
});
