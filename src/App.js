import React from 'react';
import './App.scss';

import Haders from './components/Header';
import Slider from './components/Slider'

function App() {
  return (
    <div className="App">
      <header className="header">
        <Haders />
      </header>
      <div className="slider-section">
        <Slider />
      </div>
    </div>
  );
}

export default App;
