import { createSlice } from "@reduxjs/toolkit";

const initialState = { userIsLoggedIn: false, userInfo: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin(state, action) {
      const newUserInfo = action.payload;
      state.userInfo = newUserInfo;
      state.userIsLoggedIn = true;
    },
    userLogout(state) {
      state.userIsLoggedIn = false;
      state.userInfo = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
