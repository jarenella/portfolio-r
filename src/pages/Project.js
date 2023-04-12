import React from "react";
import { useParams } from "react-router-dom";

function Project() {
    const { projectName } = useParams();
    
    return (
        <h1>{projectName}</h1>
    )
}

export default Project;