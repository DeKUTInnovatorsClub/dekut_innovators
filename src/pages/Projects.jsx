import Project from "../components/Project"
export default function Projects(){
    return (
        <div className="events">
            <h2>Upcoming Events</h2>
            <hr />
            <div className="upcoming-events-container">
                <Project />
                <Project />
                {/* <Event /> */}

            </div>
            <h2>Past Events</h2>
            <hr />
            <div className="past-events">
                <Project />
                <Project />
                <Project />

            </div>
        </div>
    )
}