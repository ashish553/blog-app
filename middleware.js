import { cookies } from "next/headers";
import { decrypt } from "./src/app/lib/auth";
import { useContext } from "react";

// const { decrypt } = require("./lib/auth");
// decry

const { NextResponse } = require("next/server");

export default async function middleware(req) {
    console.log('in middleware');
    const protectedRoutes = ['/create','/home']
    // console.log(req.nextUrl);
    const path = req.nextUrl.pathname
    const isProtected = protectedRoutes.includes(path)
 
    const cookie = cookies().get('session')?.value
    console.log(cookie);
    const session = await decrypt(cookie)

    console.log('session',session);

    if(!session && isProtected) {
            console.log(isProtected);
        return NextResponse.redirect(new URL('/login',req.nextUrl))        
    } else if(session && (path==='/login' || path==='/signup')) {
        return NextResponse.redirect(new URL('/',req.nextUrl))
    }

    return NextResponse.next()
    // NextResponse.redirect('/')
}

export const config = {
    // matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
    matcher: ['/create','/home','/login','/blog'],
}