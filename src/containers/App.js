import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

const App = () => {
  const [state, setState] = useState({
      robots: [],
      searchfield: ''
    });
  

  useEffect(() =>  {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => setState(prevState => ({ ...prevState, robots: users})));
  }, [])

  const onSearchChange = (event) => {
    const newValue = event.target.value;
    setState(prevState => ({ ...prevState, searchfield: newValue })
    )};

  
    const filteredRobots = state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(state.searchfield.toLowerCase());
    })
    
    return !state.robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }


export default App;