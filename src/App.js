import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';


const App=()=> {

  const [monsters, setMonsters]=useState([]);
  const [searchField, setSearchField]=useState("");
  const [filteredMonsters, setfilteredMonsters]=useState(monsters);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((users)=>setMonsters(users))
  },[monsters])

  const onSearchChange=(event)=>{
    const searchString=event.target.value.toLowerCase();
    setSearchField(searchString);
  }

  useEffect(()=>{
    const newFilteredMonsters=monsters.filter((monster)=>(
      monster.name.toLowerCase().includes(searchField)
    ));
    setfilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>

      <input type='search' placeholder='search monster' onChange={onSearchChange}/>

      <CardList filteredMonsters={filteredMonsters}/>


    </div>
  );
}

export default App;
