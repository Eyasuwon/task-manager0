import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import { register } from '../services/api';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate ();

    const handleSubmit = (e) => {
        e.preventDefault();
        register(username, password).then(() => {
            navigate('/login');
        });
    };

    return (
        <div className="container mx-auto mt-4 p-4">
            <h2 className="text-xl mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="w-full p-2 border rounded mb-2"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full p-2 border rounded mb-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
            </form>
        </div>
    );
};

export default Register;
