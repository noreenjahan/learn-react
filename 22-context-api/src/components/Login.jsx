import React, { useContext, useState } from 'react'
import createUserContext from '../context/UserContext' 
const Login = () => {
    const {setUser} = useContext(createUserContext)

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({userName,password})
    }

  return (
    <div>
        <h2>Login </h2>
      <input type='text' placeholder='Enter your name'
        value={userName}
        onChange={(e)=>
            setUserName(e.target.value)
        }
      />
      <input type='password' placeholder='Password'
         value={password}
        onChange={(e)=>
            setPassword(e.target.value)
        }
      />
      <button onClick={handleSubmit}>
        Submit
      </button>
    
    </div>
  )
}

export default Login
