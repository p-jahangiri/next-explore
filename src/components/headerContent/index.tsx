import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { bubble as Menu } from "react-burger-menu";
import { useDispatch } from "react-redux";
import { apiMenus } from "store/slice/entity/MenusSlice";
import { useAppDispatch, useAppSelector } from "../../../store/base/reduxHook";
import { apiSlider } from "../../../store/slice/entity/SliderSlice";
import { Logo } from "../utility/logo";
import { SmallLogo } from "../utility/SmallLogo";
import { actionLogout, isLogin } from "store/slice/ui/RegisterSlice";
import { useRouter } from "next/router";

export default function IndexHeader() {
  const dispatch = useAppDispatch();
  const wrapperRef = useRef();
  const router = useRouter();

  const allMenus = useAppSelector((state) => state.entity.menusSlice.data);
  const login = isLogin();

  const [showSideBar, setSideBar] = useState(false);
  const [isOpenSearch, setOpenSearch] = useState(false);
  const [searchIconActive, setSearchIconActive] = useState(false);
  const [searchCatItems, setSearchCatItems] = useState({
    title: "انتخاب کنید",
    value: -1,
  });

  useEffect(() => {
    dispatch(apiMenus());
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpenSearch(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  function inputChangeHandler(input) {
    if (input.target.value !== "") {
      setSearchIconActive(true);
    } else {
      setSearchIconActive(false);
    }
  }

  return (
    <header>
      
      <Menu
        onClose={() => setSideBar(false)}
        customBurgerIcon={false}
        burgerButtonClassName={" burgerMenuButton "}
        right
        isOpen={showSideBar}
      >
        <aside className="aside" role="navigation">
          <ul className={"mb-0 "}>
            <li className={"uploadBtn"}>
              <Link href={"/upload/default"}>
                <a>آپلود پروژه</a>
              </Link>
            </li>
            {allMenus.map((menu) => {
              return (
                <li className={menu.isActive ? "active" : ""}>
                  <Link href={menu.link}>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 15.538 15.539"
                      >
                        <path
                          id="home"
                          d="M15.62,6.758h0L9.28.418a1.43,1.43,0,0,0-2.023,0L.922,6.754.915,6.76A1.43,1.43,0,0,0,1.867,9.2l.044,0h.253v4.665a1.676,1.676,0,0,0,1.674,1.674h2.48a.455.455,0,0,0,.455-.455V11.426a.765.765,0,0,1,.764-.764H9a.765.765,0,0,1,.764.764v3.657a.455.455,0,0,0,.455.455H12.7a1.676,1.676,0,0,0,1.674-1.674V9.2h.234A1.431,1.431,0,0,0,15.62,6.758Zm-.645,1.379a.517.517,0,0,1-.368.152h-.69a.455.455,0,0,0-.455.455v5.12a.765.765,0,0,1-.764.764H10.674v-3.2A1.676,1.676,0,0,0,9,9.752H7.537a1.676,1.676,0,0,0-1.674,1.674v3.2H3.838a.765.765,0,0,1-.764-.764V8.744a.455.455,0,0,0-.455-.455h-.7A.519.519,0,0,1,1.562,7.4h0L7.9,1.062a.52.52,0,0,1,.735,0L14.974,7.4l0,0a.521.521,0,0,1,0,.735Zm0,0"
                          transform="translate(-0.5 0.001)"
                          fill="#f85a2f"
                        />
                      </svg>
                      {menu.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      </Menu>
      <div className={"topNav"}>
        <div className={"mainBoxWrapper d-flex justify-content-between"}>
          <div className={"topNavInner topNaveRight"}>
            <ul className={"d-none d-lg-flex"}>
              {allMenus.map((menu) => {
                return (
                  <li className={menu.isActive ? "active" : ""}>
                    <Link href={menu.link}>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 15.538 15.539"
                        >
                          <path
                            id="home"
                            d="M15.62,6.758h0L9.28.418a1.43,1.43,0,0,0-2.023,0L.922,6.754.915,6.76A1.43,1.43,0,0,0,1.867,9.2l.044,0h.253v4.665a1.676,1.676,0,0,0,1.674,1.674h2.48a.455.455,0,0,0,.455-.455V11.426a.765.765,0,0,1,.764-.764H9a.765.765,0,0,1,.764.764v3.657a.455.455,0,0,0,.455.455H12.7a1.676,1.676,0,0,0,1.674-1.674V9.2h.234A1.431,1.431,0,0,0,15.62,6.758Zm-.645,1.379a.517.517,0,0,1-.368.152h-.69a.455.455,0,0,0-.455.455v5.12a.765.765,0,0,1-.764.764H10.674v-3.2A1.676,1.676,0,0,0,9,9.752H7.537a1.676,1.676,0,0,0-1.674,1.674v3.2H3.838a.765.765,0,0,1-.764-.764V8.744a.455.455,0,0,0-.455-.455h-.7A.519.519,0,0,1,1.562,7.4h0L7.9,1.062a.52.52,0,0,1,.735,0L14.974,7.4l0,0a.521.521,0,0,1,0,.735Zm0,0"
                            transform="translate(-0.5 0.001)"
                            fill="#f85a2f"
                          />
                        </svg>
                        {menu.title}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className={"d-flex d-lg-none"}>
              <li>
                <a onClick={() => setSideBar(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 17 17"
                  >
                    <g
                      id="Group_123"
                      data-name="Group 123"
                      transform="translate(-15.5 -17.5)"
                    >
                      <line
                        id="Line_19"
                        data-name="Line 19"
                        x2="15"
                        transform="translate(16.5 18.5)"
                        fill="none"
                        stroke="#d9d9d9"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                      <line
                        id="Line_20"
                        data-name="Line 20"
                        x2="15"
                        transform="translate(16.5 26)"
                        fill="none"
                        stroke="#d9d9d9"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                      <line
                        id="Line_21"
                        data-name="Line 21"
                        x2="15"
                        transform="translate(16.5 33.5)"
                        fill="none"
                        stroke="#d9d9d9"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <SmallLogo isClickable={true} />
              </li>
            </ul>
          </div>
          <div className={"topNavInner topNavLeft"}>
            <ul className={"d-flex"}>
              {login && (
                <>
                  <li className={"uploadBtn d-none d-lg-block"}>
                    <a onClick={() => dispatch(actionLogout())}>خروج</a>
                  </li>
                  <li className={"uploadBtn d-none d-lg-block"}>
                    <Link href={"/upload/default"}>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="17"
                          viewBox="0 0 21.147 19.66"
                        >
                          <g id="upload" transform="translate(0 0)">
                            <path
                              id="Path_295"
                              data-name="Path 295"
                              d="M17.843,0H3.3A3.308,3.308,0,0,0,0,3.3V14.869a3.308,3.308,0,0,0,3.3,3.3H14.58a.826.826,0,0,0,0-1.652H11.537l-1.9-2.464L15.657,6.4l4.052,4.478a.826.826,0,0,0,1.439-.554V3.3a3.308,3.308,0,0,0-3.3-3.3ZM19.5,8.181l-3.27-3.614a.826.826,0,0,0-1.262.044L8.6,12.707,6.437,9.9a.826.826,0,0,0-.654-.322h0a.826.826,0,0,0-.654.322L3.31,12.268a.826.826,0,0,0,1.31,1.007l1.164-1.513,3.668,4.759H3.3a1.654,1.654,0,0,1-1.652-1.652V3.3A1.654,1.654,0,0,1,3.3,1.652H17.843A1.654,1.654,0,0,1,19.5,3.3Zm0,0"
                              fill="#f85a2f"
                            />
                            <path
                              id="Path_296"
                              data-name="Path 296"
                              d="M82.478,72a2.478,2.478,0,1,0,2.478,2.478A2.481,2.481,0,0,0,82.478,72Zm0,3.3a.826.826,0,1,1,.826-.826A.827.827,0,0,1,82.478,75.3Zm0,0"
                              transform="translate(-76.696 -69.026)"
                              fill="#f85a2f"
                            />
                            <path
                              id="Path_297"
                              data-name="Path 297"
                              d="M357.769,288.617l-.007-.007a2.059,2.059,0,0,0-2.922,0l-1.595,1.573a.826.826,0,0,0,1.16,1.176l1.068-1.053v4.636a.826.826,0,0,0,1.652,0v-4.611l1.022,1.055a.826.826,0,1,0,1.187-1.149Zm0,0"
                              transform="translate(-338.419 -276.105)"
                              fill="#f85a2f"
                            />
                          </g>
                        </svg>
                        آپلود پروژه
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="18"
                          viewBox="0 0 25.505 20.448"
                        >
                          <g id="chat" transform="translate(0 -50.758)">
                            <g
                              id="Group_5"
                              data-name="Group 5"
                              transform="translate(0 50.758)"
                            >
                              <g id="Group_4" data-name="Group 4">
                                <path
                                  id="Path_305"
                                  data-name="Path 305"
                                  d="M18.546,50.758H1.436A1.438,1.438,0,0,0,0,52.194V62.459A1.438,1.438,0,0,0,1.436,63.9H2.546v3.821a.6.6,0,0,0,1.027.425L7.82,63.9h.852a.6.6,0,0,0,0-1.2s-1.13,0-1.142,0a.6.6,0,0,0-.385.174l-3.4,3.4s0-3.008,0-3.024a.6.6,0,0,0-.6-.548H1.436a.233.233,0,0,1-.233-.233V52.194a.233.233,0,0,1,.233-.233H18.546a.233.233,0,0,1,.233.233v3.938a.6.6,0,1,0,1.2,0V52.194A1.438,1.438,0,0,0,18.546,50.758Z"
                                  transform="translate(0 -50.758)"
                                  fill="#fff"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_7"
                              data-name="Group 7"
                              transform="translate(10.657 58.117)"
                            >
                              <g id="Group_6" data-name="Group 6">
                                <path
                                  id="Path_306"
                                  data-name="Path 306"
                                  d="M227.335,198.492H215.359a1.438,1.438,0,0,0-1.436,1.436v7a1.438,1.438,0,0,0,1.436,1.436h7.5l3.038,3.038a.6.6,0,0,0,1.027-.425v-2.612h.413a1.438,1.438,0,0,0,1.436-1.436v-7A1.438,1.438,0,0,0,227.335,198.492Zm.233,8.439a.233.233,0,0,1-.233.233H226.32a.6.6,0,0,0-.6.555c0,.013,0,1.808,0,1.808l-2.185-2.185-.007-.007-.024-.022a.6.6,0,0,0-.4-.15h-7.747a.233.233,0,0,1-.233-.233v-7a.233.233,0,0,1,.233-.233h11.976a.233.233,0,0,1,.233.233Z"
                                  transform="translate(-213.923 -198.492)"
                                  fill="#fff"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_9"
                              data-name="Group 9"
                              transform="translate(17.479 62.453)"
                            >
                              <g id="Group_8" data-name="Group 8">
                                <path
                                  id="Path_307"
                                  data-name="Path 307"
                                  d="M351.488,285.53a.6.6,0,1,0,.6.6A.6.6,0,0,0,351.488,285.53Z"
                                  transform="translate(-350.886 -285.53)"
                                  fill="#fff"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_11"
                              data-name="Group 11"
                              transform="translate(3.914 54.736)"
                            >
                              <g id="Group_10" data-name="Group 10">
                                <path
                                  id="Path_308"
                                  data-name="Path 308"
                                  d="M90.124,130.611H79.174a.6.6,0,0,0,0,1.2h10.95a.6.6,0,1,0,0-1.2Z"
                                  transform="translate(-78.572 -130.611)"
                                  fill="#fff"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_13"
                              data-name="Group 13"
                              transform="translate(3.914 58.714)"
                            >
                              <g
                                id="Group_12"
                                data-name="Group 12"
                                transform="translate(0 0)"
                              >
                                <path
                                  id="Path_309"
                                  data-name="Path 309"
                                  d="M83.329,210.465H79.174a.6.6,0,1,0,0,1.2h4.156a.6.6,0,1,0,0-1.2Z"
                                  transform="translate(-78.572 -210.465)"
                                  fill="#fff"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_15"
                              data-name="Group 15"
                              transform="translate(14.683 62.453)"
                            >
                              <g id="Group_14" data-name="Group 14">
                                <path
                                  id="Path_310"
                                  data-name="Path 310"
                                  d="M295.361,285.53a.6.6,0,1,0,.6.6A.6.6,0,0,0,295.361,285.53Z"
                                  transform="translate(-294.759 -285.53)"
                                  fill="#fff"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_17"
                              data-name="Group 17"
                              transform="translate(20.275 62.453)"
                            >
                              <g id="Group_16" data-name="Group 16">
                                <path
                                  id="Path_311"
                                  data-name="Path 311"
                                  d="M407.6,285.53a.6.6,0,1,0,.6.6A.6.6,0,0,0,407.6,285.53Z"
                                  transform="translate(-407.001 -285.53)"
                                  fill="#fff"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="18"
                          viewBox="0 0 17.293 20.711"
                        >
                          <g id="bell" transform="translate(-1.9 0.1)">
                            <g
                              id="Group_1"
                              data-name="Group 1"
                              transform="translate(8.837 0)"
                            >
                              <path
                                id="Path_298"
                                data-name="Path 298"
                                d="M12.991,3.572a.427.427,0,0,1-.427-.427V1.709a.855.855,0,1,0-1.709,0V3.145a.427.427,0,1,1-.855,0V1.709a1.709,1.709,0,1,1,3.419,0V3.145A.427.427,0,0,1,12.991,3.572Z"
                                transform="translate(-10 0)"
                                fill="#fff"
                                stroke="#fff"
                                strokeWidth="0.2"
                              />
                            </g>
                            <g
                              id="Group_2"
                              data-name="Group 2"
                              transform="translate(7.555 17.093)"
                            >
                              <path
                                id="Path_299"
                                data-name="Path 299"
                                d="M11.491,23.419A3,3,0,0,1,8.5,20.427a.427.427,0,1,1,.855,0,2.137,2.137,0,0,0,4.273,0,.427.427,0,1,1,.855,0A3,3,0,0,1,11.491,23.419Z"
                                transform="translate(-8.5 -20)"
                                fill="#fff"
                                stroke="#fff"
                                strokeWidth="0.2"
                              />
                            </g>
                            <g
                              id="Group_3"
                              data-name="Group 3"
                              transform="translate(2 2.564)"
                            >
                              <path
                                id="Path_300"
                                data-name="Path 300"
                                d="M17.811,18.384H3.282a1.282,1.282,0,0,1-.833-2.256,5.942,5.942,0,0,0,2.115-4.548v-2.6a5.982,5.982,0,1,1,11.965,0v2.6a5.935,5.935,0,0,0,2.108,4.542,1.282,1.282,0,0,1-.826,2.262ZM10.546,3.855A5.133,5.133,0,0,0,5.419,8.982v2.6a6.79,6.79,0,0,1-2.411,5.2.427.427,0,0,0,.274.755H17.811a.427.427,0,0,0,.278-.752,6.8,6.8,0,0,1-2.414-5.2v-2.6a5.133,5.133,0,0,0-5.128-5.128Z"
                                transform="translate(-2 -3)"
                                fill="#fff"
                                stroke="#fff"
                                strokeWidth="0.2"
                              />
                            </g>
                          </g>
                        </svg>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/register/login"}>
                      <a>
                        <img
                          src={"/assets/images/userProfile.png"}
                          alt={"profile"}
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="8"
                          viewBox="0 0 16.003 9.452"
                        >
                          <path
                            id="Path_312"
                            data-name="Path 312"
                            d="M15.747,101.488l-.524-.528a.877.877,0,0,0-1.238,0l-5.98,5.98-5.987-5.987a.878.878,0,0,0-1.238,0l-.524.525a.876.876,0,0,0,0,1.238l7.128,7.153A.9.9,0,0,0,8,110.15h0a.9.9,0,0,0,.619-.281l7.121-7.134a.888.888,0,0,0,0-1.247Z"
                            transform="translate(0 -100.698)"
                            fill="#737373"
                          />
                        </svg>
                      </a>
                    </Link>
                  </li>
                </>
              )}
              {!login && (
                <li className={"uploadBtn d-none d-lg-block"}>
                  <a onClick={() => router.push("register/login")}>
                    ثبت نام / ورود
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <main>
        <div className={"mainBoxWrapper d-flex justify-content-between"}>
          <div className={"mainLogo"}>
            <Link href={"/"}>
              <a>
                <img src={"/assets/images/mainLogo.png"} alt={"mainLogo"} />
              </a>
            </Link>
          </div>
          <div className={"searchBoxWrapper"}>
            <div className={"searchBox"}>
              <button onClick={() => setOpenSearch(!isOpenSearch)}>
                {searchCatItems.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="8"
                  viewBox="0 0 16.601 9.805"
                >
                  <g id="down-arrow" transform="translate(0 -100.698)">
                    <g
                      id="Group_18"
                      data-name="Group 18"
                      transform="translate(0 100.698)"
                    >
                      <path
                        id="Path_312"
                        data-name="Path 312"
                        d="M16.335,101.518l-.544-.548a.91.91,0,0,0-1.284,0l-6.2,6.2-6.21-6.21a.91.91,0,0,0-1.284,0l-.544.544a.909.909,0,0,0,0,1.284l7.394,7.421a.928.928,0,0,0,.644.291h0a.928.928,0,0,0,.642-.291l7.387-7.4a.922.922,0,0,0,0-1.294Z"
                        transform="translate(0 -100.698)"
                        fill="#737373"
                      />
                    </g>
                  </g>
                </svg>
              </button>
              <div
                className={isOpenSearch ? "catMenu show" : "catMenu"}
                role="menu"
                ref={wrapperRef}
              >
                <ul>
                  <li
                    className={
                      searchCatItems.value === "artists" ? "active" : ""
                    }
                  >
                    {/* <a
                      onClick={() => {
                        setSearchCatItems({
                          title: "هنرمندان",
                          value: "artists",
                        });
                        setOpenSearch(false);
                      }}
                    >
                      هنرمندان
                    </a> */}
                  </li>
                  <li
                    className={
                      searchCatItems.value === "artBooks" ? "active" : ""
                    }
                  >
                    <a
                      onClick={() => {
                        setSearchCatItems({
                          title: "آثار",
                          value: "artBooks",
                        });
                        setOpenSearch(false);
                      }}
                    >
                      آثار
                    </a>
                  </li>
                  <li
                    className={
                      searchCatItems.value === "category" ? "active" : ""
                    }
                  >
                    <a
                      onClick={() => {
                        setSearchCatItems({
                          title: "شاخه",
                          value: "category",
                        });
                        setOpenSearch(false);
                      }}
                    >
                      شاخه
                    </a>
                  </li>
                </ul>
              </div>
              <div className={"searchBoxInputWrapper"}>
                <input
                  placeholder={"جستجو"}
                  onChange={(event) => inputChangeHandler(event)}
                />
                <svg
                  className={searchIconActive ? "active" : ""}
                  id="search"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 27.662 27.662"
                >
                  <path
                    id="Path_292"
                    data-name="Path 292"
                    d="M29.934,20.691a9.21,9.21,0,1,0-14.575-2.068L4.969,29.013l3.618,3.618L18.977,22.24A9.208,9.208,0,0,0,29.934,20.691ZM8.587,31.184,6.416,29.013l9.5-9.5a8.6,8.6,0,0,0,2.171,2.171Zm9.045-11.216A8.187,8.187,0,0,1,29.209,8.389h0A8.187,8.187,0,0,1,17.632,19.968Z"
                    transform="translate(-4.969 -4.969)"
                    fill="#737373"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </header>
  );
}
