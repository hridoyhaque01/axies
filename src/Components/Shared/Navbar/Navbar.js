import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../../../utils/getImages";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

export default function Navbar() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({});
  const submenuRef = useRef({});
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const handleDropdown = (menu) => {
    setIsSubmenuOpen((prev) => ({
      [menu]: !prev[menu],
    }));
  };
  return (
    <header className="absolute top left-0 w-full bg bg-transparent px-6 py-3 text-base md:text-sm lg:text-base xl:text-lg font-semibold text-pureWhite">
      <div className="max-w-[1840px] mx-auto">
        <nav className="flex items-center justify-between w-full">
          <div className="flex items-center justify-between w-full">
            <Link>
              <img
                src={logo}
                alt=""
                className="md:w-[100px] lg:w-auto duration-300"
              />
            </Link>
            <div className="flex md:hidden item-center gap-6">
              <button
                type="button"
                className="flex items-center justify-center max-w-max"
                onClick={() => setOpenSearchBar((prev) => !prev)}
              >
                <span className="material-symbols-outlined">search</span>
              </button>
              <button
                className="block md:hidden text-pureWhite"
                onClick={() => setOpenMenu(true)}
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
          <div
            className={`fixed md:relative top-0 right-0 h-screen md:h-auto overflow-auto md:overflow-visible bg-darkSemi md:bg-transparent w-full duration-300 z-40 ${
              openMenu
                ? " max-w-[300px] md:max-w-full"
                : "max-w-0 md:max-w-full"
            }`}
          >
            <div className="p-6 md:p-0 flex flex-col md:flex-row md:items-center gap-6 md:gap-3 lg:gap-6">
              <div className="text-right mb-6 md:hidden w-full">
                <button
                  type="button"
                  className="text-errorColor"
                  onClick={() => setOpenMenu(false)}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-3 lg:gap-6">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="relative group">
                  <p
                    className="inline-flex items-center gap-1 md:gap-0 peer cursor-pointer"
                    onClick={() => handleDropdown("explore")}
                  >
                    <span>Explore</span>
                    <span className="material-symbols-outlined text-xl leading-none">
                      expand_more
                    </span>
                  </p>
                  <div
                    className={`static md:absolute left-0 overflow-hidden duration-300 w-auto whitespace-nowrap md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible md:group-hover:-translate-y-2 md:max-h-max  ${
                      !isSubmenuOpen["explore"] && "max-h-0 md:max-h-max"
                    }`}
                    ref={(ref) => (submenuRef.current["explore"] = ref)}
                    style={{
                      maxHeight:
                        isSubmenuOpen["explore"] &&
                        `${submenuRef.current["explore"]?.scrollHeight}px`,
                    }}
                  >
                    <ul className="flex flex-col gap-4 md:gap-0 bg-darkHigh rounded-md px-6 py-4 mt-4 md:px-0 ">
                      <li>
                        <NavLink
                          to="/"
                          className="inline-block md:px-6 md:py-2"
                        >
                          Explore Style 1
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/"
                          className="inline-block md:px-6 md:py-2"
                        >
                          Explore Style 2
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/"
                          className="inline-block md:px-6 md:py-2"
                        >
                          Explore Style 3
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/"
                          className="inline-block md:px-6 md:py-2"
                        >
                          Explore Style 4
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/"
                          className="inline-block md:px-6 md:py-2"
                        >
                          Live Auctions
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/"
                          className="inline-block md:px-6 md:py-2"
                        >
                          Item Details
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="relative group">
                  <p
                    className="inline-flex items-center gap-1 md:gap-0 peer cursor-pointer"
                    onClick={() => handleDropdown("activity")}
                  >
                    <span>Activity</span>
                    <span className="material-symbols-outlined text-xl leading-none">
                      expand_more
                    </span>
                  </p>
                  <div
                    className={`static md:absolute left-0 overflow-hidden duration-300 w-auto whitespace-nowrap md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible md:group-hover:-translate-y-2 md:max-h-max ${
                      !isSubmenuOpen["activity"] && "max-h-0 md:max-h-max"
                    }`}
                    ref={(ref) => (submenuRef.current["activity"] = ref)}
                    style={{
                      maxHeight:
                        isSubmenuOpen["activity"] &&
                        `${submenuRef.current["activity"]?.scrollHeight}px`,
                    }}
                  >
                    <ul className="flex flex-col gap-4 md:gap-0 bg-darkHigh rounded-md px-6 py-4 mt-4 md:px-0">
                      <li>
                        <NavLink
                          to="/"
                          className="inline-block md:px-6 md:py-2"
                        >
                          Activity Style 1
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/"
                          className="inline-block md:px-6 md:py-2"
                        >
                          Activity Style 2
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="relative group">
                  <p
                    className="inline-flex items-center gap-1 md:gap-0 peer cursor-pointer"
                    onClick={() => handleDropdown("pages")}
                  >
                    <span>Pages</span>
                    <span className="material-symbols-outlined text-xl leading-none">
                      expand_more
                    </span>
                  </p>
                  <div
                    className={`static md:absolute left-0 overflow-hidden duration-300 w-auto whitespace-nowrap md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible md:group-hover:-translate-y-2 md:max-h-max ${
                      !isSubmenuOpen["pages"] && "max-h-0 md:max-h-max"
                    }`}
                    ref={(ref) => (submenuRef.current["pages"] = ref)}
                    style={{
                      maxHeight:
                        isSubmenuOpen["pages"] &&
                        `${submenuRef.current["pages"]?.scrollHeight}px`,
                    }}
                  >
                    <ul className="flex flex-col gap-4 md:gap-0 bg-darkHigh rounded-md px-6 py-4 mt-4 md:px-0">
                      <li>
                        <NavLink
                          to="/"
                          className="inline-block md:px-6 md:py-2"
                        >
                          Authors
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/"
                          className="inline-block md:px-6 md:py-2"
                        >
                          Author
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/"
                          className="inline-block md:px-6 md:py-2"
                        >
                          Wallet Connect
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/"
                          className="inline-block md:px-6 md:py-2"
                        >
                          Create
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/"
                          className="inline-block md:px-6 md:py-2"
                        >
                          Login
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/"
                          className="inline-block md:px-6 md:py-2"
                        >
                          Sign up
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="relative group">
                  <p
                    className="inline-flex items-center gap-1 md:gap-0 peer cursor-pointer"
                    onClick={() => handleDropdown("contact")}
                  >
                    <span>Contact</span>
                    <span className="material-symbols-outlined text-xl leading-none">
                      expand_more
                    </span>
                  </p>
                  <div
                    className={`static md:absolute left-0 overflow-hidden duration-300 w-auto whitespace-nowrap md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible md:group-hover:-translate-y-2 md:max-h-max ${
                      !isSubmenuOpen["contact"] && "max-h-0 md:max-h-max"
                    }`}
                    ref={(ref) => (submenuRef.current["contact"] = ref)}
                    style={{
                      maxHeight:
                        isSubmenuOpen["contact"] &&
                        `${submenuRef.current["contact"]?.scrollHeight}px`,
                    }}
                  >
                    <ul className="flex flex-col gap-4 md:gap-0 bg-darkHigh rounded-md px-6 py-4 mt-4 md:px-0">
                      <li>
                        <NavLink
                          to="/"
                          className="inline-block md:px-6 md:py-2"
                        >
                          Contact Style 1
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/"
                          className="inline-block md:px-6 md:py-2"
                        >
                          Contact Style 2
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col md:flex-row md:items-center gap-4 lg:gap-4">
                <button
                  type="button"
                  className="hidden md:flex items-center justify-center max-w-max"
                  onClick={() => setOpenSearchBar((prev) => !prev)}
                >
                  <span className="material-symbols-outlined">search</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center px-2 py-[2px] border border-primaryColor rounded-full gap-1 whitespace-nowrap max-w-max"
                >
                  <span className="material-symbols-outlined text-base md:text-lg">
                    wallet
                  </span>
                  <span className="text-[8px] md:text-sm">Wallet connect</span>
                </button>

                <ThemeToggler></ThemeToggler>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div
        className={`absolute -bottom-14 left-1/2 -translate-x-1/2 w-full max-w-md px-2 duration-200 ${
          openSearchBar ? "opacity-100 visible" : "opacity-0 invisible "
        }`}
      >
        <div className="flex items-center w-full shadow-sm">
          <input
            type="text"
            className="w-full px-5 h-12 rounded-tl-sm rounded-bl-sm text-xs outline-none text-darkHigh"
            placeholder="Type your question here"
          />
          <button
            type="button"
            className="flex items-center bg-primaryColor text-pureWhite px-5 h-12 rounded-tr-sm outline-none rounded-br-sm"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
    </header>
  );
}
