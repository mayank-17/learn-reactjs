import { useState } from "react";

function App() {
  const [value, setValue] = useState(10); // return an Array having data and setData
  const add = () => {
    setValue((prevValue) => prevValue+1);
  };
  return (
    <>
      <h1  className="px-10 py-10"> {value} </h1>
      <br/>
      <button type="button" onClick={add} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
    </>
  )
}

export default App
