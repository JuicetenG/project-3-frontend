import { useState } from 'react';
import './EditTaskForm.css';

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
      props.setCurrentTaskId(null);
  };

  return (
      <div className="edit-task-form-container">
        <div className="edit-task-form">
          <form onSubmit={handleSubmit}>
              <div className='edit-task-form-section-1'>
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
                <input type="text" name='name' id='name' value={formData.name} onChange={handleChange} />
              </div>
              <div className='edit-task-form-section-2'>
                <textarea rows="2" type="text" name='description' id='description' value={formData.description} onChange={handleChange} />
                <button type="submit">submit</button>
              </div>
          </form>
        </div>
      </div>
  );
};

export default EditTaskForm;
