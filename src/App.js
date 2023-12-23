import './App.css';
import Forecast from './components/Forecast/Forecast';
import Map from './components/Map/Map';
import { useState } from 'react';

function App() {
  const [lnglat, setLnglat] = useState([130, 35]);
  const [value, setValue] = useState("");
  const [probability, setProbability] = useState(30);
  return (
    <div className="App">
      {value  ? (
        <>
          <Forecast {...{ lnglat, probability }}/>
        </>
      ) : (
        <Map 
          {...{ lnglat, setLnglat, value, setValue, probability }}
        />
      )
      }
    </div>
  );
}

export default App;
