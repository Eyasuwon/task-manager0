import React from 'react';

const TaskItem = ({ task, deleteTask }) => {
    return (
        <div className="p-2 border rounded flex justify-between items-center">
            <span>{task.task}</span>
            <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
        </div>
    );
};

export default TaskItem;
