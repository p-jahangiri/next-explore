import api from "./api";
import { ResponseGetProjectsDataType } from "./inerface/projects.interface";

const home = {
  getProjects: () => api.get<ResponseGetProjectsDataType[]>("project"),
};

export default {
  ...home,
};
