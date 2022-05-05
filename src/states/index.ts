import projects from "./reducers/projects";
import { configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkDispatch } from "redux-thunk";

import filter from "./reducers/filter";

export const store = configureStore({
  reducer: {
    filter,
    projects,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, void, any>;
