import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Assignment1 from "./Assignment1";
import Assignment2 from "./Assignment2";
import Assignment3 from "./Assignment3";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/assignmentA" element={<Assignment1 />} />
        <Route path="/assignmentB" element={<Assignment2 />} />
        <Route path="/assignmentC" element={<Assignment3 />} />
      </Routes>
    </>
  );
}

export default App;
