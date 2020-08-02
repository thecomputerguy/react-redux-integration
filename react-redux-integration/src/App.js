import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './App.css';

function App() {
  const selectedState = useSelector((state) => state)
  const dispatch = useDispatch()

  console.log(selectedState)

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch({type:"CAR"})}>Car</button>
        <h2>vehicle: {selectedState.vehicle}</h2>
      </div>
      <div>
        <button onClick={() => dispatch({type:"BIKE"})}>Bike</button>
        <h2>vehicle: {selectedState.vehicle}</h2>
      </div>
    </div>
  );
}

export default App;
