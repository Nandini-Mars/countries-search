import React, { useState, useEffect } from 'react';
import './App.css';
import SearchField from "./SearchField";

function App() {
  const [countries, setCountries] = useState([]);


  return (
    <div>
      <SearchField />
  </div>
  );
}

export default App;
