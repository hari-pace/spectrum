import React from "react";
import Rocket6 from "./assets/rocket6.jpg";

const Assignment3 = () => {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${Rocket6})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10">
        <div className="text-center pt-12 sm:pt-20 pb-4 sm:pb-8  text-slate-100 text-xl sm:text-4xl font-bold">
          General thoughts
        </div>

        <div className="text-center mx-20  text-slate-100 text-md sm:text-2xl">
          <div className="pb-2">- The challenge was fun!</div>
          <div>- The API was good and easy to navigate </div>
        </div>

        <div className="text-center  pt-12 sm:pt-20 pb-4 sm:pb-8  text-slate-100 text-xl sm:text-4xl font-bold">
          Issues
        </div>

        <div className="text-center mx-8 sm:mx-20  text-slate-100 text-md sm:text-2xl">
          - I had a problem with the last step of Assignment B 'Give the user
          the option to act in Spectrum using the third endpoint' - I tried to
          create a post request on the given HTTP endpoint but it returned a 405
          error code, stating 'method not allowed'. If I have done something
          wrong and was supposed to follow a different method, it would be great
          to get feedback here{" "}
        </div>

        <div className="text-center  pt-12 sm:pt-20 pb-4 sm:pb-8  text-slate-100 text-xl sm:text-4xl font-bold">
          Improvements
        </div>

        <div className="text-center mx-8 sm:mx-20 pb-24  text-slate-100 text-md sm:text-2xl">
          - I could only really say to add more data so we have more information
          to play with! Other than that I thought everything was great
        </div>
      </div>
    </div>
  );
};

export default Assignment3;
