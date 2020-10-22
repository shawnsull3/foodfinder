import React from 'react'
import './style.css'

export const FilterForm = ({ 
    handleSubmit, 
    setSearchTerm,
    availableStates 
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
        
        <button type="submit">
          Submit
        </button>
      </form>
    )
}

export default FilterForm;
