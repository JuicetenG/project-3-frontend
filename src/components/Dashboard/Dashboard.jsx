import './Dashboard.css';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Projects from '../Projects/Projects';
import SideBar from '../SideBar/SideBar';
import * as userService from '../../services/userService';
import * as projectService from '../../services/projectService';

const Dashboard = ({ currentProject, setCurrentProject }) => {
  const { user } = useContext(UserContext);
  const [projects, setProjects] = useState([]);
  // const [currentProject, setCurrentProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    
    // THIS IS AN EXAMPLE OF AN API CALL 
    // AFTER YOU ARE LOGGED IN, PLEASE LOOK AT THE USERSERVICE
    // HEADERS FOR SENDING THE JWT TOKEN OVER


    const fetchUsers = async () => {
      try {
        const fetchedUsers = await userService.index();
        console.log(fetchedUsers);
      } catch (err) {
        console.log(err);
      }
    };
    if (user) fetchUsers();

    const fetchProjects = async () => {
      try {
        const fetchedProjects = await projectService.index();
        const userProjects = fetchedProjects.filter((project) => project.user._id === user._id);
        setProjects(userProjects);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProjects();
  }, [user.username]);

  const createProject = async (projectFormData) => {
    try {
      const newProject = await projectService.create(projectFormData);
      setProjects([...projects, newProject]);
    } catch (err) {
      console.log(err);
    }
  };

  
  const editProject = async (projectFormData) => {
    if (!currentProject) return;
    try {
      const updatedProject = await projectService.editProject(projectFormData, currentProject._id);
      setCurrentProject(updatedProject);
      setProjects(syncProjects(updatedProject));
        
    } catch (err) {
      console.log(err);
    }
};

const deleteProject = async (projectId) => {
  try {
    await projectService.deleteProject(projectId);
    const updatedProjectList = projects.filter((project) => project._id !== projectId);
    setProjects(updatedProjectList);
    if (currentProject && currentProject._id === projectId) {
      setCurrentProject(null);
    }
  } catch (err) {
    console.log(err);
  }
};

const addTask = async (projectId, formData) => {
  try {
    const newTask = await projectService.createTask(projectId, formData);
    const newCurrentProject = { ...currentProject, tasks: [...currentProject.tasks, newTask] };
    setCurrentProject(newCurrentProject);
    setProjects(syncProjects(newCurrentProject));

  } catch(err) {
    console.log(err);
  }
};

const editTask = async (formData, taskId) => {
  try {
    const updatedTask = await projectService.editTask(currentProject._id, taskId, formData);
    console.log(updatedTask);
    
    const newTaskList = currentProject.tasks.map((task) => (
      task._id !== taskId ? task : updatedTask
    ));

    const newCurrentProject = {...currentProject, tasks: [...newTaskList]};
  
    setCurrentProject(newCurrentProject);
    setProjects(syncProjects(newCurrentProject));
    
  } catch(err) {
    console.log(err);
  }
}


const deleteTask = async (taskId) => {
  try {
    await projectService.deleteTask(currentProject._id, taskId);
    const newTaskList = currentProject.tasks.filter((task) => task._id !== taskId);
    const newCurrentProject = {...currentProject, tasks: [...newTaskList]};
    setCurrentProject(newCurrentProject);
    setProjects(syncProjects(newCurrentProject));

  } catch(err) {
    console.log(err);
  }
}

function syncProjects(newCurrentProject) {
  return projects.map((project) => (
    project._id !== currentProject._id ? project : newCurrentProject
  ));
}

const filteredProjects = projects.filter((project) =>
  project.title.toLowerCase().includes(searchTerm.toLowerCase())
)


  return (
    <div className="main-container">
      <main className="projects-container">
        <div className="dashboard-header">
          {!currentProject && (
            <h1>Welcome, {user.username}</h1>
          )}
          {!currentProject && (
            <input 
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="project-search-input"
            />
          )}
        </div>
        <Projects
          projects={filteredProjects}
          setCurrentProject={setCurrentProject}
          currentProject={currentProject}
          editProject={editProject}
          deleteProject={deleteProject}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      </main>
      <div className="sidebar-container">
        <SideBar
          createProject={createProject}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
          addTask={addTask}
          projects={projects}
        />
      </div>
    </div>
  );
};

export default Dashboard;