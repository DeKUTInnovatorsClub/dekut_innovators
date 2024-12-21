import React, { useState } from "react";
import "../styles/header.css";
import logo from "../assets/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hcont">
      <div className="hcont1">
        <img src={logo} alt="Innovators Club Logo" style={{ objectFit: "contain" }} />
        
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        
        <div className={`hcont11 ${isMenuOpen ? 'active' : ''}`}>
          <a href="#" onClick={toggleMenu}>Home</a>
          <a href="#" onClick={toggleMenu}>About us</a>
          <a href="#" onClick={toggleMenu}>Projects</a>
          <a href="#" onClick={toggleMenu}>Events</a>
          <a href="#" onClick={toggleMenu}>Blog</a>
          <a href="#" onClick={toggleMenu}>Contact us</a>
        </div>
        
        <button onClick={toggleMenu}>Join us</button>
      </div>
    </div>
  );
}