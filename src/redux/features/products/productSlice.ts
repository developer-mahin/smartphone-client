/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  price: number;
  release_date: string;
  brand: null;
  model: string;
  operating_system: string;
  storage_capacity: string;
  screen_size: string;
  camera_quality: string;
  search: string;
  productId: string;
  buttonText: string;
  product: any | null;
  productIdForBulkDelete: string[];
};

const initialState: TInitialState = {
  price: 0,
  release_date: "",
  brand: null,
  model: "",
  operating_system: "",
  storage_capacity: "",
  screen_size: "",
  camera_quality: "",
  search: "",
  productId: "",
  buttonText: "",
  product: null,
  productIdForBulkDelete: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setReleaseDate: (state, action) => {
      state.release_date = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setModel: (state, action) => {
      state.model = action.payload;
    },
    setOperatingSystem: (state, action) => {
      state.operating_system = action.payload;
    },
    setStorageCapacity: (state, action) => {
      state.storage_capacity = action.payload;
    },
    setScreenSize: (state, action) => {
      state.screen_size = action.payload;
    },
    setCameraQuality: (state, action) => {
      state.camera_quality = action.payload;
    },
    searchProduct: (state, action) => {
      state.search = action.payload;
    },
    setProductId: (state, action) => {
      state.productId = action.payload;
    },
    setButtonText: (state, action) => {
      state.buttonText = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setProductIdForBulkDelete: (state, action) => {
      const productId = action.payload;
      const index = state.productIdForBulkDelete.indexOf(productId);

      if (index !== -1) {
        state.productIdForBulkDelete.splice(index, 1);
      } else {
        state.productIdForBulkDelete.push(productId);
      }
    },

    clearBulkDeleteState: (state) => {
      state.productIdForBulkDelete = [];
    },
  },
});

export const {
  setPrice,
  setReleaseDate,
  setBrand,
  setCameraQuality,
  setModel,
  setOperatingSystem,
  setScreenSize,
  setStorageCapacity,
  searchProduct,
  setProductId,
  setButtonText,
  setProduct,
  setProductIdForBulkDelete,
  clearBulkDeleteState,
} = productSlice.actions;
export default productSlice.reducer;
