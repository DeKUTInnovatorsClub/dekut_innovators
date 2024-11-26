import AboutUs from "../components/AboutUS";
import Hero from "../components/Hero";
import Innovations from "../components/Innovations";
import Testimonials from "../components/Testimonials";
import UpcomingEvents from "../components/UpcomingEvents";
import WhyJoinUs from "../components/WhyJoinUs";

export default function Home(){
    return (
        <div>
            <Hero />
            <AboutUs />
            <Innovations />
            <UpcomingEvents />
            <WhyJoinUs />
            <Testimonials />
        </div>
    )
}