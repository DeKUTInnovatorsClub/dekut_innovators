import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Innovations from "../components/Innovations";
import Testimonials from "../components/Testimonials";
import UpcomingEvents from "../components/UpcomingEvents";
import WhyJoinUs from "../components/WhyJoinUs";
import ReactCardSlider from 'react-card-slider-component';

const testimonials = [
    {
      content: "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      name: "Leslie Alexander",
      designation: "Freelance React Developer",
      avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    },
    {
      content: "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      name: "Leslie Alexander",
      designation: "Freelance React Developer",
      avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    },
    {
      content: "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      name: "Leslie Alexander",
      designation: "Freelance React Developer",
      avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    },
    {
      content: "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      name: "Leslie Alexander",
      designation: "Freelance React Developer",
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
            {testimonialsElements}

            </div>
        </div>
    )
}