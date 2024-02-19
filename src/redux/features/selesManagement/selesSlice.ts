import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  sortBy: string;
};

const initialState: TInitialState = {
  sortBy: "",
};

const selesSlice = createSlice({
  name: "Seles",
  initialState,
  reducers: {
    sortByDuration: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { sortByDuration } = selesSlice.actions;
export default selesSlice.reducer;
