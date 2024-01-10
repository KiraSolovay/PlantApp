
import React, { useState } from 'react';

// props getPlant function
const Form = ({ getPlant }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage= () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  // on input change set the searchterm / page number to the value of the input box
  const handleTextInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNumberInputChange = (event) => {
    setCurrentPage(event.target.value);
  }

  // on submit, 
  const handleSubmit = (event) => {
    // prevents default full page reload
    event.preventDefault();
    // fetch data based on input
    getPlant(searchTerm, currentPage);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>
        
        <h1>Plant Search and Page Number:</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={handleTextInputChange}
          placeholder="Enter plant name"
        />
        <input 
            type="number"
            min={1}
            value = {currentPage}
            onChange={handleNumberInputChange}
            placeholder="Enter page number"
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;