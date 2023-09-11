import React from 'react';
import Card from './Card';
import data from '../Data/DataLogement.json';




const CardContainer = () => {
  return (
    <div className="card-container">
      {data.map((apartment) => (
        <Card key={apartment.id} title={apartment.title} cover={apartment.cover} id={apartment.id} />
      ))}
    </div>
  );
};

export default CardContainer;
