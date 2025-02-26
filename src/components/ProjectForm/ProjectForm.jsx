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
    if(formData.title === '' || formData.description === '') return;
    e.preventDefault();
    props.createProject(formData);
    setFormData(initialState);
  };

  return (
    <div className="project-form-container">
      <form className='project-form' onSubmit={handleSubmit}>
        <div className='project-form-group'>
          <label htmlFor="title">Project title:</label>
          <input type="text" name='title' id='title' value={formData.title} onChange={handleChange} />
        </div>
        <div className='project-form-group'>
          <label htmlFor="description">Description:</label>
          <textarea type="text" name='description' id='description' value={formData.description} onChange={handleChange} rows="6"/>
        </div>
        <div><button type='submit'>Submit</button></div>
      </form>
    </div>
  );
};

export default ProjectForm;
