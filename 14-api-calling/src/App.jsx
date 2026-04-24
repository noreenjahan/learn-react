import React from 'react'
import axios from 'axios'

import { useState } from 'react'
const App = () => {
// -----------------------------------------------------------------
// using data we get from axios api calling
const [data, setData] = useState([])


//-----------------------------------------------------------------
// 1.using fetch api inbuilt in js using fetch

 async function getData(){
    const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
  
    //in json formatt
    const res=await response.json()
    console.log(response);
    console.log(res);
  }

const getInfo=async()=>{
     const information= await fetch('https://jsonplaceholder.typicode.com/todos/1')
     console.log(information);
}

//--------------------------------------------------------------
  // 2. using axios 3rd party library
  
  const getData1 =async () => {
  const response=await axios.get('https://picsum.photos/v2/list')
 
  console.log(response)
  }

  const getData22=async () => {
    const response=await axios.get('https://picsum.photos/v2/list')
    setData(response.data);   //now using the data we fetch grom api
  }

return (
    <div>
      <button onClick={getData}>GET DATA</button>
      <button onClick={getInfo}>GET DATAAA</button>


      <button onClick={getData1}>axios api calling</button>
      {/* <button onClick={getData22}>axios api calling btn2</button> */}



       <button onClick={getData22}>Fetch Images</button>

      <div>
        {data.map(function(elem,idx){
          return <h4 key={idx}>hello,{elem.author},  {elem.download_url}  , {idx}</h4>
        })}
      </div>

    </div>

  )
}

export default App

// ways to call api in react
// 1. using fetch api inbuilt in js
// 2. using axios 3rd party library

