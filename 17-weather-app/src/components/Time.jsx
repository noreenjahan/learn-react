import React, { useEffect, useState } from 'react'
import './Weather.css'
const Time = ({timeZone}) => {

    const [time, setTime] = useState('')

    useEffect(()=>{
      const updateTime =()=>{
        const now = new Date()

        if(timeZone !== undefined)
        {
          const utc = now.getTime() + now.getTimezoneOffset() * 60000;
          const cityTime = new Date(utc + timeZone *1000)

          setTime(cityTime.toLocaleString('en-US',{
                weekday:'long',
                hour:'numeric',
                minute:'2-digit',
                hour12:true
            }))
        } else {
          setTime(now.toLocaleString('en-US',{
                weekday:'long',
                hour:'numeric',
                minute:'2-digit',
                hour12:true
            }))
        }
      }

      updateTime();
        const timer = setInterval(updateTime, 60000)
        return () => clearInterval(timer)
    },[timeZone])

  return (
    <div>
      <h1 className='time'>
     {time}
      </h1>
    </div>
  )
}

export default Time
