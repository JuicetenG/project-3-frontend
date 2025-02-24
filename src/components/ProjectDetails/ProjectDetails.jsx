
const ProjectDetails = (props) => {
  console.log(props);

  return (
    <div className="project-details-container">
      <main className="details-container">
        <h1>{props.currentProject.title}</h1>
        <p>{props.currentProject.description}</p>
        <ul>
          {props.currentProject.tasks.map((task, index) => (
            <li key={index}>
              {task.name}: {task.description}
            </li>
          ))}
        </ul>
        <button onClick={() => props.setCurrentProject(null)}>back</button>
      </main>
    </div>
  )
}

export default ProjectDetails;