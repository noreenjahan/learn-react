import React from 'react'
import Card from './components/card'
import Navbar from './Navbar';

export const App = () => {
  const sub='react';
  return (
    <div>
      {/* <h1>hello i am learning {sub}</h1> */}
     <Navbar/>  
      {Card()}
      <Card/>
    </div>
  )
}

export default App