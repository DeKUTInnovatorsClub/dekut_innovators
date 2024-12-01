
import LatestInnovation1 from '../assets/latest-innovation1.png'
import LatestInnovation2 from '../assets/latest-innovation2.png'
import LatestInnovation3 from '../assets/latest-innovation3.png'
import LatestInnovation4 from '../assets/latest-innovation4.png'
import LatestInnovation5 from '../assets/latest-innovation5.png'
import LatestInnovation6 from '../assets/latest-innovation6.png'
// import ReactCardSlider from 'react-card-slider-component';
export default function Innovations(){
    return (
        <section className="innovations">
                <h1>Our Innovations</h1>
                <p>Where Bold Ideas Meet Real-World Impact</p>
                <div className='banner'>
                    <h1>Inspire. Create. Innovate.</h1>
                    <p>Ideas are only as powerful as their execution. At the Innovators Club, we help turn abstract concepts into real-world solutions. With hands-on workshops, prototype development, and expert guidance, we ensure that the innovations we create have a lasting impact</p>
                </div>
                <div className="latest-innovations">
                    <h1>Our Latest Innovations</h1>
                    <div className="latest-innovations-grid">
                        <img src={LatestInnovation1} alt="latest innovation photo" />
                        <img src={LatestInnovation2} alt="latest innovation photo" />
                        <img src={LatestInnovation3} alt="latest innovation photo" />
                        <img src={LatestInnovation4} alt="latest innovation photo" />
                        <img src={LatestInnovation5} alt="latest innovation photo" />
                        <img src={LatestInnovation6} alt="latest innovation photo" />
                    </div>
                </div>
        </section>
    )
}