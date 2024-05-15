import React, { useState } from 'react';
import { searchImages } from '../services/imageService';

const ImageSearchForm = ({ onSearch }) => {
  const [imageName, setImageName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const images = await searchImages(imageName);
      onSearch(images);
    } catch (error) {
      // Handle error (display error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Image Name"
        value={imageName}
        onChange={(e) => setImageName(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default ImageSearchForm;
