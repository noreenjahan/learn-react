import React from 'react'
const App = () => {
  const submitHandler=(e)=>{
    e.preventDefault();
    alert('submitted');
  }
  return (
    <div>
     <form onSubmit={(e)=>{
      submitHandler(e);
     }} >
      <input type="text" placeholder='enter name' />
      <input type="text" placeholder='enter city' />
      <button>Submit</button>
     </form>
    </div>
  )
}

export default App
