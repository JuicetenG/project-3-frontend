import { useState } from "react";
import PropTypes from "prop-types";

const TaskForm = ({ onAddTask }) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;
        onAddTask(task);
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <input
                type="text"
                placeholder="Enter task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="border p-2 w-full rounded"
            />
            <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">
                Add Task
            </button>
        </form>
    );
};

TaskForm.propTypes = {
    onAddTask: PropTypes.func.isRequired,
};

export default TaskForm;
