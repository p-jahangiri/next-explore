import { FunctionComponent, SVGAttributes } from "react";
import s from "./navbar.module.scss";
import Menu from "assets/svg/menu.svg";
import Logo from "assets/svg/logo-G.svg";
import Arrow from "assets/svg/arrow.svg";
import ProfileImg from "assets/svg/profileImg.svg";
import Alarm from "assets/svg/alarm.svg";
import Massage from "assets/svg/massage.svg";
import Upload from "assets/svg/upload.svg";
import { NavbarData } from "static";
export interface NavbarProps {
  title?: string;
  icon?: FunctionComponent<SVGAttributes<SVGElement>>;
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={s.navbar}>
      <div className={s.navbarLeft}>
        <Arrow className={s.iconArrow}/>
        <ProfileImg className={s.iconProfile}/>
        <Alarm className={s.iconAlarm}/>
        <Massage className={s.iconMassage}/>
        <div className={s.btnUpload}>
          <h5>آپلود پروژه</h5>
          <Upload />
        </div>
      </div>

      <div className={s.navbarRight}>
        {NavbarData.map((item, index: number) => {
          return (
            <div key={index} className={s.navbarItem}>
              {item.icon && <item.icon />}
              {item.title && <h5>{item.title}</h5>}
            </div>
          );
        })}
      </div>
      <div className={s.navbarRightMobil}>
        <Logo />
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
