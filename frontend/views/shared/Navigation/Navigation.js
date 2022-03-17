import { Avatar } from "evergreen-ui";
import Link from "next/link";
import { useRouter } from "next/router";
import useAuth from "../../../hooks/useAuth";
import Container from "../Container/Container";

const Navigation = () => {
    const router = useRouter();
    const { user, loggedin, signoutHandler } = useAuth();

    console.log("route", router);

    return (
        <>
            <header className="mv_main-menu w-full shadow-2xl">
                <nav className="mv_primary-nav">
                    <Container className="py-1">
                        <div className="flex justify-between items-center">
                            {/* Left Side */}
                            <div className="">
                                <Link href="/">
                                    <a className="font-bold text-xl text-base text-teal-400">
                                        Miah Vai
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

                                <ul class="absolute shadow-2xl hidden text-gray-700 pt-1 group-hover:block">
                                    {loggedin && user.email && (
                                        <>
                                            <li class="">
                                                <Link href="/profile">
                                                    <a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                                                        Profile
                                                    </a>
                                                </Link>
                                            </li>
                                            <li class="">
                                                <Link href="/settings">
                                                    <a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                                                        Settings
                                                    </a>
                                                </Link>
                                            </li>

                                            <li
                                                class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                onClick={signoutHandler}
                                            >
                                                Sign out
                                            </li>
                                        </>
                                    )}

                                    {/* Logged out state */}
                                    {!loggedin && !user.email && (
                                        <>
                                            <li class="">
                                                <Link href="/login">
                                                    <a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                                                        Sign in
                                                    </a>
                                                </Link>
                                            </li>
                                            <li class="">
                                                <Link href="/register">
                                                    <a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
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
            </header>
        </>
    );
};

export default Navigation;
