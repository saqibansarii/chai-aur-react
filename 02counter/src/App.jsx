import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  
  //let counter = 15

  const addValue = () => {
   if(counter < 20){
     //counter = counter + 1
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    // console.log("Clicked", counter)
   }

  }


  const removeValue = () => {
   if(counter > 0){
     setCounter(counter - 1)
    console.log("Removed", counter)
   }
  }

  return (
    <>
      <h1 className='bg-green-400 text-white'>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add value {counter} </button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter} </button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
