/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createQueryString } from "../assets/utils";
import { SERVER_URL } from "../Consts/Consts";

const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getUsersByLoginBySortRepo = async ({
  searchText,
  sortType,
  perPage,
  page,
}) => {
  const res = await fetch(
    `${SERVER_URL}?q=${searchText}&login&sort=repositories&order=${sortType}&per_page=${perPage}&page=${page}`,
    {
      method: "GET",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  return checkResponse(res);
};

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
    getUser: builder.query({
      query: (query) => {
        const { q, sort, order, per_page } = query;
        const queryString = createQueryString({ q, sort, order, per_page });

        return { url: `?${queryString}` }; // ?q=${searchText}&per_page=10` };
      },
      providesTags: (name) => [{ type: "Posts", name }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetUserQuery } = apiSearch;
