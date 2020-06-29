import React from 'react';
import './App.css'

//COMPONENTS
import Header from './components/header';
import Counter from './components/counter';
import TemperatureConverter from './components/temp-converter'



function App() {
  return (
    <div className="App">
     <Header />
      <Counter />
      <TemperatureConverter />
    </div>
  );
}

export default App;
