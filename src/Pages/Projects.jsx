import React from 'react'
import Hero from '../Component/Projects/Hero'
import Project from "../Component/Projects/Project";

function Projects() {
    return (
        <div>
            <Hero title={"Our Projects"} route={"projects"} prevRoute={"Home"} nextRoute={"Projects"} />
            <Project />
        </div>
    )
}

export default Projects