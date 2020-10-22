import React from 'react'
import './style.css'

export const FilterForm = ({ 
    handleSubmit, 
    setSearchTerm,
    availableStates,
    avialableGenres, 
}) => {
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
            <select id='state-select'>
                {availableStates.map(state => (
                    <option key={state} value={state}>
                        {state}
                    </option>
                ))}
            </select>
        </div>
        <div>
            <label htmlFor='genre-select'>Select genre:</label>
            <select id='genre-select'>
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
