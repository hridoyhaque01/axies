import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import Navbar2 from "../Components/Shared/Navbar/Navbar2";

function Layout() {
  return (
    <div className="bg-testColor dark:bg-darkHigh">
      <Navbar2></Navbar2>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
