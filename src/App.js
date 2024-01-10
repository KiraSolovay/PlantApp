import './App.css';
import Form from './components/Form';
import PlantDisplay from './components/PlantDisplay';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const apiKey = "sk-AANe659c1db4b365a3696";
  const apiKeyBackup = "sk-pi8I659d64500a8dc3715"

  // useState hook to control states of data (plant display), loading screen, error screen
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // getPlant function fetches data based on searchterm
  const getPlant = async (searchTerm, page) => {
    try {
      setLoading(true);
      // installed axios per Perenual Documentation
      const response = await axios.get(`https://perenual.com/api/species-list?key=${apiKey}&q=${searchTerm}&page=${page}`);
      setData(response.data);
      setError(null); // Reset error state on successful fetch
    } catch (error) {
      console.error("Error fetching data:", error.message || error.response?.data || error);
      setError("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // useEffect: on mount and whenever apiKey changes, sets up initial search term and fetches data 
  useEffect(() => {
    const initialSearchTerm = ""; 
    getPlant(initialSearchTerm);
  }, [apiKey]);

  // props for form: function getPlant
  // error conditional rendering. if error is trthy, shows error message
  // loading conditional rendering. show loading unless loading is false, then show plant display. pass data as plant prop
  return (
    <div className="App">
      <Form getPlant={getPlant} />
      {error && <p>{error}</p>}
      {loading ? <p>Loading...</p> : <PlantDisplay plant={data} />}
    </div>
  );
}

export default App;