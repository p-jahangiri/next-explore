import React from "react";
import Contact from "./contact";
import s from "./footer.module.scss";
import Sign from "assets/svg/sign2.svg";
export default function Footer() {
  return (
    <div className={s.container}>
      <Contact />
      <div className={s.logo}>
        <Sign  />
        <img src="./logo.png" alt="img" />
      </div>
      <div className={s.text}>
        <p>
          کلیه حقوق برای وبسایت CGnation محفوظ است 1400
        </p>
      </div>
    </div>
  );
}
