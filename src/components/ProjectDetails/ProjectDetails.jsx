
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as projectService from '../../services/projectService'

const ProjectDetails = () => {
    const { id } = useParams()
    const [project, setProject] = useState(null)
    const [formData, setFormData] = useState({ title: '', description: '' })


    useEffect(() => {
        fetchProject()
    }, [id])

    const fetchProject = async () => {
        console.log("Fetching with id", id);
        try {
            const fetchedProject = await projectService.getById(id)
            console.log("Fetched project:", fetchedProject);
            setProject(fetchedProject)
            setFormData({ title: fetchedProject.title, description: fetchedProject.description })
        } catch(err) {
            console.log(err)
        }
    }

    if (!project) return <p>Loading project...</p>;

    return (
       <div className="project-details-container">
        <main className="details-container">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
        </main>
       </div>
    )
}

export default ProjectDetails;