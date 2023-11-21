import React, { useEffect, useState } from "react";
import FilterRegion from "./FilterRegion";
import SearchBar from "./SearchBar";

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setCountries(data);
      } catch (error) {
        setError(error);
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  console.log(countries);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Filtering by searchbar
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row d-flex justify-content-between">
        <div className="col-lg-4 col-md-4 col-sm-8">
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-8">
          <FilterRegion countries={countries} />
        </div>
      </div>
      <div className="row ">
        {filteredCountries.map((country) => (
          <div className="card col-lg-3 col-md-5 col-sm-8 mb-5 mt-5">
            <img src={country.flag} className="flag" />
            <h2>{country.name}</h2>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryList;
