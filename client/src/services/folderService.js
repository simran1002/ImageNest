import axios from 'axios';

const API_URL = 'https://imagenest.onrender.com/api/folders';

export const createFolder = async (name, parentId, userId) => {
  try {
    const folderData = {
      name,
      parentId,
      userId // Assuming userId is passed as a string
    };

    const response = await axios.post(`${API_URL}/create`, folderData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw error.response.data.message;
    } else {
      throw 'Folder creation failed';
    }
  }
};
