import axios from 'axios';

const API_URL = 'https://localhost:5000/api/images';

export const uploadImage = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/upload`, formData);
    if (response && response.data) {
      console.log('Image upload successful:', response.data);
      return response.data;
    } else {
      throw new Error('Empty response received after image upload.');
    }
  } catch (error) {
    throw new Error(`Image upload failed: ${error.message}`);
  }
};


export const searchImages = async (imageName) => {
  try {
    const response = await axios.get(`${API_URL}/search`);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
