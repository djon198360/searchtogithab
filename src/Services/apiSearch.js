/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createQueryString } from "../assets/utils";
import { SERVER_URL } from "../Consts/Consts";

export const apiSearch = createApi({
  reducerPath: "apiSearch",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    prepareHeaders: (headers) => {
      headers.set("X-GitHub-Api-Version", "2022-11-28");
      if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/vnd.github+json");
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (query) => {
        const { q, sort, order, per_page, page } = query;
        const queryString = createQueryString({
          q,
          sort,
          order,
          per_page,
          page,
        });

        return { url: `search/users?${queryString}` };
      },
      providesTags: () => [{ type: "USER" }],
    }),

    getUserId: builder.query({
      query: (query) => {
        const { content } = query;
        return { url: `users/${content}` };
      },
      providesTags: (name) => [{ type: "USERID", name }],
    }),
    getRepoUserId: builder.query({
      query: ({ login }) => {
        return { url: `users/${login}/repos` };
      },
      providesTags: (name) => [{ type: "USERREPO", name }],
    }),
  }),
});

export const {
  useLazyGetUsersQuery,
  useGetUserIdQuery,
  useLazyGetRepoUserIdQuery,
} = apiSearch;
