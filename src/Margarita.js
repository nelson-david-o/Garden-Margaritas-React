// Margarita.js

import React, { useState } from "react";
import "./Margarita.css";
import margaritaImage from "./assets/margarita.png";
import girasolImage from "./assets/girasol.png";

const Margarita = () => {
  const [blooms, setBlooms] = useState([]);

  const handleClick = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const img = _getTypeFlower();
    setBlooms([...blooms, { x, y, image: img }]);
  };

  const _getTypeFlower = () => {
    const number = Math.round(Math.random());
    let img;
    if (number > 0) {
      img = girasolImage;
    } else {
      img = margaritaImage;
    }

    return img;
  };

  return (
    <div className="margarita-container">
      <h1>JARDIN DE FLORES</h1>
      <div className="margarita-garden" onClick={handleClick}>
        {blooms.map((bloom, index) => (
          <img
            key={index}
            src={bloom.image}
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
