import React from 'react';
import "./List.css";
import Card from './Card';

function List({ listData }) {
  return (
    <div className='list'>
      {listData.map((item, index) => (
        <Card 
          key={index}
          image={item.image}  
          title={item.name}  
        />
      ))}
    </div>
  );
}

export default List;
