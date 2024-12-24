import EventPhoto from "../assets/images/hike.png"
export default function Event(){
    return (
        <div className="event">
            <img src={EventPhoto} alt="event poster" />
            <div className="about-event">
                <h2 style={{fontSize:"1.5rem"}}>Hike to Nyeri Hill</h2>
                <p>Date: 10th September 2024</p>
                <p>Description: Two day Event, A Camp and Hike to Nyeri Hill Two day Event, A Camp and Hike to Nyeri Hill Two day Event, A Camp and Hike to Nyeri Hill </p>
                <p>Registration Link: <a href="#" style={{color: "blue", textDecoration:"underline"}}>https://register/hike-to-nyeri-hill</a></p>
            </div>    
        </div>
    )
}