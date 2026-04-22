import React from 'react'
import { MoveRight } from 'lucide-react';
const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
                <h2 style={{backgroundColor:props.color}} className='text-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-semibold'>{props.id+1}</h2>
                <p className='text-shadow-2xs text-lg leading-relaxed text-white mt-28'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white px-8 py-2 font-medium rounded-full'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' text-white px-4 py-2 font-medium rounded-full' ><MoveRight /></button>
                </div>
                
            </div>
  )
}

export default RightCardContent
