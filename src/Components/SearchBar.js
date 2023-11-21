import React, { useState } from "react";

function SearchBar({ searchInput, setSearchInput }) {
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  // if (searchInput.lenght > 0) {
  //   countries.filter((country) => {
  //     return country.name.match(searchInput);
  //   });
  // }

  // console.log(searchInput);
  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
}

export default SearchBar;
