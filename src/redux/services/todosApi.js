import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todoapp-6d4de-default-rtdb.firebaseio.com/",
  }),
  endpoints: (builder) => ({
    getTodosByUser: builder.query({
      query: (uid) => `${uid}/tasks.json`,
    }),
  }),
});

export const { useGetTodosByUser } = todosApi;
