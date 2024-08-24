import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (payload) => {
        console.log(payload);

        return {
          url: "/auth/login",
          method: "POST",
          body: payload,
        };
      },
    }),

    changePassword: builder.mutation({
      query: (args) => {
        return {
          url: "/auth/change-password",
          method: "POST",
          body: args,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useChangePasswordMutation } = userApi;
