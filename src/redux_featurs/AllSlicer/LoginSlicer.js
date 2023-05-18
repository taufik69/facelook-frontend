import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginstate: localStorage.getItem("loginUser")
    ? JSON.parse(localStorage.getItem("loginUser"))
    : null,
};
export const userloginSlicer = createSlice({
  name: "loginslice",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      state.loginstate = action.payload;
    },
  },
});

export const { loginUser } = userloginSlicer.actions;
export default userloginSlicer.reducer;
