import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-500 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-xl">Task Manager</h1>
                <nav>
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/login" className="mr-4">Login</Link>
                    <Link to="/register">Register</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
