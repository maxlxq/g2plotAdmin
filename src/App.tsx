import React from 'react';
import './App.css';
import LinePage from "./page/LinePage";
import PiePage from "./page/PiePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LinePage />
        <PiePage />
      </header>
    </div>
  );
}

export default App;
