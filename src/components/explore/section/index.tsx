import React, { useEffect, useState } from "react";
import s from "./section.module.scss";
import { getViewMode } from "store/selectors/filter";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading, getProjects } from "store/selectors/filter";
import { getProjectsByThunk } from "store/thunks";
import { AppDispatch } from "store";
import Loading from "../loading";
import Card from "./card";
import CardList from "./cardList";
import CardSingle from "./cardSingle";
import { ResponseGetProjectsDataType } from "gate/inerface/projects.interface";

interface SectionProps {
  projects: ResponseGetProjectsDataType[];
}
export default function Section() {
  const projects = useSelector(getProjects);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch<AppDispatch>();
  const viewMode = useSelector(getViewMode);
  

  useEffect(() => {
    dispatch(getProjectsByThunk());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className={s.desktop}>
        {projects?.map((project) => (
          <div key={project.id}>
            <Card project={project} />
          </div>
        ))}
      </div>
      {viewMode === "list" && (
        <div className={s.gridCard}>
          {projects?.map((project) => (
            <div key={project.id}>
              <CardSingle project={project} />
            </div>
          ))}
        </div>
      )}
      {viewMode === "grid" && (
        <div className={s.listCard}>
          {projects?.map((project) => (
            <div key={project.id}>
              <CardList project={project} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
