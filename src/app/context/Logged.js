import { createContext, useEffect, useState } from "react";
import { getCookies } from "../actions";


const LoggedCtx = createContext()

export default function Logged({ children }) {
  const [loggedin, setloggedin] = useState(false)

    // async function setUserContext(profile) {
    //     const cookies = await getCookies()
    //     console.log(cookies?.userId);
    // }
    // useEffect(() => {
    //     setUserContext() 
    // }, [])
    

    return <LoggedCtx.Provider value={{loggedin, setloggedin}}>
        {children}
    </LoggedCtx.Provider>
}

export { LoggedCtx }