import React, { useState } from 'react'
const App = () => {

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log('form submitted')
    alert('submitted'+" "+ title+" "+city);

    settitle('');
    setcity('');

  }
  const [title, settitle] = useState('')

  const [city, setcity] = useState('')
  return (
    <div>
     <form onSubmit={(e)=>{
      submitHandler(e);
     }} >

      <input type="text" placeholder='enter name' value={title} onChange={(e)=>{
         settitle(e.target.value);
      }}
      />
      <input type="text" placeholder='enter city' value={city} onChange={(e)=>{
        setcity(e.target.value);
      }} />
      <button>Submit</button>
     </form>
    </div>
  )
}

export default App

