import { NextResponse } from "next/server";

export const middleware = async (req, cv) => {
    // const { user } = useAuth();
    const { pathname } = req.nextUrl;
    console.log("Pathname: ", pathname);

    // if (pathname === "/chat" && !user.uid) NextResponse.redirect("/login");

    //
    return NextResponse.next();
};
