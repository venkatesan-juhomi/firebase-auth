import { createSlice } from "@reduxjs/toolkit";
const initialAuthValue = {isAuthenticated: false, name: null};

const authSlice = createSlice({
  name: "Authentication",
  initialState: initialAuthValue,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    userName(state, action) {
      state.name = action.payload;
    },
    profilePic(state, action) {
      state.profile = action.payload
    }
  }
});

export default authSlice;