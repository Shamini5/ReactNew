import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // let counter = 0

  let [counter, setCounter] = useState(0)    // counter- var, setCounter- func/method

  const addValue = () =>{
    // counter = counter + 1
    // setCounter(counter)

    setCounter(counter + 1)
    console.log(counter)
  } 

  const SubtractValue = () =>{
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <header className="App-header">Demo Counter</header>
      <h1>Counter value: {counter}</h1>
      <button
      onClick={addValue}
      >Add Value</button>
      <br/><br/>
      <button
       onClick={SubtractValue}
      >Subtract Value</button> 
<br/><br/>
<p>Updated Value: {counter}</p>

    </div>

  );
}

export default App;
