import { useState } from 'react';
import './TaskForm.css';

const initialState = {
  name: '',
  description: '',
  priority: 'low',
  category: 'general'
};

const TaskForm = (props) => {
  const [ formData, setFormData ] = useState({
    name: '',
    description: '',
    priority: 'low',
    category: 'general'
  });

  // function getUniqueCategories(array) {
  //   return [...new Set(array.map(obj => obj.category))];
  // }

  // const categories = getUniqueCategories(props.currentProject.tasks);

  const handleChange = (e) => {
    setFormData({
        ...formData, 
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      formData.isComplete = 'false';
      props.addTask(props.currentProject._id, formData);
      setFormData(initialState);
  };

  return (
      <div className="task-form-container">
        <form className="task-form" onSubmit={handleSubmit}>
            <div className='project-form-group'>
              <label htmlFor="title">Task name:</label>
              <input type="text" name='name' id='name' value={formData.name} onChange={handleChange} />
            </div>
            <br />
            <div className='project-form-group'>
              <label htmlFor="description">Description:</label>
              <textarea rows="4" type="text" name='description' id='description' value={formData.description} onChange={handleChange} />
            </div>
            <br />
            <div className='select-label'>Priority: </div>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option defaultValue='low'>Low</option>
              <option value='normal'>Normal</option>
              <option value='high'>High</option>
            </select>
            <div className='select-label'>Category: </div>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option defaultValue='general'>General</option>
              <option value='backend'>Backend</option>
              <option value='frontend'>Frontend</option>
            </select>
            <br />
            <div>
              <button type="submit">Add Task</button>
            </div>
        </form>
      </div>
  );
};

export default TaskForm;
