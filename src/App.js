import React, { useState,useEffect } from 'react'
import ResultsTable from './componets/ResultsTable/ResultsTable'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

export const App = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`https://code-challenge.spectrumtoolbox.com/api/restaurants`, { headers: {
      Authorization: `Api-Key q3MNxtfep8Gt`, },
    })
    .then(data => data.json())
    .then(data => {
      data.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0)
      setAllRestaurants(data)
    })
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
      <ResultsTable restaurants={allRestaurants} />
    </div>
  );
}

export default App;
