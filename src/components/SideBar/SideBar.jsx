import ProjectForm from '../ProjectForm/ProjectForm'
import './SideBar.css'

const SideBar = (props) => {
    return (
        <div className='sidebar-container'>
          <h2>Add a Project</h2>
            <ProjectForm createProject={props.createProject}/>
        </div>
    );
}

export default SideBar