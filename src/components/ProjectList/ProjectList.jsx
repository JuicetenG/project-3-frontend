import './ProjectList.css'

const ProjectList = (props) => {
  return (
    <div className="list-container">
      <ul>
        <h1>Projects</h1>
        <div className="project-grid">
          {props.projects.map((project) => (
            <div className="project-card" key={project._id} onClick={() => props.setCurrentProject(project)}>
              <div className="project-content">
                <strong>{project.title}</strong>
                <br />
                {project.description}
              </div>
              <div className="project-actions">
                <button onClick={(e) => {
                  e.stopPropagation();
                  props.editProject(project);
                }}>
                  Edit
                </button>
                <button className="delete-btn" onClick={(e) => {
                  e.stopPropagation();
                  props.deleteProject(project._id);
                }}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default ProjectList;
