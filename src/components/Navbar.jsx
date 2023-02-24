import React from "react";
import "../style/navbar.css";
import Logo from "../assets/computer.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src={Logo} alt="logo" />
        <p>PPLG</p>
      </div>
      <div>navigations</div>
    </nav>
  );
}

export default Navbar;
