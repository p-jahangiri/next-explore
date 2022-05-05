import React, { useEffect, useState } from "react";
import clsx from "clsx";
import s from "./section.module.scss";
import Like from "assets/svg/lick.svg";
import Eay from "assets/svg/eay.svg";
import Profile from "assets/svg/profileImg.svg";
import { ResponseGetProjectsDataType } from "components/gate/inerface/projects.interface";
import gate from "components/gate";
import Card, { CardGrid } from "./card";

export default function Section() {
  const [projects, setProjects] = useState<ResponseGetProjectsDataType[]>();
  async function getProjects() {
    try {
      const result = await gate.getProjects();
      setProjects(result);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProjects();
  }, []);

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
