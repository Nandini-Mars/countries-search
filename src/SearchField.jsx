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
      try{
      const responseData = await fetch(URL);
      const apiData = await responseData.json();
      setCountries(apiData);
      } catch(error){
        console.error("Error", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = countries.filter(country =>
      country.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchTerm, countries]);

  return (
    <div>
      <nav style={{backgroundColor:"lightgrey", height:"50px", marginBottom:"20px", display:"flex", justifyContent:"center"}}>
      <input
        className="search-countries"
        type="text"
        placeholder="Search for countries..."
        value={searchTerm}
        onChange={handleChange}
      />
      </nav>
      
      <div className="countryCard">
        {filteredCountries && filteredCountries.length > 0 ? (
          filteredCountries.map((country, idx) => (
            <CountryCard key={idx} name={country.common} flag={country.png} />
          ))
        ) : null} {/* Nothing will render if no countries match */}
      </div>
    </div>
  );
}

export default SearchField;
