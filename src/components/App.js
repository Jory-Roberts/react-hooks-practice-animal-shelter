import React, { useEffect, useState } from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: 'all' });

  //http://localhost:3001/pets
  useEffect(() => {
    fetch('http://localhost:3001/pets')
      .then((r) => r.json())
      .then((petData) => setPets(petData));
  }, []);

  return (
    <div className='ui container'>
      <header>
        <h1 className='ui dividing header'>React Animal Shelter</h1>
      </header>
      <div className='ui container'>
        <div className='ui grid'>
          <div className='four wide column'>
            <Filters />
          </div>
          <div className='twelve wide column'>
            <PetBrowser pet={pets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
