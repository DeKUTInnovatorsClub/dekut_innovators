import AboutGrid1 from '../assets/about-grid1.png'
import AboutGrid2 from '../assets/about-grid2.png'
import AboutGrid3 from '../assets/about-grid3.png'
import AboutGrid4 from '../assets/about-grid4.png'

export default function AboutUs(){
    return (
        <section className="about-us-section">
            <h1>About Us</h1>
            <p>Welcome to the Innovators Club!</p>
            <div className="image-grid">
                <img src={AboutGrid1} alt="A technology image" />
                <img src={AboutGrid2} alt="A technology image" />
                <img src={AboutGrid3} alt="A technology image" />
                <img src={AboutGrid4} alt="A technology image" />
            </div>
            <div className="about-us-content">
              <div>
                <h3>Unleash Your Potential: Where Ideas Turn into Innovation!</h3>
                <p>At the Innovators Club, we are a dynamic community of forward-thinkers, creators, and change-makers united by our passion for transforming ideas into reality. Our mission is to inspire and empower individuals from all backgrounds to push the boundaries of what's possible, solve complex challenges, and make a meaningful impact in the world....</p>
                <button>Read More</button>
              </div>  
              <div>
                <h3>Unleash Your Potential: Where Ideas Turn into Innovation!</h3>
                <p>At the Innovators Club, we are a dynamic community of forward-thinkers, creators, and change-makers united by our passion for transforming ideas into reality. Our mission is to inspire and empower individuals from all backgrounds to push the boundaries of what's possible, solve complex challenges, and make a meaningful impact in the world....</p>
                <button>Read More</button>
              </div>  
            </div>
        </section>
    )
}
