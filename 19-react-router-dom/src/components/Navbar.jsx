import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>
      <h3>Reena</h3>
      <div>
     {/* //link help us to avoid page refresh and it will help us to navigate to different pages without refreshing the page. */}
        <Link to='/'>Home</Link>  
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/service'>Service</Link>


    
      </div>
    </div>
  )
}

export default Navbar
