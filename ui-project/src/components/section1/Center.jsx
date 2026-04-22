import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Center = (props) => {
  return (
    <div className='py-0 pt-6 h-[90vh] flex justify-between items-center gap-10 p-4'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}
 
export default Center
 