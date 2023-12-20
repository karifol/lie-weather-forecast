import './App.css';
import Navbar from './components/Navbar/Navbar';
import NameCard from './components/NameCard/NameCard';
import Forecast from './components/Forecast/Forecast';
import Map from './components/Map/Map';
import { useState } from 'react';

function App() {
  const [place, setPlace] = useState("");
  const [value, setValue] = useState("");
  return (
    <div className="App">
      {place  ? (
        <>
          <NameCard {...{ place, setPlace }}/>
          <Forecast {...{ place }}/>
        </>
      ) : (
        // <Navbar {
        //   ...{
        //     place,
        //     setPlace,
        //     value,
        //     setValue
        //   }
        // }/>
        <Map />
      )
      }
    </div>
  );
}

export default App;
