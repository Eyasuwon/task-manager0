import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import { getTasks, createTask, deleteTask, updateTask } from '../services/api';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';

const Home = ({ token, isAuthenticated }) => {
  const [tasks, setTasks] = useState([]);

const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      fetchTasks()
    } 
    else {
      navigate('/login');
}
});

  const fetchTasks = async () => {
    try {
      const { data } = await getTasks(token)
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (task) => {
    try {
      const { data } = await createTask(task, token);
      setTasks([...tasks, data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const removeTask = async (id) => {
    try {
      await deleteTask(id, token);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleTask = async (id) => {
    const task = tasks.find((task) => task._id === id);
    try {
      const { data } = await updateTask(id, { ...task, isCompleted: !task.isCompleted }, token);
      setTasks(tasks.map((task) => (task._id === id ? data : task)));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <TaskForm addTask={addTask} />
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} deleteTask={removeTask} toggleTask={toggleTask} />
      ))}
    </div>
  );
};

export default Home;

