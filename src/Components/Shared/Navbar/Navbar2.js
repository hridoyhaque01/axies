import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../../../utils/getImages";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

export default function Navbar2() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="absolute top left-0 w-full bg bg-transparent px-6 py-3 text-lg xl:text-xl font-semibold text-pureWhite whitespace-nowrap">
      <div className="max-w-[1180px] mx-auto">
        <nav className="flex items-center justify-between w-full">
          <div className="flex items-center justify-between w-full">
            <Link>
              <img
                src={logo}
                alt=""
                className="md:w-[100px] lg:w-auto duration-300"
              />
            </Link>

            <button
              className="block md:hidden text-pureWhite"
              onClick={() => setOpenMenu(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
          <div
            className={`fixed flex flex-col justify-between md:relative top-0 right-0 h-screen md:h-auto overflow-auto md:overflow-visible bg-darkSemi md:bg-transparent duration-300 z-40 ${
              openMenu ? "w-full" : "w-0 md:w-full"
            }`}
          >
            <div className="flex flex-col md:flex-row items-center md:justify-end text-center gap-6 md:gap-3 lg:gap-6">
              <div className="text-right mb-6 md:hidden w-full">
                <button
                  type="button"
                  className="text-errorColor"
                  onClick={() => setOpenMenu(false)}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 lg:gap-8">
                <li>
                  <NavLink to="/">Generate</NavLink>
                </li>
                <li>
                  <NavLink to="/">Go Pro</NavLink>
                </li>
                <li>
                  <NavLink to="/">Project</NavLink>
                </li>
                <li>
                  <NavLink to="/">Log In</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="block lg:py-5 px-4 py-3 lg:px-6 bg-primaryColor rounded-lg max-w-max"
                  >
                    Create free account
                  </NavLink>
                </li>
              </ul>
              <ThemeToggler></ThemeToggler>
            </div>

            <div className="flex md:hidden">hshs</div>
          </div>
        </nav>
      </div>
    </header>
  );
}
