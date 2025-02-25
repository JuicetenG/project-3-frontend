import './Dashboard.css';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Projects from '../Projects/Projects';
import SideBar from '../SideBar/SideBar';
import EditForm from '../EditForm/EditForm';

import * as userService from '../../services/userService';
import * as projectService from '../../services/projectService';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);

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

  const addTask = async (projectId, formData) => {
    const newTask = await projectService.createTask(projectId, formData);
    const newCurrentProject = { ...currentProject, tasks: [...currentProject.tasks, newTask] };
    setCurrentProject(newCurrentProject);

    
    const updatedProjectList = projects.map((project) => (
      project._id !== currentProject._id ? project : newCurrentProject
    ));
    setProjects(updatedProjectList);
  }

  const editProject = async (project) => {
    setCurrentProject(project);
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

  return (
    <div className="main-container">
      <main className="projects-container">
        <div className="dashboard-header">
          <h1>Welcome, {user.username}</h1>
        </div>
        <Projects
          projects={projects}
          setCurrentProject={setCurrentProject}
          currentProject={currentProject}
          editProject={editProject}
          deleteProject={deleteProject}
        />
        {currentProject && (
          <EditForm
            project={currentProject}
            setCurrentProject={setCurrentProject}
            setProjects={setProjects}
          />
        )}
      </main>
      <div className="sidebar-container">
        <SideBar
          createProject={createProject}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
          addTask={addTask}
        />
      </div>
    </div>
  );
};

export default Dashboard;
