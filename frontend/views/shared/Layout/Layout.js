import { Loading } from "@geist-ui/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Layout = ({ className, login, loginRedirect, children }) => {
    const [loading, setLoading] = useState(true);
    const { loggedin, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (login) {
            if (loggedin && user.email) {
                setLoading(false);
            } else {
                router.push("/login");
            }
        } else {
            setLoading(false);
        }

        // if (loginRedirect && user.email) router.push("/profile");
    });

    return loading ? (
        <>
            {/* Webpage Navigation */}
            <header className="mv_main-menu fixed right-0 top-0 left-0">
                <Navigation />
            </header>

            {/* Webpage Body Content */}
            <main
                className={`mv_page mv_page_normal ${className && className}`}
            >
                <Loading className="mt-24" />
            </main>

            {/* Webpage Footer */}
            <Footer />
        </>
    ) : (
        <>
            {/* Webpage Navigation */}
            <header className="mv_main-menu fixed right-0 top-0 left-0">
                <Navigation />
            </header>

            {/* Webpage Body Content */}
            <main
                className={`mv_page mv_page_normal ${className && className}`}
            >
                {children}
            </main>

            {/* Webpage Footer */}
            <Footer />
        </>
    );
};

export default Layout;
