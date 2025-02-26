import ProjectDetails from '../ProjectDetails/ProjectDetails';
import ProjectList from '../ProjectList/ProjectList';
import './Projects.css'
// import { useState } from 'react';

const Projects = (props) => {
    return (
        <div className='projects-div'>
            {props.currentProject === null ? (
                <ProjectList
                    projects={props.projects}
                    currentProject={props.currentProject}
                    setCurrentProject={props.setCurrentProject}
                    editProject={props.editProject}
                    deleteProject={props.deleteProject}
                />
            ) : (
                <ProjectDetails
                    currentProject={props.currentProject}
                    setCurrentProject={props.setCurrentProject}
                    editProject={props.editProject}
                    editTask={props.editTask}
                    deleteTask={props.deleteTask}
                />
            )}
        </div>
    );
};

export default Projects;
