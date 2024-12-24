import Project from "../components/Project"
export default function Projects(){
    return (
        <div className="events">
            <h2>Ongoing projects</h2>
            <hr />
            <div className="ongoing-projects-container">
                <Project />
                <Project />
                {/* <Event /> */}

            </div>
            <h2>Past projects</h2>
            <hr />
            <div className="past-projects">
                <Project />
                <Project />
                <Project />

            </div>
        </div>
    )
}