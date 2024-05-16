import React, { useState } from 'react';
import { createFolder } from '../services/folderService';
import { useNavigate } from 'react-router-dom';

const FolderForm = () => {
  const [name, setName] = useState('');
  const [parentId, setParentId] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // If parentId is empty, set it to null
      const newParentId = parentId.trim() === '' ? null : parentId;

      // Ensure userId is set
      if (!userId) {
        throw new Error('User ID is required.'); // Throw an error if userId is not set
      }

      // Call createFolder function with name, parentId, and userId
      const newFolder = await createFolder(name, newParentId, userId);

      // Redirect to the image upload page
      navigate('/upload');
    } catch (error) {
      // Handle error (display error message)
      console.error('Folder creation failed:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Folder Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Parent Folder ID (Optional)"
        value={parentId}
        onChange={(e) => setParentId(e.target.value)}
      />
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button type="submit">Create Folder</button>
    </form>
  );
};

export default FolderForm;
