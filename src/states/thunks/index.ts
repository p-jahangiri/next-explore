import { createAsyncThunk } from "@reduxjs/toolkit";
import gate from "components/gate";
import { ThunkDispatch } from "redux-thunk";

export const getProjectsByThunk = createAsyncThunk(
  "filter/getProjectsByThunk",
  async () => {
    const res = await gate.getProjects();
    return res;
  }
);
