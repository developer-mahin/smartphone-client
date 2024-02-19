import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllManagers: builder.query({
      query: () => {
        return {
          url: "/manager",
          method: "GET",
        };
      },
      providesTags: ["Manager"],
    }),
    getAllSellers: builder.query({
      query: () => {
        return {
          url: "/seller",
          method: "GET",
        };
      },
      providesTags: ["Seller"],
    }),

    createManager: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/user/create-manager",
          method: "POST",
          body: userInfo,
        };
      },
      invalidatesTags: ["Manager"],
    }),
    createSeller: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/user/create-seller",
          method: "POST",
          body: userInfo,
        };
      },
      invalidatesTags: ["Seller"],
    }),

    deleteManager: builder.mutation({
      query: (id) => {
        return {
          url: `/manager/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Manager"],
    }),

    deleteSeller: builder.mutation({
      query: (id) => {
        return {
          url: `/seller/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Seller"],
    }),
  }),
});

export const {
  useCreateManagerMutation,
  useCreateSellerMutation,
  useGetAllManagersQuery,
  useGetAllSellersQuery,
  useDeleteManagerMutation,
  useDeleteSellerMutation,
} = userManagementApi;
