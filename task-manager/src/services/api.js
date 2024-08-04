import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const register = (username, password) => {
    return axios.post(`${API_URL}/auth/register`, { username, password });
};

const login = (username, password) => {
    return axios.post(`${API_URL}/auth/login`, { username, password });
};

const getTasks = (token) => {
    return axios.get(`${API_URL}/tasks`, {
        headers: { 'x-auth-token': token }
    });
};

const addTask = (task, token) => {
    return axios.post(`${API_URL}/tasks`, { task }, {
        headers: { 'x-auth-token': token }
    });
};
const createTask = (taskData) => {
    return axios.post(`${API_URL}/tasks`, { taskData }, {
        headers: { 'x-auth-token': taskData }
    });
};
const updateTask = (taskId, newData) => {
    return axios.post(`${API_URL}/tasks`, { taskId }, {
        headers: { 'x-auth-token':newData }
    });
};


const deleteTask = (taskId, token) => {
    return axios.delete(`${API_URL}/tasks/${taskId}`, {
        headers: { 'x-auth-token': token }
    });
};

export { register,createTask, updateTask, login, getTasks, addTask, deleteTask };
