
// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import * as projectService from '../../services/projectService'

const ProjectDetails = (props) => {
    // console.log(props)
    console.log(props)
    
    return (
       <div className="project-details-container">
        <main className="details-container">
            <h1>{props.currentProject.title}</h1>
            <p>{props.currentProject.description}</p>
        </main>
       </div>
    )
}

export default ProjectDetails;