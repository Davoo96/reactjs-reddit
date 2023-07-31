import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Posts } from "./apiTypes";

export const reactJsApi = createApi({
  reducerPath: "reactJsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.reddit.com/r/" }),
  tagTypes: ["Post"],
  endpoints: builder => ({
    getPostsByCategory: builder.query<Posts, string>({
      query: postType => ({
        url: `reactjs/${postType}.json`,
        method: "GET",
      }),
      transformResponse: (response: { data: Posts }) => response.data,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
      providesTags: result =>
        result
          ? [
              ...result.children.map(({ data }) => ({
                type: "Post" as const,
                id: data.id,
              })),
              { type: "Post", id: "LIST" },
            ]
          : [{ type: "Post", id: "LIST" }],
    }),
  }),
});

export const { useGetPostsByCategoryQuery } = reactJsApi;
