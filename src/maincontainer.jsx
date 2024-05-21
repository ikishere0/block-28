import React from "react";
import { Routes, Route } from "react-router-dom";
import Blue from "./blue";
import Red from "./red";
import Green from "./green";
import Orange from "./orange";
import Home from "./Home";

export default function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/green" element={<Green />} />
        <Route path="/orange" element={<Orange />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
