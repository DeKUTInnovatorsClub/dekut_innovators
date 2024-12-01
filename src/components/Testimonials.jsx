
export default function Testimonials(props){
  return (
    <div className="testimonial">
      <p>We provide an environment that encourages out-of-the-box thinking. From brainstorming sessions to innovation workshops, we offer the tools and support to help you explore and develop your ideas.</p>
      <div>
        <img src={props.avatar} alt="" />
        <div>
        <h6>{props.name}</h6>
        <h6>{props.designation}</h6>

        </div>
      </div>
    </div>
  )
}