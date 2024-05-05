"use server"

import { redirect } from "next/navigation";
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
        await createSession(sessionToken,userID)
        redirect('/')
        return {status: 200, msg: 'Login Successfull'}
    } else {
        return {status: 400, msg: 'Invalid username or password'}
        // return 'Username or Password is invalid'
    }

}

export async function handleSignUp(signUpDetails) {
    const res = await signUp(signUpDetails)
    return res
    // console.log('312123123');
}