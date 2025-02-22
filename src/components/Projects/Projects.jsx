
// import './projects.css'
import { Link } from 'react-router'

const Projects = (props) => {
    return(
        <ul>
           <h1>Projects</h1>
           {props.projects.map((project) => (
            <li key={project._id}>
                <Link to={`/project/${project._id}`}>{project.title}</Link>
                <br />
                {project.description}
            </li>
           ))} 
        </ul>
    )
}

export default Projects;