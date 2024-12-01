import React from "react";
import "../styles/footer.css";
import logo from "../assets/logo.jpg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { purple } from "@mui/material/colors";
export default function Footer() {
  return (
    <div className="fcont">
      <div className="fcont1">
        <div className="fcont11">
          <h2>Innovators Club</h2>
          <h3> Dedan Kimathi University of Technology</h3>
          <button onClick={() => {}}> Join us</button>
        </div>
        <div className="fcont12">
          <div className="fcont13">
            <div className="fcont14">
              <h4>Home</h4>
              <h4>About us</h4>
              <h4>Projects </h4>
              <h4>Events</h4>
              <h4>Blog</h4>
              <h4>Contact us</h4>
            </div>
            <div className="fcont14">
              <h4>Home</h4>
              <h4>About us</h4>
              <h4>Projects </h4>
              <h4>Events</h4>
              <h4>Blog</h4>
              <h4>Contact us</h4>
            </div>
            <div className="fcont14">
              <h4>Home</h4>
              <h4>About us</h4>
              <h4>Projects </h4>
              <h4>Events</h4>
              <h4>Blog</h4>
              <h4>Contact us</h4>
            </div>
          </div>

          <div className="fcont15">
            <h3>Follow us</h3>
            <div className="fcont16">
              <a onClick={() => {}}>
                <FaFacebook style={{color:'blue', fontSize:'40px'}}/>
              </a>
              <a onClick={() => {}}>
                <IoLogoWhatsapp style={{color:'orange', fontSize:'40px'}}/>
              </a>
              <a onClick={() => {}}>
                <FaTwitter style={{color: 'purple', fontSize:'40px'}}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
