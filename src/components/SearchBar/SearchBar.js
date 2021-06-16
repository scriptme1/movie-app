import React, { useState } from 'react';

import FontAwesome from 'react-fontawesome';
import './SearchBar.css';

const SearchBar = ({ searchMovies }) => {
  const [inputValue, setInputValue] = useState('');

  const doChangeInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };
  const doSearch = () => {
    searchMovies(inputValue);
  };

  return (
    <div className="rmdb-searchbar">
      <div className="rmdb-searchbar-content">
        <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
        <input
          type="text"
          className="rmdb-searchbar-input"
          placeholder="Search here"
          onChange={doChangeInput}
          value={inputValue}
          onKeyPress={(e) => e.key === 'Enter' && doSearch()}
        />
      </div>
    </div>
  );
};

export default SearchBar;
