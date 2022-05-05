import React from "react";
import clsx from "clsx";
import s from "./card.module.scss";
import Like from "assets/svg/lick.svg";
import Eay from "assets/svg/eay.svg";
import Profile from "assets/svg/profileImg.svg";
import { useSelector } from "react-redux";
import { getViewMode } from "states/selectors/filter";
import { ResponseGetProjectsDataType } from "components/gate/inerface/projects.interface";

export default function CardList({
  project,
}: {
  project: ResponseGetProjectsDataType;
}) {
  const viewMode = useSelector(getViewMode);
  if (viewMode === "list") {
    return (
      <div className={s.container}>
        <img src="./book.png" alt="book" />
        <div className={s.itemCard}>
          <div>
            <Eay />
            <span>{project.count_visit}</span>
          </div>
          <div className={s.like}>
            <Like />
            <span>{project.count_like}</span>
          </div>
          <div className={s.user}>
            <p>{project?.user?.first_name + " " + project?.user?.last_name}</p>
            <Profile />
          </div>
        </div>
      </div>
    );
  }
}

export  function CardGrid({
  project,
}: {
  project: ResponseGetProjectsDataType;
}) {
  const viewMode = useSelector(getViewMode);
  if (viewMode === "grid") {
    return (
      <div className={s.grid}>
        <img src="./book.png" alt="book" />
      </div>
    );
  }
}
