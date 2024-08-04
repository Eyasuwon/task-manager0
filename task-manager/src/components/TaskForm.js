import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add new task"
                className="w-full p-2 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 mt-2 rounded">Add Task</button>
        </form>
    );
};

export default TaskForm;
