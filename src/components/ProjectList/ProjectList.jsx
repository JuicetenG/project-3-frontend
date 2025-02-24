const ProjectList = (props) => {
  return (
    <ul>
      <h1>Projects</h1>
      {props.projects.map((project) => (
        <li key={project._id} onClick={() => props.setCurrentProject(project)}>
          <div>
            <strong>{project.title}</strong>
            <br />
            {project.description}
          </div>
          <button onClick={(e) => {
            e.stopPropagation(); 
            props.editProject(project); 
          }}>
            Edit
          </button>
          <button onClick={(e) => {
            e.stopPropagation(); 
            props.deleteProject(project._id); 
          }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
