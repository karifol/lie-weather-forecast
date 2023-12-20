import './App.css';
import Navbar from './components/Navbar/Navbar';
import NameCard from './components/NameCard/NameCard';
import Forecast from './components/Forecast/Forecast';
import Map from './components/Map/Map';
import { useState } from 'react';

function App() {
  const [lnglat, setLnglat] = useState([36, 140]);
  const [value, setValue] = useState("");
  return (
    <div className="App">
      {value  ? (
        <>
          <Forecast {...{ lnglat }}/>
        </>
      ) : (
        <Map 
          {...{ lnglat, setLnglat, value, setValue }}
        />
      )
      }
    </div>
  );
}

export default App;
