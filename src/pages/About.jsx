
import '../styles/about.css'

export default function About(){
    const leaders = [
        {
            name: "John Doe",
            title: "chairperson",
            image: "/src/assets/images/leader1.jpg"
        },
        {
            name: "Jane Smith", 
            title: "Vice Chairperson",
            image: "/src/assets/images/leader2.jpg"
        },
        {
            name: "Mike Johnson",
            title: "Technical Lead",
            image: "/src/assets/images/leader3.jpg"
        },
        {
            name: "Sarah Wilson",
            title: "Secretary",
            image: "/src/assets/images/leader4.jpg"
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Innovate. Collaborate. Transform.</h1>
                    <h2>Join a community of forward-thinkers, creators, and problem-solvers. Together, we're shaping the future through innovation and collaboration at DeKUT.</h2>
                    <button className="hero-btn">Explore</button>
                </div>
            </div>

            {/* About Us Section */}
            <section className="about-section">
                <h2>About Us</h2>
                <p>
                    Welcome to DeKUT Innovators Club, where technology meets creativity and innovation thrives. 
                    We are a vibrant community of forward-thinking students passionate about exploring the 
                    latest technological trends, developing cutting-edge solutions, and fostering a culture 
                    of innovation at Dedan Kimathi University of Technology.
                </p>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>
                    At Innovators, we're dedicated to fostering a culture of creativity and collaboration. We believe that by bringing together diverse perspectives and skill sets, we
                    can tackle complex challenges and drive meaningful change. Our mission is to empower individuals to think outside the box, develop innovative solutions, and make a
                    positive impact on the world.
                </p>
            </section>

            {/* History Section */}
            <section className="history-section">
                <h2>Our History</h2>
                <p>
                    Founded in 2020, the DeKUT Innovators Club emerged from a simple yet powerful vision: 
                    to create a space where students could collaborate, innovate, and push the boundaries 
                    of technology. What started as a small group of passionate computer science students 
                    has grown into one of the most active and influential student organizations on campus.
                </p>
                <p>
                    Over the years, we have organized numerous hackathons, workshops, and tech talks, 
                    attracting participants from across the university and beyond. Our members have gone 
                    on to secure internships at leading tech companies, launch successful startups, and 
                    contribute to open-source projects that impact thousands of users worldwide.
                </p>
            </section>

            {/* Leadership Team Section */}
            <section className="team-section">
                <h2>Meet the Team</h2>
                <div className="leaders-grid">
                    {leaders.map((leader, index) => (
                        <div key={index} className="leader-card">
                            <div 
                                className="leader-image"
                                style={{
                                    backgroundImage: `url(${leader.image}), url('https://via.placeholder.com/200x200/3b82f6/ffffff?text=${leader.name.split(' ').map(n => n[0]).join('')}')`
                                }}
                            ></div>
                            <div className="leader-info">
                                <h3>{leader.name}</h3>
                                <p>{leader.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Join Community Section */}
            <section className="join-section">
                <h2>Join Our Community</h2>
                <p>
                    Become a part of a vibrant community of innovators. Gain access to exclusive resources, events, and opportunities to collaborate on exciting projects. Whether you're
                    a seasoned professional or just starting your journey, Innovators is the place to be.
                </p>
                <div className="join-buttons">
                    <button className="join-btn primary">Join Us</button>
                    <button className="join-btn secondary">Learn More</button>
                </div>
            </section>
        </div>
    )
}