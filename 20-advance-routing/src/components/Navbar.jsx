import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='items-center flex justify-between py-4 px-8 bg-cyan-800'>
      <h2 className='text-xl font-bold '> Learning React</h2>
      <div className='flex gap-8'>
        <Link className='font-medium' to='/'>Home</Link>
        <Link className='font-medium' to='/about'>About</Link>
        <Link className='font-medium' to='/services'>Services</Link>
        <Link className='font-medium' to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
