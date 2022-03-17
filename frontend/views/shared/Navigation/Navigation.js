import { Avatar } from "evergreen-ui";
import Link from "next/link";
import useAuth from "../../../hooks/useAuth";
import Container from "../Container/Container";

const Navigation = () => {
    const { user, loggedin } = useAuth();

    console.log("Logged in", loggedin);

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
                            <div className="">
                                <Avatar
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
                                    name={
                                        user.displayname
                                            ? user.displayname
                                            : "Unknown"
                                    }
                                    size={36}
                                />
                            </div>
                        </div>
                    </Container>
                </nav>
            </header>
        </>
    );
};

export default Navigation;
