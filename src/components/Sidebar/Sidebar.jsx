import TaskForm from "./TaskForm";
import { useState } from "react";

const Sidebar = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div className="w-64 bg-gray-200 h-screen p-4">
            <h2 className="text-lg font-bold mb-4">Sidebar</h2>
            <TaskForm onAddTask={addTask} />
            <ul className="mt-4">
                {tasks.map((task, index) => (
                    <li key={index} className="p-2 border-b">
                        {task}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
