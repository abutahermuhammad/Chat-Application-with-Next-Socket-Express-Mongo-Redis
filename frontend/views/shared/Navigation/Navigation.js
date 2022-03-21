import { Avatar, Image } from "@geist-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import useAuth from "../../../hooks/useAuth";
import Container from "../Container/Container";

const Navigation = () => {
    const router = useRouter();
    const { user, loggedin, signoutHandler } = useAuth();

    // console.log("route", user);

    return (
        <>
            <nav className="mv_primary-nav">
                <Container className="py-4">
                    <div className="flex justify-between items-center">
                        {/* Left Side */}
                        <div className="">
                            <Link href="/">
                                <a className="font-bold text-xl text-base text-teal-400">
                                    {/* Miah Vai */}
                                    <Image height="36px" src="/favicon.svg" />
                                </a>
                            </Link>
                        </div>

                        {/* Right Side */}
                        <div className="group inline-block relative">
                            <Avatar
                                src={
                                    user.photoURL
                                        ? user.photoURL
                                        : "https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
                                }
                                name={
                                    user.displayName
                                        ? user.displayName
                                        : "Unknown"
                                }
                                size={36}
                            />

                            <ul className="absolute right-0 w-48 shadow-2xl hidden text-gray-700 pt-1 group-hover:block">
                                {loggedin && user.email && (
                                    <>
                                        <li className="">
                                            <Link href="/profile">
                                                <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                                                    Profile
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="/profile/settings">
                                                <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                                                    Settings
                                                </a>
                                            </Link>
                                        </li>

                                        <li
                                            className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                            onClick={signoutHandler}
                                        >
                                            Sign out
                                        </li>
                                    </>
                                )}

                                {/* Logged out state */}
                                {!loggedin && !user.email && (
                                    <>
                                        <li className="">
                                            <Link href="/login">
                                                <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                                                    Sign in
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="/register">
                                                <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                                                    Register
                                                </a>
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    );
};

export default Navigation;
