import React, { useState } from 'react';
import ImageSearchForm from '../components/ImageSearchForm';

const ImageSearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (images) => {
    setSearchResults(images);
  };

  return (
    <div>
      <h1><center>Image Search</center></h1>
      <ImageSearchForm onSearch={handleSearch} />
      <div>
        <h4><center>Search Results</center></h4>
        <ul>
          {searchResults.map((image, index) => (
            <li key={index}>{image.filename}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageSearchPage;
