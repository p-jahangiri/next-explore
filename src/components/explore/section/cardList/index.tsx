import Image from "next/image";
import React from "react";
import s from "./cardList.module.scss";

export default function CardList({ project }) {
  return (
    <div className={s.container}>
      <img src="https://picsum.photos/200/300?nocache=<?php echo microtime(2); ?>" />
      <img src="https://picsum.photos/200/300?nocache=<?php echo microtime(1); ?>" />
      <img src="https://picsum.photos/200/300?nocache=<?php echo microtime(3); ?>" />
    </div>
  );
}
