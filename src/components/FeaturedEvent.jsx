
import EventPhoto from "../assets/latest-innovation5.png"
export default function FeaturedEvent(){
    return (
        <div className="featured-event">
            <img src={EventPhoto} alt="featured event poster" />
            <h3>Tech Hub</h3>
            <p>A vibrant, action-oriented design, showcasing a tech-inspired theme with elements like code snippets, laptops, or collaborative teams. The card should feel dynamic, reflecting the energy and excitement of a hackathon</p>
            <button>Register Today</button>
        </div>
    )
}