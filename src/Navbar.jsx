import React from "react";
import Logo from "./assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sm:flex justify-between sm:px-24 bg-slate-700">
      <Link to="https://www.isaraerospace.com/" target="_blank">
        <img
          src={Logo}
          alt="isar-aerospace-logo"
          className="max-h-16 sm:max-h-40 mx-auto"
        />
      </Link>

      <div className="flex items-center justify-center text-xs sm:text-2xl pb-4 sm:pb-0">
        <NavLink to="/">
          <p className="px-3 sm:px-16 text-slate-200">Home</p>
        </NavLink>
        <NavLink to="/assignmentA">
          <p className="px-3 sm:px-16 text-slate-200">Assignment A</p>
        </NavLink>
        <NavLink to="/assignmentB">
          <p className="px-3 sm:px-16 text-slate-200">Assignment B</p>
        </NavLink>
        <NavLink to="/assignmentC">
          <p className="px-3 sm:px-16 text-slate-200">Assignment C</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
