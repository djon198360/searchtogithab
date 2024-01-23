import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
/* import { createQuery } from "../assets/utils"; */
import { SERVER_URL } from "../Consts/Consts";

export const apiSearch = createApi({
  reducerPath: "apiSearch",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    prepareHeaders: (headers) => {
      if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchUser: builder.query({
      query: (query) => {
        /* const querySearch = createQuery(query); */
        return {
          url: `?${query}`,
          method: "GET",
          headers: { "content-type": "application/json" },
        };
      },
      providesTags: () => [{ type: "SEARCH" }],
    }),
  }),
});

export const { useSearchUserQuery } = apiSearch;
