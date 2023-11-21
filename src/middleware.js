// middleware.ts
import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

export function middleware(request) {
    const password = request.nextUrl.searchParams.get(
        process.env.SEARCH_QUERY_NAME
    );
    
    const hasCookie = request.cookies.has(process.env.PASSWORD_COOKIE_NAME);
    const url = request.nextUrl.clone();
    const response = NextResponse.redirect(url);

    // console.log(password, hasCookie, url, response)

    if (password === process.env.PAGE_PASSWORD && !hasCookie) {
        response.cookies.set(`${process.env.PASSWORD_COOKIE_NAME}`, "true");
        return response;
    }
}


// nich.design/work?password=PasswordForWebsite