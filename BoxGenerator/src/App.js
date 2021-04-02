import React, {useState} from 'react';
import './App.css';
import Display from './components/Display';


function App() {

  const [boxes, setBoxes] = useState([]);
  return (
    <div className="App">
      <Display setBoxes={setBoxes} boxes={boxes}/>
    </div>
  );
}

export default App;
