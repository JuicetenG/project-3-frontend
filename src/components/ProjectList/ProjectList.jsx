import './ProjectList.css'
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

const ProjectList = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useContext(UserContext);

  const filteredProjects = props.projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="list-container">
      <ul>
      <div className="dashboard-header">
          <h1>Welcome, {user.username}</h1>
          {!props.currentProject && (
            <input 
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="project-search-input"
            />
          )}
        </div>
        <h1>Projects</h1>
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project._id} onClick={() => props.setCurrentProject(project)}>
              <div className="project-content">
                <strong>{project.title}</strong>
                <br />
                {project.description}
              </div>
              <div className="project-actions">
                <button className="delete-btn" onClick={(e) => {
                  e.stopPropagation();
                  props.deleteProject(project._id);
                }}>
                🗑️
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