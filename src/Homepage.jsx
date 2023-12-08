import React from "react";

import Rocket5 from "./assets/rocket5.jpg";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div
        className="bg-cover h-screen"
        style={{ backgroundImage: `url(${Rocket5})` }}
      >
        <div className="flex flex-wrap h-full text-white justify-around pt-24 sm:pt-48">
          <div>
            <div className="text-7xl sm:text-9xl sm:mt-32">SPECTRUM</div>
            <div className="mt-2 ml-4 text-xl">BY HARI PACE</div>
          </div>
          <div className="text-3xl sm:text-3xl -mt-16 sm:mt-0">
            <Link
              to="/assignmentA"
              className="hover:text-slate-300 transition-all duration-300 ease-in-out"
            >
              <p className="p-8">ASSIGNMENT A</p>
            </Link>
            <Link
              to="/assignmentB"
              className="hover:text-slate-300 transition-all duration-300 ease-in-out"
            >
              <p className="p-8">ASSIGNMENT B</p>
            </Link>
            <Link
              to="/assignmentC"
              className="hover:text-slate-300  transition-all duration-300 ease-in-out"
            >
              <p className="p-8">ASSIGNMENT C</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
