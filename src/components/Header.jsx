import React from "react";
import "../styles/header.css";
import logo from "../assets/logo1.png";
export default function Header() {
  return (
    <div className="hcont">
      <div className="hcont1">
        <img src={logo} style={{ objectFit: "contain" }}></img>
        <div className="hcont11">
          <a onClick={() => {}}>
            <h3>Home</h3>
          </a>
          <a onClick={() => {}}>
            <h3>About us</h3>
          </a>
          <a onClick={() => {}}>
            <h3>Projects</h3>
          </a>
          <a onClick={() => {}}>
            <h3>Events</h3>
          </a>
          <a onClick={() => {}}>
            <h3>Blog</h3>
          </a>
          <a onClick={() => {}}>
            <h3>Contact us</h3>
          </a>
        </div>
        <button onClick={() => {}}>Join us</button>
      </div>
    </div>
  );
}
