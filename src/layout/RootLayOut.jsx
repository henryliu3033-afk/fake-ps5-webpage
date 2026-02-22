import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/Nav.jsx";
import React from "react";

function RootLayOut() {
  return (
    <>
      <NavBar />
      {/* ✅ Removed pt-20 — navbar is sticky so no offset needed after CSS reset */}
      <div>
        <Outlet />
      </div>
    </>
  );
}
export default RootLayOut;
