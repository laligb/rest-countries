import Dropdown from "react-dropdown";
import CountryList from "./CountryList";
import "react-dropdown/style.css";

import React from "react";

function FilterRegion({ countries }) {
  const options = countries.map((country) => country.name);
  console.log(options);

  console.log("Countries?", countries);
  const defaultOption = options[0];

  return (
    <div className="filters dropdown-filter">
      {
        <Dropdown
          options={options}
          //value={defaultOption}
          placeholder="Filter by Region"
          className=""
        />
      }
    </div>
  );
}

export default FilterRegion;
