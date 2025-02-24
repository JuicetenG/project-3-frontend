import { useState } from 'react';
import './ProjectForm.css';

const initialState = {
  title: "",
  description: "",
};

const ProjectForm = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createProject(formData);
    setFormData(initialState);
  };

  return (
    <div className="project-form-container">
      <form className='project-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Project title:</label>
          <input type="text" name='title' id='title' value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" name='description' id='description' value={formData.description} onChange={handleChange} />
        </div>
        <div><button type='submit'>Submit</button></div>
      </form>
    </div>
  );
};

export default ProjectForm;
