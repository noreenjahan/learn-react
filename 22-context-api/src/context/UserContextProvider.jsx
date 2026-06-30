import React, { useState } from "react";
import createUserContext from "./UserContext";

const UserContextProvider = ({children}) => {
   const [user,setUser] = useState(null) 
   return(
    <createUserContext.Provider value={{user,setUser}}>
        {children}
    </createUserContext.Provider>
     
   )
}

export default UserContextProvider;