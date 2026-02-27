import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ps5Logo from "../assets/ps5.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full h-16 top-0 left-0 bg-linear-to-r from-[#003791] to-[#2D5CFE] text-white flex sticky items-center justify-between px-6 z-50">
        {/* Logo */}
        <div className="flex items-center h-full">
          <Link to="/">
            <img src={Ps5Logo} alt="ps5 logo" className="max-h-35 object-contain cursor-pointer" />
          </Link>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold">
          <li className="hover:text-white/60 transition"><Link to="/">Home</Link></li>
          <li className="hover:text-white/60 transition"><Link to="/News">News</Link></li>
          <li className="hover:text-white/60 transition"><Link to="/console">Console</Link></li>
          <li className="hover:text-white/60 transition"><Link to="/products">Products</Link></li>
        </ul>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex gap-4 text-base font-semibold">
          <Link to="/sign in" className="border border-white/40 px-4 py-1.5 rounded-full hover:bg-white/10 transition">Sign In</Link>
          <Link to="/createAccount" className="bg-white text-blue-700 px-4 py-1.5 rounded-full hover:bg-blue-100 transition">Sign Up</Link>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#003791] text-white flex flex-col items-center py-6 gap-5 text-lg font-semibold z-40 w-full sticky top-16">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/News" onClick={() => setMenuOpen(false)}>News</Link>
          <Link to="/console" onClick={() => setMenuOpen(false)}>Console</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <div className="flex gap-4 mt-2">
            <Link to="/sign in" onClick={() => setMenuOpen(false)} className="border border-white/40 px-4 py-1.5 rounded-full">Sign In</Link>
            <Link to="/createAccount" onClick={() => setMenuOpen(false)} className="bg-white text-blue-700 px-4 py-1.5 rounded-full">Sign Up</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
