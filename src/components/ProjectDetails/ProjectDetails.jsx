import { useState } from 'react'
import EditForm from '../EditForm/EditForm';
import EditTaskForm from '../EditTaskForm/EditTaskForm';

const ProjectDetails = (props) => {
    // console.log(props)
    console.log(props);
    const [editingProject, setEditingProject] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);

    const categorizedTasks = props.currentProject.tasks.reduce((acc, task) => {
      if(!acc[task.category]) {
        acc[task.category] = [];
      } 

      acc[task.category].push(task);
      return acc;
    }, {})
    console.log(Object.entries(categorizedTasks))
    return (
       <div className="project-details-container">
        <main className="details-container">
            {editingProject === true ? (
              <EditForm 
                currentProject={props.currentProject}
                editProject={props.editProject}
                setEditingProject={setEditingProject}
              />
            ) : (
              <div>
                <h1>{props.currentProject.title}</h1>
                <p>{props.currentProject.description}</p>
              </div>
            )}

            {Object.entries(categorizedTasks).map(([category, items]) => (
              <div key={category}>
                <h2>{category}</h2>
                <ul>
                  {items.map((task) => (
                    <li key={task._id}>
                      {currentTask !== null && currentTask._id === task._id ? (
                        <div>
                          <EditTaskForm 
                            currentTask={currentTask}
                            setCurrentTask={setCurrentTask}
                            editTask={props.editTask}
                          />
                        </div>
                      ) : (
                        <div>
                          {task.name}: {task.description}
                          <button onClick={() => props.deleteTask(task._id)}>X</button>
                          <button onClick={() => setCurrentTask(task)}>edit</button>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <button onClick={() => props.setCurrentProject(null)}>back</button>
            <button onClick={() => setEditingProject(true)}>edit</button>
        </main>
       </div>
    )
}

export default ProjectDetails;