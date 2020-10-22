import React from 'react'
import './style.css'

export const FilterForm = ({ handleSubmit, setSearchTerm }) => {
    return (
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
    )
}

export default FilterForm;
