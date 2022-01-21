import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";


export async function middleware(req){
    const token = await getToken({req, secret:process.env.JWT_SECRET})

    const {pathname} = req.nextUrl;
    
    // allow the request if the following is true
    // 1. its a req for next-auth session and provider fetching
    // 2. token exists
    

    if (pathname.includes('/api/auth') || token)  {
        return NextResponse.next();
    }


    // redirecting them to login screen if they dont have token and are requesting protected routes

    if (!token && pathname !== '/login') {
        return NextResponse.redirect('/login')
    }
}