import React, { useState,useEffect } from 'react'
import FilterForm from './componets/FilterForm/FilterForm'
import ResultsTable from './componets/ResultsTable/ResultsTable'
import { stateOptions } from './utils/stateOptions'
import { genreOptions } from './utils/genreOptions'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

export const App = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [availableStates, setAvailableStates] = useState([]);
  const [avialableGenres, setAvailableGenres] = useState([]);


  useEffect(() => {
    fetch(`https://code-challenge.spectrumtoolbox.com/api/restaurants`, { headers: {
      Authorization: `Api-Key q3MNxtfep8Gt`, },
    })
    .then(data => data.json())
    .then(data => {
      data.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0);
      setFilteredRestaurants(data);
      setAllRestaurants(data);
      setAvailableStates(stateOptions(data));
      setAvailableGenres(genreOptions(data));
    })
    .catch(err => console.log(err));
  }, [])

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
        setPageIndex={setPageIndex}
        setFilteredRestaurants={setFilteredRestaurants}
        allRestaurants={allRestaurants}
        availableStates={availableStates} 
        avialableGenres={avialableGenres}
      />

      {filteredRestaurants.length === 0 
        ? 
        <div>
          <h2>Sorry, no matches found.</h2>
        </div>
        :
        <ResultsTable restaurants={filteredRestaurants.slice(pageIndex, pageIndex+10)} />
      }

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
