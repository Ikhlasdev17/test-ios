import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name..." />
        <p>Hello {name}{name !== "" ? "!" : ''}</p>
      </header>
    </div>
  );
}

export default App;
