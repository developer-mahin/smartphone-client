import { baseApi } from "../../api/baseApi";

const branchManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBranches: builder.query({
      query: () => {
        return {
          url: "/branch",
          method: "GET",
        };
      },
      providesTags: ["Branch"],
    }),
    
    createBranch: builder.mutation({
      query: (info) => {
        return {
          url: "/branch",
          method: "POST",
          body: info,
        };
      },
      invalidatesTags: ["Branch"],
    }),
  }),
});

export const { useCreateBranchMutation, useGetAllBranchesQuery } =
  branchManagement;
