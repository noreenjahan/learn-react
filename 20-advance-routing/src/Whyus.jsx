import React from 'react'
import { useParams } from 'react-router-dom'

const Whyus = () => {
    const params= useParams();
  return (
    <div className='py-30 space-y-2'>
            <h2 className='text-center text-4xl '>Why Choose Us</h2>
            <h2 className='text-center text-2xl' >{params.id}</h2>
            <h2 className='text-center text-2xl'>Lorem ipsum dolor, sit amet consectetur</h2>
        </div>
  )
}

export default Whyus
