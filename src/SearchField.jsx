import React, { useState, useEffect } from 'react';
import './App.css';
import './SearchField.css';
import CountryCard from './CountryCard';

function SearchField() {
  // States for country data and search input
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const URL = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await fetch(URL);
      const apiData = await responseData.json();
      setCountries(apiData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Filter countries based on the search term
    const filtered = countries.filter(country =>
      country.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchTerm, countries]);

  return (
    <div>
        <br/>
      <input
        className="search-countries"
        type="text"
        placeholder="Search for countries..."
        value={searchTerm}
        onChange={handleChange}
      />
      
      <div className="countryCard">
      {filteredCountries.length > 0 ? (
        filteredCountries.map((country, idx) => (
          <CountryCard key={idx} name={country.common} flag={country.png} />
        ))
      ) : (
        <p>No countries found</p>
      )}
    </div>
    </div>
  );
}

export default SearchField;
