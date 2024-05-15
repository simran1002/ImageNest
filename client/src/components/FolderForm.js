import React, { useState } from 'react';
import { createFolder } from '../services/folderService';

const FolderForm = () => {
  const [name, setName] = useState('');
  const [parentId, setParentId] = useState(''); // Assuming parentId is optional

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createFolder(name, parentId);
      // Redirect or show success message
    } catch (error) {
      // Handle error (display error message)
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
      <button type="submit">Create Folder</button>
    </form>
  );
};

export default FolderForm;
