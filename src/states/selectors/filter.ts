import { RootState } from "states";

export const getViewMode = (state: RootState) => state.filter.viewMode;
