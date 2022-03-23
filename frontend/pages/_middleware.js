import { NextResponse } from "next/server";

export const middleware = async (request, ev) => {
    // create an instance of the class to access the public methods. This uses `next()`,
    // you could use `redirect()` or `rewrite()` as well
    let response = NextResponse.next();
    // get the cookies from the request
    let cookieFromRequest = request.cookies["my-cookie"];
    // set the `cookie`
    response.cookie("hello", "world");
    // set the `cookie` with options
    const cookieWithOptions = response.cookie("hello", "world", {
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
        sameSite: "strict",
        domain: "example.com",
    });
    // clear the `cookie`
    response.clearCookie("hello");

    console.log({
        ip: req.ip,
        geo: req.geo, // this will spin the globe!
        ua: req.ua,
    });

    return response;
    // return NextResponse.next();
};

export default middleware;
