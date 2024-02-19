import { baseApi } from "../../api/baseApi";

const selesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    selesProduct: builder.mutation({
      query: (info) => {
        return {
          url: "/seles",
          method: "POST",
          body: info,
        };
      },
      invalidatesTags: ["SeelProduct"],
    }),
    getSelesProduct: builder.query({
      query: (queryString) => {
        return {
          url: `/seles?${queryString}=${queryString}`,
          method: "GET",
        };
      },
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetSelesProductQuery, useSelesProductMutation } = selesApi;
