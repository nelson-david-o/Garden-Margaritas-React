// Margarita.js

import React, { useState } from 'react';
import './Margarita.css';
import margaritaImage from './assets/margarita.png';

const Margarita = () => {
  const [blooms, setBlooms] = useState([]);

  const handleClick = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    setBlooms([...blooms, { x, y }]);
  };

  return (
    <div className="margarita-container">
      <h1>JARDIN DE MARGARITAS</h1>
      <div className="margarita-garden" onClick={handleClick}>
        {blooms.map((bloom, index) => (
          <img
            key={index}
            src={margaritaImage}
            alt="Margarita"
            className="margarita-bloom"
            style={{ top: `${bloom.y}px`, left: `${bloom.x}px` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Margarita;
