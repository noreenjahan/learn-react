import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(response.data)
  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className='flex justify-center items-center w-full h-40 text-gray-400'> Loading...</h3>


  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return <div key={idx}>
       <Card elem={elem}/>

      </div>
    })
  }
  return (
   <div className="bg-black h-screen p-4 text-white flex flex-col ">


      <div className="flex flex-wrap gap-4 p-2 flex-1 overflow-auto [&::-webkit-scrollbar]:hidden">
        {printUserData}
      </div>
     <div className="flex justify-center items-center gap-6 p-4">
        <button
        style={{opacity: index==1 ? 0.5: 1}}
        onClick={() => {
          if (index > 1) {
            setIndex(index - 1)
            setUserData([])
          }
        }}
          className='bg-amber-400 text-black rounded text-sm active:scale-95 cursor-pointer  px-4 py-2 font-semibold'>
          Prev</button>
          <h4>Page {index}</h4>
        <button onClick={() => {
          setIndex(index + 1)
          setUserData([])
        }}
          className='bg-amber-400 text-black rounded text-sm active:scale-95 cursor-pointer px-4 py-2 font-semibold'>
          Next</button>
      </div>
    </div>


  )
}

export default App
