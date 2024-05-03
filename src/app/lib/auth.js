import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { createSession } from './session'
import { sql } from '@vercel/postgres'
import bcrypt from 'bcryptjs'

const sercetKey = new TextEncoder().encode('my-secret-key')

export async function encrypt(payload) {
    const jwtSignature = await new SignJWT(payload)
        .setProtectedHeader({alg: 'HS256'})
        .setIssuedAt()
        .setExpirationTime('1d')
        .sign(sercetKey)
        
    // console.log('Token Created');
    // console.log(jwtSignature);
    return jwtSignature
}

export async function decrypt(session) {
    try {
        const {payload} = await jwtVerify(session, sercetKey, {algorithms: ['HS256']})
        return payload
    } catch (error) {
        console.log(error);
        console.log('Error: Unable to verify session');
    }
}

// export async function login(formData) {
//     console.log(formData.get('username'));
//     console.log(formData.get('password'));
//     // 1. Check if the user exist in the db
//     // .
//     // .
//     // .
//     let userID = ''

//     if(true) userID = formData.username

//     // 2. Generate a JWT using jose pkg
//     const sessionToken = await encrypt({userID})
    
//     // 3. create the sesssion from that JWT and store in cookies
//     await createSession(sessionToken)
// }

export async function signUp(credentials) {
    // console.log(credentials);
    try {
        const hashedPassword = bcrypt.hashSync(credentials.password,10)

        await sql`INSERT INTO userss (username, password) VALUES (${credentials.username},${hashedPassword})`;
        console.log('Users Data pushed successfully:');
        // console.log({title,desc,tagsData,date,blob: blob.url, previewDesc});
        return Response.json(credentials)

    } catch (error) {
        console.log(error.msg);
        console.log(error);
        return Response.json({ msg: 'Error' })
    }
}

export async function verifyUser(credentials) {
    const {rows} = await sql`SELECT * from userss WHERE username=${credentials.username}`
    console.log(rows);
    if (rows.length) {
        const password = rows[0]?.password
        const isValid = await bcrypt.compare(credentials.password,password)
        console.log('isValid',isValid);
        return isValid
    } else {
        console.log('User dont exist');
        return false
    }
    // console.log(rows);
    // return rows[0].password
}