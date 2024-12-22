import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/images/logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hcont">
      <div className="hcont1">
        <img src={logo} alt="Innovators Club Logo" style={{ objectFit: "contain" }} className="logo"/>
        
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        
        <nav className={`hcont11 ${isMenuOpen ? 'menu-open' : ''}`}>
          <NavLink to={"/"} className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to={"about"} className={({ isActive }) => (isActive ? "active" : "")}>About us</NavLink>
          <NavLink to={"projects"} className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
          <NavLink to={"events"} className={({ isActive }) => (isActive ? "active" : "")}>Events</NavLink>
          <NavLink to={"blog"} className={({ isActive }) => (isActive ? "active" : "")}>Blog</NavLink>
          <NavLink to={"contactus"} className={({ isActive }) => (isActive ? "active" : "")}>Contact us</NavLink>
        </nav>
        
        <button onClick={toggleMenu}>Join us</button>
      </div>
    </div>
  );
}