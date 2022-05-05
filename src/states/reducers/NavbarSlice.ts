import { createSlice } from "@reduxjs/toolkit";
import { NavbarData } from "../../static";

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: NavbarData,
  reducers: {
    setNavbar: (state, action) => {},
  },
});

export const { setNavbar: SET_NAVBAR } = navbarSlice.actions;
export default navbarSlice.reducer;
