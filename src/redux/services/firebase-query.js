import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const firebaseDBQuery = createApi({
  reducerPath: "firebaseRealTimeDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todoapp-6d4de-default-rtdb.firebaseio.com/",
  }),
  endpoints: (builder) => ({
    getTasksByUID: builder.query({
      query: (uid) => `/${uid}/tasks`,
    }),
  }),
});

export const { useGetTasksByUID } = firebaseDBQuery;
