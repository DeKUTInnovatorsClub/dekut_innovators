
import malaika from '../assets/images/malaika.png'
import umeme from '../assets/images/umeme.png'
import ngamwa from '../assets/images/ngamwa.png'
import { useNavigate } from 'react-router-dom'
// import ReactCardSlider from 'react-card-slider-component';
export default function Innovations(){
    const navigate = useNavigate()
    return (
        <section className="innovations">
                <h1>Our Innovations</h1>
                <p>Where Bold Ideas Meet Real-World Impact</p>
                <div className='banner'>
                    <h1>Inspire. Create. Innovate.</h1>
                    <p>Ideas are only as powerful as their execution. At the Innovators Club, we help turn abstract concepts into real-world solutions. With hands-on workshops, prototype development, and expert guidance, we ensure that the innovations we create have a lasting impact</p>
                </div>
                <div className="latest-innovations">
                    <h2>Our Latest Innovations</h2>
                    <div className="latest-innovations-grid">
                        <div className="innovation">
                            <img src={malaika} alt="latest innovation photo" />
                            <button onClick={()=>navigate('projects')}>Malaika Project</button>
                        </div>
                        <div className="innovation">
                            <img src={umeme} alt="latest innovation photo" />
                            <button onClick={()=>navigate('projects')}>Umeme Sense</button>
                        </div>
                        <div className="innovation">
                            <img src={ngamwa} alt="latest innovation photo" />
                            <button onClick={()=>navigate('projects')}>Ngamwa Humanitarian Project</button>
                        </div>
                        <div className="innovation">
                            <img src={malaika} alt="latest innovation photo" />
                            <button onClick={()=>navigate('projects')}>Malaika Project</button>
                        </div>
                    </div>
                </div>
        </section>
    )
}