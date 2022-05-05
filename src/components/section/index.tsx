import React, { useEffect, useState } from "react";
import clsx from "clsx";
import s from "./section.module.scss";
import Like from "assets/svg/lick.svg";
import Eay from "assets/svg/eay.svg";
import Profile from "assets/svg/profileImg.svg";
import { ResponseGetProjectsDataType } from "components/gate/inerface/projects.interface";
import gate from "components/gate";
import Card, { CardGrid } from "./card";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading, getProjects } from "states/selectors/filter";
import { getProjectsByThunk } from "states/thunks";
import { AppDispatch } from "states";

export default function Section() {
  const projects = useSelector(getProjects);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getProjectsByThunk());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className={s.desktop}>
        {projects?.map((project) => (
          <div className={s.openDesk} key={project.id}>
            <img src="./book.png" alt="book" />
            <div className={s.itemCard}>
              <div className={s.eay}>
                <Eay />
                <span>{project.count_visit}</span>
              </div>
              <div className={s.like}>
                <Like />
                <span>{project.count_like}</span>
              </div>
              <div className={s.user}>
                <p>
                  {project?.user?.first_name + " " + project?.user?.last_name}
                </p>
                <Profile />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={s.container}>
        {projects?.map((project) => (
          <div key={project.id}>
            <Card project={project} />
          </div>
        ))}
      </div>
      <div className={s.grid}>
        {projects?.map((project) => (
          <div key={project.id}>
            <CardGrid project={project} />
          </div>
        ))}
      </div>
    </>
  );
}
