
import React, { useState } from 'react';

const Form = ({ getPlant }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getPlant(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Plant Search:
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter plant name"
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;