import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const App=()=> {
  const [name, setName]=useState("Andrei");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi {name}</p>
        <button onClick={()=>(setName("Yihua"))}>Change Name</button>
      </header>
    </div>
  );
}

export default App;
