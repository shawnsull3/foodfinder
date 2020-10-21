import React, { useState,useEffect } from 'react'
import ResultsTable from './componets/ResultsTable/ResultsTable'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

export const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`https://code-challenge.spectrumtoolbox.com/api/restaurants`, { headers: {
      Authorization: `Api-Key q3MNxtfep8Gt`, },
    })
    .then(data => data.json())
    .then(data => setRestaurants(data))
    .catch(err => console.log(err));
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm)

    // filter restaurants based on serch term
  }

  return (
    <div className="App">
      <h1>Food Finder</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Search:</label>
        <input 
          id='search'
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Enter restaurant name, city or genre'
        />
        <button type="submit">
          Submit
        </button>
      </form>
      <ResultsTable restaurants={restaurants} />
    </div>
  );
}

export default App;
