import { useState } from 'react';
import * as projectService from '../../services/projectService';

const EditForm = ({ project, setCurrentProject, setProjects }) => {
    const [formData, setFormData] = useState({
        title: project.title,
        description: project.description,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedProject = await projectService.editProject(formData, project._id);

            setProjects((prevProjects) =>
                prevProjects.map((p) => (p._id === updatedProject._id ? updatedProject : p))
            );

            setCurrentProject(null);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="edit-form-container">
            <h2>Edit Project</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditForm;
