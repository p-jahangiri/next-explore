import { getProjectsByThunk } from "../thunks/index";
import { createSlice } from "@reduxjs/toolkit";

export const projects = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProjectsByThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.projects = action.payload;
    });
    builder.addCase(getProjectsByThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProjectsByThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default projects.reducer;
