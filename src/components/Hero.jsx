import { useNavigate } from 'react-router-dom'
import "../styles/hero.css";
import img1 from "../assets/images/img1.png";

export default function Hero() {
  const navigate = useNavigate()
  return (
    <div className="hecont">
      <div className="hecont1">
        <div className="hecont10">
          <h2>
            DeKUT Innovators Club is committed to empowering students to think
            creatively, solve real-world problems, and collaborate with others
            to make a difference.
          </h2>
          <h5>We believe every idea has the potential to change the world.</h5>
          
          <div className="button-container">
            <a href='#become-a-member' className="btn1" >Join us</a>
            <button className="btn2" onClick={() => navigate('contact-us')}>Contact us</button>
          </div>

          <div className="hecont100">
            <div className="hecont11">
              <div className="hecont111">
                <h2>3k+</h2>
                <h4>Members</h4>
              </div>
              <div className="hecont112">
                <h2>200+</h2>
                <h4>Projects</h4>
              </div>
              <div className="hecont113">
                <h2>30+</h2>
                <h4>Community</h4>
              </div>
              <div className="hecont114">
                <h2>50+</h2>
                <h4>Events</h4>
              </div>
            </div>
          </div>
        </div>

        <img src={img1} alt="Innovators Club" />
      </div>
    </div>
  );
}