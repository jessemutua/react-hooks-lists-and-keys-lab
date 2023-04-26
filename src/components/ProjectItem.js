import React from "react";

function ProjectItem({ name, about, technologies }) {
    const technologiesUsed = technologies.map((technology, index) => ( <
        span key = { index } > { technology } < /span>
    ))

    return ( <
        div className = "project-item" >
        <
        h3 > { name } < /h3> <
        p > { about } < /p> <
        div className = "technologies" > { /* render a <span> for each technology in the technologies array */ } { technologiesUsed } <
        /div> <
        /div>
    );
}

export default ProjectItem;