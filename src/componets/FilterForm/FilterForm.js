import React, { useState, useEffect } from 'react'
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
        e.preventDefault(e);
        let filtered = filter(allRestaurants, searchTerm, selectedState, selectedGenre);
        setPageIndex(0);
        setFilteredRestaurants(filtered);
    }

    useEffect(() => {
        let filtered = filter(allRestaurants, searchTerm, selectedState, selectedGenre);
        setPageIndex(0);
        setFilteredRestaurants(filtered);
    }, [searchTerm, selectedState, selectedGenre])

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
              onChange={e => setSelectedState(e.target.value)}
            >
                {availableStates.map(state => (
                    <option key={state} value={state}>
                        {state}
                    </option>
                ))}
            </select>
            <button onClick={() => setSelectedState('All')} className='reset-btn'>Reset</button>
        </div>
        <div>
            <label htmlFor='genre-select'>Select genre:</label>
            <select 
              id='genre-select' 
              value={selectedGenre}
              onChange={e => setSelectedGenre(e.target.value)}
            >
                {avialableGenres.map(genre => (
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>
            <button onClick={() => setSelectedGenre('All')} className='reset-btn'>Reset</button>
        </div>
        <div>
            <button type="submit" className='submit-btn'>
              Submit
            </button>
        </div>
      </form>
    )
}

export default FilterForm;
