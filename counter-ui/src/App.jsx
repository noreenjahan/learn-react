import React, { useState } from 'react'
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';

const App = () => {
  const [counter, setcounter] = useState(0);
  function incCounter() {
    setcounter(counter + 1)
  }

  function decCounter() {
    setcounter(counter - 1)
  }

  function reset() {
    setcounter(0)
  }

  return (
    <div className='card'>
      <h2>Click Counter</h2>
      <h1 >{counter}</h1>
      <div><button onClick={incCounter}> <Plus /></button>
        <button onClick={decCounter}><Minus /></button>
      </div>
      <button className='rbtn' onClick={reset}>Reset</button>
    </div>
  )
}

export default App
