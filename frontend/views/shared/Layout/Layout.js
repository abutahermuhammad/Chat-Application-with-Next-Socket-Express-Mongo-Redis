import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Layout = ({ className, children }) => {
    return (
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
