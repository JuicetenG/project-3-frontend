import { useState } from 'react';


const EditTaskForm = (props) => {
  const [ formData, setFormData ] = useState({
    name: props.currentTask.name,
    description: props.currentTask.description,
    priority: props.currentTask.priority,
    category: props.currentTask.category,
    isComplete: props.currentTask.isComplete
  });


  const handleChange = (e) => {
    setFormData({
        ...formData, 
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      props.editTask(formData, props.currentTask._id);
      props.setCurrentTask(null);
  };

  return (
      <form onSubmit={handleSubmit}>
          <div>
            <input type="text" name='name' id='name' value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <input type="text" name='description' id='description' value={formData.description} onChange={handleChange} />
          </div>
          <select 
            id="priority" 
            name="priority" 
            value={formData.priority} 
            onChange={handleChange}
          >
            <option defaultValue='low'>low</option>
            <option value='normal'>normal</option>
            <option value='high'>high</option>
          </select>
          <div><button type="submit">Add Task</button></div>
      </form>
  );
};

export default EditTaskForm;
