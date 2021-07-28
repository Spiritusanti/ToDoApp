import { createSlice } from "@reduxjs/toolkit";
import demoSlice from "./demo-slice";

const initialState = { userIsLoggedIn: false, userInfo: {} };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLogIn(state, action) {
      const newUserInfo = action.payload;
      state.userInfo = newUserInfo;
      state.userIsLoggedIn = true
    },
    onLogOut(state) {
      state.userInfo = {};
      state.userIsLoggedIn = false;
    },
  },
});

export const authActions = demoSlice.actions;

export default authSlice;
