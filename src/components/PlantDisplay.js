import React from 'react';

const PlantDisplay = ({ plant }) => {
  if (!plant || plant.data.length === 0) {
    return <p>No plant data available</p>;
  }

  return (
    <div>
      {plant.data.map((plantInfo) => (
        <div key={plantInfo.id} className="plant-card">
          <h2>{plantInfo.common_name}</h2>
          <p>Scientific Name: {plantInfo.scientific_name.join(', ')}</p>
          <p>Cycle: {plantInfo.cycle}</p>
          <p>Watering: {plantInfo.watering}</p>
          <p>Sunlight: {plantInfo.sunlight}</p>
          {plantInfo.default_image && plantInfo.default_image.thumbnail && (
            <img src={plantInfo.default_image.thumbnail} alt={plantInfo.common_name} />
          )}
        </div>
      ))}
    </div>
  );
};

export default PlantDisplay;