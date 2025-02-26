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
          <h1>{user.username}'s Project Dashboard</h1>
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
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <div className="card-grid-container" key={project._id}>
              <div className="project-card"  onClick={() => props.setCurrentProject(project)}>
                <div className="project-content">
                  <h2>{project.title}</h2>
                  <hr />
                  <div>{project.description}</div>
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
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default ProjectList;