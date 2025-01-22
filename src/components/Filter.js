import React, { useState } from 'react';

function Filter({ search = "", onSearchChange }) {
  const [searchText, setSearchText] = useState(search);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    onSearchChange(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Filter;