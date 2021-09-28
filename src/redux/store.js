import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo-slice";
import demoSlice from "./demo-slice";
import authSlice from "./auth-slice";
import { todosApi } from "./services/todosApi";

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    demo: demoSlice.reducer,
    auth: authSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(todosApi.middleware);
  },
});
