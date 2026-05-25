import React, { useEffect, useState } from 'react'
import { Minus } from 'lucide-react';
import './Quotes.css'
import axios from 'axios'
const Quotes = () => {
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')
    const [bgColor, setBgColor] = useState('rgb(255,255,255)')

    const getQuote = async() => {
    const url='https://dummyjson.com/quotes/random'
    const response=await axios.get(url)
    console.log(response.data);
    setQuote(response.data.quote)
    setAuthor(response.data.author)
    
}
const changeColor = () => {
setBgColor(`rgb(${Math.random()*100+155}, ${Math.random()*100+155}, ${Math.random()*100+155})`)
}
useEffect(() => {
    getQuote()
    changeColor()
}, [])
  return (
    <div className='card' >
     <button  onClick={() => { getQuote(); changeColor(); } } style={{background: bgColor }}>click me</button>
     <div className='text' style={{background: bgColor }}>
        <h3>{quote}</h3>
        <div className='author_name'>
            <Minus  className='line'/>
            <h4>{author}</h4>
        </div>
     
     </div>
     
    </div>
  )
}

export default Quotes
