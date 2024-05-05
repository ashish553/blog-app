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


export async function signUp(credentials) {

    const errorMsg = {23505: 'Username already exist'}
    // console.log(credentials);
    try {
        const hashedPassword = bcrypt.hashSync(credentials.password,10)

        await sql`INSERT INTO userss (username, password) VALUES (${credentials.username},${hashedPassword})`;
        console.log('Users Data pushed successfully:');
        // console.log({title,desc,tagsData,date,blob: blob.url, previewDesc});
        return {status: 200, msg: `${credentials.username} registered successfully!`}

    } catch (error) {
        console.log(error.msg);
        console.log(Object.keys(error));
        return { 
                 status: '500',
                 msg: errorMsg[error.code]
         }
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