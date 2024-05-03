"use server"

import { decrypt, encrypt,signUp, verifyUser } from "./lib/auth";
import { createSession } from "./lib/session";

export async function testActions() {
    console.log(process.browser);
    console.log('From actions.js');
}

export async function login(formData) {
    console.log(formData);
    
    const username = formData.get('username')
    const password = formData.get('password')
    

    // 1. Check if the user exist in the db
    // .
    // .
    // .
    let userID = ''
    
    const isValid = await verifyUser({username,password})
    
    if(isValid) {

        userID = username
    
        // 2. Generate a JWT using jose pkg
        const sessionToken = await encrypt({userID})
        
        // 3. create the sesssion from that JWT and store in cookies
        await createSession(sessionToken)
        return 'Logged in successfully'
    } else {
        return 'Username or Password is invalid'
    }

}

export async function handleSignUp(signUpDetails) {
    await signUp(signUpDetails)
    // console.log('312123123');
}