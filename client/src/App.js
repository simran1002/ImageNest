// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import FolderPage from './pages/FolderPage';
import ImageUploadPage from './pages/ImageUploadPage';
import ImageSearchPage from './pages/ImageSearchPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/folders" component={FolderPage} />
        <Route path="/upload" component={ImageUploadPage} />
        <Route path="/search" component={ImageSearchPage} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
