import { useState } from 'react';
import Button from './components/Button';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2'>
        <div className='flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          {/* <Button btnText="Red" btnColor="red" onClick={handleColorChange()}/> */}
          {/* <Button btnText="Green" btnColor="green"/>
          <Button btnText="Blue" btnColor="blue"/> */}
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
