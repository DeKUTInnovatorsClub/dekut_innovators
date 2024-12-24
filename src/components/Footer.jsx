import React from "react";
import "../styles/footer.css";
import { FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="fcont">
      <div className="fcont1">
        <div className="fcont11">
          <h2>DeKUT Innovators Club</h2>
          <h3>Dedan Kimathi University of Technology</h3>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjPTJdWIZxH-Z1xffmUZpAnmU9-DUestbpB1bd_GA0xPLM0w/viewform?usp=header" target="_blank">Join us</a>
        </div>
        <div className="fcont12">
          <div className="fcont13">
            <div className="fcont14">
              <h4>Home</h4>
              <h4>About us</h4>
              <h4>Projects</h4>
              <h4>Events</h4>
              <h4>Blog</h4>
              <h4>Contact us</h4>
            </div>
            <div className="fcont14">
              <h4>Services</h4>
              <h4>Resources</h4>
              <h4>Community</h4>
              <h4>Opportunities</h4>
              <h4>Support</h4>
              <h4>FAQ</h4>
            </div>
            <div className="fcont14">
              <h4>Legal</h4>
              <h4>Privacy Policy</h4>
              <h4>Terms of Service</h4>
              <h4>Cookie Policy</h4>
              <h4>Disclaimer</h4>
              <h4>Accessibility</h4>
            </div>
          </div>

          <div className="fcont15">
            <h3>Follow us</h3>
            <div className="fcont16">
              <a href="#" aria-label="Facebook">
                <FaFacebook style={{color:'blue', fontSize:'40px'}}/>
              </a>
              <a href="#" aria-label="WhatsApp">
                <FaWhatsapp style={{color:'orange', fontSize:'40px'}}/>
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter style={{color: 'purple', fontSize:'40px'}}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}