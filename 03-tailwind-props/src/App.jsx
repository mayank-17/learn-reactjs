import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "mayank"
  };
  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className='bg-green-700 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Mayank" btnText="Click me"/>
      <Card username="Vishesta" />
    </>
  )
}

export default App
