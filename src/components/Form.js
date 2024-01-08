import { useState } from 'react';

export default function Form(props) {
  const [formData, setFormData] = useState({
    searchterm: ""
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.plantSearch(formData.data); // Fix the property name here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm} // Fix the property name here
        />
        <input type="submit" value="Plant Search" />
      </form>
    </div>
  );
}