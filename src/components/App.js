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

  const onChangeType = (type) => {
    if (type !== 'all') {
      setFilters({ type: type });
    } else {
      setFilters({ type: 'all' });
    }
  };

  const onFindPetsClick = () => {
    let apiUrl = 'http://localhost:3001/pets';
    if (filters.type !== 'all') {
      apiUrl += `?type=${filters.type}`;
    }
    fetch(apiUrl)
      .then((response) => response.json())
      .then((petData) => setPets(petData));
  };

  return (
    <div className='ui container'>
      <header>
        <h1 className='ui dividing header'>React Animal Shelter</h1>
      </header>
      <div className='ui container'>
        <div className='ui grid'>
          <div className='four wide column'>
            <Filters
              onFindPetsClick={onFindPetsClick}
              onChangeType={onChangeType}
            />
          </div>
          <div className='twelve wide column'>
            <PetBrowser pets={pets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
