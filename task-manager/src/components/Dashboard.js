import React, { useEffect, useState } from 'react';
import { getTasks, addTask, deleteTask } from '../services/api';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            getTasks(token).then((response) => {
                setTasks(response.data);
            });
        }
    }, [token]);

    const handleAddTask = (task) => {
        addTask(task, token).then((response) => {
            setTasks([...tasks, response.data]);
        });
    };

    const handleDeleteTask = (taskId) => {
        deleteTask(taskId, token).then(() => {
            setTasks(tasks.filter((task) => task.id !== taskId));
        });
    };

    return (
        <div className="container mx-auto mt-4">
            <h2 className="text-xl mb-4">Dashboard</h2>
            <TaskForm addTask={handleAddTask} />
            <div className="space-y-2">
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} deleteTask={handleDeleteTask} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
