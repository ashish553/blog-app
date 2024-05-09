"use server"

import { redirect } from "next/navigation";
import { decrypt, encrypt,signUp, verifyUser } from "./lib/auth";
import { createSession,deleteSession,getSession } from "./lib/session";
import { sql } from "@vercel/postgres";

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
        // redirect('/')
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

export async function getCookies() {
    const session = await getSession()
    return session?.value && JSON.parse(session.value)
}

export async function deleteCookies() {
    await deleteSession()
    // return session?.value && JSON.parse(session.value)
}

export async function getBlogDetails(id) {
    const {rows} = await sql`SELECT * from blogs WHERE blog_id=${id}`
    // console.log(rows);
    return rows[0]

}

export async function getBlogsByUser(username) {
    const {rows} = await sql`SELECT * from blogs WHERE author=${username}`
    // console.log(rows);
    return rows

}