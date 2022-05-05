import s from "./search.module.scss";
import Conation from "assets/svg/cgnation.svg";
import Search from "assets/svg/search.svg";
import Arrow from "assets/svg/arrow.svg";
import { KeyboardEvent } from "react";
import { useRouter } from "next/router";

export interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const router = useRouter();
  function handleOnKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      router.push({
        pathname: "/",
        query: {
          ...router.query,
          search: event.currentTarget.value,
        },
      });
      event.currentTarget.value = "";
    }
  }
  function onChange(
    event: React.ChangeEvent<HTMLSelectElement>,
    searchParams: "sort"
  ) {
    router.push({
      pathname: "/",
      query: {
        ...router.query,
        [searchParams]: event.currentTarget.value,
      },
    });
  }
  return (
    <div className={s.container}>
      <div className={s.search}>
        <div className={s.select}>
          <select
            onChange={(event) => onChange(event, "sort")}
            value={router.query?.sort}
          >
            <option value="option1">هنرمندان</option>
            <option value="option2">آثار</option>
          </select>
          <Arrow className={s.arrow} />
        </div>
        <div className={s.inputSearch}>
          <Search className={s.iconSearch} />
          <input
            type="text"
            defaultValue={router.query?.search}
            onKeyDown={handleOnKeyDown}
            placeholder="جستجو"
            className={s.search}
          />
        </div>
      </div>
      <Conation className={s.icon} />
    </div>
  );
};

export default SearchBar;
