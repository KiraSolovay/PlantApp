import React from 'react';

const PlantDisplay = ({ plant }) => {
  if (!plant || plant.data.length === 0) {
    return <p>No plant data available</p>;
  }

  return (
    <div className='plantdisplay'>
      <p>showing results {plant.from} to {plant.to} on page {plant.current_page} of {plant.last_page} </p>
      <div className="flexcontainer">
        {plant.data.map((plantInfo) => (
          <div key={plantInfo.id} className="plantcard">
            <h2>{plantInfo.common_name}</h2>
            <p>Scientific Name: {plantInfo.scientific_name.join(', ')}</p>
            <p>Cycle: {plantInfo.cycle}</p>
            <p>Watering: {plantInfo.watering}</p>
            <p>Sunlight: {plantInfo.sunlight}</p>
            {plantInfo.default_image && plantInfo.default_image.thumbnail && (
              <img className="photos" src={plantInfo.default_image.thumbnail} alt={plantInfo.common_name} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantDisplay;