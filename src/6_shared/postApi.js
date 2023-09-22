import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "	https://jsonplaceholder.org/" }),
    endpoints: (build) => ({
        getPosts: build.query({
            query: (id = "") => `posts/${id && `${id}`}`,
        }),
    }),
});

export const { useGetPostsQuery } = postsApi;
