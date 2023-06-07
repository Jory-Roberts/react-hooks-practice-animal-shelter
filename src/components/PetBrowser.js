import React from 'react';

import Pet from './Pet';

function PetBrowser({ pet }) {
  return (
    <div className='ui cards'>
      {pet.map((pet, id) => {
        return (
          <Pet
            key={pet.id}
            name={pet.name}
            type={pet.type}
            age={pet.age}
            weight={pet.weight}
            gender={pet.gender}
          />
        );
      })}
    </div>
  );
}

export default PetBrowser;
