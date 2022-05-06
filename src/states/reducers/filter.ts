import { getProjectsByThunk } from "./../thunks/index";
import { createSlice } from "@reduxjs/toolkit";

export const filter = createSlice({
  name: "projects",
  initialState: {
    viewMode: "grid" as "grid" | "list",
  },
  reducers: {
    toggleMode: (state, action) => {
      state.viewMode = action.payload;
    },
  },
});

export const { toggleMode } = filter.actions;
export default filter.reducer;
