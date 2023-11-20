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
    <div>
      {
        <Dropdown
          options={options}
          value={defaultOption}
          placeholder="Select an option"
        />
      }
    </div>
  );
}

export default FilterRegion;
