import { useState } from 'react'
import EditForm from '../EditForm/EditForm';
import EditTaskForm from '../EditTaskForm/EditTaskForm';
import './ProjectDetails.css'

const ProjectDetails = (props) => {
    const [editingProject, setEditingProject] = useState(false);
    const [currentTaskId, setCurrentTaskId] = useState(null);
    

    const categorizedTasks = props.currentProject.tasks.reduce((acc, task) => {
      if(!acc[task.category]) {
        acc[task.category] = [];
      } 

      acc[task.category].push(task);
      return acc;
    }, {})
    console.log(categorizedTasks);

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
              <div className="project-info">
                <div className="project-edit-actions">
                  <button className="back-button" onClick={() => props.setCurrentProject(null)}>Back</button>
                  <button className="edit-btn" onClick={() => setEditingProject(true)}>✏️</button>
                </div>
                <h1>{props.currentProject.title}</h1>
                <p className='project-description'>{props.currentProject.description}</p>
              </div>
            )}

            {Object.entries(categorizedTasks).map(([category, items]) => (
              <div key={category} className="task-category">
                <h2>{category}</h2>
                <ul>
                  {items.map((task) => (
                    <li key={task._id} className={`task-item ${task.priority}-priority`}>
                    {currentTaskId === task._id ? (
                          <EditTaskForm 
                            currentTask={task}
                            setCurrentTaskId={setCurrentTaskId}
                            editTask={props.editTask}
                          />
                      ) : (
                        <div className="task-content">
                          <div className="task-header">
                            <span className="priority-badge">{task.priority}</span>
                            <span className="task-name">{task.name}</span>
                          </div> 
                          <div className="task-description">{task.description}</div>
                        </div>
                      )}
                      <div className="task-buttons">
                        <button className="delete-btn" onClick={() => props.deleteTask(task._id)}>🗑️</button>
                        <button className="edit-btn" onClick={() => setCurrentTaskId(task._id)}>✏️</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </main>
       </div>
    )
}

export default ProjectDetails;