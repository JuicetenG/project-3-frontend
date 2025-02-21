
// import './projects.css'

const Projects = (props) => {
    return(
        <ul>
           <h1>Projects</h1>
           {props.projects.map((project, idx) => (
            <li key={idx}>{project.title}
            <br />
            {project.description}</li>
           ))} 
        </ul>
    )
}

export default Projects;