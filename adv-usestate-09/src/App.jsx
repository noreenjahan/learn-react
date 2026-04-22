import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState({ user: 'noor', age: 20 })
  const btnClicked = () => {
    const newNum = { ...num };
    newNum.user = 'bano';
    newNum.age = 18;
    setnum(newNum);
  }

  const [arr, setarr] = useState([10, 20, 30, 40])
  function chngClick() {
    const newarr = [...arr];
    newarr.push(50);
    setarr(newarr)
  }
  //prev method
  const [user, setuser] = useState({ name: 'noor', age: 20 })
  function clicked() {
    setuser(prev => ({ ...prev, age: 50, name: 'maha' }))
  }
  //batch update
  const [variable, setvariable] = useState(10)
  const fnClick = () => {
    setvariable(prev => (prev + 1));
    setvariable(prev => (prev + 1));
    setvariable(prev => (prev + 1));

    // setvariable(variable+1);
    //setvariable(variable+1);   //will only update by 1 not 3.
    // setvariable(variable+1);   // this is called batch update.

  }

  return (
    <div>
      <h1>object example</h1>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>click to change name</button>

      <h1 >num array</h1>
      <h1>{arr}</h1>
      <button onClick={chngClick}>click to change array</button>

      <h1>user using prev method</h1>
      <h1>{user.name},{user.age}</h1>
      <button onClick={clicked}>click to change user</button>

      <h1>number using batch update method</h1>
      <h1>{variable}</h1>
      <button onClick={fnClick}>click to change user</button>
    </div>
  )
}

export default App
