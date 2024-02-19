import { createSlice } from "@reduxjs/toolkit";

type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

export type TUserState = {
  user: TUser | null;
  token: string | null;
};

const initialState: TUserState = {
  user: null,
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logOut } = userSlice.actions;
export default userSlice.reducer;
