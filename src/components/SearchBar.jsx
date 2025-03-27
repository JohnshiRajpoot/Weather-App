import React from "react";

const SearchBar = ({ city, setCity, onSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={onSearch}>🔍</button>
    </div>
  );
};

export default SearchBar;
