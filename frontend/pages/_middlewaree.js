import { NextResponse } from "next/server";
import useAuth from "../hooks/useAuth";

export const middleware = async (req, ev) => {
    const { user } = useAuth();
    const { pathname } = req.nextUrl;
    console.log("Pathname: ", pathname);

    if (pathname === "/chat" && !user.uid) NextResponse.redirect("/login");

    //
    return NextResponse.next();
};
