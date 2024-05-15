// ../services/authService.js

import axios from 'axios';

const API_URL = 'https://imagenest.onrender.com/api';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
