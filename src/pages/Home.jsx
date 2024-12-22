import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Innovations from "../components/Innovations";
import Testimonials from "../components/Testimonials";
import UpcomingEvents from "../components/UpcomingEvents";
import WhyJoinUs from "../components/WhyJoinUs";
import ReactCardSlider from 'react-card-slider-component';

const testimonials = [
    {
      content: "Joining the Innovators Club has transformed my tech skills in IoT and AI while exposing me to real-world applications through industrial trips and competitions. It’s been an incredible journey of learning, innovation, and growth!",
      name: "Leslie Alexander",
      designation: "Embedded Software Engineer",
      avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    },
    {
      content: "Joining the Innovators Club has transformed my tech skills in IoT and AI while exposing me to real-world applications through industrial trips and competitions. It’s been an incredible journey of learning, innovation, and growth!",
      name: "Leslie Alexander",
      designation: "Embedded Software Engineer",
      avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    },
    {
      content: "Joining the Innovators Club has transformed my tech skills in IoT and AI while exposing me to real-world applications through industrial trips and competitions. It’s been an incredible journey of learning, innovation, and growth!",
      name: "Leslie Alexander",
      designation: "Embedded Software Engineer",
      avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    },
    {
      content: "Joining the Innovators Club has transformed my tech skills in IoT and AI while exposing me to real-world applications through industrial trips and competitions. It’s been an incredible journey of learning, innovation, and growth!",
      name: "Leslie Alexander",
      designation: "Embedded Software Engineer",
      avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    },
  ];
  const testimonialsElements = testimonials.map((testimonial) => {
    return (<Testimonials {...testimonial} />)
  })
export default function Home(){
    return (
        <div>
            <Hero />
            <AboutUs />
            <Innovations />
            <UpcomingEvents />
            <WhyJoinUs />
            {/* <ReactCardSlider slides={testimonialsElements}/> */}
            <div className="testimonials-container">
            <h1>Testimonials</h1>
            <div className="testimonials">
              {testimonialsElements}
            </div>

            </div>
        </div>
    )
}