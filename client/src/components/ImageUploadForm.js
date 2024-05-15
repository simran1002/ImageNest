import React, { useState } from 'react';
import { uploadImage } from '../services/imageService';

const ImageUploadForm = () => {
  const [image, setImage] = useState(null);
  const [folderId, setFolderId] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleFolderIdChange = (e) => {
    setFolderId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('folderId', folderId);
      await uploadImage(formData);
      // Redirect or show success message
    } catch (error) {
      // Handle error (display error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <input
        type="text"
        placeholder="Folder ID"
        value={folderId}
        onChange={handleFolderIdChange}
      />
      <button type="submit">Upload Image</button>
    </form>
  );
};

export default ImageUploadForm;
