import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className=' h-full rounded-4xl flex flex-nowrap gap-10 overflow-x-auto w-2/3 p-4'>
    {props.users.map(function(elem,idx){
      return <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag} color={elem.color} />
    })}
    </div>
  )
}

export default RightContent
