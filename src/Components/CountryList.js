import React, { useEffect, useState } from "react";
import FilterRegion from "./FilterRegion";

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <div className="container">
      CountryList
      <FilterRegion countries={countries} />
      <div className="row d-flex justify-content-space-between">
        {countries.map((country) => (
          <div className="card col-lg-3 col-md-6 col-sm-8 mb-5">
            <img src={country.flag} className="flag" />
            <h1>{country.name}</h1>
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
