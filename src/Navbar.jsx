import React from "react";
import Logo from "./assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sm:flex justify-between sm:px-24 bg-slate-700 z-10">
      <Link to="https://www.isaraerospace.com/" target="_blank">
        <img
          src={Logo}
          alt="isar-aerospace-logo"
          className="max-h-16 sm:max-h-40 mx-auto"
        />
      </Link>

      <div className="flex items-center justify-center text-xs sm:text-2xl pb-4 sm:pb-0">
        <NavLink
          to="/"
          exact
          style={({ isActive }) =>
            isActive
              ? {
                  background: "#708090",
                  borderRadius: "10px",
                }
              : { background: "none" }
          }
        >
          <p className="px-3 py-1 sm:px-12 text-slate-200 hover:text-blue-500 transition-all duration-300 ease-in-out">
            Home
          </p>
        </NavLink>
        <NavLink
          to="/assignmentA"
          style={({ isActive }) =>
            isActive
              ? {
                  background: "#708090",
                  borderRadius: "10px",
                }
              : { background: "none" }
          }
        >
          <p className="px-3 py-1 sm:px-12 text-slate-200 hover:text-blue-500 transition-all duration-300 ease-in-out">
            Assignment A
          </p>
        </NavLink>
        <NavLink
          to="/assignmentB"
          style={({ isActive }) =>
            isActive
              ? {
                  background: "#708090",
                  borderRadius: "10px",
                }
              : { background: "none" }
          }
        >
          <p className="px-3 py-1 sm:px-12 text-slate-200 hover:text-blue-500 transition-all duration-300 ease-in-out">
            Assignment B
          </p>
        </NavLink>
        <NavLink
          to="/assignmentC"
          style={({ isActive }) =>
            isActive
              ? {
                  background: "#708090",
                  borderRadius: "10px",
                }
              : { background: "none" }
          }
        >
          <p className="px-3 py-1 sm:px-12 text-slate-200 hover:text-blue-500 transition-all duration-300 ease-in-out">
            Assignment C
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
