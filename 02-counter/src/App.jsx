import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);
  const incrementValue = () => {
    if(counter < 20) {
      setCounter(counter + 1);
      console.log("Value Incremented", counter);
    }
  };
  const decrementValue = () => {
    if(counter > 0) {
      setCounter(counter - 1);
      console.log("Value Decremented", counter);
    }
  };
  return (
    <>
      <h1>Heading 1</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={incrementValue}>Increment Value {counter}</button>
      <br/>
      <button onClick={decrementValue}>Decrement Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App
