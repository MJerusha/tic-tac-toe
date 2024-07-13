import React, { useState } from 'react';
import Deck from './Deck';

const Shuffle = () => {
  const [numPeople, setNumPeople] = useState(0);

  const handleInputChange = (e) => {
    setNumPeople(e.target.value);
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="numPeople" className="form-label">Number of People:</label>
        <input type="number" className="form-control" id="numPeople" value={numPeople} onChange={handleInputChange} min="1" />
      </div>
      {numPeople > 0 && <Deck numPeople={numPeople} />}
    </div>
  );
};

export default Shuffle;