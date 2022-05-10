import React from "react";
import Select from "../select";
import Arrow from "assets/svg/arrow.svg";
import ArrowTop from "assets/svg/arrow-top-flash.svg";
import MenuTowIcon from "assets/svg/menu-tow-icon.svg";
import MenuFourIcon from "assets/svg/menu-four-icon.svg";
import s from "./filter.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "store/reducers/filter";
const FilterBar: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  function onChange(
    event: React.ChangeEvent<HTMLSelectElement>,
    searchParams: "category" | "branches" | "groping" | "software"
  ) {
    router.push({
      pathname: "/",
      query: {
        ...router.query,
        [searchParams]: event.currentTarget.value,
      },
    });
  }

  function toggleViewMode(mode: "list" | "grid") {
  return  () => dispatch(toggleMode(mode));
  }

  return (
    <>
      <div className={s.container}>
        <div className={s.filterBarLeft}>
          <div className={s.sort}>
            <Select
              onChange={(event) => onChange(event, "category")}
              value={router.query?.category}
              options={[
                { value: "option1", label: "آخرین اخبار" },
                { value: "option2", label: "محبوبترین" },
                { value: "option3", label: "بیشترین امتیاز" },
                { value: "option4", label: "بیشترین بازدید" },
              ]}
            />
          </div>
          <div className={s.menuBox}>
            <ArrowTop className={s.menuArrowTop} />
            <MenuFourIcon
              className={s.menuMenuFourIcon}
              onClick={toggleViewMode("list")}
            />
            <Arrow className={s.menuArrow} />
            <MenuTowIcon
              className={s.menuMenuTowIcon}
              onClick={toggleViewMode("grid")}
            />
          </div>
        </div>
        <div className={s.filterBarRight}>
          <div className={s.groping}>
            <Select
              onChange={(event) => onChange(event, "groping")}
              value={router.query?.groping}
              options={[
                { value: "option1", label: "دسته بندی" },
                { value: "option2", label: "آثار" },
              ]}
            />
          </div>
          <div className={s.software}>
            <Select
              onChange={(event) => onChange(event, "software")}
              value={router.query?.software}
              options={[
                { value: "option1", label: "نرم افزار" },
                { value: "option2", label: "آثار" },
              ]}
            />
          </div>

          <div className={s.branches}>
            <Select
              onChange={(event) => onChange(event, "branches")}
              value={router.query?.branches}
              options={[
                { value: "option1", label: "شاخه" },
                { value: "option2", label: "آثار" },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default FilterBar;
