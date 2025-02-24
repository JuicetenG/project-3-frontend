import ProjectDetails from '../ProjectDetails/ProjectDetails';
import ProjectList from '../ProjectList/ProjectList';

const Projects = (props) => {
    return (
        <div>
            {props.currentProject === null ? (
                <ProjectList
                    setCurrentProject={props.setCurrentProject}
                    currentProject={props.currentProject}
                    projects={props.projects}
                    editProject={props.editProject}
                    deleteProject={props.deleteProject}
                />
            ) : (
                <ProjectDetails
                    currentProject={props.currentProject}
                    setCurrentProject={props.setCurrentProject}
                />
            )}
        </div>
    );
};

export default Projects;
