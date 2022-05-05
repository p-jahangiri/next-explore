import { createSlice } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'

export const filter = createSlice({
  name: "filter",
  initialState: {
    viewMode: "grid" as "grid" | "list",
  },
  reducers: {
    toggleMode: (state) => {
      state.viewMode = state.viewMode === "grid" ? "list" : "grid";
    },
  },
});

export const { toggleMode } = filter.actions;
export default filter.reducer;
