import React from "react";
import s from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={s.continer}>
      <div className={s.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
