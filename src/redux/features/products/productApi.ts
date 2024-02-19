import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (query) => {
        const newObj = {
          priceRange: query.price,
          search: query.search,
          release_date: query.release_date,
          brand: query.brand,
          model: query.model,
          operating_system: query.operating_system,
          storage_capacity: query.storage_capacity,
          screen_size: query.screen_size,
          camera_quality: query.camera_quality,
        };
        const queryObj = [];
        for (const [key, value] of Object.entries(newObj)) {
          if (value) {
            queryObj.push(`${key}=${value}`);
          }
        }

        const queryString = queryObj.length > 0 ? queryObj.join("&") : "";

        return {
          url: `/product?${queryString}`,
          method: "GET",
        };
      },
      providesTags: ["Product"],
    }),

    createProduct: builder.mutation({
      query: (productData) => {
        return {
          url: "/product",
          method: "POST",
          body: productData,
        };
      },
      invalidatesTags: ["Product"],
    }),

    selesProduct: builder.mutation({
      query: (info) => {
        return {
          url: "/seles",
          method: "POST",
          body: info,
        };
      },
      invalidatesTags: ["Product"],
    }),

    updateProduct: builder.mutation({
      query: (productInfo) => {
        const { productData, productId: id } = productInfo;
        return {
          url: `/product/${id}`,
          method: "PATCH",
          body: productData,
        };
      },
      invalidatesTags: ["Product"],
    }),

    bulkDeleteProduct: builder.mutation({
      query: (ids) => {
        return {
          url: "/product",
          method: "DELETE",
          body: ids,
        };
      },
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  // useSelesProductMutation,
  useBulkDeleteProductMutation,
} = productApi;
