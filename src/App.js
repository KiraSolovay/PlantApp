import './App.css';
import Form from './components/Form';
import PlantDisplay from './components/PlantDisplay';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const apiKey = "sk-AANe659c1db4b365a3696";
  const apiKeyBackup = "sk-pi8I659d64500a8dc3715"
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPlant = async (searchTerm) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://perenual.com/api/species-list?key=${apiKeyBackup}&q=${searchTerm}`);
      setData(response.data);
      setError(null); // Reset error state on successful fetch
    } catch (error) {
      console.error("Error fetching data:", error.message || error.response?.data || error);
      setError("Error fetching data. Please try again."); // Set an error message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initialSearchTerm = ""; 
    getPlant(initialSearchTerm);
  }, [apiKey]);

  return (
    <div className="App">
      <Form getPlant={getPlant} />
      {error && <p>{error}</p>}
      {loading ? <p>Loading...</p> : <PlantDisplay plant={data} />}
    </div>
  );
}

export default App;