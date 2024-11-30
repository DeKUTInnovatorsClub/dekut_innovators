import FeaturedEvent from "./FeaturedEvent";

export default function UpcomingEvents(){
    return (
        <section className="upcoming-events">
            <h1>Upcoming Events</h1>
            <p>Discover, Learn, Innovate: Upcoming Events You Won't Want to Miss!</p>
            <div className="featured-events-container">
               <FeaturedEvent /> 
               <FeaturedEvent /> 
               <FeaturedEvent /> 
            </div>
        </section>
    )
}