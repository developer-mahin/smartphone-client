import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  // baseUrl: "https://smartphonemanagementtt.vercel.app/api/v1",
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.token;
    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseAPi",
  baseQuery: baseQuery,
  tagTypes: ["Product", "SeelProduct", "Manager", "Seller","Branch"],
  endpoints: () => ({}),
});
