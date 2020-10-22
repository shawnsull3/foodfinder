import React, { useState,useEffect } from 'react'
import FilterForm from './componets/FilterForm/FilterForm'
import ResultsTable from './componets/ResultsTable/ResultsTable'
import { filter } from './utils/filter'
import { stateOptions } from './utils/stateOptions'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

export const App = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageIndex, setPageIndex] = useState(0);
  const [availableStates, setAvailableStates] = useState([]);

  useEffect(() => {
    fetch(`https://code-challenge.spectrumtoolbox.com/api/restaurants`, { headers: {
      Authorization: `Api-Key q3MNxtfep8Gt`, },
    })
    .then(data => data.json())
    .then(data => {
      data.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0);
      setAvailableStates(stateOptions(data));
      setFilteredRestaurants(data);
      setAllRestaurants(data);
    })
    .catch(err => console.log(err));
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    let filtered = filter(allRestaurants, searchTerm);
    setPageIndex(0);
    setFilteredRestaurants(filtered);
  }

  const paginate = (e) => {
    e.preventDefault();
    if (e.target.id === 'next') {
      setPageIndex(pageIndex+10);
    } else if (e.target.id === 'prev' && pageIndex !== 0){
      setPageIndex(pageIndex-10);
    }
  }

  return (
    <div className="App">
      <h1>Food Finder</h1>

      <FilterForm 
        handleSubmit={handleSubmit} 
        setSearchTerm={setSearchTerm}
        availableStates={availableStates} 
      />

      <ResultsTable restaurants={filteredRestaurants.slice(pageIndex, pageIndex+10)} />

      <div>
        {pageIndex !== 0 &&
          <button id='prev' onClick={(e) => paginate(e)}>
            Prev
          </button>
        }
        {pageIndex+10 < filteredRestaurants.length && 
          <button id='next' onClick={(e) => paginate(e)}>
            Next
          </button>
        }
      </div>
    </div>
  );
}

export default App;
