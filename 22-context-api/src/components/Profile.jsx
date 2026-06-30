import React, { useContext, useState } from 'react'
import createUserContext from '../context/UserContext'


const Profile = () => {
    const {user} = useContext(createUserContext)
    
    if(!user) return <div><h3>Login First</h3></div>
    return <h3>welcome {user.userName}</h3>
  
}

export default Profile
