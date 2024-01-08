import './App.css';
import Form from './components/Form';
import PlantDisplay from './components/PlantDisplay';
import { useState, useEffect} from 'react'
import axios from 'axios';

function App() {
  const apiKey = "sk-AANe659c1db4b365a3696";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPlant = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://perenual.com/api/species/details/${id}?key=${apiKey}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message || error.response.data || error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Assuming you have an 'id' variable representing the plant ID
    const plantId = 5; // Replace with the actual ID
    getPlant(plantId);
  }, [apiKey]);

  return (
    <div className="App">
      <Form plantSearch={getPlant} />
      {loading ? <p>Loading...</p> : <PlantDisplay plant={data} />}
    </div>
  );
}

export default App;