import { createSlice } from "@reduxjs/toolkit";
import demoSlice from "./demo-slice";

const initialState = { userInfo: {} };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLogIn(state, action) {
      const newUserInfo = action.payload;
      state.userInfo = newUserInfo;
    },
    onLogOut(state, action) {
      state.userInfo = {};
    },
  },
});

export const authActions = demoSlice.actions;

export default authSlice;
