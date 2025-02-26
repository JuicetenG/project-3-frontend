import { useState } from 'react';
import './EditForm.css';

const EditForm = ({ currentProject, editProject, setEditingProject }) => {
    const [formData, setFormData] = useState({
        title: currentProject.title,
        description: currentProject.description,
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
        editProject(formData);
        setEditingProject(false);
    };

    return (
        <div className="edit-form-container">
            <form onSubmit={handleSubmit}>
                <button type="submit">Save</button>
                <div>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <textarea
                        rows="3"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
        </div>
    );
};

export default EditForm;
