import { useState } from 'react';

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

  function getUniqueCategories(array) {
    return [...new Set(array.map(obj => obj.category))];
  }

  const categories = getUniqueCategories(props.currentProject.tasks);

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
      <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Task name:</label>
            <input type="text" name='name' id='name' value={formData.name} onChange={handleChange} />
          </div>
          <br />
          <div>
            <label htmlFor="description">Description:</label>
            <input type="text" name='description' id='description' value={formData.description} onChange={handleChange} />
          </div>
          <br />
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
          <br />
          <div>
            <button type="submit">Add Task</button>
          </div>
      </form>
  );
};

export default TaskForm;
