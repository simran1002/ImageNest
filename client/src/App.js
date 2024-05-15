// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from 'react-router-dom'

import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import FolderPage from './pages/FolderPage';
import ImageUploadPage from './pages/ImageUploadPage';
import ImageSearchPage from './pages/ImageSearchPage';

const App = () => {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/signup" element={<SignupPage />} /> {/* Define routes using element prop */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/folder" element={<FolderPage />} />
        <Route path="/upload" element={<ImageUploadPage />} />
        <Route path="/search" element={<ImageSearchPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
