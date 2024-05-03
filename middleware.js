import { cookies } from "next/headers";

const { decrypt } = require("@/app/lib/auth");
const { NextResponse } = require("next/server");

export default async function middleware(req) {
    console.log('in middleware');
    const protectedRoutes = ['/create']
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
    }

    return NextResponse.next()
    // NextResponse.redirect('/')
}

export const config = {
    // matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
    matcher: ['/create'],
}