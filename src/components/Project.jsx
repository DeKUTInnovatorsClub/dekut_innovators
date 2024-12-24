import umemePhoto from "../assets/images/umeme.png"
export default function Project(){
    return (
        <div className="project">
            <img src={umemePhoto} alt="project photo" />
            <div className="project-details">
                <h2 style={{fontSize:"1.5rem"}}>Umeme Sense</h2>
                <p>an advanced real-time and remote smart energy meter that uses LoRa technology and data analytics to provide insights into energy consumption. It helps industries optimize usage, reduce costs, and enhance sustainability with its user-friendly interface and predictive analytics features. </p>
                <p>Want to collaborate or more details? Call: +254700000002</p>
            </div>    
        </div>
    )
}