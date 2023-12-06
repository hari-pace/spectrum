import React from "react";
import Rocket from "./assets/rocket.jpg";
import Rocket2 from "./assets/rocket2.jpg";
import Rocket3 from "./assets/rocket3.jpg";

const Homepage = () => {
  return (
    <>
      <div
        className="bg-cover h-screen"
        style={{ backgroundImage: `url(${Rocket3})` }}
      ></div>
    </>
  );
};

export default Homepage;
