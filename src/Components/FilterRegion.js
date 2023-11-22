import Dropdown from "react-dropdown";
import CountryList from "./CountryList";
import "react-dropdown/style.css";

import React from "react";

function FilterRegion({ countries, setSelectedRegion }) {
  const options = countries.map((country) => country.region);
  console.log(options);

  const uniqueRegions = Array.from(
    new Set(countries.map((country) => country.region))
  );

  const handleRegionChange = (uniqueRegions) => {
    setSelectedRegion(uniqueRegions.value);
  };

  console.log("Countries?", countries);
  //const defaultOption = options[0];

  return (
    <div className="filters dropdown-filter">
      {
        <Dropdown
          //value={defaultOption}
          options={uniqueRegions}
          onChange={handleRegionChange}
          placeholder="Filter by Region"
          className=""
        />
      }
    </div>
  );
}

export default FilterRegion;
