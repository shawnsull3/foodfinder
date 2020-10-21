import React, { useState,useEffect } from 'react';
import './App.css';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch(`https://code-challenge.spectrumtoolbox.com/api/restaurants`, { headers: {
      Authorization: `Api-Key q3MNxtfep8Gt`, },
    })
    .then(data => data.json())
    .then(data => setRestaurants(data))
    .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <h1>Food Finder</h1>
    </div>
  );
}

export default App;
