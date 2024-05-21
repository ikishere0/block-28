import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function Footer() {
  return (
    <div id="navbar" className="footer">
      <Link to="/blue" className="link">
        Blue
      </Link>
      <Link to="/red" className="link">
        Red
      </Link>
      <Link to="/green" className="link">
        Green
      </Link>
      <Link to="/orange" className="link">
        Orange
      </Link>
      <Link to="/" className="link">
        Home
      </Link>
    </div>
  );
}
