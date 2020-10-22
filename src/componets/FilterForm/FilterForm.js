import React, { useState } from 'react'
import { filter } from '../../utils/filter'
import './style.css'

export const FilterForm = ({ 
    setPageIndex,
    setFilteredRestaurants,
    allRestaurants,
    availableStates,
    avialableGenres,
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedState, setSelectedState] = useState('All');
    const [selectedGenre, setSelectedGenre] = useState('All');

    const handleSubmit = (e) => {
        e.preventDefault();
        let filtered = filter(allRestaurants, searchTerm);
        setPageIndex(0);
        setFilteredRestaurants(filtered);
    }

    return (
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='search'>Search:</label>
            <input 
            id='search'
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Enter restaurant name, city or genre'
            />
        </div>
        <div>
            <label htmlFor='state-select'>Select state:</label>
            <select 
              id='state-select' 
              value={selectedState}
            >
                {availableStates.map(state => (
                    <option key={state} value={state}>
                        {state}
                    </option>
                ))}
            </select>
        </div>
        <div>
            <label htmlFor='genre-select'>Select genre:</label>
            <select 
              id='genre-select' 
              value={selectedGenre}
            >
                {avialableGenres.map(genre => (
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>
        </div>

        <button type="submit">
          Submit
        </button>
      </form>
    )
}

export default FilterForm;
