import { cookies } from "next/headers";
import { decrypt } from "./src/app/lib/auth";
// import { useContext } from "react";
import { getBlogDetails } from './src/app/actions'
// const { decrypt } = require("./lib/auth");
// decry

const { NextResponse } = require("next/server");

export default async function middleware(req) {
    console.log('in middleware');
    const protectedRoutes = ['/create','/home','/dashboard']
    // console.log(req.nextUrl);
    const path = req.nextUrl.pathname
    const isProtected = protectedRoutes.includes(path)
 
    const cookie = cookies().get('session')?.value
    const usrProfile = cookies().get('usr_profile')?.value

    console.log('path',path);
    console.log('path',usrProfile);
    const session = await decrypt(cookie)

    // console.log('session',session);

    if(!session && isProtected) {
            console.log(isProtected);
        return NextResponse.redirect(new URL('/login',req.nextUrl))        
    } else if(session && (path==='/login' || path==='/signup')) {
        return NextResponse.redirect(new URL('/',req.nextUrl))
    }

    if(!session && path.includes('edit/')){

        return NextResponse.redirect(new URL('/login',req.nextUrl))

    } else if(session && path.includes('edit/')) {
        
        const blogId = path.split('-')[1]
        console.log('blogId',blogId);

        const loggedInUser = JSON.parse(usrProfile).userId 
        console.log('loggedInUser', loggedInUser);

        const res = await getBlogDetails(blogId)
        
        // console.log('res', res.author);

        return res?.author !== loggedInUser ? NextResponse.redirect(new URL('/error',req.nextUrl)) : NextResponse.next()
    }

    return NextResponse.next()
    // NextResponse.redirect('/')
}

export const config = {
    // matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
    matcher: ['/create','/home','/login','/blog', '/dashboard','/edit/:id*'],
}