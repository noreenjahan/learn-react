import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const App = () => {

  //---------------------
  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(100)

  // useEffect(function(){
  //   console.log('use effect is running')
  // },[num])

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log('value of a is changing');
  }

  function bChanging(){
     console.log('value of b is changing');
  }

  useEffect(function(){
    aChanging();
     console.log('use effect is running');
  },[a])

  return (
    <div>
        <h1>A is {a}</h1>
        <h1>B is {b} </h1>
      <button onClick={()=>{setA(a+1)}} >Change A</button>
      <button onClick={()=>{setB(b-1)}} >Change B</button>









      {/* <h2>first num {num} </h2>
      <h2>second num {num2} </h2>
      <button
      onClick={()=>{setNum(num+1)}}
      onDoubleClick={()=>{setNum2(num2+100)}}
      >CLick Here</button> */}
    </div>
  )
}

export default App
