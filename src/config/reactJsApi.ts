import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Posts } from "./apiTypes";

export const reactJsApi = createApi({
  reducerPath: "reactJsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.reddit.com/r/reactjs/" }),
  tagTypes: ["Post"],
  endpoints: builder => ({
    getPosts: builder.query<Posts, string>({
      query: postType => ({
        url: `${postType}.json`,
      }),
      transformResponse: (response: { data: Posts }) => response.data,
    }),
  }),
});

export const { useGetPostsQuery } = reactJsApi;
