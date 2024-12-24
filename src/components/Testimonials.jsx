
export default function Testimonials(props){
  return (
    <div className="testimonial">
      <p>{props.content}</p>
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