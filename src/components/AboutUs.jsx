import { useNavigate } from 'react-router-dom'
import partnershipImg from '../assets/images/partnership.png'
import trainingImg from '../assets/images/training.png'
import projectsImg from '../assets/images/projects.png'
import eventsImg from '../assets/images/events.png'
import map from '../assets/images/map.png'

export default function AboutUs(){
    const navigate = useNavigate()
    return (
        <section className="about-us-section">
            <h1>About Us</h1>
            <div className='about-intro'>
              <p>Welcome to DeKUT Innovators Club, where technology meets creativity. </p>
              <p>Join us for hands-on training, exciting projects, and opportunities to showcase your skills. Be part of the future of innovation at DeKUT.</p>
            </div>
            <button onClick={()=> navigate('about')}>Learn More</button>
            <h2>What we do</h2>
            <div className="what-we-do">
              <div className="activity">
                <h3>Training Sessions</h3>
                <img src={trainingImg} alt="" />
                <button onClick={()=> navigate('about')}>Learn more</button>
              </div>
              <div className="activity">
                <h3>Projects</h3>
                <img src={projectsImg} alt="" />
                <button onClick={()=> navigate('projects')}>Learn more</button>
              </div>
              <div className="activity">
                <h3>Partnerships</h3>
                <img src={partnershipImg} alt="" />
                <button onClick={()=> navigate('about')}>Learn more</button>
              </div>
              <div className="activity">
                <h3>Events/Competitions</h3>
                <img src={eventsImg} alt="" />
                <button onClick={()=> navigate('events')}>Learn more</button>
              </div>
            </div>
            
        </section>
    )
}
