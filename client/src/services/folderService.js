// folderService.js

import axios from 'axios';

const API_URL = 'https://imagenest.onrender.com/api';

export const createFolder = async (name, parentId) => {
  try {
    const response = await axios.post(`${API_URL}/folders/create`, { name, parentId });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
