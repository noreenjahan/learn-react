import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const About = () => {
  let navigate= useNavigate();
  return (
    <div >
        <div className='flex items-center mt-6 font-bold'>
          <div className='flex flex-1 justify-center gap-4'>
            <button className='bg-cyan-900 hover:bg-cyan-500 py-3 px-4 rounded'><Link to='/about/projects'>Projects</Link></button> 
            <button className='bg-cyan-900 hover:bg-cyan-500 py-3 px-4 rounded'><Link to='/about/clients'>Clients</Link></button>
            <button className='bg-cyan-900 hover:bg-cyan-500 py-3 px-4 rounded'><Link to='/about/journey'>Journey</Link></button>
          
          
          </div>
            
        </div>
        
       
      <Outlet/>
    </div>
  )
}

export default About
