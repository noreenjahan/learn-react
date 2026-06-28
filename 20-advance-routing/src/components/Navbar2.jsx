import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
    let navigate= useNavigate();
  return (
    <div className='flex justify-end bg-cyan-700 px-2 py-1'>
       <button onClick={()=>{
                navigate('/')
             }} 
             className='bg-cyan-900 rounded py-3 px-4  mr-5 text-center cursor-pointer  active:scale-95'>go to home page</button>
              <button onClick={()=>{ 
                navigate(-1)
             }} 
             className='bg-cyan-900 rounded py-3 px-4 mr-1 text-center cursor-pointer  active:scale-95'>Back</button>
             <button onClick={()=>{ 
                navigate(+1)
             }} 
             className='bg-cyan-900 rounded py-3 px-4 mr-1 text-center cursor-pointer  active:scale-95'>Next</button>
    </div>
  )
}

export default Navbar2
