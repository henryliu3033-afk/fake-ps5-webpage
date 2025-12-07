import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/Nav.jsx";
import React from "react";

function RootLayOut() {
  return (
    <>
      <NavBar />
      <div className="pt-20">
        <Outlet />
      </div>
    </>
  );
}
export default RootLayOut;
