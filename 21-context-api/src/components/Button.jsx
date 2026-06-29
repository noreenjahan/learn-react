import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {
   const [theme,setTheme] = useContext(ThemeDataContext)
     const changeTheme = ()=>{
       setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
     }
       

   
  return (
    <div>
      <button onClick={changeTheme}>Theme:{theme}</button>
    </div>
  )

}
export default Button
