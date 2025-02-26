import ProjectForm from '../ProjectForm/ProjectForm'
import TaskForm from '../TaskForm/TaskForm';

import './SideBar.css'

const SideBar = (props) => {

  const handleProjectChange = (e) => {
    const selectedProject = props.projects.find(project => project._id === e.target.value)
    props.setCurrentProject(selectedProject)
  }

  return (
    <div className='sidebar-container'>
      {props.currentProject === null ? (
        <div className="project-section">
          <h2>Add a Project</h2>
          <ProjectForm createProject={props.createProject} />
        </div>
      ) : (
        <div className="task-section">
          <h2>Add task to {props.currentProject.title}</h2>
          <TaskForm
            currentProject={props.currentProject}
            setCurrentProject={props.setCurrentProject}
            addTask={props.addTask}
            projects={props.projects} 
          />
          <div className="project-dropdown">
            <label htmlFor="project-select">Select Project:</label>
            <select id="project-select" onChange={handleProjectChange} value={props.currentProject._id}>
              {props.projects.map(project => (
                <option key={project._id} value={project._id}>
                  {project.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar