import React, { useState, useEffect } from 'react';
import { createFolder } from '../services/folderService';
import { useNavigate } from 'react-router-dom';

const FolderForm = () => {
  const [name, setName] = useState('');
  const [parentId, setParentId] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user ID from local storage after component mounts
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // If parentId is empty, set it to null
      const newParentId = parentId.trim() === '' ? null : parentId;

      // Call createFolder function with name, parentId, and userId
      const newFolder = await createFolder(name, newParentId, userId);

      // Redirect to the image upload page with the new folder ID
      navigate(`/image/${newFolder.id}`);
    } catch (error) {
      // Handle error (display error message)
      console.error('Folder creation failed:', error);
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
        readOnly // Make the User ID input field read-only since it's automatically filled
      />
      <button type="submit">Create Folder</button>
    </form>
  );
};

export default FolderForm;
