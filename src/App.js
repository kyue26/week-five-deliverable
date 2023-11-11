import './App.css';
import Box from './components/Box.js';
import Axios from 'axios'
import React, { useState } from 'react';

function App() {

  const [boxes, setBoxes] = useState([]);

  function getNum() {
    Axios.get('http://localhost:5000/')
    .then(function (response) {
        console.log('response successfully received, response below')
        console.log(response)

        //set message to be response we get from backend
        setBoxes(prevArray => [...prevArray, <Box num={response.data.value}/>]);

    }).catch(function (error) {
        console.log('response unsusccessfully received, error below')
        console.log(error)
    }).finally(function (){
        console.log("This part is always executed no matter what")
    }) 
  }

  return (
    <div className="App">
      <h1>Dice Roll Generator!</h1>
      <button onClick={() => {getNum()}}>roll the dice</button>
      {boxes}
    </div>
  );
}

export default App;
