import React from "react";
import { Link } from "react-router-dom";
import Ps5Logo from "../assets/Ps5.png";

function NavBar() {
  return (
    <>
      <div className="w-full h-18  top-0 left-0 bg-linear-to-r from-[#003791] to-[#2D5CFE] text-black flex sticky items-center justify-around px-10 z-50 ">
        {/* Left: Logo */}
        <div className="flex items-center h-full ">
          <Link to="/">
            <img
              src={Ps5Logo}
              alt="ps5 logo"
              className="max-h-40 object-contain cursor-pointer
             "
            />
          </Link>
        </div>

        {/* Center: Main Menu */}
        <ul className="flex gap-10 text-2xl font-semibold  ">
          <li className="hover:text-white/20 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-white/20 transition">
            <Link to="/News">News</Link>
          </li>
          <li className="hover:text-white/20 transition">
            <Link to="/console">Console</Link>
          </li>
          <li className="hover:text-white/20 transition">
            <Link to="/products">Products</Link>
          </li>
        </ul>

        {/* Right: Auth Buttons */}
        <div className="flex gap-5 text-xl font-semibold ">
          <button className=" border-black px-4 py-1 rounded-full hover:text-white/20 transition">
            <Link to="/sign in">sign in</Link>
          </button>
          <button className=" border-black px-4 py-1 rounded-full hover:text-white/20 transition ">
            <Link to="/createAccount">sign up</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
