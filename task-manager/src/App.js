import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if(token){
    localStorage.setItem('token', token);
  } else{
    localStorage.removeItem('token');
  }},[token]);
  const logout = () => {
    setToken('');
   
  };

  return (
    <Router>
      <Header isAuthenticated={!!token} logout={logout} />
      <Routes>
        <Route  path="/" element={<Home token={token}  isAuthenticated={!!token} />} />
        <Route path="/login" element={ <Login setToken={setToken} />} />
        <Route path="/register" element={ <Register setToken={setToken} />} />
      </Routes>
    </Router>
  );
};

export default App;


