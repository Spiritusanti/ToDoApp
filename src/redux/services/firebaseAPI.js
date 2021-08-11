import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const firebaseAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todoapp-6d4de-default-rtdb.firebaseio.com/",
  }),
  endpoints(builder) {
    return {
      fetchUserTodos: builder.query({
        query(uid) {
          return `${uid}/tasks`;
        },
      }),
    };
  },
});

export const { useFetchUserTodosQuery } = firebaseAPI;