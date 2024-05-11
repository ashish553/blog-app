import { createContext, useEffect, useState } from "react";
import { getCookies } from "../actions";


const UserProfileCtx = createContext()

export default function UserProfile({ children }) {
    // async function setUserContext(profile) {
    //     const cookies = await getCookies()
    //     console.log(cookies?.userId);
    // }
    // useEffect(() => {
    //     setUserContext() 
    // }, [])
    
    const [userProfile, setuserProfile] = useState({ name: '' })

    return <UserProfileCtx.Provider value={{userProfile,setuserProfile}}>
        {children}
    </UserProfileCtx.Provider>
}

export { UserProfileCtx }