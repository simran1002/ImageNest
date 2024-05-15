import React, { useState } from 'react';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Access the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ username, password });
      // Redirect to the create folder page upon successful login
      navigate('/folder');
    } catch (error) {
      // Handle error (display error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
