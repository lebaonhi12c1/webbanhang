import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
export const userContext = createContext()
function UserContext({children}) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    },[])

    const setLocalStorage = (value) => {
        localStorage.setItem('user', JSON.stringify(value))
    }
    
    const setInfoUser = (info) => {
        setUser(info)
        setLocalStorage(info)
    }
    return (
        <userContext.Provider value={{
            user,
            setInfoUser,
        }}>
            {children}
        </userContext.Provider>
    );
}

export default UserContext;