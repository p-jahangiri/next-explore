import { ResponseGetProjectsDataType } from "gate/inerface/projects.interface";
import { RootState } from "store";

export const getViewMode = (state: RootState) => state.filter.viewMode;
export const getProjects = (state: RootState) =>
  state.projects.projects as ResponseGetProjectsDataType[];
export const getIsLoading = (state: RootState) => state.projects.isLoading;
