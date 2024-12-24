import Event from "../components/Event"
export default function Events(){
    return (
        <div className="events">
            <h2>Upcoming Events</h2>
            <hr />
            <div className="upcoming-events-container">
                <Event />
                <Event />
                {/* <Event /> */}

            </div>
            <h2>Past Events</h2>
            <hr />
            <div className="past-events">
                <Event />
                <Event />
                <Event />

            </div>
        </div>
    )
}