import ProjectForm from '../ProjectForm/ProjectForm'
import './SideBar.css'

const SideBar = (props) => {
    return (
        <div>
            <ProjectForm createProject={props.createProject}/>
        </div>
    )
}

export default SideBar