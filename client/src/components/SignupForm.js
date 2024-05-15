import React, { useState } from 'react';
import { signup } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import '../styles/signupForm.css';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Call the signup function from authService to save user data
      const userData = await signup({ username, password });
      
      // Store user ID in local storage after signup
      localStorage.setItem('userId', userData.userId);

      // Redirect to the login page upon successful signup
      navigate('/login');
    } catch (error) {
      // Handle error (display error message)
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="signup-container">
      {/* <h2 className="signup-heading">Sign Up</h2> */}
      <form onSubmit={handleSignup}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
