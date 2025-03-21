import React from 'react';
import "./Card.css";

function Card({ image, title }) {
  return (
    <div className='card'>
      <div className='card_image'>
        <img src={image} alt={title} />
      </div>
      <div className='card_info'>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Card;
