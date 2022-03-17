import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Layout = ({ className, children }) => {
    return (
        <>
            {/* Webpage Navigation */}
            <Navigation />

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
